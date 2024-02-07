import React, { useEffect } from 'react';
import '../Styles/ResponseModal.css';


// EXPECTED PROPS
// usedPurpose = (Success || Warning || Error )
// message = response message shown to modal body
// footerMessage = message to show in the modal footer
// handleFooterClick = function to call while onclick footer
// setModalVisible = set function that controls modal visibility

const ResponseModal = (props) => {

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    var modal = document.getElementById("myResponseModal");
    if (event.target === modal) {
      if (props?.usedPurpose === 'Success') {
        props.handleFooterClick();
      }
      else {
        props.setModalVisible(false);
      }

    }
  };

  useEffect(() => {
    if (props?.usedPurpose === 'Success') {
      setTimeout(() => {
        props.handleFooterClick();
      }, 2000);
    }
  }, []);

  return (
    <div id="myResponseModal" className="response-modal" style={{ display: "block", zIndex: '9999' }}>
      {/* <!-- Modal content --> */}
      <div className="response-modal-content">
        <div className="response-modal-header" style={{
          color: (props?.usedPurpose === 'Success')
            ? '#27AE60'
            : (props?.usedPurpose === 'Warning'
              ? 'rgb(255, 127, 63)'
              : '#F13C3C')
        }}>
          <span className="text-xl font-normal float-right text-black hover:text-red-600 hover:font-bold hover:cursor-pointer" onClick={() => props.setModalVisible(false)}>&times;</span>
          <div className='m-[15px] text-center' >
            {props?.usedPurpose}
          </div>
        </div>

        <div className="response-modal-body">
          <p>{props?.message}</p>
        </div>


        {props?.footerMessage &&
          <div className="response-modal-footer">
            <div className='cursor-pointer'
              onClick={() => {
                if (props?.usedPurpose === 'Success') {
                  props.handleFooterClick();
                }
                else {
                  props.setModalVisible(false);
                }
              }}>
              {props?.footerMessage}
            </div>
          </div>
        }

      </div>

    </div>
  )
}

export default ResponseModal