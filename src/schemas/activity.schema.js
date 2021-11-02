import * as yup from "yup"

const schema = yup.object().shape({


    activity_id: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter activity ID"),

    activity_type: yup.string()
                .min(1, "Invalid")
                .max(50, 'Too Long!')
                .nullable(),

    activity_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    student_score: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter student score"),

    total_score: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter total score")
})

export default schema