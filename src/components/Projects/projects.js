import React from 'react';
import './projects.css';
import InstaImage from "./image/insta.png";
import AppleClone from './image/apple clone.png';
import AspireHub from './image/aspireHub.png';
import BlinkBazaar from './image/blinkBazaar.png';
import BlogWebsite from './image/blogWebsite.png';
import KeysToPicture from './image/KeysToPicture.png';
import Todo from './image/toDo.png';
import Errorpg from './image/errorPage.png';
import EmailAlert from './image/emailAlert.png';

const Projects = () => {
    return (
        <section id='projects' className='pro-sect'>
            <h2>Projects</h2>
            <div className='pro-con'>
                <div className='pro'>
                    <h3>Blog Website</h3>
                    <img src={BlogWebsite} alt='Blog Website' className='Pro-img' />
                    <p>Technologies: EJS , HTML , CSS , Node.js, MongoDB</p>
                    <a href='https://malasri32.github.io/blogWebsite/' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>AspireHub - Career Portal</h3>
                    <img src={AspireHub} alt='AspireHub' className='Pro-img' />
                    <p>Technologies: EJS , HTML , CSS , Node.js, MongoDB</p>
                    <a href='https://github.com/MALASRI5/Sris-AspireHub-CareerPortal' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>BlinkBazaar - E-Commerce</h3>
                    <img src={BlinkBazaar} alt='BlinkBazaar' className='Pro-img' />
                    <p>Technologies: HTML, CSS, JavaScript</p>
                    <a href='https://malasri32.github.io/blinkbazaar/' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>Keys to Picture - Photography Website</h3>
                    <img src={KeysToPicture} alt='Keys to Pic' className='Pro-img' />
                    <p>Technologies: React , Css , JavaScript</p>
                    <a href='https://github.com/MALASRI5/keysToPicture-MembershipWebsite' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>Instagram Authentication Clone</h3>
                    <img src={InstaImage} alt='Instagram Clone' className='Pro-img' />
                    <p>Technologies: HTML, CSS, Bootstrap.</p>
                    <a href='https://github.com/MALASRI5/InstagramAuthenticationClone' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>Apple Website Clone</h3>
                    <img src={AppleClone} alt='Apple Clone' className='Pro-img' />
                    <p>Technologies: HTML, CSS .</p>
                    <a href='https://github.com/MALASRI5/AppleClone' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>To-Do List Application</h3>
                    <img src={Todo} alt='To-Do List' className='Pro-img' />
                    <p>Technologies: HTML, CSS, JavaScript</p>
                    <a href='https://github.com/MALASRI5/ToDoList' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>Error Handling Page</h3>
                    <img src={Errorpg} alt='Error Page' className='Pro-img' />
                    <p>Technologies: HTML, CSS, Bootstrap</p>
                    <a href='https://github.com/MALASRI5/404ErrorPage' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>

                <div className='pro'>
                    <h3>Email Alert Page</h3>
                    <img src={EmailAlert} alt='Email Alert' className='Pro-img' />
                    <p>Technologies: HTML, CSS, Bootstrap</p>
                    <a href='https://github.com/MALASRI5/EmailAlert' target='_blank' rel='noopener noreferrer'>
                        <button className='btn'>Explore</button>
                    </a>
                </div>
            </div>


        </section>
    );
};

export default Projects;
