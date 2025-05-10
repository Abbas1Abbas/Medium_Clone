"use client";

import Image from "next/image";
import logo from "@/../public/logo.svg";
import searchIcon from "@/../public/search.svg";
import writeIcon from "@/../public/write.svg";
import bellIcon from "@/../public/bell.svg";
import avatorIcon from "@/../public/avator.svg"
import Link from "next/link";

const Header = () => {

    const LogoImage = ({ width, height }: { width: number; height: number }) => (
        <Image src={logo} width={width} height={height} alt="Logo" className="cursor-pointer" />
    );

    const SearchBarDiv = () => (
        <div className="sm:flex hidden flex-row py-[10px] border-none outline-none rounded-full px-4 gap-2 bg-[#f9f9f9]">
            <Image src={searchIcon} width={23} height={23} alt="Search" className="cursor-pointer" />
            <input className="text-sm border-none outline-none" placeholder="Search" type="text" />
        </div>
    );

    const WriteDiv = () => (
        <div className="cursor-pointer md:flex hidden items-center justify-center flex-row gap-2">
            <Image src={writeIcon} width={22} height={22} alt="writeIcon" />
            <div className="text-sm">Write</div>
        </div>
    );

    const navLinks : string[] = [
        "Our story",
        "Membership",
        "Write",
        "Sign in",
    ]

    const authenticated = true;
    if (!authenticated){
        return (
            <header className="sticky top-0 h-[75px] border-b-1 bg-[#f7f4ed] flex flex-row items-center justify-between px-[5%]">
                <Link href={"/"}><LogoImage width={134} height={30} /></Link>
                <ul className="items-center justify-center flex gap-4">
                    {navLinks.map((navLink)=>{
                        return <li className={`${navLink !== "Sign in" ? "md:block hidden" : "sm:flex hidden" } cursor-pointer text-sm`} key={navLink}>{navLink}</li>
                    })}
                    <li><button className="cursor-pointer text-[13px] rounded-full py-2 px-3 bg-black text-white">Get Started</button></li>
                </ul>
            </header>
        )
    }

    return (
            <header className="max-w-[1600px] my-0 mx-auto bg-white px-5 sm:py-3 py-4 w-full flex flex-row justify-between items-center shadow-sm" >
            <div className="items-center justify-center flex flex-row gap-6">
                <Link href={"/"}>
                    <LogoImage width={112} height={25} />
                </Link>
                <SearchBarDiv />
            </div>
            <div className="items-center justify-center flex flex-row gap-6">
                <Image
                    src={searchIcon}
                    width={23}
                    height={23}
                    alt="searchIcon"
                    className="cursor-pointer sm:hidden flex"
                />
                <WriteDiv />
                <Image src={bellIcon} width={25} height={25} alt="bellIcon" className="cursor-pointer" />
                <Image src={avatorIcon} width={24} height={24} alt="AvatorIcon" className="cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
