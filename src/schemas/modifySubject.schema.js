import * as yup from "yup"

const schema = yup.object().shape({


    subject_code: yup.string()
                .min(1, "Invalid")
                .max(50, 'Too Long!')
                .nullable(),

    subject_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),
    units: yup.number()
                .min(1, "Invalid")
                .nullable(),
    lec_hours: yup.number()
                .min(0, "Invalid")
                .nullable(),
    lab_hours: yup.number()
                .min(0, "Invalid")
                .nullable(),
    department_id: yup.number()
                .min(0, "Invalid")
                .nullable()
})

export default schema