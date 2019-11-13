import React from "react";

function Form() {
    return (
        <form>
            <label hmtlFor="name">name:</label>
            <input type="text" placeholder="name"/>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="email"/>
            <label htmlFor="role">Role:</label>
            <input type="text" placeholder="role"/>
        </form>
    )
}

export default Form;