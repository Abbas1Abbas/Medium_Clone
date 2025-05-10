"use client";

import chevronRightIcon from "@/../public/chevronRight.svg";
import plusIcon from "@/../public/plus.svg";
import Image from "next/image";
import { useRef } from "react";

const SuggestionList = () => {
    const scrollRef = useRef<HTMLUListElement | null>(null);

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const suggested: string[] = [
        "Nft", "Blockchain", "Android", "Culture", "Machine Learning", "Data Science", "Relationships",
        "Writing", "Cryptocurrency", "Politics", "Artificial Intelligence", "Humor", "Books", "Lifestyle",
        "Work", "Marketing", "Women", "Apple", "Sexuality", "Mindfulness", "Leadership", "Social Media",
        "Society", "Deep Learning", "Web Development", "History", "Education", "UX", "React",
        "Software Engineering", "Entrepreneurship", "Coding", "Startup", "Software Development",
        "Design", "JavaScript", "Life", "Mental Health", "Health", "Science", "Python", "Psychology",
        "Money", "Business", "Productivity", "Self Improvement", "Technology", "Programming"
    ];

    return (
        <div className="sticky top-0 border-b-1 border-b-[#938e8e36] w-full py-3 flex items-center gap-3 bg-white">
            <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.75)_25%,rgba(255,255,255,0.9)_50%,rgb(255,255,255)_75%)] cursor-pointer ">
                <Image src={plusIcon} alt="AddFavourite" width={20} height={20} />
            </div>

            <ul ref={scrollRef} className="flex gap-6 overflow-x-hidden scroll-smooth no-scrollbar whitespace-nowrap text-sm flex-1" >
                {suggested.map((item, index) => (
                    <li key={index} className="shrink-0 px-3 py-1 cursor-pointer hover:underline text-gray-700" >{item}</li>
                ))}
            </ul>

            <div onClick={scrollRight} className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.75)_25%,rgba(255,255,255,0.9)_50%,rgb(255,255,255)_75%)] cursor-pointer shrink-0" >
                <Image src={chevronRightIcon} alt="chevronRight" width={20} height={20} />
            </div>
        </div>
    );
};

export default SuggestionList;
