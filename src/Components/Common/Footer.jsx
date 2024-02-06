import { useLocation } from 'react-router-dom';

const Footer = () => {
    let location = useLocation();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '15px' }}>
            <div>
                &copy; {new Date().getFullYear()}
                <span style={{ color: '#0d6efd', fontWeight: '400', cursor: 'pointer' }} onClick={() => window.open('https://www.cuet.ac.bd/institute/iict', '_blank"')}> &nbsp;
                IICT, CUET &nbsp;</span>

                All rights reserved.
            </div>
            <div>
                Developed by
                <span style={{ color: '#0d6efd', fontWeight: '400', cursor: 'pointer' }}
                    onClick={() => window.open('https://www.cuet.ac.bd/members/731', '_blank"')}>
                    &nbsp;Sumitra Das Guptta, Asst. Database Programmer, IICT, CUET
                </span>
            </div>

        </div>
    );
}

export default Footer;