import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { elogo, menu, close, github } from '../assets';
import { githubblack, linkedin } from "../assets";

const Navbar = () => {
  const [active, setactive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={elogo} alt ="logo" className="w-9 h-9 object-contain"></img>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Elbert William&nbsp;
          <span className="sm:block hidden">| Software Engineer</span></p>
        </Link>
       <div className="grid grid-cols-3 gap-1">
        <div onClick={() => window.open("https://www.linkedin.com/in/elbert-william-7913aa1a3/")}
            className="w-10 h-10 text-white rounded-lg flex justify-center items-center cursor-pointer">
              <img 
              src={linkedin}
              alt="LinkedIn"
              className="w-2/3 h-2/3 object-contain"
              />

            </div>
            <div onClick={() => window.open("https://github.com/elbertwilliam")}
            className="w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer">
              <img 
              src={github}
              alt="GitHub"
              className="w-3/4 h-3/4 object-contain"
              />

            </div>
            </div>
            
            
        <ul className="list-none hidden sm:flex
        flex-row gap-10">
          {navLinks.map((Link) => (
            <li
            key={Link.id}
            className={`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px]
            font-medium cursor-pointer`}
            onClick={() => setactive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        
        <div className="sm:hidden flex flex-1
        justify-end items-center"><img
        src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px]
        object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}>
        </img></div>
        <div className={`${!toggle ? 'hidden': 'flex'}
        p-6 black-gradient absolute top-20 right-0 mx-4
        my-2 min-w-[140px] z-10 rounded-xl`}>
           <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((Link) => (
            <li
            key={Link.id}
            className={`${
              active === Link.title
              ? "text-white"
              : "text-secondary"
            } font-poppins font-medium
            cursor-pointer text-[16px]`}
            onClick={() => {setToggle(!toggle);
                            setActive(Link.title);}}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
    
    
  )
}

export default Navbar