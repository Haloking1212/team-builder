import React, { useState } from 'react';

const MemberForm = props => {
    const [form, setForm] = useState({ name: "", email: "", role: "" });
    const [delForm, setDelForm] = useState({ name: null, email: null, role: null })

    const changeHandler = event => {
        console.log(event.target.value);
        setForm({...form, [event.target.name]: event.target.value});
    };

    const delChangeHandler = event => {
        console.log(event.target.value);
        setDelForm({...delForm, [event.target.name]: event.target.value});
    };
    
    const submitForm = event => {
        event.preventDefault();
        const newMem = {
            ...form,
            id: Date.now()
        }
    props.addNewMem(newMem);
    setForm({name: "", email: "", role: ""});
    };

    const delSubmitForm = event => {
        event.preventDefault();
        const delMem = {
            ...delForm,
            id: Date.now()
        }
    props.delNewMem(delMem);
    setDelForm({name: null, email: null, role: null});
    };
    return (
        <form onSubmit={submitForm} onSubmit={delSubmitForm}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={changeHandler}
                onChange={delChangeHandler}
                />
            <label htmlFor="email">Email:</label>
            <input 
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={changeHandler}
                onChange={delChangeHandler}
            />
            <label htmlFor="role">Role:</label>
            <input
                type="text"
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={changeHandler}
                onChange={delChangeHandler}
                />
            <button type="submit">Add Team Member</button>
            <button type="reset">Remove Team Member</button>
        </form>
    );
};

export default MemberForm;