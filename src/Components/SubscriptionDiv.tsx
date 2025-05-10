"use client";

import starIcon from "@/../public/star.svg"
import crossIcon from "@/../public/cross.svg"
import Image from "next/image"
import { useState } from "react";

const SubscriptionDiv = () => {

    const [removeSubscription, setRemoveSubscription] = useState(false);

    return (
        <div className={`${removeSubscription === true ? "hidden" : "flex"} px-4 py-3 relative flex-row items-center justify-between md:justify-center gap-2 bg-[#f9f9f9] w-full`}>
            <span>
                <Image src={starIcon} alt="starIcon" width={20} height={20} />
            </span>
            <span className="leading-tight md:flex flex-row">
                <span className="text-[12px]">Get unlimited access to the best of Medium for less than $1/week.</span>
                <span className="ml-1 text-[13px] font-semibold underline cursor-pointer">Become a member</span>
            </span>
            <Image onClick={()=>setRemoveSubscription((prev)=>!prev)} src={crossIcon} className="cursor-pointer md:absolute right-5" alt="crossIcon" width={22} height={22} />
        </div>
    )
}

export default SubscriptionDiv