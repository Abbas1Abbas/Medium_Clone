const IntroHomePage = () => {

    const footerLinks : string[] = [
        "Help",
        "Status",
        "About",
        "Careers",
        "Press",
        "Blog",
        "Privacy",
        "Rules",
        "Terms",
        "Text to speech"
    ];

    return (
        <div>
            
            <div className="py-10 flex-col w-full bg-[#f7f4ed] flex items-left px-[5%] justify-center h-auto min-h-[calc(100vh-(68px+75px))]">
                <div className="text-4xl sm:text-5xl lg:text-8xl leading-10 sm:leading-14 lg:leading-20">
                    <div>Human</div>
                    <div>stories & ideas</div>
                </div>
                <p className="mt-5 text-[20px] w-full text-left">A place to read, write, and deepen your understanding</p>
                <div className="mt-6"><button className="py-3 px-9 rounded-full bg-green-500 text-white text-lg lg:bg-black">Start reading</button></div>
            </div>

            <div className="border-t-1 py-4 h-[68px] text-[13px] text-white lg:text-gray-500 lg:bg-[#f7f4ed] bg-[#000000] flex flex-row gap-3 items-center justify-start px-4 lg:px-0 lg:justify-center" id="footer">
                {footerLinks.map((footerLink)=>{
                    return (
                        <div className={`${footerLink === "About" || footerLink === "Help" || footerLink === "Terms" || footerLink === "Privacy" ? "" : "lg:flex hidden"} cursor-pointer`} key={footerLink}>{footerLink}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default IntroHomePage