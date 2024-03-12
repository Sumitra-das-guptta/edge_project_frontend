import React, { useState } from 'react'
import collapseUpIcon from '../assets/icons/collapseUpIcon.svg';

const styles = {
    collpasedSection: {
        padding: '10px',
        borderBottom: '1px solid #BDBDBD',
        borderRadius: '2px',
        boxShadow: '0px 6px 7px 0px #b0c4de'
    }
}
const About = () => {
    const [isVisible, setIsVisible] = useState(['section_1', 'section_2']);
    const handleClickCollapsibleSection = (updatedCollapsibleSectionValue) => {
        if (isVisible?.includes(updatedCollapsibleSectionValue)) {
            let dummy_array = isVisible?.filter(eachSection => eachSection !== updatedCollapsibleSectionValue);
            setIsVisible([...dummy_array]);
        }
        else {
            let dummy_array = isVisible?.concat([updatedCollapsibleSectionValue]);
            setIsVisible([...dummy_array]);
        }
    }

    return (
        <div className='my-[14vh] min-h-[64vh]'>
            <div
                className='rightToLeftSliding cursor-pointer font-bold text-4xl bg-gradient-to-r from-blue-400 to-[#191970] text-transparent bg-clip-text text-left flex justify-between mb-4 '
                style={styles?.collpasedSection}
                onClick={() => handleClickCollapsibleSection('section_1')}
            >
                <div>About EDGE Project</div>
                <img src={collapseUpIcon}
                    style={{ width: '20px', marginRight: '20px', rotate: isVisible?.includes('section_1') ? '' : '180deg' }} />
            </div>
            <div
                className='text-sm font-medium py-2.5 px-8 text-justify bg-gradient-to-r from-gray-400 to-gray-900 text-transparent bg-clip-text'
                style={{ display: isVisible?.includes('section_1') ? 'block' : 'none' }}>
                EDGE Project works on creating the enabling environment for digital government and
                the digital economy.

                <br /><br />
                The EDGE (Enhancing Digital Government Engagement) project in Bangladesh is a pioneering initiative aimed at revolutionizing the country's governmental services through digital transformation. Launched with the vision of leveraging technology to enhance citizen
                engagement and streamline administrative processes, EDGE represents a significant step forward in
                Bangladesh's journey towards becoming a digitally inclusive society.

                At its core, the EDGE project focuses on modernizing government services, fostering transparency,
                and increasing accessibility for citizens across the nation. Through the implementation of advanced
                digital infrastructure and innovative solutions, EDGE seeks to bridge the gap between the government
                and its people, making services more efficient, responsive, and citizen-centric.
                <br /><br />
                The project, funded by World Bank and GoB, will ensure an integrated,
                cloud-computing digital platform for all government agencies and improve cyber-security,
                which will result in savings of $200 million in the public sector’s IT investments.Further,
                it will build resiliency during future crises, whereby the platform will enable the government to
                operate virtually and deliver critical public services to citizens and businesses.
                <br /><br />
                <div className='font-bold text-lg text-[#6e7073]'>Vision</div>

                300 million dollars in ICT exports by 2026 and support the construction of technology and knowledge-based smart and developed Bangladesh and the Sonar Bangla of Bangabandhu’s dream.
                <br /><br />
                <div className='font-bold text-lg text-[#6e7073]'>Mission</div>

                Development of skilled human resources suitable for the fourth industrial revolution;
                Enact smart Bangladesh-friendly laws and policies and build a digital economy through innovation,
                research and ICT industry development; Also, strengthening the Bangladesh National Digital Architecture
                (BNDA) with the establishment of Digital Leadership Academy (DLA) and Center for 4IR and accelerating the
                development of Smart Bangladesh by ensuring cyber security, providing cloud services and providing digital
                literacy.
                {/* <br /><br /> */}

            </div>

            <div
                className='leftToRightSliding cursor-pointer font-bold text-4xl bg-gradient-to-r from-blue-400 to-[#191970] text-transparent bg-clip-text text-left flex justify-between mb-4'
                style={styles?.collpasedSection}
                onClick={() => handleClickCollapsibleSection('section_2')}>
                <div>Eligibility Criteria</div>
                <img src={collapseUpIcon}
                    style={{ width: '20px', marginRight: '20px', rotate: isVisible?.includes('section_2') ? '' : '180deg' }} />
            </div>

            <div
                className='text-sm font-medium py-2.5 px-8 text-justify bg-gradient-to-r from-gray-400 to-gray-900 text-transparent bg-clip-text'
                style={{ display: isVisible?.includes('section_2') ? 'block' : 'none' }}>
                Eligibility Criteria for Trainees:<br /><br />
                1. For Foundation Skills Program: Candidates below 35 years of age who completed their higher secondary
                education. <br />
                2. For Intermediate level training: Candidates under 35 years of age who are either enrolled in or have
                completed their tertiary education in any discipline.<br />
                3. For Advanced level training: Candidates below 35 years of age with foundational skills in IT and a
                background in science and engineering.

            </div>

            <div
                className='rightToLeftSliding cursor-pointer font-bold text-4xl bg-gradient-to-r from-blue-400 to-[#191970] text-transparent bg-clip-text text-left flex justify-between mb-4'
                style={styles?.collpasedSection}
                onClick={() => handleClickCollapsibleSection('section_3')}>
                <div>Assessment Criteria</div>
                <img src={collapseUpIcon}
                    style={{ width: '20px', marginRight: '20px', rotate: isVisible?.includes('section_3') ? '' : '180deg' }} />
            </div>

            <div className='text-sm font-medium py-2.5 px-8 text-justify bg-gradient-to-r from-gray-400 to-gray-900 text-transparent bg-clip-text'
                style={{ display: isVisible?.includes('section_3') ? 'block' : 'none' }}>
                The IICT, CUET and Department of CSE, CUET combinedly will conduct midterm and final assessments. Upon successful completion of the program, and based on the final evaluation
                (with at least an 60% score and 80% attendance), each participant will be jointly awarded a certificate by
                the IICT, CUET and EDGE. Number of trainees and expenditure will be counted based on the successful completion of training.
                Overall assessment of trainee performance will be based on the following score distribution (indicative):
                <div className='font-semibold text-sm text-[#6e7073] ml-[10%]'>
                    <div>1. Class attendance: 10%</div>
                    <div>2. Quiz and Assignment(s): 20%</div>
                    <div>3. Mid-term assessment: 20%</div>
                    <div>4. Project: 25%</div>
                    <div>5. Final Evaluation: 25%</div>
                </div>
            </div>



            <div
                className='leftToRightSliding cursor-pointer font-bold text-4xl bg-gradient-to-r from-blue-400 to-[#191970] text-transparent bg-clip-text text-left flex justify-between mb-4'
                style={styles?.collpasedSection}
                onClick={() => handleClickCollapsibleSection('section_4')}>
                <div>Courses that we offer</div>
                <img src={collapseUpIcon}
                    style={{ width: '20px', marginRight: '20px', rotate: isVisible?.includes('section_4') ? '' : '180deg' }} />
            </div>

            <div className='text-sm font-medium py-2.5 px-8 text-justify bg-gradient-to-r from-gray-400 to-gray-900 text-transparent bg-clip-text'
                style={{ display: isVisible?.includes('section_4') ? 'block' : 'none' }}>

                <div className='font-bold text-lg text-[#6e7073]'>Foundation Skills Program:</div>
                <div className='pl-3'>(i) Basic networking</div>
                <div className='pl-3'>(ii) Hardware Maintenance </div>
                <div className='pl-3'>(iii) CNC & 3D Printing for Industrial Automation </div>
                <div className='pl-3'>(iv) Environmental Experience Design (EXD) </div>
                <div className='pl-3'>(iii) Industrial Automation </div>
                <div className='pl-3'>(iii) Graphics design  </div>
                <div className='pl-3'>(iii) Microsoft word & excel </div>
                <div className='pl-3'>(iii) Microsoft Word & PowerPoint </div>
                <div className='pl-3'>(iii) Basic Web Development  </div>
                <div className='pl-3'>(iii) Basic programming with Python </div>
                <div className='pl-3'>(iii) Video Production and Editing </div>

                <div className='font-bold text-lg text-[#6e7073]'>Intermediate Level Training:</div>
                <div className='pl-3'>(i) Embark on DevOps</div>
                <div className='pl-3'>(ii) Software Aided Civil Engineering Design and Analysis </div>
                <div className='pl-3'>(iii) Computer Aided Engineering Design</div>
                <div className='pl-3'>(iv) Engineering Design and Analysis with MATLAB</div>
                <div className='pl-3'>(v) Digital Design for Industrial Control</div>
                <div className='pl-3'>(vi) Power System Operation and Service Design</div>
                <div className='pl-3'>(vii) GIS and its Application</div>
                <div className='pl-3'>(viii) Remote Sensing and its Application</div>
                <div className='pl-3'>(ix) Data Analytics in Oil, Gas and Energy Industry</div>
                <div className='pl-3'>(x) Mobile app development (Android/ Flutter/ IOS)</div>
                <div className='pl-3'>(xi) Front-End Developer (React / NodeJS / VueJS/ Angular JS)</div>
                <div className='pl-3'>(xii) Java (any popular framework)</div>
                <div className='pl-3'>(xiii) PHP (Laravel)</div>
                <div className='pl-3'>(xiv) Python (Dijango)</div>
            </div>

            {/* COURSE FACILITIES */}
            <div
                className='rightToLeftSliding cursor-pointer font-bold text-4xl bg-gradient-to-r from-blue-400 to-[#191970] text-transparent bg-clip-text text-left flex justify-between mb-4'
                style={styles?.collpasedSection}
                onClick={() => handleClickCollapsibleSection('section_5')}>
                <div>Course Facilities</div>
                <img src={collapseUpIcon}
                    style={{ width: '20px', marginRight: '20px', rotate: isVisible?.includes('section_5') ? '' : '180deg' }} />
            </div>

            <div className='text-sm font-medium py-2.5 px-8 text-justify bg-gradient-to-r from-gray-400 to-gray-900 text-transparent bg-clip-text'
                style={{ display: isVisible?.includes('section_5') ? 'block' : 'none' }}>

                <div className='font-bold text-lg text-[#6e7073]'>Trainees will acquire skills in the following priority areas: </div>
                <div>(i) Understanding the job market,</div> 
                <div>(ii) Developing a freelancing profile and learning how to bid,</div> 
                <div>(iii) Real-life software or project work,</div>
                <div>(iv) Effective business communication, </div>
                <div>(v) Professional workplace norms, and</div>
                <div>(vi) Navigating online project repositories.</div>
                <br />
                <div className='font-bold text-lg text-[#6e7073]'>Benefits for the Students: </div>
                <div>(i) After successful completion each trainee will be awarded a certificate</div>
                <div>(ii) No training fee required (All expenses will be covered by the Project)</div>
                <div>(iii) Training KIT (Printed Course Curriculum, Pen, pad, Bag, ID Card)</div>
                <div>(iv) Regular refreshment (once in every 3 hrs session)</div>
                <div>(v) Participate in Opening and closing ceremony</div>
                <div>(vi) Trainer from Industry and academia.</div>
            </div>
        </div>
    )
}

export default About