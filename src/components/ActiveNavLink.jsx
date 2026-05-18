"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNavLink = ({href,children}) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <Link href={href} className={`${isActive && "border-b-2 pb-1 border-b-[#6C63FF]"}`}>{children}</Link>
    );
};

export default ActiveNavLink;