import {mixed, object, string} from "yup"

let userSchema = object({
    fullname:string().required(),
    phone:mixed().required(),
    email:string().email()
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return {status: "success"}
    } catch (error) {
        return {status: "error", message: error.message}

    }
}

export default validateForm