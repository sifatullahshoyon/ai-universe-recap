import React from 'react';

const Button = ({children}) => {
    // console.log(props)
    return (
        <div className='text-center my-12'>
            <button className="btn btn-info text-white font-semibold font-lato">{children}</button>
        </div>
    );
};

export default Button;