import React from 'react'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useRef } from "react";
import edge_header from '../assets/newEdgeHeader.jpg';
import Pencil from '../assets/Pencil.png';
import uploadFileIcon from '../assets/icons/uploadFileIcon.svg';
import FileTypeSpecificIcon from './Common/FileTypeSpecificIconView';
import cancelIcon from '../assets/icons/cancelIcon.svg';
import ErrorTooltip from './Common/ErrorTooltip';
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import DeleteIcon from "../assets/Icons/DeleteIcon.svg";
import univeristyList from './Common/UniversityList';
const customError = {
    float: 'right',
    marginRight: "6px",
    marginTop: '-30px',
    position: 'relative',
    zIndex: '2',
    color: 'red'
};
const styles = {
    question: {

    }
}
const RegistrationForm = () => {
    console.log(univeristyList.length, "print length.......")
    const inputRef = useRef();
    const [SUPPORTED_FORMATS, setSUPPORTED_FORMATS] = useState([
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png",
        "image/bmp",
    ]);
    // FILE SIZE VALIDATION
    const [SUPPORTED_SIZE, setSUPPORTED_SIZE] = useState(10 * 1000000);
    let courseName = [
        'Frontend Development',
        'Backend Development',
        'Networking'
    ]
    let gender = ['Male', 'Female', 'Other'];
    let religion = ['Islam', 'Hinduism', 'Buddhism', 'Christanity'];
    const formData = {
        trainingOrganizerUniversity: 'CUET',
        organizerDeptOrInstituteOrCenter: 'IICT',
        traineeName: '',
        fatherName: '',
        motherName: '',
        gender: 'Male',
        religion: '',
        birthDate: moment().format('MM-DD-YYYY'),
        nationality: '',
        identityNo: '',
        presentAddress: {
            roadNo: '',
            thanaName: '',
            districtName: '',
            divisionName: ''
        },
        permanentAddress: {
            roadNo: '',
            thanaName: '',
            districtName: '',
            divisionName: ''
        },
        mobileNumber: '+88',
        gurdianMobileNumber: '+88',
        email: '',
        levelOfEducation: '',
        subject: '',
        universityName: '',
        departmentName: '',
        trainingLocation: 'CUET',
        linkedinProfile: '',
        projectRepository: '',
        freelancingProfile: '',
        file: ''


    }
    const [inputFile, setInputFile] = useState({
        imageFile: "",
        imageURL: "",
    });
    const {
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        setErrors,
        handleBlur,
        setValues,
        resetForm,
    } = useFormik({
        initialValues: formData,
        // enableReinitialize: true,
        validationSchema: Yup.object({
            traineeName: Yup.string()
                .required("Name is required")
                .max(250, "Maximum 250 characters allowed"),
            fatherName: Yup.string()
                .required("Father's Name is required")
                .max(250, "Maximum 250 characters allowed"),
            motherName: Yup.string()
                .required("Mother's Name is required")
                .max(250, "Maximum 250 characters allowed"),
            gender: Yup.string()
                .required("Gender is required"),
            religion: Yup.string()
                .required("Religion is required"),
            birthDate: Yup.date()
                .required("Date of bith is required"),
            nationality: Yup.string()
                .required("Nationality is required"),
            identityNo: Yup.string()
                .required("National ID number/Birth Certificate number is required"),
            presentAddress: Yup.object({
                roadNo: Yup.string().required('Road/House No is required'),
                thanaName: Yup.string().required('Thana Name is required'),
                districtName: Yup.string().required('District Name is required'),
                divisionName: Yup.string().required('Division Name is required')
            }),
            permanentAddress: Yup.object({
                roadNo: Yup.string().required('Road/House No is required'),
                thanaName: Yup.string().required('Thana Name is required'),
                districtName: Yup.string().required('District Name is required'),
                divisionName: Yup.string().required('Division Name is required')
            }),
            mobileNumber: Yup.number('Please enter valid number')
                .required("Phone number is required")
                .test(
                    "is-bangladesh-number",
                    "Phone number must start with +880",
                    (value) => {
                        const stringValue = value.toString();
                        return stringValue.startsWith("880");
                    }
                )
                .test(
                    "is-exactly-13-digits",
                    "Phone number must be exactly 13 digits",
                    (value) => {
                        const stringValue = value.toString();
                        return stringValue.length === 13;
                    }
                ),
            gurdianMobileNumber: Yup.number('Please enter valid number')
                .required("Gurdian's Phone number is required")
                .test(
                    "is-bangladesh-number",
                    "Phone number must start with +880",
                    (value) => {
                        const stringValue = value.toString();
                        return stringValue.startsWith("880");
                    }
                )
                .test(
                    "is-exactly-13-digits",
                    "Phone number must be exactly 13 digits",
                    (value) => {
                        const stringValue = value.toString();
                        return stringValue.length === 13;
                    }
                ),
            email: Yup.string()
                .required("Email Address is required")
                .email("Not a proper email")
                .max(250, "Maximum 250 characters allowed"),
            levelOfEducation: Yup.string()
                .required("Level of Education is required"),
            subject: Yup.string()
                .required("Subject is required"),
            universityName: Yup.string()
                .required("University Name is required"),
            departmentName: Yup.string()
                .required("Department Name is required"),
            trainingLocation: Yup.string(),
            linkedinProfile: Yup.string(),
            projectRepository: Yup.string(),
            freelancingProfile: Yup.string(),
            file: Yup.mixed()
                .test(
                    "FILE_FORMAT",
                    "Only the file formats are accepted: .jpeg, .jpg, .gif, .png, .bmp ",
                    (value) => {
                        if (!value || !value.name) {
                            // Handle the case where the file input is empty
                            return true;
                        }
                        return SUPPORTED_FORMATS.includes(value.type);
                    }
                )
                .test(
                    "FILE_SIZE",
                    "Uploaded file is too big. File must be up to 10MB.",
                    (value) => {
                        if (!value || !value.name) {
                            // Handle the case where the file input is empty
                            return true;
                        }
                        return value.size <= SUPPORTED_SIZE && value.size > 0;
                    }
                ),
        }),
        onSubmit: (values) => {
            // let dataForSubmit = {
            //     userName: values?.mobileNumber,
            //     role: "ROLE_USER",
            //     privilege: "ATL",
            //     name: values?.name,
            //     birthDate: values?.birthDate,
            //     gender: values?.gender,
            //     mobileNumber: values?.mobileNumber,
            //     email: values?.email,
            //     immediateSuperior: null,
            // };
            // if (props?.editMode) {
            //     dataForSubmit.id = values?.id;
            // }

            // let formData = new FormData();
            // formData.append(
            //     "user",
            //     new Blob([JSON.stringify(dataForSubmit)], { type: "application/json" })
            // );
            // formData.append("profilePhoto", inputFile?.imageFile);
            //   if (props?.editMode) {
            //     setShowLoader(true);
            //     Update(formData, values?.id).then((updateSalesManagerResponse) => {
            //       setShowLoader(false);
            //       if (updateSalesManagerResponse[0]) {
            //         modalCleanup();
            //       } else {
            //         setError(updateSalesManagerResponse[1]);
            //       }
            //     });
            //   } else {
            //     setShowLoader(true);
            //     Create(formData).then((createSalesManagerResponse) => {
            //       setShowLoader(false);
            //       if (createSalesManagerResponse[0]) {
            //         modalCleanup();
            //       } else {
            //         setError(createSalesManagerResponse[1]);
            //       }
            //     });
            //   }
        },
    });

    const profileImageChange = (e) => {
        setValues({ ...values, file: e?.target?.files[0] });
        var reader = new FileReader();
        reader.readAsDataURL(e?.target?.files[0]);
        reader.onload = (loaded) => {
            setInputFile({
                imageFile: e?.target?.files[0],
                imageURL: loaded.target.result,
            });
        };

    };

    const handleChangeValue = (fieldName, updatedValue) => {
        setValues({
            ...values,
            [fieldName]: updatedValue
        })
    }

    const handleChangeMobileNo = (fieldValue, updatedValue) => {
        if (fieldValue === 'mobileNumber') {
            if (updatedValue?.length >= 3) {
                delete errors.mobileNumber;
                setValues({ ...values, mobileNumber: updatedValue });

            }
        }
        else {
            if (updatedValue?.length >= 3) {
                delete errors.gurdianMobileNumber;
                setValues({ ...values, gurdianMobileNumber: updatedValue });

            }
        }


    };

    const handleChangeAddress = (address, section, updatedValue) => {
        setValues({
            ...values,
            [address]: {
                ...values[address],
                [section]: updatedValue
            }
        })
    }

    const handleRemoveFile = () => {

        setValues((value) => ({
            ...value,
            file: {},
        }));


        setInputFile({ imageFile: "", imageURL: "" });
    };
    return (
        <div className='mx-[2%] sm:mx-[10%] my-auto border-2 border-[#e5e7eb] p-5 rounded shadow-[0px_0px_9px_0px]'>
            <img src={edge_header} alt='edge_heading' className='w-full' />
            <div style={{ fontSize: '20px', fontWeight: '600' }}>Enhancing Digital Government & Economy (EDGE) Project</div>
            <div style={{ fontSize: '14px' }}>Digital Skills Training initiative for students, a premier
                learning opportunity presented by the EDGE Project of the Bangladesh Computer Council,
                ICT Division </div>
            {/* Registration form questions */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                {/* QUESTION 1 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        1. Choose  preferred course
                    </div>
                    {/* ANSWER INPUT SECTION 1 */}
                    <div style={{ marginBottom: '20px' }}>
                        {
                            courseName.map((eachCourse, index) => (
                                <div className='flex items-center'>
                                    <input
                                        type='radio'
                                        // checked={department?.departmentStatus === 'enable' || department?.departmentStatus === 'disable'}
                                        // disabled={department?.departmentStatus === 'disable' || (moment(props?.clearanceData?.effectiveDateTo, 'YYYY-MM-DD').isBefore(moment()) && props?.usedFor !== 'admin')}
                                        style={{ width: '17px', height: '17px' }}
                                    // onChange={() => { handleChangeDepartmentStatus(department) }} 
                                    />
                                    <div className='pl-4 text-sm'>{eachCourse}</div>
                                </div>

                            ))
                        }
                    </div>
                </div>


                {/* QUESTION 2 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px", width: '50%' }} className='required'>
                        2. Trainee Name
                    </div>
                    {/* ANSWER INPUT SECTION 2 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.traineeName}
                                placeholder='Write Name'
                                onChange={(e) => handleChangeValue('traineeName', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.traineeName && errors?.traineeName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.traineeName}
                                        origin={'traineeName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>


                {/* QUESTION 3 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px", width: '50%' }} className='required'>
                        2. Father's Name
                    </div>
                    {/* ANSWER INPUT SECTION 3 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.fatherName}
                                placeholder="Write Father's Name"
                                onChange={(e) => handleChangeValue('fatherName', e.target.value)}
                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.fatherName && errors?.fatherName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.fatherName}
                                        origin={'fatherName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>


                {/* QUESTION 4 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px", width: '50%' }} className='required'>
                        4. Mother's Name
                    </div>
                    {/* ANSWER INPUT SECTION 4 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.motherName}
                                placeholder="Write Mother's Name"
                                onChange={(e) => handleChangeValue('motherName', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.motherName && errors?.motherName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.motherName}
                                        origin={'motherName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 5 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        5. Gender
                    </div>
                    {/* ANSWER INPUT SECTION 5 */}
                    <div style={{ marginBottom: '20px' }}>
                        {
                            gender.map((eachGender, index) => (
                                <div className='flex items-center'>
                                    <input
                                        type='radio'
                                        checked={values?.gender === eachGender}
                                        style={{ width: '17px', height: '17px' }}
                                        onChange={() => { handleChangeValue('gender', eachGender) }}
                                    />
                                    <div className='pl-4 text-sm'>{eachGender}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* QUESTION 6 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        6. Religion
                    </div>
                    {/* ANSWER INPUT SECTION 6 */}
                    <div style={{ marginBottom: '20px' }}>
                        {
                            religion.map((eachReligion, index) => (
                                <div className='flex items-center'>
                                    <input
                                        type='radio'
                                        checked={values?.religion === eachReligion}
                                        style={{ width: '17px', height: '17px' }}
                                        onChange={() => { handleChangeValue('religion', eachReligion) }}
                                    />
                                    <div className='pl-4 text-sm'>{eachReligion}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* QUESTION 7 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        7. Date of Birth
                    </div>
                    {/* ANSWER INPUT SECTION 7 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='date'
                                style={{ maxWidth: '150px', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.birthDate}
                                placeholder="Date of Birth"
                                onChange={(e) => handleChangeValue('birthDate', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.birthDate && errors?.birthDate
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.birthDate}
                                        origin={'birthDate'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 8 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        8. Nationality
                    </div>
                    {/* ANSWER INPUT SECTION 8 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.nationality}
                                placeholder="Write  nationality"
                                onChange={(e) => handleChangeValue('nationality', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.nationality && errors?.nationality
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.nationality}
                                        origin={'nationality'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 9 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>

                        9. National ID Card Number/ Birth Registration Number

                    </div>
                    {/* ANSWER INPUT SECTION 9 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='number'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.identityNo}
                                placeholder="Write  National ID Card Number/Birth Registration No"
                                onChange={(e) => handleChangeValue('identityNo', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.identityNo && errors?.identityNo
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.identityNo}
                                        origin={'identityNo'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 10 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        10. Present Address
                    </div>
                    {/* ANSWER INPUT SECTION 10 */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {/* ROAD NO/HOUSE NO */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.presentAddress?.roadNo}
                                placeholder="Write Road No/House No"
                                onChange={(e) => handleChangeAddress('presentAddress', 'roadNo', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.presentAddress && touched?.presentAddress?.roadNo
                                && errors?.presentAddress && errors?.presentAddress?.roadNo
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.presentAddress?.roadNo}
                                        origin={'presentAddressRoadNo'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                        {/* Thana Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.presentAddress?.thanaName}
                                placeholder="Write Thana Name"
                                onChange={(e) => handleChangeAddress('presentAddress', 'thanaName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.presentAddress && touched?.presentAddress?.thanaName
                                && errors?.presentAddress && errors?.presentAddress?.thanaName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.presentAddress?.thanaName}
                                        origin={'presentAddressThanaName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>

                        {/* District Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.presentAddress?.districtName}
                                placeholder="Write District Name"
                                onChange={(e) => handleChangeAddress('presentAddress', 'districtName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.presentAddress && touched?.presentAddress?.districtName
                                && errors?.presentAddress && errors?.presentAddress?.districtName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.presentAddress?.districtName}
                                        origin={'presentAddressDistrictName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>

                        {/* Division Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.presentAddress?.divisionName}
                                placeholder="Write Division Name"
                                onChange={(e) => handleChangeAddress('presentAddress', 'divisionName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.presentAddress && touched?.presentAddress?.divisionName
                                && errors?.presentAddress && errors?.presentAddress?.divisionName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.presentAddress?.divisionName}
                                        origin={'presentAddressDivisionName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 11 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        10. Permanent Address
                    </div>
                    {/* ANSWER INPUT SECTION 10 */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {/* ROAD NO/HOUSE NO */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.permanentAddress?.roadNo}
                                placeholder="Write Road No/House No"
                                onChange={(e) => handleChangeAddress('permanentAddress', 'roadNo', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.permanentAddress && touched?.permanentAddress?.roadNo
                                && errors?.permanentAddress && errors?.permanentAddress?.roadNo
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.permanentAddress?.roadNo}
                                        origin={'permanentAddressRoadNo'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                        {/* Thana Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.permanentAddress?.thanaName}
                                placeholder="Write Thana Name"
                                onChange={(e) => handleChangeAddress('permanentAddress', 'thanaName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.permanentAddress && touched?.permanentAddress?.thanaName
                                && errors?.permanentAddress && errors?.permanentAddress?.thanaName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.permanentAddress?.thanaName}
                                        origin={'permanentAddressThanaName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>

                        {/* District Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.permanentAddress?.districtName}
                                placeholder="Write District Name"
                                onChange={(e) => handleChangeAddress('permanentAddress', 'districtName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.permanentAddress && touched?.permanentAddress?.districtName
                                && errors?.permanentAddress && errors?.permanentAddress?.districtName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.presentAddress?.districtName}
                                        origin={'permanentAddressDistrictName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>

                        {/* Division Name */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.permanentAddress?.divisionName}
                                placeholder="Write Division Name"
                                onChange={(e) => handleChangeAddress('permanentAddress', 'divisionName', e.target.value)}


                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.permanentAddress && touched?.permanentAddress?.divisionName
                                && errors?.permanentAddress && errors?.permanentAddress?.divisionName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.permanentAddress?.divisionName}
                                        origin={'permanentAddressDivisionName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 12 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        12. Mobile Number
                    </div>
                    {/* ANSWER INPUT SECTION 12 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text" inputMode="numeric"
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.mobileNumber}
                                placeholder="Ex: +880187......"
                                onChange={(e) => handleChangeMobileNo('mobileNumber', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.mobileNumber && errors?.mobileNumber
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.mobileNumber}
                                        origin={'mobileNumber'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 13 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        13. Gurdian's Mobile Number
                    </div>
                    {/* ANSWER INPUT SECTION 13 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text" inputMode="numeric"
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.gurdianMobileNumber}
                                placeholder="Ex: +880187......"
                                onChange={(e) => handleChangeMobileNo('gurdianMobileNumber', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.gurdianMobileNumber && errors?.gurdianMobileNumber
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.gurdianMobileNumber}
                                        origin={'gurdianMobileNumber'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 14 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        14. Email Address
                    </div>
                    {/* ANSWER INPUT SECTION 14 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.email}
                                placeholder="Write email address"
                                onChange={(e) => handleChangeValue('email', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.email && errors?.email
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.email}
                                        origin={'email'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 15 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] px-2.5 py-5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600' }}
                        className='required w-full sm:w-[50%] text-left'>
                        15.  University Name
                    </div>
                    {/* ANSWER INPUT SECTION 15 */}
                    <div style={{  }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.universityName}
                                placeholder="Write University Name"
                                onChange={(e) => handleChangeValue('universityName', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span> */}
                            <Select
                                className='did-floating-select w-[200px]'
                                placeholder='Select University Name'
                                name='type'
                                options={univeristyList}
                                // value={(DefaultFieldData?.typeOption?.filter(item => item?.value === values?.type))}
                                // onChange={e => {
                                //     setValues({ ...values, type: e?.value })
                                // }}
                                menuPortalTarget={document.body}
                                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            />

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.universityName && errors?.universityName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.universityName}
                                        origin={'universityName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 16 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        16. Name of Dept./Institute/Center
                    </div>
                    {/* ANSWER INPUT SECTION 16 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.departmentName}
                                placeholder="Write  Dept./Institute/Center Name"
                                onChange={(e) => handleChangeValue('departmentName', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.departmentName && errors?.departmentName
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.departmentName}
                                        origin={'departmentName'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 17 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        17. Name of Subject/Diploma/Group
                    </div>
                    {/* ANSWER INPUT SECTION 17 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.subject}
                                placeholder="Write  Subject/Diploma/Group Name"
                                onChange={(e) => handleChangeValue('subject', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.subject && errors?.subject
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.subject}
                                        origin={'subject'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 18 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        18.  Level of Education
                    </div>
                    {/* ANSWER INPUT SECTION 18 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.levelOfEducation}
                                placeholder="Write  Level of Education"
                                onChange={(e) => handleChangeValue('levelOfEducation', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.levelOfEducation && errors?.levelOfEducation
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.levelOfEducation}
                                        origin={'levelOfEducation'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 19 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='w-full sm:w-[50%] text-left'>
                        19.  Linkedin Profile Link
                    </div>
                    {/* ANSWER INPUT SECTION 19 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.linkedinProfile}
                                placeholder="Write  Linkedin Profile Link"
                                onChange={(e) => handleChangeValue('linkedinProfile', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.linkedinProfile && errors?.linkedinProfile
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.linkedinProfile}
                                        origin={'linkedinProfile'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 20 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='w-full sm:w-[50%] text-left'>
                        20.  Link of Project Repository
                    </div>
                    {/* ANSWER INPUT SECTION 20 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '250px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.projectRepository}
                                placeholder="Add Project Reporsitory link"
                                onChange={(e) => handleChangeValue('projectRepository', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.projectRepository && errors?.projectRepository
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.projectRepository}
                                        origin={'projectRepository'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 21 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center bg-[#77889914] p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='w-full sm:w-[50%] text-left'>
                        21.  Link of Freelancing Profile
                    </div>
                    {/* ANSWER INPUT SECTION 21 */}
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type='text'
                                style={{ maxWidth: '350px', width: '-webkit-fill-available', background: 'transparent', border: 'none', borderBottom: '1px solid #BDBDBD', fontWeight: '600', fontSize: '14px', color: 'black', marginLeft: '10px', paddingBottom: '8px', paddingRight: '20px' }}
                                className='focusClearanceFields'
                                value={values?.birthfreelancingProfileDate}
                                placeholder="Add Freelancing Profile link"
                                onChange={(e) => handleChangeValue('freelancingProfile', e.target.value)}

                            />
                            <span style={{
                                float: "right",
                                marginLeft: '-20px',
                                position: "relative",
                                zIndex: 2,
                            }}>
                                <img src={Pencil} alt='pencil' style={{ height: '15px', width: '15px' }} />
                            </span>

                            {/* ERROR MESSAGE SHOWING TOOLTIP */}
                            {touched?.freelancingProfile && errors?.freelancingProfile
                                &&
                                <span style={{ ...customError, marginTop: '-8px' }}>
                                    <ErrorTooltip
                                        content={errors?.freelancingProfile}
                                        origin={'freelancingProfile'}
                                        placement="right"
                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>

                {/* QUESTION 22 */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center p-2.5 rounded-sm'>
                    <div style={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginBottom: "20px" }}
                        className='required w-full sm:w-[50%] text-left'>
                        22.  Upload Picture
                    </div>
                    {/* ANSWER INPUT SECTION 22 */}
                    <div style={{ marginBottom: '20px' }} className='flex justify-between w-full sm:w-1/2'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <img
                                src={uploadFileIcon}
                                style={{ width: '50px', cursor: 'pointer' }}
                                onClick={() => {
                                    inputRef.current.click();
                                    // FileUploader()
                                }} />
                            <input ref={inputRef} type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                hidden
                                onChange={(e) => { profileImageChange(e) }}
                            />
                            {touched.file && errors.file &&
                                <span style={customError}>
                                    <ErrorTooltip
                                        content={errors.file}
                                        origin={'image'}
                                        placement="right" />
                                </span>}

                        </div>

                        {/* IMAGE PREVIEW */}
                        {inputFile?.imageURL &&
                            <div>
                                <img src={inputFile?.imageURL} alt='image_preview' className='w-[100px] h-[100px]' />
                                <div className="relative left-[74px] top-[-100px]">
                                    <img
                                        src={DeleteIcon}
                                        alt="Preview"
                                        className="hover:cursor-pointer w-[26px] h-[26px] !bg-[#FFFFFF]"
                                        onClick={() => {
                                            handleRemoveFile();
                                        }}
                                    />
                                </div>
                            </div>}


                        {/* {profileImage &&
                            <div style={{ display: 'flex' }}>
                                <div style={{
                                    display: 'flex',
                                    width: 'fit-content',
                                    marginBottom: '10px',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 'max-content', marginLeft: '10px', cursor: 'pointer', maxWidth: '70px', alignItems: 'center' }}
                                        tabIndex="0" className='makeSmallerIcon'>
                                        <img style={{ height: "30px", width: "30px", display: 'flex', cursor: 'pointer' }} onClick={() => handleDocumentPreview()}
                                            src={FileTypeSpecificIcon[documentName?.split('.').pop()?.toLowerCase()] ? FileTypeSpecificIcon[documentName?.split('.').pop()?.toLowerCase()] : FileTypeSpecificIcon['unknown']}

                                            alt="..."
                                        />
                                        <div style={{ fontSize: '12px', fontWeight: '500', wordBreak: 'break-all', minWidth: 'auto' }}>
                                            {
                                                (documentName?.split('/')?.slice(-1)?.[0]?.length > 10
                                                    ? documentName?.split('/')?.slice(-1)?.[0]?.slice(0, 5) + '...' + documentName?.split('/')?.slice(-1)?.[0]?.slice(-4)
                                                    : documentName?.split('/')?.slice(-1)?.[0])}
                                        </div>
                                    </div>
                                    <img
                                        src={cancelIcon} alt='delete'
                                        style={{ height: '19px', width: '19px', cursor: 'pointer', position: 'relative', top: '-25px', left: '-15px' }}
                                        tabIndex="0" className='makeSmallerIcon'
                                        onClick={() => {
                                            setprofileImage(null);
                                        }} />
                                </div>

                            </div>
                        } */}
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className='flex justify-end'>
                    <div className='bg-[#1960cb] text-white px-8 py-2 rounded-sm cursor-pointer w-fit font-semibold'
                        onClick={() => handleSubmit()}>
                        Submit
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RegistrationForm