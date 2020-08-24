import React from 'react';

export const Footer = (props) => {
    const { company, email } = props
    return (
        <div className="container-fluid" style={{ backgroundColor: '#2b2b2b' }}>
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-warning">Power by {company} </span> <span className="text-muted"> | Contact Us : {email}</span >
                </small>
            </div>
        </div >
    )
} 