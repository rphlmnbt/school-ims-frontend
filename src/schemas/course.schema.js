import * as yup from "yup"

const schema = yup.object().shape({


    course_code: yup.string()
                .min(1, "Invalid")
                .max(50, 'Too Long!')
                .nullable(),

    course_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    chairperson: yup.string()
                .max(50, 'Too Long!')
                .nullable()
})

export default schema