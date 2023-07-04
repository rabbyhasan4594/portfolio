import React from 'react';

const Portfolio = () => {
    return (
        <div name='project' className='pt-6'>

            <div className='pb-8 text-white mt-5 text-center'>
                <p className='text-4xl font-bold inline border-b-4'>Projects</p>
                <p className='py-6'>Some of my recent Projects</p>
            </div>
            <div className='lg:ms-20 m-2 lg:me-20 text-white '>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card card-compact hover:scale-105 duration-500 lg:w-[350px] rounded-lg shadow-md shadow-orange-500">
                        <figure><img className='lg:h-[245px] ' src="https://i.ibb.co/yQSR8ZQ/motion-master.png" alt="Project" /></figure>
                        <div className="card-body rounded-lg shadow-md shadow-orange-500">
                            <h2 className="card-title">Motion Master</h2>
                            <p>This is a dance school website</p>
                            <div className="card-actions justify-between">
                                <a href="https://motion-masters-dance-aca-94742.web.app/" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Demo</button></a>
                                <a href="https://github.com/rabbyhasan4594/motion-masters" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Client</button></a>
                               <a href="https://github.com/rabbyhasan4594/motion-masters-server" target='_blank'
                         rel='noreferrer'> <button className="btn btn-secondary bg-orange-600 btn-sm">Server</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact lg:w-[350px] rounded-lg shadow-md shadow-blue-500 hover:scale-105 duration-500">
                        <figure><img className='lg:h-[245px]' src="https://i.ibb.co/FKfkt95/bangali.png" alt="Project" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bangali Baburchi</h2>
                            <p>This is a dance school website</p>
                            <div className="card-actions justify-between">
                                <a href="https://bangali-baburchi.web.app/" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Demo</button></a>
                                <a href="https://github.com/rabbyhasan4594/bangali-baburchi" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Client</button></a>
                               <a href="https://github.com/rabbyhasan4594/bangali-baburchi-server" target='_blank'
                         rel='noreferrer'> <button className="btn btn-secondary bg-orange-600 btn-sm">Server</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact lg:w-[350px] rounded-lg shadow-md shadow-white hover:scale-105 duration-500">
                        <figure><img className='lg:h-[245px] ' src="https://i.ibb.co/vcBYrtd/toy.png" alt="Project" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toy Galaxy</h2>
                            <p>This is a dance school website</p>
                            <div className="card-actions justify-between">
                                <a href="https://toy-galaxy-d3c1c.web.app/" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Demo</button></a>
                                <a href="https://github.com/rabbyhasan4594/toy-galaxy-client" target='_blank'
                         rel='noreferrer'><button className="btn btn-secondary bg-orange-600 btn-sm">Client</button></a>
                               <a href="https://github.com/rabbyhasan4594/toy-galaxy-server" target='_blank'
                         rel='noreferrer'> <button className="btn btn-secondary bg-orange-600 btn-sm">Server</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;