// EXPECTED PROPS

// usedPurpose = (WholePage || notWholePage) (OPTIONAL)
// loaderMessage = specific message to show while loading (OPTIONAL)


const Loader = (props) => {
    return (
        <div id="loaderModal">
            <div id="myResponseModal" className="response-modal" style={{ display: "block", zIndex: '9999' }}>
            <div className="response-modal-content">
                    <div className="response-modal-body">
                        <div className='loaderHolder'>
                            <div id="loaderMother">
                                <div className='loaderText'>
                                    {props?.loaderMessage ? props?.loaderMessage : 'Please Wait'}
                                </div>
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
            </div>
        </div>
    )
}

export default Loader

