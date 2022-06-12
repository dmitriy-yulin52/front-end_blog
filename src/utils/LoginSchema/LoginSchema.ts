import * as yup from 'yup'



export const LoginSchema = yup.object().shape({
    email:yup.string().email('Неверная почта или отсутствует "@"').required('Обязательное поле'),
    login:yup.string().required('Обязательное поле'),
    password:yup.string().min(6,'Минимум 6 символов').max(16,'Максимум 16 символов').required('Обязательное поле'),
})