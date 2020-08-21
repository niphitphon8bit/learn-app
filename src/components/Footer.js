import React from 'react';

export const Footer = (props) => {
    const {company , email} = props
    return (
        <div>
            Power by {company} | Contact Us : {email}
        </div>
    )
} 