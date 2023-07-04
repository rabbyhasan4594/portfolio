import React from 'react';
import me from '../../assets/me.png'
import Typical from 'react-typical';
import { FaDownload } from 'react-icons/fa';
const About = () => {
    return (

        <div name='about' className='pt-6'>
            <div name='about' className='mt-16'>
            <div className='pb-8 text-white   text-center'>
                <p className='text-4xl font-bold inline border-b-4'>About Me</p>
                <p className='py-6'>Something About Myself</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-24 lg:mt-20 text-white">
            <div className='lg:w-[500px]  lg:h-[500px] lg:ms-20'>
                <img className='rounded-lg' src={me} alt="" />
            </div>
            <div className='lg:me-20 m-4'>
                <div>
                    
                    <h3 className='text-4xl font-bold'>
                        Md Rabby Hasan
                    </h3>
                    <div className='mt-2 mb-2 text-2xl font-bold text-orange-600'> 
                        <Typical loop={Infinity}
                            steps={["Full Stack Developer", 3000,
                                "MERN Stack Developer", 3000,
                                "Back End Developer", 3000,
                                "Front End Developer", 3000,]}>
                        </Typical>
                    </div>
                    <div>
                        <p>
                        I am a student of Computer Science and Engineering at Bangladesh University of Business and Technology (BUBT).I've been trying to learn programming for 1 years, at this time Looking back in my past, I can't find any other chapter except coding.
                        </p>
                        <p className='mt-2 mb-2'>
                        I am passionate about programming. I am strongly committed to be a solid software engineer and develop efficient software systems. I am interested about building excellent software that improves the lives of those around me.
                        </p>

                        <button className="btn btn-active btn-secondary lg:mt-2">Resume <FaDownload className='text-white'/></button>

                    </div>

                </div>
            </div>
            

        </div>
        </div>
        </div>
        
    );
};

export default About;