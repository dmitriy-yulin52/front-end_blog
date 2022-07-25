import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

/**
 * @function
 * Нужна для простоты использования булевых значений
 * @return [значение, поставить false, поставить true]
 */
export function useBooleanState(
    dflt: boolean
): [boolean, () => void, () => void, () => void] {
    const [state, setState] = useState(dflt);
    const setFalse = useCallback(() => setState(false), [setState]);
    const setTrue = useCallback(() => setState(true), [setState]);
    const toggle = useCallback(() => setState((current) => !current), [setState]);
    return [state, setFalse, setTrue, toggle];
}

interface AbstractEvent {
    preventDefault(): void;
    stopPropagation(): void;
}
/**
 * @function
 * @param callback: функция, которая выполниться позже
 * @return мемоизированная функция, перед которой выполниться
 * preventDefault & stopPropagation
 */
export function usePreventDefault<E extends AbstractEvent>(
    callback: () => void
): (event: E) => void {
    return useCallback(
        (event: E) => {
            event.preventDefault();
            event.stopPropagation();
            callback();
        },
        [callback]
    );
}

export function preventDefault(event: AbstractEvent): void {
    event.preventDefault();
    event.stopPropagation();
}

/**
 * @function
 * @param action: функция, возвращающая action
 * @return мемоизированная функция, которая может обратиться к redux
 * useAction(f) --> dispatch(f())
 */
export function useAction<F extends (...args: any[]) => any>(
    action: F
): (...args: Parameters<F>) => void {
    const dispatch = useDispatch();
    return useCallback((...args: Parameters<F>) => dispatch(action(...args)), [
        dispatch,
        action,
    ]);
}

type RestArgs<F, P1 extends any[]> = F extends (...p1: [...P1, ...infer REST]) => any
    ? REST
    : void;

/**
 * @function
 * @param f: функция
 * @param p1: первый аргумент функции
 * @return функция, которая в момент вызова будет вести себя так,
 * как f(p1, ...args), т.е. с упрощённой сигнатурой
 * partial(f, ...p1)(...p2) --> f(...p1, ...p2)
 */
export function partial<P1 extends any[], F extends (...args: any[]) => any>(
    f: F,
    ...p1: P1
): (...p2: RestArgs<F, P1>) => ReturnType<F> {
    // return (...p2: RestArgs<F, P1>): ReturnType<F> => f(...p1, ...p2);
    return f.bind(null, ...p1);
}

/**
 * @function
 * @param f: функция
 * @param p1: первый аргумент функции
 * @return мемоизированная функция, которая в момент вызова будет вести себя так,
 * как f(p1, ...args)
 * usePartial(f, ...p1)(...p2) --> f(...p1, ...p2)
 */
export function usePartial<P1 extends any[], F extends (...args: any[]) => any>(
    f: F,
    ...p1: P1
): (...p2: RestArgs<F, P1>) => ReturnType<F> {
    return useCallback(partial(f, ...p1), [f, ...p1]);
}

/**
 * @function
 * @param functions: функции
 * @return функция, которая запустит все функции,
 * переданные в параметры
 */
export function callbacks<F extends (...args: any[]) => any>(
    functions: F[]
): (...args: Parameters<F>) => ReturnType<F>[] {
    return (...args: Parameters<F>) => functions.map((action) => action(...args));
}

/**
 * @function
 * @param functions: функции
 * @return мемоизированная функция, которая запустит все функции,
 * переданные в параметры
 */
export function useCallbacks<F extends (...args: any[]) => any>(
    functions: F[]
): (...args: Parameters<F>) => ReturnType<F>[] {
    return useCallback(callbacks(functions), functions);
}