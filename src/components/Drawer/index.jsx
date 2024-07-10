import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import Drawer from 'react-modern-drawer';
import HamburgerIcon from '@/assets/Hamburger.png'; // Adjust the import path as necessary

export const SideDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const router = useRouter();
    const pathname = router.pathname;

    return (
        <>
            <button onClick={toggleDrawer}>
                <img 
                    className={pathname === '/work' ? 'invert w-44 h-44 md:w-[55px] md:h-[68px]' : 'w-44 h-[46px] m-2 md:w-[55px] md:h-[68px]'} 
                    src={HamburgerIcon.src} 
                    alt="Menu Icon" 
                />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="drawer-class-name" // Replace with actual class names
            >
                <div className="drawer-content">
                    <Link href="/work"><a><p className="text-black">WORK</p></a></Link>
                    <Link href="/servicepage"><a><p className="text-black">SERVICES</p></a></Link>
                    <Link href="/contactpage"><a><p className="text-black">CONTACT</p></a></Link>
                </div>
            </Drawer>
        </>
    );
};

