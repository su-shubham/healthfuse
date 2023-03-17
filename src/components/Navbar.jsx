import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';


const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex md:flex-row gap-6">
      <div className="flex-1 flex flex-row justify-cernter bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12 space-x-8 px-2">
        <Link to="/">
        <Icon styles="bg-[#2c2f32]" imgUrl={logo} />
      </Link>
        <div className="flex flex-row justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
            ))}
        </div>
    </div>
    </div>
  )
}

export default Navbar;