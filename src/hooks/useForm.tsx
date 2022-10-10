import { useState } from 'react';
// useForm is a custom hook that takes in an initial state and returns an array with the state and a function to update the state
// Language: typescript
// Path: form-react\src\hooks\useForm.tsx
// @param {object} callback - A callback function for the form submit event.
// @param {object} initialState - the initial state of the form
// @return {array} - an array with the state and a function to update the state
export const useForm = (callback:any, initialState = {}) => {
    // state is the current state of the form
    const [values, setValues] = useState(initialState);
    // onchange is a function that updates the state of the form
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    // onsubmit is a function that calls the callback function and resets the state of the form
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    }
    return {
        onChange,
        onSubmit,
        values
    }
}
