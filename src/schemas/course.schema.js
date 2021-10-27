import * as yup from "yup"

const schema = yup.object().shape({


    course_id: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter course ID"),

    course_code: yup.string()
                .min(1, "Invalid")
                .max(50, 'Too Long!')
                .nullable(),

    course_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    department_id: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter department ID"),

    chairperson: yup.string()
                .max(50, 'Too Long!')
                .nullable()
})

export default schema