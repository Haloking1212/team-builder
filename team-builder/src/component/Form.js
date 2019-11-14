import React, { useState } from "react";

function Form(props) {
    const [form, setForm] = useState({name: "", email: "", role: ""})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newMem ={
            ...form,
            id:Date.now()
        }
        props.addNewMem(newMem);
        setForm({name: "", email: "", role: ""});
    }
    return (
        <form onSubmit={submitForm}>
            <label hmtlFor="name">Name:</label>
            <input 
            type="text" 
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={changeHandler}/>
            <label htmlFor="email">Email:</label>
            <input 
            type="text" 
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}/>
            <label htmlFor="role">Role:</label>
            <input 
            type="text" 
            placeholder="Role"
            value={form.role}
            onChange={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;