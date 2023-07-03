'use client'
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEarthAsia, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {usePathname, useRouter} from "next/navigation";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const pathName = usePathname()
    useEffect(() => {
        const handleResize = () => {
            // If the window width is larger than 768px (md in Tailwind)
            if (window.innerWidth > 768) {
                setShowMenu(false); // Close the menu
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleShowMenu = ()=>{
        setShowMenu(!showMenu)
    }

    const renderMenuIcon = () => {
        if (!showMenu) return <FontAwesomeIcon icon={faBars} size="2x"/>;
        return <FontAwesomeIcon icon={faXmark} size="2x" />;
    };

    const navItems = [
        {label:"Posts", link:"/posts"},
        {label:"Projects", link:"/projects"},
        {label:"Gallery", link:"/gallery"},
        {label: "Contact", link:"/contact"}
    ]


    if(pathName === "/"){
        return ( <div>
            <nav className="flex relative h-[80px] items-center justify-center text-white md:justify-start px-10 z-[2]">
                <a className="md:me-10" href="/">
                    <FontAwesomeIcon icon={faEarthAsia} size="2x" />
                </a>
                <ul className={`${showMenu?"left-0 h-[250px] z-2 bg-transparent":"left-[-100%] h-[250px]"} top-[80px] flex flex-col w-full absolute transition-all ease-in md:static md:flex-row md:h-full md:border-0`}>
                    {navItems.map((item)=>(
                        <li key={item.label} className="flex items-center md:mx-2">
                            <a href={item.link} className="text-center w-full table hover:bg-gray-100 hover:text-black transition-all ease-in-out duration-200 rounded-0 font-bold text-2xl px-3 py-2 md:hover:rounded-3xl">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center absolute transform translate-x-full h-full left-0 top-0 md:hidden" onClick={toggleShowMenu}>
                    <div className="">
                        {renderMenuIcon()}
                    </div>
                </div>
            </nav>
        </div>)
    }

    return (
        <div>
            <nav className="flex relative h-[80px] items-center justify-center md:justify-start px-10 border border-b-2">
                <a className="md:me-10" href="/">
                    <FontAwesomeIcon icon={faEarthAsia} size="2x" />
                </a>
                <ul className={`${showMenu?"left-0 h-[250px] z-1 bg-white":"left-[-100%] h-[250px]"} top-[80px] flex flex-col w-full absolute transition-all ease-in border-b-2 md:static md:flex-row md:h-full md:border-0`}>
                    {navItems.map((item)=>(
                        <li key={item.label} className="flex items-center md:mx-2">
                            <a href={item.link} className="text-center w-full table hover:bg-gray-100 transition-all ease-in-out duration-200 rounded-0 font-bold text-2xl px-3 py-2 md:hover:rounded-3xl">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center absolute transform translate-x-full h-full left-0 top-0 md:hidden" onClick={toggleShowMenu}>
                    <div className="">
                        {renderMenuIcon()}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
