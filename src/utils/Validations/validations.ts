import * as yup from 'yup'


export const EntryFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта или отсутствует "@"').required('Обязательное поле'),
    password: yup.string().min(6, 'Минимум 6 символов').max(16, 'Максимум 16 символов').required('Обязательное поле'),
})


export const RegistrationFormSchema = yup.object().shape({
    login: yup.string().required('Обязательное поле'),
}).concat(EntryFormSchema)


type DataType = {
    [key: string]: any
}


export type ConfigFieldNameType = {
    message: string;
    value?: number | number[];
};

export type ValidatorConfigType = {
    [key: string]: {
        [key: string]: any;
        isRequired?: ConfigFieldNameType,
        isCapitalSymbol?: ConfigFieldNameType,
        isContainDigit?: ConfigFieldNameType,
        min?: ConfigFieldNameType,
    }
}

export function validator(data: DataType, validatorConfig: ValidatorConfigType) {
    const errors: { [key: string]: string } = {}

    function validate(validateMethod: string, fieldData: string, config: ConfigFieldNameType) {
        let statusValidate;
        switch (validateMethod) {
            case 'isRequired':
                if (typeof fieldData === 'boolean') {
                    statusValidate = !fieldData;
                } else {
                    statusValidate = String(fieldData).trim() === '';
                }
                break;
            case 'isCapitalSymbol':
                const capitalRegExp = /[A-Z]+/g;
                statusValidate = !capitalRegExp.test(fieldData);
                break;
            case 'min':
                if (config.value) {
                    statusValidate = fieldData.length < config.value;
                }
                break;
            case 'isContainDigit':
                const digitRegExp = /\d+/g;
                statusValidate = !digitRegExp.test(fieldData);
                break;
            default:
                return
        }
        if (statusValidate) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in validatorConfig[fieldName]) {
            const error = validate(validateMethod, data[fieldName], validatorConfig[fieldName][validateMethod]);
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}