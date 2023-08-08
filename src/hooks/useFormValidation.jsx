import { useState } from "react";


const useFormValidation = () => {
    const initialvalues = { username: '', name: '', password: '' }
    const [formValues, setFormValues] = useState(initialvalues)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, name: value });
    }

    const handleSubmit = (event) => {
        
    }

    return {}
};

export default useFormValidation;
