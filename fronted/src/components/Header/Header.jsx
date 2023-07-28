import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import userImage from '../../assets/images/client-avatar.png'
import { BiMenu } from 'react-icons/bi'


const navLinks = [
    {
        name: 'Inicio',
        path: '/home'
    },
    {
        name: 'Buscar Dev',
        path: '/developers'
    },
    {
        name: 'Servicios',
        path: '/services'
    },
    {
        name: 'Contacto',
        path: '/contact'
    }

]

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        }
        )
    };
    useEffect(() => {
        handleStickyHeader()
        return () => window.removeEventListener('scroll', handleStickyHeader)
    });

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
    
    return (
        <>
            <div>
                <header className='header flex items-center' ref={headerRef} >
                    <div className="container">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            {/* Menu */}
                            <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
                                <ul className='menu flex items-center gap-[2.7rem]'>
                                    {
                                        navLinks.map((link, index) => (
                                            <li key={index}>
                                                <NavLink
                                                    to={link.path}
                                                    className={navClass =>
                                                        navClass.isActive
                                                            ? 'text-yellowColor text-[16px] leading-7 font-[600]'
                                                            : 'text-textColor text-[16px] leading-7 font-[500] hover:text-yellowColor'
                                                    }
                                                >
                                                    {link.name}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                            {/*MENU derecha*/}
                            <nav className='flex items-center gap-4'>
                                <div className='hidden'>
                                    <Link to='/home'>
                                        <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                                            <img src={userImage} className='w-full rounded-full' alt="" />
                                        </figure>
                                    </Link>
                                </div>
                                
                                    <Link to='/login'>
                                        <button className='bg-yellowColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                                            login
                                        </button>
                                    </Link>
                                    <span className='md:hidden' onClick={toggleMenu}>
                                        <BiMenu className="w-6 h-6 cursor-pointer" />
                                    </span>     
                               
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header



