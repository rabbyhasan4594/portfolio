import React from 'react';
import me from '../../assets/me.png'
import Typical from 'react-typical';
import { FaDownload } from 'react-icons/fa';
const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-24 lg:mt-20">
            <div className='lg:ms-20 m-4'>
                <div>
                    <h5 className='text-2xl'>Hello I'm</h5>
                    <h3 className='text-5xl font-bold'>
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
            <div className='lg:w-[500px] lg:h-[500px] text-end'>
                <img src={me} alt="" />
            </div>

        </div>
    );
};

export default Home;