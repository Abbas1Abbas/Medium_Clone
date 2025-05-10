import Image from "next/image";
import Link from "next/link";
import starImage from '@/../public/star.svg';
import clapImage from '@/../public/clap.svg';
import messageImage from '@/../public/message.svg';

type BlogCardProps = {
    like: number;
    date: string;
    authorId: string;
    avatorIcon: string;
    replies: number;
    thumbnailImage: string;
    shortDescription: string;
    title: string;
    blogId: string;
    author: string;
};

const BlogCard = ({
    like,
    date,
    authorId,
    avatorIcon,
    replies,
    thumbnailImage,
    shortDescription,
    title,
    blogId,
    author,
}: BlogCardProps) => {
    const likeToAlpha = (num: number): string => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "K";
        return num.toString();
    };

    return (
        <div className="border-b border-gray-200 py-4 px-2">
            <div className="flex items-center gap-2">
                <Link href={`/@${authorId}`}>
                    <Image src={avatorIcon} alt="Avatar" width={25} height={25} className="rounded-full" />
                </Link>
                <span className="text-sm">
                    Written by{" "}
                    <Link href={`/@${authorId}`} className="not-italic font-semibold">
                        {author}
                    </Link>
                </span>
            </div>
            <div className="w-full py-4 flex flex-row">
                <div className="w-[60%] pr-4">
                    <div className="mt-3 text-lg leading-5 md:leading-7 md:text-2xl font-semibold">
                        <Link href={`/blog/${blogId}`}>{title}</Link>
                    </div>
                    <div className="line-clamp-2 mt-2 text-sm text-gray-600">{shortDescription}</div>
                </div>
                <div className="w-[40%] flex items-center justify-center md:justify-end">
                    <Link href={`/blog/${blogId}`}>
                        <Image src={thumbnailImage} alt="Thumbnail" width={150} height={150} className="object-cover" />
                    </Link>
                </div>
            </div>
            <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                    <Image src={starImage} alt="Star" width={16} height={16} />
                    <span className="text-[12px]">{date}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Image src={clapImage} alt="Clap" width={16} height={16} />
                    <span className="text-sm">{likeToAlpha(like)}</span>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <span className="transform-[scaleX(-1)]">
                        <Image src={messageImage} width={15} height={15} alt="reply" />
                    </span>
                    <span className="text-sm">{replies}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;