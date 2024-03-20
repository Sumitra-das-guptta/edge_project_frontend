import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import edge_header from '../assets/newEdgeHeader.jpg';
import ResponseModal from './Common/ResponseModal';
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
        margin: '0px 0px 5px 0px',
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
const RegistrationFormStep1 = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [allDepartment, setAllDepartment] = useState(['Basic Networking (60 Hrs.)', 'Hardware Maintenance (60 Hrs.)', 'Graphics Design (60 Hrs.)',
        'Microsoft Word & Excel (60 Hrs.)', 'Microsoft Word & Powerpoint (60 Hrs.)', 'Basic Web Development (60 Hrs.)', 'Basic Programming with Python (60 Hrs.)',
        'Video Production & Editing (60 Hrs.)', 'Embark on DevOps (80 Hrs.)', 'Engineering Design & Analysis with MATLAB (80 Hrs.)',
        'Mobile App Development (80 Hrs.)']);
    const [mechanicalDepartment, setMechanicalDepartment] = useState([
        'CNC & 3D Printing for Industrial Automation (60 Hrs.)', 'Computer Aided Engineering Design (80 Hrs.)',
        'Engineering Design & Analysis with MATLAB (80 Hrs.)'
    ]);
    const [civilDepartment, setCivilDepartment] = useState(['Software Aided Engineering Design & Analysis (80 Hrs.)']);
    const [electricalDepartment, setElectricalDepartment] = useState(['Digital Design for Industrial Control (80 Hrs.)',
        'Power System Operation & Service Design (80 Hrs.)', 'Engineering Design & Analysis with MATLAB (80 Hrs.)']);
    const [architechtureDepartment, setArchitechtureDepartment] = useState(['Environmental Experience Design (EXD) (60 Hrs.)']);
    const [urpDepartment, setUrpDepartment] = useState(['GIS & its Application (80 Hrs.)', 'Remote Sensing & its Application (80 Hrs.)']);
    const [pmeDepartment, setPmeDepartment] = useState(['Data Analytics in Oil, Gas and Energy Industry (80 Hrs.)']);
    const [mechatronicsDepartment, setMechatronicsDepartment] = useState(['Industrial Automation (60 Hrs.)']);
    const [eteDepartment, setEteDepartment] = useState(['Basic Web Development (60 Hrs.)', 'Basic Programming with Python (60 Hrs.)',
        'Embark on DevOps (80 Hrs.)']);
    const [bmeDepartment, setBmeDepartment] = useState(['Basic Programming with Python (60 Hrs.)']);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [responseModal, setResponseModal] = useState({ usedPurpose: '', visible: false, message: '', footerMessage: '' })
    const [organizerDeptOrInstituteOrCenter, setOrganizerDeptOrInstituteOrCenter] = useState('');
    const handleChangeCourse = (course, organizer) => {
        setSelectedCourse(course);
        setOrganizerDeptOrInstituteOrCenter(organizer);
    }

    const handleOnClickNext = () => {
        if (state?.email) {
            navigate('/register/2', {
                state: {
                    email: state?.email,
                    course: selectedCourse,
                    organizerDeptOrInstituteOrCenter: organizerDeptOrInstituteOrCenter
                }
            });
        }
        else {
            setResponseModal({
                ...responseModal,
                visible: true,
                usedPurpose: 'Error',
                message: 'Please Verify your email first',
                footerMessage: 'Close'
            });
        }
    }
    const handleFooterClick = () => {
        setResponseModal({
            ...responseModal,
            visible: false,
            usedPurpose: '',
            message: '',
            footerMessage: ''
        });
        navigate('/');
    }
    const handleResponseModalVisibility = (visibleState) => {
        setResponseModal({
            ...responseModal,
            visible: visibleState
        })
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        if (!state) {
            navigate('/login')

        }
    }, []);

    return (
        <>
            {/* RESPONSE MODAL */}
            {responseModal?.visible &&
                <ResponseModal usedPurpose={responseModal?.usedPurpose} message={responseModal?.message} footerMessage={responseModal?.footerMessage} handleFooterClick={handleFooterClick}
                    setModalVisible={handleResponseModalVisibility}
                />
            }
            <div className='mx-[2%] sm:mx-[10%] mt-[13vh] mb-6 border-2 border-[#e5e7eb] p-5 rounded shadow-[0px_0px_9px_0px]'>
                <img src={edge_header} alt='edge_heading' className='w-full' />
                <div style={{ fontSize: '20px', fontWeight: '600' }}>Enhancing Digital Government & Economy (EDGE) Project</div>
                <div style={{ fontSize: '14px' }}>Digital Skills Training initiative for students, a premier
                    learning opportunity presented by the EDGE Project of the Bangladesh Computer Council,
                    ICT Division </div>
                <div className='font-bold text-base text-[#00cb00] text-center mt-1'>
                    Only Honours third and fourth year students are encouraged to apply.
                </div>
                {/* Registration form questions */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={styles.logIn}>
                        Choose your preferred course
                    </div>
                    <div className='m-auto'>
                        {/* OPEN FOR ALL DEPARTMENT'S STUDENTS */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Open for All Department's students
                            </div>

                            <div>
                                {allDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'IICT'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'IICT') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF MECHANICAL ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Mechanical Engineering
                            </div>

                            <div>
                                {mechanicalDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Mechanical Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Mechanical Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF CIVIL ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Civil Engineering
                            </div>

                            <div>
                                {civilDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Civil Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Civil Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF EEE */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Electrical & Electronics Engineering
                            </div>

                            <div>
                                {electricalDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Electrical & Electronics Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Electrical & Electronics Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF ARCHITECHTURE ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Architechture Department
                            </div>

                            <div>
                                {architechtureDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Architechture'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Architechture') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF Urban & Regional Planning DEPARTMENT */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Urban & Regional Planning Department
                            </div>

                            <div>
                                {urpDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Urban & Regional Planning'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Urban & Regional Planning') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF Petroleum And Mining ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Petroleum And Mining Engineering
                            </div>

                            <div>
                                {pmeDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Petroleum And Mining Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Petroleum And Mining Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF Mechatronics & Industrial ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Mechatronics & Industrial Engineering
                            </div>

                            <div>
                                {mechatronicsDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Mechatronics & Industrial Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Mechatronics & Industrial Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF Electronics & Telecommunication ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Electronics & Telecommunication Engineering
                            </div>

                            <div>
                                {eteDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Electronics & Telecommunication Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Electronics & Telecommunication Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STUDENTS OF BIOMEDICAL ENGINEERING */}
                        <div className='pb-4'>
                            <div className='font-bold text-base text-blue-700 mb-3 text-left'>
                                Only for Students of Biomedical Engineering
                            </div>

                            <div>
                                {bmeDepartment.map((eachCourse, index) => (
                                    <div className='flex items-center mb-2'>
                                        <input
                                            type='radio'
                                            checked={selectedCourse === eachCourse && organizerDeptOrInstituteOrCenter === 'Biomedical Engineering'}
                                            style={{ width: '15px', height: '15px', cursor: 'pointer' }}
                                            onChange={() => { handleChangeCourse(eachCourse, 'Biomedical Engineering') }}
                                        />
                                        <div className='pl-4 text-sm'>{eachCourse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* NEXT BUTTON */}
                    <div className='flex justify-end'>
                        <button
                            className={`${selectedCourse === '' ? 'bg-[#BDBDBD] cursor-not-allowed' : 'bg-[#1960cb] hover:bg-blue-900 active:scale-75'} text-white px-8 py-2 rounded font-medium transition-transform transform-gpu`}
                            tabIndex={0}
                            disabled={selectedCourse === ''}
                            onClick={() => handleOnClickNext()}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationFormStep1