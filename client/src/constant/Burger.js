import React from 'react';
import styled from 'styled-components';
import IconBurger from '../assets/icons/IconBurger.svg';
import IconX from '../assets/icons/IconX.svg';

const Burger = ({ open, setOpen, ...props }) => {
	return (
		<>
			{!open ? <Icon src={IconBurger} alt='Burger' onClick={() => setOpen(!open)} />
				: <Icon src={IconX} alt='Close' className='close' onClick={() => setOpen(!open)} />
			}
		</>
	);
};

export default Burger;


const Icon = styled.img`
   margin-right:20px;
   &.close{
       margin-right:10px;
       z-index:2;
   }
`;