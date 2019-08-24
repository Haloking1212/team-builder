import React from 'react';

const FormInfo = props => {
    console.log(props);
    return (
        <div className="form-list">
            {props.formsList.map(form => {
                return (
                    <div className="form" key={form.id}>
                        <p>{form.name}</p>
                        <p>{form.email}</p>
                        <p>{form.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FormInfo;