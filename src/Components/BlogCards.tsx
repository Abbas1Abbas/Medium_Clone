import BlogCard from "./BlogCard";

const BlogCards = () => {

    type randomBlogsType = {
            _id: number;
            slug: string;
            date: string;
            avatorIcon: string;
            title: string;
            shortDescription: string;
            thumbnailImage: string;
            author: string;
            authorId: string;
            like: number;
            replies: {
                name: string;
                like: number;
            }[]
        }[]

    const randomBlogs : randomBlogsType = [
        {
            _id: 1,
            date: "Apr 30",
            slug: "it-like-shards-of-glass-being-pushed-into-your-face",
            avatorIcon: 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
            title: "‘It’s Like Shards of Glass Being Pushed Into Your Face.’",
            shortDescription: "The pain of trigeminal neuralgia is enough to drive people to suicide. And yet no one has even heard of it.",
            thumbnailImage: "https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg",
            author: "Abbas",
            authorId: "abbas.zelle",
            like: 10,
            replies: [
                {
                    name: "Ali",
                    like: 100,
                },
            ],
        },
        {
            _id: 2,
            date: "May 31",
            slug: "it-like-shards-of-glass-being-pushed-into-your-face",
            avatorIcon: 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
            title: "‘It’s Like Shards of Glass Being Pushed Into Your Face.’",
            shortDescription: "The pain of trigeminal neuralgia is enough to drive people to suicide. And yet no one has even heard of it.",
            thumbnailImage: "https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg",
            author: "Abbas",
            authorId: "abbas.zelle",
            like: 10,
            replies: [
                {
                    name: "Ali",
                    like: 100,
                },
            ],
        },
        {
            _id: 3,
            date: "Feb 31",
            slug: "it-like-shards-of-glass-being-pushed-into-your-face",
            avatorIcon: 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png',
            title: "‘It’s Like Shards of Glass Being Pushed Into Your Face.’",
            shortDescription: "The pain of trigeminal neuralgia is enough to drive people to suicide. And yet no one has even heard of it.",
            thumbnailImage: "https://www.aandmedu.in/wp-content/uploads/2021/11/1-1-Aspect-Ratio-1024x1024.jpg",
            author: "Abbas",
            authorId: "abbas.zelle",
            like: 10,
            replies: [
                {
                    name: "Ali",
                    like: 100,
                },
            ],
        },
    ];


    return (
        <div className="flex flex-col w-full mt-8">
            {randomBlogs.map((randomBlog)=>{
                return (
                    <BlogCard blogId={randomBlog.slug} like={randomBlog.like} date={randomBlog.date} authorId={randomBlog.authorId} avatorIcon={randomBlog.avatorIcon} key={randomBlog._id} replies={randomBlog.replies.length} thumbnailImage={randomBlog.thumbnailImage} shortDescription={randomBlog.shortDescription} title={randomBlog.title} author={randomBlog.author} />
                )
            })}
        </div>
    )
}

export default BlogCards