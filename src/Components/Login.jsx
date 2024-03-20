import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import edge_header from '../assets/newEdgeHeader.jpg';
import Pencil from '../assets/Pencil.png';
import Loader from './Common/Loader';
import { CreateOTPForLogIn } from './APIs/ApplicantCrudApis';
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
        width: '60%',
        margin: '60px auto auto auto',
    },
    buttonStyle: {
        fontSize: '16px',
        fontWeight: 600,
        width: '100%',
        height: "52px",
        color: "white",
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
    margin: {
        margin: '10px 0px 10px 0px',
    },
    setIcon: {
        height: '23vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

    }

};



const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState();
    const [showLoader, setShowLoader] = useState(false);



    const generateOTP = () => {
        if (email) {
            setShowLoader(true);
            CreateOTPForLogIn(email).then(response => {
                setShowLoader(false);
                if (response[0]) {
                    navigate('/loginVerification', { state: { email: email } });
                }
                else {
                    setError(response[1] ? response[1] : 'An Unexpected Error Occurred.');
                }

            })
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (event.keyCode === 13) {
                generateOTP();
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
            {showLoader &&
                <Loader usedPurpose={'WholePage'}
                    loaderMessage={'Please Wait'}
                />
            }

            <div className='mx-[2%] sm:mx-[10%] mt-[13vh] mb-6 border-2 border-[#e5e7eb] p-5 rounded shadow-[0px_0px_9px_0px]'>
                <img src={edge_header} alt='edge_heading' className='w-full' />
                <div style={{ fontSize: '20px', fontWeight: '600' }}>Enhancing Digital Government & Economy (EDGE) Project</div>
                <div style={{ fontSize: '14px' }}>Digital Skills Training initiative for students, a premier
                    learning opportunity presented by the EDGE Project of the Bangladesh Computer Council,
                    ICT Division </div>
                {/* Registration form questions */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <div style={styles.logIn}>
                        Email Verification
                    </div>

                    <div style={styles.normalText}>
                        Enter your Email Address
                    </div>

                    <div style={styles.margin}>
                        {/* ANSWER INPUT SECTION 14 */}

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={email}
                                placeholder="Write email address"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>


                        </div>



                    </div>

                    {error && <span style={{ color: 'red' }}>{error}</span>}

                    <div
                        style={{ ...styles.buttonStyle, background: email ? '#2A3C50' : '#BDBDBD', marginTop: '30px' }}
                        onClick={generateOTP}
                    >
                        Next
                    </div>
                    {/* </div> */}






                </div>

            </div>


        </>
    );
}

export default Login;