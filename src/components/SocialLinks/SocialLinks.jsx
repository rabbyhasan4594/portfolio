import React from 'react';
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
      const links = [
        {
            id:1,
            child:(
                <> 
                LinkedIn <FaLinkedin size={30}/>
                </>
                
            ),
            href:"//www.linkedin.com/in/rabby-hasan-946396184",
            style:'rounded-tr-lg'
        },
        {
            id:2,
            child:(
                <> 
                Github <FaGithub size={30}/>
                </>
                
            ),
            href:"https://github.com/rabbyhasan4594",
            
        },
        {
            id:3,
            child:(
                <> 
                Facebook <FaFacebook size={30}/>
                </>
                
            ),
            href:"https://web.facebook.com/rabby.mithu",
            
        },
        {
            id:4,
            child:(
                <> 
                Instagram <FaInstagram size={30}/>
                </>
                
            ),
            href:"https://www.instagram.com/rabbymithu/"
            
        },
        {
            id:5,
            child:(
                <> 
                Resume <BsFillPersonLinesFill size={30}/>
                </>
                
            ),
            href:"/Resume_of_Rabby.pdf",
            style:'rounded-br-lg',
            download:true
        }
      ]
    return (
        <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
                {
                    links.map(({id,child,href,style,download}) =>(
                        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500  hover:rounded-r-lg ml-[-100px] hover:ml-[-10px] duration-300 ' + " " + style}>
                        <a href={href}
                         className='flex justify-between items-center w-full text-white'
                         download={download}
                         target='_blank'
                         rel='noreferrer'>
                            {child}
                         </a>
                        
                                        </li>
                    ))
                }
               
            </ul>
            
        </div>
    );
};

export default SocialLinks;