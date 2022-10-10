
import Button from "../../componets/buttons/button";
import Input from "../../componets/forms/input";
import { Header } from "../../componets/header/header";
import {useForm} from "../../hooks/useForm";

export default function Form() {
    const initialState = {
        name: "1",
        email: "",
        password: ""
    }
    const register = async () => {
        // show the values in alert
        alert(JSON.stringify(values))
    }
    const {onChange, onSubmit, values} = useForm(register, initialState);
    //add accessibility
    return (
        <>
            <Header
                className="p-4 text-center "
                title="Test Form"
            />
            <form 
            onSubmit={onSubmit} 
            className=' flex flex-col items-center gap-2 justify-center flex-grow ' 
            aria-label='Register Form'
            >
                <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    onChange={onChange}
                    value={values.name}
                    required
                    className="w-1/3"
                    aria-label='Name Input'
                />
                <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={values.email}
                    required
                    className="w-1/3"
                    aria-label='Email Input'
                />
                <Input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={values.password}
                    required
                    className="w-1/3"
                    aria-label='Password Input'
                />
                <Button 
                className="w-1/3" 
                type="submit"
                aria-label='Submit Button'
                >
                    Register
                </Button>
            </form>
        </>
    
    )
}
