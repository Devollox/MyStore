import React from "react";
import './modal.sass'
// @ts-ignore
const Modal = ({ open, handleClick }) => {

    return (
        <>
            {open && (
                <div>
                    <div className="containerModal" >
                        <div className='title'>
                            Microphones
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;