import React from "react";
import icono1 from '../../assets/images/icon01.png'
import icono2 from '../../assets/images/icon02.png'
import icono3 from '../../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const PromoSection = () => {

    return (
      
        <>
        <div>
            <div className="lg:w-[470px] mx-auto">
                <h2 className="heading text-center">
                    Reduce los tiempos de contratación
                </h2>
                <p className="text__para text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing eli temporibus qui! Numquam, vero.
                </p>
            </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            
     
            {/*Elemento 1*/}
            <div className='py-[30px] px-5'>
                <div className="flex items-center justify-center">
                    <img src={icono1} alt="" />
                </div>
                <div className="mt-[30px] ">
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                        Encuentra un Dev
                    </h2>
                    <p className="text__para text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus, aliquid quo voluptate laboriosam magni veritatis soluta voluptates impedit nam autem repudiandae in tempore culpa laborum aut repellat dolores suscipit!
                    </p>
                    <Link
                    to="/developer"
                    className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
            </div>

            {/*Elemento 2*/}
            <div className='py-[30px] px-5'>
                <div className="flex items-center justify-center">
                    <img src={icono2} alt="" />
                </div>
                <div className="mt-[30px] ">
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                        Busca por país
                    </h2>
                    <p className="text__para text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus, aliquid quo voluptate laboriosam magni veritatis soluta voluptates impedit nam autem repudiandae in tempore culpa laborum aut repellat dolores suscipit!
                    </p>
                    <Link
                    to="/developer"
                    className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
            </div>

            {/*Elemento 3*/}
            <div className='py-[30px] px-5'>
                <div className="flex items-center justify-center">
                    <img src={icono3} alt="" />
                </div>
                <div className="mt-[30px] ">
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                        Pide una cita
                    </h2>
                    <p className="text__para text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, temporibus, aliquid quo voluptate laboriosam magni veritatis soluta voluptates impedit nam autem repudiandae in tempore culpa laborum aut repellat dolores suscipit!
                    </p>
                    <Link
                    to="/developer"
                    className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default PromoSection;