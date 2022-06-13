import * as yup from 'yup'



export const EntryFormSchema = yup.object().shape({
    email:yup.string().email('Неверная почта или отсутствует "@"').required('Обязательное поле'),
    password:yup.string().min(6,'Минимум 6 символов').max(16,'Максимум 16 символов').required('Обязательное поле'),
})



export const RegistrationFormSchema = yup.object().shape({
      login:yup.string().required('Обязательное поле'),
}).concat(EntryFormSchema)