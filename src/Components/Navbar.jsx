import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import DBLLogo from '../assets/Icons/DBLLogo.svg';
import marketingTrackerIcon from '../assets/icons/marketingTrackerIcon.svg';
import cuet_logo from '../assets/icons/CUET_Vector_logo.png';
import edge_logo from '../assets/icons/edge_logo.png';
import bcc_logo from '../assets/icons/Bangladesh_Computer_Council_Logo.svg.png';
import ict_division_logo from '../assets/icons/ict_division_logo.png';
import sla_logo from '../assets/icons/smart_leadership_academy_logo.svg';
import cross from '../assets/Icons/cross.svg';
import ProfileImg from '../assets/Icons/DummyProfilePicture.svg';
// import Profile from "../Common/Profile"
// import { GetPersonalInfo } from '../../APIs/LoginAPIs';
// import Server from '../../../Server';
// import Inventory from '../../assets/Icons/Inventory.svg';
// import Request from '../../assets/Icons/Request.svg';
// import Job from '../../assets/Icons/Job.svg';
// import ApprovalHistory from '../../assets/Icons/ApprovalHistory.svg';
import Pencil from '../assets/Pencil.png';

const styles = {
    purchaseButtonStyle: {
        background: '#2A3C50',
        fontSize: '15px',
        fontWeight: 600,
        width: '100%',
        height: "40px",
        color: "white",
        border: "1px solid black",
        paddingTop: "5px",
        textDecoration: "none",
        marginTop: '35px'
    },
    activeLink: {
        listStyle: 'none',
        display: 'inline-block',
        margin: '0 1rem',
        color: 'white',
        fontWeight: 'bold',
    },
    normalLink: {
        listStyle: 'none',
        display: 'inline-block',
        margin: '0 1rem',
        color: 'white',
        fontWeight: 'normal',
    },
    navText: {
        fontSize: '16px',
        fontWeight: 400,
        color: '#172739',
    }

};

const Navbar = (props) => {
    const navigate = useNavigate();
    const [profileShow, setProfileShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [modalEdit, setModalEdit] = useState(false)
    const location = useLocation();
    const currentPath = location.pathname;

    const [navText, setNavText] = useState('');
    const [fullScreenLogOutVisible, setFullScreenLogOutVisible] = useState(false);

    const toggleSideBar = () => {
        setToggle(!toggle);
    }

    // close sidebar on click outside
    document.body.onclick = function (e) {
        if (e.clientX > window.innerWidth * 0.8) {
            setToggle(false);
        }
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        var hiddenDiv = document.getElementById("btlLogOut");
        var imageView = document.getElementsByClassName("profile");
        if (fullScreenLogOutVisible) {
            if (event.target !== hiddenDiv && event.target !== imageView[0]) {
                setFullScreenLogOutVisible(!fullScreenLogOutVisible);
            }
        }

    };

    // useEffect(() => {
    //     GetPersonalInfo().then((retailers) => {
    //         if (retailers[0]) {
    //             setUserDetails({ ...retailers[0] });
    //             localStorage.setItem('userDetails', JSON.stringify(retailers[0]));
    //         }
    //     })

    // }, []);

    useEffect(() => {
        if (currentPath.includes('register')) {
            setNavText('Registration Form');
        } else if (currentPath.includes('home')) {
            setNavText('Home')
        } else if (currentPath.includes('job')) {
            setNavText('Job')
        } else if (currentPath.includes('approval')) {
            setNavText('Approval History')
        }
        else {
            setNavText('Home');
        }
    }, [currentPath]);

    return (
        <>

            <header className=''>
                <div style={{ display: 'flex', width: '95%', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        {/* SMALL SCREEN HAMBURGER BUTTON */}
                        <div className='flex items-center'>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FaBars onClick={toggleSideBar} className="bar pointer" style={{ height: '20px' }} />
                            </div>
                            <div className={"bar"} style={{ marginLeft: '10px', fontSize: '14px', fontWeight: '400' }}>
                                {navText}
                            </div>
                        </div>


                        <img src={cuet_logo} alt='DBL_Ceramics_Logo' className={toggle ? "sidebar logo w-[60px] h-auto m-auto" : "logo w-[60px] h-auto m-[0px] transition-transform transform-gpu hover:scale-125 "} />
                        {/* <img src={bcc_logo} alt='DBL_Ceramics_Logo' className={toggle ? "sidebar logo" : "logo"} /> */}
                        {/* <img src={edge_logo} alt='DBL_Ceramics_Logo' className={toggle ? "sidebar logo" : "logo"} /> */}
                        {/* <img src={ict_division_logo} alt='DBL_Ceramics_Logo' className={toggle ? "sidebar logo" : "logo"} /> */}
                        {/* <img src={sla_logo} alt='DBL_Ceramics_Logo' className={toggle ? "sidebar logo" : "logo"} /> */}
                        <div className={toggle ? "sidebar logo text-white  h-auto m-auto" : "logo text-white  h-auto m-auto"}>Chittagong University of Engineering & Technology</div>

                    </div>


                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <nav
                            className={toggle ? "sidebar" : ""}
                        >
                            {!toggle ?
                                <ul style={{ margin: '0px' }}>
                                    <li>
                                        <NavLink to="/" >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register">
                                            Registration Form
                                        </NavLink>
                                    </li>


                                </ul>
                                :
                                <div style={{ display: 'flex', flexDirection: 'column', width: '90%', margin: '15px auto', background: 'white' }}>

                                    {/* LOGO AND CROSS */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                                        <div className='flex items-center'>
                                            <img src={cuet_logo} alt='DBL_Ceramics_Logo' className='full_icon' height='80' />
                                            <img src={edge_logo} alt='DBL_Ceramics_Logo' className='max-w-[80px] h-[45px]' />
                                        </div>
                                        <div style={{ color: 'black', display: 'flex', alignItems: 'center' }}
                                            onClick={toggleSideBar}
                                            className='pointer'>
                                            <img src={cross} alt='Close Navbar' className='h-[15px] hover:scale-110' />
                                        </div>
                                    </div>

                                    {/* NAV ELEMENT */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <ul className='sideNav'>
                                            <li>
                                                <NavLink to="/"
                                                    onClick={toggleSideBar}
                                                >
                                                    <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="Inventory" />
                                                    <span style={styles.navText}>
                                                        Home
                                                    </span>

                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink to="/about"
                                                    onClick={toggleSideBar}
                                                >
                                                    <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="Inventory" />
                                                    <span style={styles.navText}>
                                                        About
                                                    </span>

                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/register"
                                                    onClick={toggleSideBar}
                                                >
                                                    <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="Requests" />
                                                    <span style={styles.navText}>
                                                        Registration Form
                                                    </span>
                                                </NavLink>
                                            </li>
                                            {/* <li>
                                            <NavLink to="/btl/jobs"
                                                onClick={toggleSideBar}
                                            >
                                                <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="Jobs" />
                                                <span style={styles.navText}>
                                                    Jobs
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/btl/approval_history"
                                                onClick={toggleSideBar}
                                            >
                                                <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="history" />
                                                <span style={styles.navText}>
                                                    Approval History
                                                </span>
                                            </NavLink>
                                        </li> */}

                                            {/* <li>
                                            <NavLink to="/login"
                                                onClick={() => {
                                                    toggleSideBar();
                                                    window.location.reload();
                                                }}
                                                style={{ position: 'absolute', bottom: '20px', }}
                                            >

                                                <img src={DBLLogo} style={{ width: "28px", height: "28px", marginRight: '10px' }} alt="addRetailer" />
                                                <span style={styles.navText}>
                                                    Log Out
                                                </span>

                                            </NavLink>
                                        </li> */}
                                        </ul>
                                    </div>

                                </div>

                            }

                        </nav>
                    </div>



                </div>
                {/* <AuthVerify /> */}
            </header>
        </>
    )
}

export default Navbar