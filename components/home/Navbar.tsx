import React from 'react';
import { Origami, ShoppingCart, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ModeToggle } from '../ModeToggle';

interface NavLinkProps {
    id: number;
    title: string;
    url: string;
}

const NavLinks: NavLinkProps[] = [
    {
        id: 1,
        title: 'All',
        url: '/'
    },
    {
        id: 2,
        title: 'Shirts',
        url: '/'
    },
    {
        id: 3,
        title: 'Stickers',
        url: '/'
    }
];

export default function Navbar() {
    return (
        <div className='w-full h-[8dvh] max-w-screen-2xl mx-auto px-8 flex items-center justify-around space-x-4'>

            <div className='w-1/4 flex items-center justify-between gap-x-4'>
                {/* Logo */}
                <div className='w-full flex items-center justify-center gap-x-2'>
                    <Link href='/' className='flex items-center justify-center'>
                        <span className='bg-blue-300 dark:bg-neutral-900  border border-neutral-700 rounded-lg p-2 shadow-sm shadow-neutral-600 active:scale-90 hover:scale-105 transition-transform duration-200'>
                            <Origami size={20} />
                        </span>
                    </Link>
                    <span className='font-bold text-base uppercase text-white'>Acme Store</span>
                </div>

                {/* Nav Links */}
                <nav className='hidden md:flex w-full items-start justify-between space-x-4'>
                    {NavLinks.map((link) => (
                        <div key={link.id}>
                            <a href={link.url} className='text-sm  font-semibold dark-hover:text-white hover:text-neutral-500  hover:border-b-[1.5px] hover:border-white'>{link.title}</a>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Search Bar */}
            <div className='w-2/4 flex items-center justify-center'>
                <div className='relative w-[70%]'>
                    <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="pr-10"
                    />
                </div>
            </div>

            {/* Theme Toggle Btn & Cart */}
            <div className='w-1/4 flex items-center justify-center'>
                <div className='w-full flex items-center justify-end space-x-6'>
                    <ModeToggle />
                    <Link href='/cart' className='flex items-center justify-center'>
                        <span className='bg-blue-300 dark:bg-neutral-900 border border-neutral-700 rounded-md p-2 active:scale-90 hover:scale-105 transition-transform duration-200'>
                            <ShoppingCart size={18} />
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
