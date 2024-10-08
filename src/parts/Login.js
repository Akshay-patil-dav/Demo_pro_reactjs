import React from 'react';

const Login = () => {
    return (
        <>
            <br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <div className='Login' >
                <h1 className='h1-hed log-h1'>Ready to take a free trial?</h1><br />
                <h2 className='h2-bio container '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>

                <div className='container log-box' >
                    <h3 className='container mx-5 m-5 sign' >Sign up for a free account</h3>

                    <div className='container mx-5 px-5 sign tex' >
                        <input type='text' placeholder='First name' required />
                        <input type='text' placeholder='First name' required />
                        <input type='text' placeholder='First name' required />
                        <input type='text' placeholder='First name' required />

                    </div>
                    <br />
                    <div className='container mx-5 px-5  tex' >
                        <input type='text' placeholder='First name' className='pass' required />
                        <br />
                        <button className="btn btn-primary Register" type="submit">Register</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
