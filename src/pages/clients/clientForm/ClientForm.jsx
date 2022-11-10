import React, {useState} from 'react';
import InputField from "../../../components/formFields/inputField/InputField";

const ClientForm = ({type, id}) => {
    const [data, setData] = useState({})

    return <div>
        <form>
            <InputField label="First name"
                        placeholder="Insert first name"
                        onChange={(e) => setData(prevState => ({...prevState, firstName: e}))}
            />
            <InputField label="Last name"
                        placeholder="Insert last name"
                        onChange={(e) => setData(prevState => ({...prevState, lastName: e}))}
            />
            <InputField label="Passport number"
                        placeholder="Insert passport number"
                        onChange={(e) => setData(prevState => ({...prevState, number: e}))}
            />
            <InputField label="Phone number"
                        placeholder="Insert phone number"
                        onChange={(e) => setData(prevState => ({...prevState, phone: e}))}
            />
            <InputField label="Email"
                        placeholder="Insert email"
                        onChange={(e) => setData(prevState => ({...prevState, email: e}))}
            />
        </form>
    </div>
}

export default ClientForm;