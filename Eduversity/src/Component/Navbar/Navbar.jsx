import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo (2).png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


export default function Navbar() {

  const[dark,setDark]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setDark(true) : setDark(false);
    })
  },[]);

  const[menuToggle,setMenuToggle]=useState(false);
  
  const toggle=()=>{
    menuToggle ? setMenuToggle(false) :setMenuToggle(true);
  }

  return (
    <nav className={`container ${dark  ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />      
        <ul className={menuToggle?'menu-open':''}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home </Link></li>
            <li><Link to='programs' smooth={true} offset={-220} duration={500}> Programs </Link></li>
            <li><Link to='about' smooth={true} offset={-120} duration={500}> About </Link></li>
            <li><Link to='campus' smooth={true} offset={-220} duration={500}> Campus </Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} offset={-215} duration={500}> Contact Us </Link></button></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggle} />
    </nav>
  )
}
