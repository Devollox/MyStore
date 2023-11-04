'use client'
import './navbar.sass'
import '../app/globals.css'
import {useEffect} from "react";
import React, { useState } from 'react';
import Modal from './Modal'
import './modal.sass'
import {useModalState} from "@/hook/useModalState";
export default function Navbar() {

    const {isOpen, onToggle} = useModalState();

    useEffect(() => {
        let login: any = document.getElementById('login')

        let menuOpen : any = document.getElementById('menuOpen')
        let menuClose : any = document.getElementById('menuClose')
        let modal: any = document.getElementById('modal')
        let modal_list: any = document.getElementById('modal_list')


        function noVisible( propTwo: any) {
            propTwo.style.display = 'inline'
            modal.classList.remove('modal-no-ani')
            modal.classList.add('modal-ani')

        }
        function visible( propTwo: any) {
            propTwo.style.display = 'none'
            modal.classList.remove('modal-ani')
            modal.classList.add('modal-no-ani')
        }
        menuOpen.addEventListener('click', () => noVisible(menuClose))
        menuClose.addEventListener('click', () => visible(menuClose))
    })

    const handleClick = () => {
        onToggle();
        close()
    };


    return (
        <div className='navbar_helper'>
            <nav className='navbar'>
                <Modal handleClick={handleClick} />
                <div id='id' className='navbar_list'>
                    <div id='micro' className="dropdown navbar_list_item start_content navbar_dropdown ">
                        <button className="dropbtn navbar_link">Microphones</button>
                        <div className="dropdown-content">
                            <a href="error">
                                <div className='block' style={{marginTop: 5}}>
                                    <div className='flex list'>
                                        <svg width="17px" height="17px" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5714 3L4.57141 3L4.57141 15L20.5714 15L20.5714 4"
                                                  stroke="currentColor"
                                                  stroke-width="2"></path>
                                            <path d="M4.57153 15L4.57153 20L15.5715 20" stroke="currentColor"
                                                  stroke-width="2"></path>
                                            <path d="M15.5714 22V15H20.5714V22L18.0714 20.25L15.5714 22Z"
                                                  stroke="currentColor"
                                                  stroke-width="2" stroke-linecap="square"></path>
                                            <path d="M8.82141 11.25H9.12141" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="square"></path>
                                            <path d="M8.82141 6.75H9.12141" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="square"></path>
                                        </svg>
                                        <div style={{marginLeft: '30px'}}>
                                            Info
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown  navbar_list_item navbar_dropdown ">
                        <button className="dropbtn navbar_link">Mouses</button>
                        <div className="dropdown-content">
                            <a href="#">
                                <div className='block' style={{marginTop: 5}}>
                                    <div className='flex list'>
                                        <svg width="17px" height="17px" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5714 3L4.57141 3L4.57141 15L20.5714 15L20.5714 4"
                                                  stroke="currentColor"
                                                  stroke-width="2"></path>
                                            <path d="M4.57153 15L4.57153 20L15.5715 20" stroke="currentColor"
                                                  stroke-width="2"></path>
                                            <path d="M15.5714 22V15H20.5714V22L18.0714 20.25L15.5714 22Z"
                                                  stroke="currentColor"
                                                  stroke-width="2" stroke-linecap="square"></path>
                                            <path d="M8.82141 11.25H9.12141" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="square"></path>
                                            <path d="M8.82141 6.75H9.12141" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="square"></path>
                                        </svg>
                                        <div style={{marginLeft: '30px'}}>
                                            Info
                                        </div>
                                    </div>
                                    <div className='flex list' style={{marginTop: 5, marginBottom: 5}}>
                                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.5766 10.6459C17.7177 11.2029 17.1184 11.7974 17.1184 11.7974C17.1184 11.7974 16.0257 12.521 16.2371 9.41902C16.4486 6.31702 11.5485 3.27142 11.5485 3.27142C11.5485 3.27142 11.5766 3.5671 11.5485 5.6119C11.5132 8.18518 10.0326 7.3039 10.0326 7.3039C8.55208 8.8903 8.68888 12.4706 8.68888 12.4706C6.85576 14.0921 6.78953 10.7232 6.78953 10.7232C6.78953 10.7232 3.29968 14.2483 7.03625 18.0201C7.03625 18.0201 7.58416 18.5666 6.70888 18.3931C6.08464 18.2695 5.94352 18.0201 5.94352 18.0201C5.94352 18.0201 6.06352 19.5823 10.4675 20.5574C10.553 20.5747 11.9217 20.843 13.4673 20.5339C16.859 19.7707 17.4503 18.3561 17.4503 18.3561C17.4503 18.3561 17.3786 18.4838 16.8158 18.5412C16.211 18.6029 16.7298 18.0199 16.7298 18.0199C20.7138 15.5174 17.4354 10.0889 17.5766 10.6459Z"
                                                fill="#FF4C1F"></path>
                                            <path
                                                d="M16.1288 15.792C16.922 14.5495 16.3138 13.624 16.3138 13.624C15.0704 14.2634 14.6984 13.817 14.588 13.4551C14.5443 13.3118 14.5368 13.1596 14.562 13.012C15.3665 8.29724 12.2434 5.75084 12.3219 6.38036C12.3456 6.57068 12.313 6.82052 12.2554 7.07708C12.1193 7.68452 11.8589 8.25668 11.504 8.76788C11.0151 9.47204 10.1316 10.9824 9.65165 13.254C8.96453 16.5057 6.98165 14.1528 6.98165 14.1528C6.98165 14.1528 5.82293 18.1166 10.5555 20.5737C10.8341 20.622 11.7159 20.7484 12.7788 20.6378C15.8866 19.175 17.0012 16.3207 17.0012 16.3207C17.0012 16.3207 15.3356 17.0344 16.1288 15.792Z"
                                                fill="#FF9C45"></path>
                                            <path
                                                d="M15.0444 14.9477C15.0449 14.9465 15.0452 14.946 15.0452 14.946L15.0444 14.9477Z"
                                                fill="#FFDD56"></path>
                                            <path
                                                d="M15.0445 14.9477C15.0285 14.9889 14.6956 15.7973 13.4591 16.0034C12.1902 16.2149 12.7453 11.7974 12.7453 11.7974C9.62582 13.2753 10.2073 16.7436 10.2073 16.7436C10.2073 16.7436 9.7091 17.2243 9.07046 16.7436C8.8535 16.5804 9.3299 19.5305 11.3697 20.6649C11.7481 20.6885 12.2207 20.693 12.7374 20.6419C14.1407 19.6665 14.8866 16.6113 14.8866 16.6113L14.2429 17.0088L15.0445 14.9477Z"
                                                fill="#FFDD56"></path>
                                            <path
                                                d="M6.08287 10.2931C6.08287 10.2931 5.89999 8.6942 6.79111 7.98788C6.93031 7.87748 7.02415 7.78796 7.09279 7.62404C7.14871 7.49084 7.23535 7.27916 7.19311 7.12076C7.08751 6.72404 8.38279 8.91836 6.08287 10.2931Z"
                                                fill="#FF4C1F"></path>
                                            <path
                                                d="M12.7468 20.6412C13.3134 20.046 14.0689 17.6678 14.0689 17.6678C14.0689 17.6678 13.9053 18.155 13.2935 18.091C12.4521 18.0026 11.9893 15.7644 11.9893 15.7644C11.9893 15.7644 11.2902 17.6678 11.1433 17.9498C10.834 18.5438 10.2621 17.9498 10.2621 17.9498C10.1109 18.9175 11.3176 20.3038 11.6639 20.6786C11.9848 20.6875 12.3529 20.6806 12.7468 20.6412Z"
                                                fill="#FCFBCC"></path>
                                        </svg>
                                        <div style={{marginLeft: '27px'}}>
                                            Overview
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-hover="true" data-delay="0" className="dropdown navbar_dropdown navbar_list_item w-dropdown">
                        <div className="navbar_dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                             aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button">
                            <a href="/engine" className="navbar_link w-inline-block">
                                <div>Monitors</div>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown navbar_list_item navbar_dropdown ">
                        <button className="dropbtn navbar_link">Company</button>
                        <div className="dropdown-content">
                            <a href="#">
                                <div className='block'>
                                    <div className='flex list' style={{marginTop: 5}}>
                                        <svg width="17px" height="17px" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.4286 2H12.4286H14.4286L16.4286 4.25V6.5L14.4286 11H10.4286L8.42859 6.5V4.25L10.4286 2Z"
                                                stroke="currentColor" stroke-width="2"></path>
                                            <path
                                                d="M20.4286 22L16.9286 22L12.4286 22L3.42859 22L3.42859 18.5L7.92859 15L16.9286 15L21.4286 18.5L21.4286 21"
                                                stroke="currentColor" stroke-width="2"></path>
                                        </svg>
                                        <div style={{marginLeft: '30px'}}>
                                            About
                                        </div>
                                    </div>
                                    <div className='flex list' style={{marginTop: 5}}>
                                        <svg width="17px" height="17px" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.5 7.40831L6.82014 3H17.1799L21.5 7.40831V16.5917L17.1799 21H6.82014L2.5 16.5917V7.40831Z"
                                                stroke="currentColor" stroke-width="2"></path>
                                            <path
                                                d="M7.5 7.71781L11.7571 3H12.2429L16.5 7.71781V16.2822L12.2429 21H11.7571L7.5 16.2822V7.71781Z"
                                                stroke="currentColor" stroke-width="2"></path>
                                            <path d="M2.5 12C3.76667 12 15.1944 12 21 12" stroke="currentColor"
                                                  stroke-width="2"></path>
                                        </svg>
                                        <div style={{marginLeft: '30px'}}>
                                            Vision
                                        </div>
                                    </div>
                                    <div className='flex list' style={{marginTop: 5, marginBottom: 5}}>
                                        <svg width="17px" height="17px" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.2858 2L4.28577 2L4.28577 22L20.2858 22L20.2858 3"
                                                  stroke="currentColor" stroke-width="2"></path>
                                            <path d="M7.28577 10C7.95243 10 14.2302 10 17.2858 10" stroke="currentColor"
                                                  stroke-width="2"></path>
                                            <path d="M7.28577 15C7.75243 15 12.1469 15 14.2858 15" stroke="currentColor"
                                                  stroke-width="2"></path>
                                        </svg>
                                        <div style={{marginLeft: '30px'}}>
                                            Contact
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-hover="true" data-delay="0" className="navbar_dropdown dropdown navbar_list_item last_content w-dropdown">
                        <div className="navbar_dropdown-toggle w-dropdown-toggle" id="w-dropdown-toggle-0"
                             aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button">
                            <a href="/engine" className="navbar_link w-inline-block">
                                <div>Contact Sales</div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='navbar_part action'>
                            <div className='button-group nav'>
                                <div id='login' className='inline'>
                                    <a href="https://developer.modular.com/login"
                                       className="button is-navbar is-secondary w-button"><span>Login</span></a>
                                    <a href="https://developer.modular.com/signup"
                                       className="button is-navbar is-primary w-button">Sign
                                        Up</a>
                                </div>
                                    <a href="#" id='menuOpen' onClick={handleClick} className="menu">Menu</a>
                                    <a href="#" style={{display: 'none'}} id='menuClose' onClick={handleClick} className="menu">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}