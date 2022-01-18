import * as yup from "yup"

const schema = yup.object().shape({

    professor_id: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter professor ID"),
    subject_id: yup.number()
                .min(1, "Invalid")
                .nullable().required("Please enter subject ID")
})

export default schema