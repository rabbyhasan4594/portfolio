import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='pt-6'>
            <div  className='w-full  text-white'>
           <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4'>Contact Me</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/db3c58bb-7f5b-4c32-bb4b-6e50b2ee4393" method="POST" className='flex flex-col w-full md:w-1/2 gap-6'>
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
            </div>
            </div> 
        </div>
        </div>
    );
};

export default Contact;