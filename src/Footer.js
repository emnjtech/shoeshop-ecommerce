import React from 'react'
import {
    MailIcon,
    DocumentTextIcon,
    AtSymbolIcon,

} from '@heroicons/react/solid'
import { FaHome, FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare, FaGithub, } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
//import emailjs from 'emailjs-com'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide'

export default function Footer() {

    const [toSend, setToSend] = useState({
        from_name: '',
        subject: '',
        message: '',
    });
    const [verified, setVerified] = useState(false)


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.message.trim().length === 0 || toSend.from_name.trim().length === 0 || toSend.subject.trim().length === 0) {
            toast('No field should be left empty');
            return
        }

        emailjs.send(
            'service_zk1b042',
            'template_gexkwh1',
            toSend,
            'LEDPasJUyVT8ScsU0'
        )
            .then((response) => {
                toast('Message sent. We will reply you as soon as we can');
            })
            .catch((err) => {
                toast('FAILED...', err);

            });
        setToSend({
            from_name: "",
            subject: "",
            message: "",


        })
    };

    function onChangeCaptcha(value) {
        console.log("Captcha value:", value);
        setVerified(true)
    }

    return (
        <div className="w-full md:w-full  bg-blue-400 px-3" >
            <div className=' md:flex justify-between   px-4 py-4 w-full '>
                <Slide>
                <div className=' md:w-[20%] w-full '>
                   
                    <h1 className='text-sm md:text-sm font-bold  px-4 py-4 text-slate-500'> MENU </h1>
                    <ul className=' px-4 text-white font-bold text-[10px] '>

                       <Link to="/" ><li>Home</li></Link>
                       <Link to="/Checkout"><li>New Arrivals</li></Link>
                       <Link to="/designs"><li>Kings Collection</li></Link>
                    <a href="https://emnj.tech" target="_blank" rel="noreferrer"><li>About Developer</li></a>


                    </ul>
                </div>
                </Slide>
                
                <Slide bottom>
                <div className='md:w-[40%] w-full  px-4  '>
                    <h1 className='text-sm md:text-sm font-bold  px-4 py-4 text-slate-500'> CONTACT US </h1>
                    <form onSubmit={onSubmit}>

                        <div className='flex w-full mb-[15px] h-12'>
                            <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><AtSymbolIcon className='text-blue-700' /></div>
                            <input type="email" className="peer... w-full md:w-full h-full px-5  text-left "
                                placeholder='Enter your E-mail...'
                                name='from_name'
                                value={toSend.from_name}
                                onChange={handleChange}
                            />

                        </div>
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm ">
                            Please provide a valid email address.
                        </p>


                        <div className='flex md:w-full mb-[15px] h-12'>
                            <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><MailIcon className='text-blue-700' /></div>
                            <input type="text" className=" w-full md:w-full h-full  text-left px-5"
                                placeholder='Enter mail subject...'
                                name='subject'
                                value={toSend.subject}
                                onChange={handleChange}
                            />


                        </div>
                        <br />




                        <div className='flex md:w-full w-full mb-[15px] h-28  '>
                            <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><DocumentTextIcon className='text-blue-700' /></div>
                            <input type="textarea" className="peer ... w-full md:w-full h-28 px-5  text-left "
                                placeholder='Enter mail body...'
                                name='message'
                                value={toSend.message}

                                onChange={handleChange}

                            />
                        </div>
                        <ReCAPTCHA
                                sitekey="6Le2ObggAAAAAHUDP2-ZHlcnMkLpzIzQNt2WHIDN"
                            onChange={onChangeCaptcha}
                        />

                        {verified ? <button className='py-4 px-5 bottom-10 '>Send</button> : <button disabled className='py-4 px-5 bottom-10 '>Send</button>}

                    </form>
                </div>
                </Slide>
                <Slide right>
                <div className=' md:w-[30%] w-full py-4 px-4'>
                    <h1 className='text-center font-bold text-sm text-slate-500'>ADDRESS</h1>
                    <div className='mt-3'> <FaHome className='text-white  w-8 h-8 md:w-8 md:h-8 ' /></div>
                    <p className='text-white text-[12px]'><b>Show Room Address:</b> Shop B02 Afro Mall Opp. Building Material Market dei dei Abuja</p>
                    <p className='text-white text-[12px]'><b>Branch Show room office:</b> Steel Market Masarachi Jabi Abuja Nigeria</p>
                    <div className='mt-3'> <FaPhoneSquare className='text-white  w-8 h-8 md:w-8 md:h-8 ' /></div>
                    <p className='text-white text-[12px]'>+234111222333, +234222333444</p>
                        <h1 className='text-center font-bold text-sm text-slate-500'>Connect with us</h1>
                       
                    <div className='flex md:flex justify-center '>
                        <a href="https://github.com/emnjtech/"><FaGithub className='w-9 h-9 m-2' /></a>
                        <a href="www.linkedin.com/in/themartinzjr"><FaLinkedin className='w-9 h-9 m-2' /> </a></div>
                        <h1 className='text-center font-bold text-sm text-white'> <a href="https://emnj.tech" target="_blank" rel="noreferrer">About Developer</a></h1>

                </div>
                </Slide>



            </div>


      
        </div>
    )
}
