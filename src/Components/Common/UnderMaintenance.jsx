import PageError from '../../assets/icons/UnderMaintenance.svg';

const styles = {
    pageRoot: {
        backgroundColor: '#F7F8FA',
        marginTop: '11vh'
    },
    mainContent: {
        width: '100%',
        height: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boldText: {
        // fontFamily: 'Open Sans',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '150%',
        textAlign: 'center',
        color: '#2C3C51'
    },
    normalText: {
        // fontFamily: 'Open Sans',
        // fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '150%',
        textAlign: 'center',
        color: '#828282',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center'

    },
    buttonHolder: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '30px',
    },
    button: {
        // fontFamily: 'Open Sans',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '150%',
        textAlign: 'center',
        color: '#FFFFFF',
        padding: '15px 35px',
        backgroundColor: '#2C3C51',
        cursor: 'pointer',
    },
    or: {
        // fontFamily: 'Open Sans',
        // fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '150%',
        textAlign: 'center',
        padding: '0px 40px',
    }
};


const UnderMaintenance = () => {

    

    return (
        <div style={styles.pageRoot}>

            {/* Secondary Div */}
            <div style={styles.mainContent}>
                <img src={PageError} alt='Page Not Found' />

                <div style={styles.normalText}>
                    This page is under maintenance. Thank you for your patience.
                </div>

            </div>

        </div>
    )
}

export default UnderMaintenance