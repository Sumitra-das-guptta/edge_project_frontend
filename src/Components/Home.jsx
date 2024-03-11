import React from 'react';
import HomePageBackground from '../assets/homepage_edge_picture.png';
import cuet_logo from '../assets/icons/CUET_Vector_logo.png';
import '../Components/Styles/imageSliding.css';
import { redirect, useLocation, useNavigate } from "react-router-dom";
import edge_logo from '../assets/icons/edge_logo.png';
import bcc_logo from '../assets/icons/Bangladesh_Computer_Council_Logo.svg.png';
import ict_division_logo from '../assets/icons/ict_division_logo.png';
import sla_logo from '../assets/icons/smart_leadership_academy_logo.svg';
const styles = {
    background: {
        width: '100%',
        height: '100%',
        background: 'transparent',
        backgroundImage: `url(${HomePageBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    
}
const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='mx-[2%] sm:mx-[10%] mt-[14vh] mb-6'>
            <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
                <div className='w-full sm:w-[60%]'>
                    <div className='font-bold text-4xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text pb-3'>
                        Welcome to Enhancing Digital Government & Economy (EDGE) Project of Bangladesh
                    </div>
                    {/* <div className='font-bold text-2xl bg-gradient-to-r from-blue-100 to-blue-900 text-transparent bg-clip-text'>
                To build a Smart Bangladesh by enhancing digital government and economy
                </div> */}

                    <div className='text-sm font-medium bg-gradient-to-r from-gray-300 to-gray-800 text-transparent bg-clip-text text-left'>
                        Digital Skills Training initiative for students, a premier learning opportunity
                        presented by the EDGE Project of the Bangladesh Computer Council, ICT Division
                    </div>

                    <div className='flex justify-end items-center font-bold text-sm text-[#21d621]'>
                        Collaborating partner
                        <a href="https://cuet.ac.bd/" target="_blank">
                        <img src={cuet_logo} alt='logo' className='cursor-pointer h-[70px] transition-transform transform-gpu hover:scale-125 ' />
                    </a>
                    </div>
                </div>

                <img src={HomePageBackground} alt='homepage' className='imageSliding' />

            </div>

            <div className='imageSliding cursor-pointer text-white text-base px-8 py-3 rounded m-auto w-fit bg-gradient-to-r from-blue-500 to-[#191970]
           ' tabIndex={0}
                onClick={() => navigate('/login')}>
                Apply Now
            </div>

            {/* SPONSOR SHIP */}
            <div className='w-fit m-auto mt-6 pb-3 px-7 border-b-4 gradient-border font-bold text-4xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text mb-8'>
                Sponsored By
            </div>
            <div className='flex justify-around flex-wrap'>
            <a href="https://edge.gov.bd/" target="_blank">
                    <img src={edge_logo} alt='edge' className=' mb-3 mr-3 h-auto max-h-[80px] cursor-pointer transition-transform transform-gpu hover:scale-125 '/>
                </a>

                <a href="https://bcc.gov.bd/" target="_blank">
                <img src={bcc_logo} alt='edge' className='mb-3 mr-3 h-auto max-h-[80px] cursor-pointer transition-transform transform-gpu hover:scale-125 '/>
                </a>
                <a href="https://ictd.gov.bd/" target="_blank">
                    <img src={ict_division_logo} alt='edge' className='mb-3 mr-3 h-auto max-h-[80px] cursor-pointer transition-transform transform-gpu hover:scale-125 '/>
                </a>
                <a href="https://sla.gov.bd/" target="_blank">
                    <img src={sla_logo} alt='edge' className='mb-3 mr-3 h-auto max-h-[80px] cursor-pointer transition-transform transform-gpu hover:scale-125 '/>
                </a>
            </div>

           







        </div>
    )
}

export default Home