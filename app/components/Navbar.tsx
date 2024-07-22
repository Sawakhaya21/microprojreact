import Link from 'next/link';
import React from 'react';
import { TfiAlignCenter } from "react-icons/tfi";


const Navbar = ()=> {
    return(
        <nav className='bg-gray-900 text-white p-5'>
            <div className='flex text-center items-center justify-between'>
                <Link href='/' className='font-bold ml-4 text-xl'>Comp</Link>
                <ul className='lg:flex hidden'>
                    <li className='mr-4'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>About</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>Services</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>Features</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>Pricing</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>FAQ</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>Blog</a>
                    </li>
                    <li className='mr-4'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
                <Link href='' className='lg:hidden text-xl font-bold text-white hover:scale-75'>
                    <TfiAlignCenter />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;