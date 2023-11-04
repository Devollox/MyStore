import React from "react";
import './modal.sass'
// @ts-ignore
const Modal = ({handleClick}) => {

    return (
        <>
            <div id='modal' className='modal'>
                <div className='modal-container-marging'>
                    <div className='modal-font'>
                        <div id='modal_list' className='navbar_list modal_list'>
                            <a href="#" id='menuClose' onClick={handleClick}>Close</a>
                        </div>
                    </div>
                </div>
                <div className='font'>
                    <div className='font-container'>
                        <a href="/engine" className="w-inline-block-modal">
                            <div className="w-inline-block-modal">Engine</div>
                        </a>
                        <a href="/engine" className="w-inline-block-modal">
                            <div className="w-inline-block-modal">Blog</div>
                        </a>
                        <a href="/engine" className="w-inline-block-modal">
                            <div className="w-inline-block-modal">Company</div>
                        </a>
                        <a href="/engine" className="w-inline-block-modal">
                            <div style={{color: "white"}} className="w-inline-block-modal">Contact Sales 🔥</div>
                        </a>
                    </div>
                    <div className='contact-block'>
                        <div className='inline-modal'>
                            <a href="https://developer.modular.com/login"
                               className="button is-navbar is-secondary w-button"><span>Login</span></a>
                        </div>
                        <div id='login' className='inline-modal'>
                            <a href="https://developer.modular.com/signup"
                               className="button is-navbar is-primary w-button">Sign
                                Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;