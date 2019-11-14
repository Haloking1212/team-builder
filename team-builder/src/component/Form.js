import React, { useState } from "react";

function Form() {
    const [form, setForm] = useState({name:"", email:"", role:"",})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        const newMem ={
            ...form,
            id:Date.now()
        }
        Props.addNewMem(newMem);
        setForm({name: "", email: "", role: ""});
    }
    return (
        <form onSubmit={submitForm}>
            <label hmtlFor="name">name:</label>
            <input 
            type="text" 
            placeholder="name"
            name="name"
            value={form.name}
            onChange={changeHandler}/>
            <label htmlFor="email">Email:</label>
            <input 
            type="text" 
            placeholder="email"
            value={form.email}
            onChange={changeHandler}/>
            <label htmlFor="role">Role:</label>
            <input 
            type="text" 
            placeholder="role"
            value={form.name}
            onChange={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;