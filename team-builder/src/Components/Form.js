import React, { useState } from 'react';

const MemberForm = props => {
    const [form, setForm] = useState({ name: "", email: "", role: "" });
    const changeHandler = event => {
        console.log(event.target.value);
        setForm({...form, [event.target.name]: event.target.value});
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
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={changeHandler}
                />
            <label htmlFor="email">Email</label>
            <input 
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Role</label>
            <input
                type="text"
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={changeHandler}
                />
            <button type="submit">Add Team Member</button>
        </form>
    );
};

export default MemberForm;