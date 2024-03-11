// EXPECTED PROPS

// usedPurpose = (WholePage || notWholePage) (OPTIONAL)
// loaderMessage = specific message to show while loading (OPTIONAL)
import '../Styles/LoaderStyle.css';
import '../Styles/ResponseModal.css';

const Loader = (props) => {
    return (


        <div className={props?.usedPurpose === 'WholePage' ? 'loaderModalDBL' : ''}>
            <div className='loaderHolder' style={{ background: props?.usedPurpose === 'WholePage' ? 'white' : 'transparent' }}>
                <div id="loaderMother">
                    <div className='loaderText'>
                        {props?.loaderMessage ? props?.loaderMessage : 'Please Wait'}
                    </div>
                    <div className="screen">
                        <div className="loader">
                            <div className="loader1"></div>&nbsp;&nbsp;
                            <div className="loader2"></div>&nbsp;&nbsp;
                            <div className="loader3"></div>&nbsp;&nbsp;
                            <div className="loader4"></div>&nbsp;&nbsp;
                            <div className="loader5"></div>&nbsp;&nbsp;
                            <div className="loader6"></div>&nbsp;&nbsp;
                            <div className="loader7"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loader

