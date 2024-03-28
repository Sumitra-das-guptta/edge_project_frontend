import { useLocation } from 'react-router-dom';
import facebookIcon from '../../assets/icons/Facebook_logo.png';

const Footer = () => {
    let location = useLocation();
    return (
        <div style={{ background: 'rgb(59 130 246 / 8%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', margin: '10px' }}>
                <div>
                    &copy; {new Date().getFullYear()}
                    <span style={{ color: '#0d6efd', fontWeight: '400', cursor: 'pointer' }} onClick={() => window.open('https://www.cuet.ac.bd/institute/iict', '_blank"')}> &nbsp;
                        IICT, CUET &nbsp;</span>
                    All rights reserved.
                </div>

                <div className='flex justify-center text-blue-600 font-semibold text-base items-center'>
                    <div>Follow us on</div>
                    <a href='https://www.facebook.com/profile.php?id=61557745169468' target='_blank'>
                        <img src={facebookIcon} alt='facebook' className='w-[35px]' />
                    </a>
                </div>
                <div>
                    Developed by
                    <span style={{ color: '#0d6efd', fontWeight: '400', cursor: 'pointer' }}
                        onClick={() => window.open('https://www.cuet.ac.bd/members/731', '_blank"')}>
                        &nbsp;Sumitra Das Guptta(Ass. D. Prog.), IICT, CUET
                    </span>
                </div>
            </div>

        </div>

    );
}

export default Footer;