import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import Timer from '../Components/Common/Timer';
// import HomePageBackground from '../assets/images/HomeBackground.jpg';
import marketingTrackerIcon from '../assets/Icons/marketingTrackerIcon.svg';
// import { CreateOTPForLogIn, ValidateOTPForLogIn } from '../APIs/LoginAPIs';
import edge_header from '../assets/newEdgeHeader.jpg';
import Pencil from '../assets/Pencil.png';
import Loader from './Common/Loader';
import { CreateOTPForLogIn, ValidateOTPForLogIn } from './APIs/ApplicantCrudApis';

const styles = {
    background: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        background: 'transparent',
        // backgroundImage: `url(${HomePageBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    rootDiv: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        margin: '10px auto auto auto',
    },
    buttonStyle: {
        background: '#2A3C50',
        fontSize: '16px',
        fontWeight: 600,
        width: '100%',
        height: "52px",
        color: "white",
        border: "1px solid black",
        paddingTop: "5px",
        textDecoration: "none",
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    logIn: {
        fontSize: '24px',
        color: '#172739',
        fontWeight: 800,
        margin: '10px 0px 5px 0px',
    },
    normalText: {
        fontSize: '14px',
        color: '#828282',
        margin: '5px 0px 20px 0px',
    },
    sendAgain: {
        fontSize: '16px',
        fontWeight: 400,
        color: '#828282',
        margin: '5px 0px 20px 0px',
    },
    margin: {
        margin: '10px 0px 40px 0px',
    },
    inputBox: {
        background: '#FFFFFF',
        border: '1px solid rgba(130, 141, 153, 0.5)',
        borderRadius: '2px',
        display: 'flex',
        width: '45px',
        height: '45px',
        marginRight: '15px'
    },
    inputBoxActive: {
        background: '#FFFFFF',
        border: '2px solid #2F80ED',
        boxShadow: '0px 8px 20px rgba(47, 128, 237, 0.20)',
        borderRadius: '2px',
        display: 'flex',
        width: '45px',
        height: '45px'
    },
    inputHolder: {
        // display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    setIcon: {
        height: '23vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

    }



};

const LoginVerification = (props) => {

    // To Receive data sent using react router
    const { state } = useLocation();
    // Initialize navigation
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');
    const [showTimer, setShowTimer] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const generateOTP = () => {
        if (state?.email) {
            CreateOTPForLogIn(state?.email).then(response => {
            }).catch(error => {
                console.log(error);
            })
        }
    }

    const handleLogin = () => {

        if (otp?.length === 4 && state?.email) {
            ValidateOTPForLogIn(otp, state?.email).then(response => {
                if (response[0]) {
                    localStorage.setItem("userInfo", JSON.stringify(state?.email));
                    props.setUserPrivilege('user');


                    navigate('/register/1', { state: { email: state?.email } });


                }
                else {
                    setErrorMessage(response[1] ? response[1] : 'An Unexpected Error Occurred.');
                }



            })
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (event.keyCode === 13) {
                handleLogin();
                event.preventDefault();
            }
        }
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        }
    });


    return (
        <>

            <div className='mx-[2%] sm:mx-[10%] mt-[13vh] mb-6 border-2 border-[#e5e7eb] p-5 rounded shadow-[0px_0px_9px_0px]'>
                <img src={edge_header} alt='edge_heading' className='w-full' />
                <div style={{ fontSize: '20px', fontWeight: '600' }}>Enhancing Digital Government & Economy (EDGE) Project</div>
                <div style={{ fontSize: '14px' }}>Digital Skills Training initiative for students, a premier
                    learning opportunity presented by the EDGE Project of the Bangladesh Computer Council,
                    ICT Division </div>
                <div style={styles.rootDiv}>

                    <div style={styles.logIn}>
                        Enter Verification Code
                    </div>

                    <div style={styles.normalText}>
                        Enter the 4 digit verification code sent to your email at {state?.email}. &nbsp;
                        <span style={{ textDecoration: 'none', color: '#1877F2', cursor: 'pointer' }} onClick={() => navigate('/login')}>Change email</span>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <div style={{ ...styles.inputHolder, visibility: showTimer === false ? 'hidden' : '', display: 'flex' }}>

                            <OtpInput
                                value={otp}
                                onChange={handleChange}
                                numInputs={4}
                                inputStyle={styles.inputBox}
                                focusStyle={styles.inputBoxActive}
                                containerStyle={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                                isInputNum={true}
                                shouldAutoFocus={true}
                            />

                        </div>
                    </div>


                    {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}


                    <div style={styles.sendAgain}>
                        {(showTimer === true) &&

                            <div>
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ color: 'black' }}>Code not received?</label>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <label>Resend again after</label> &nbsp;
                                    <Timer initialMinute={2} initialSeconds={0} setShowTimer={setShowTimer} />
                                </div>
                            </div>
                        }
                        {(showTimer === false && otp?.length !== 4) && <div>
                            <label>Code not received?</label> &nbsp;
                            <span
                                style={{ textDecoration: 'none', color: '#1877F2', cursor: 'pointer' }}
                                onClick={() => {
                                    generateOTP();
                                    setShowTimer(true);
                                }}
                            >Send Again</span>
                        </div>}
                    </div>

                    {(otp?.length === 4) && <button style={styles.buttonStyle} onClick={() => handleLogin()}>
                        Login
                    </button>}
                </div>

            </div>
        </>
    );
}

export default LoginVerification;