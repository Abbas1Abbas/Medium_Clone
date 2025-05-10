import Image from 'next/image'
import Link from 'next/link'

const MainHomeRgt = () => {

    const recommendedTopics : string[] = [
        "Fitness",
        "AWS",
        "Flutter",
        "UX Design",
        "Spirituality",
        "Creativity",
        "Nodejs"
    ]

    return (
        <div className="flex-col p-[3%] border-l-1 border-solid border-[#F2F2F2] min-h-screen lg:flex hidden w-[30%]">
            <div className="text-[15px] font-medium">Recommended topics</div>
            <div className="ml-[-15px] mt-3">
                {recommendedTopics.map((recommendedTopic)=>{
                    return (
                        <div className={`cursor-pointer mt-2 ml-2 float-left w-auto py-2 px-4 bg-[#F2F2F2] flex flex-row items-center justify-center rounded-full`} key={recommendedTopic}>{recommendedTopic}</div>
                    )
                })}
            </div>
            
            <div className="cursor-pointer hover:underline mt-6 text-[12px] text-gray-600">See mores topics</div>
            
            <div className="mt-10 text-[15px] font-medium">Who to follow</div>

            <Link href={`/@IgnacioDeGregorio`} className='mt-5 flex flex-row items-start gap-2 justify-center'>
                <div><Image className='rounded-[50%] w-[30px] h-[30px]' src={"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fm=jpg"} width={40} height={40} alt="Error" /></div>
                <div className='flex-1'>
                    <div className='text-md font-bold'>Ignacio de Gregorio</div>
                    <div className='mt-1 text-[13px]'>Production</div>
                    <div className='mt-2 line-clamp-2 text-[13px]'>I break down AI in easy-to-understand language for you. Sign up here:</div>
                </div>
                <button className='py-[5px] cursor-pointer text-sm rounded-full px-3 border-1 outline-none'>Follow</button>
            </Link>

            <Link href={`/@Nike`} className='mt-5 flex flex-row items-start gap-2 justify-center'>
                <div><Image className='rounded-[50%] w-[30px] h-[30px]' src={"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fm=jpg"} width={40} height={40} alt="Error" /></div>
                <div className='flex-1'>
                    <div className='text-md font-bold'>Nike</div>
                    <div className='mt-2 line-clamp-2 text-[13px]'>I break down AI in easy-to-understand language for you. Sign up here:</div>
                </div>
                <button className='py-[6px] cursor-pointer text-sm rounded-full px-[10px] bg-black text-white border-1 outline-none'>Following</button>
            </Link>

            <Link href={`/@Adidas`} className='mt-5 flex flex-row items-start gap-2 justify-center'>
                <div><Image className='rounded-[50%] w-[30px] h-[30px]' src={"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fm=jpg"} width={40} height={40} alt="Error" /></div>
                <div className='flex-1'>
                    <div className='text-md font-bold'>Adidas</div>
                    <div className='mt-2 line-clamp-2 text-[13px]'>I break down AI in easy-to-understand language for you. Sign up here:</div>
                </div>
                <button className='py-[5px] cursor-pointer text-sm rounded-full px-3 border-1 outline-none'>Follow</button>
            </Link>

            <div className='mt-5 text-[13px] hover:underline cursor-pointer text-gray-700'>See more suggestions</div>

            <div className="mt-10 text-[15px] font-medium">Reading list</div>

            <div className='text-[13px] leading-5 text-gray-600 mt-2'>Click the  on any story to easily add it to your reading list or a custom list that you can share.</div>

            <div className='mt-4 ml-[-8px]'>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Help</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Career</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Press</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Rules</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Term</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Text To Speech</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>About Us</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Status</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Service</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Contact</div>
                <div className='cursor-pointer py-[1px] text-[11px] text-gray-700 px-2 float-left'>Blog</div>
            </div>

        </div>
    )
}

export default MainHomeRgt