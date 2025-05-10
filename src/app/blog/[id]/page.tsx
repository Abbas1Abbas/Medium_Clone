import { BlogSlugProps } from "@/type";

const SingleBlog = ({ params }: BlogSlugProps) => {

    const slug = params.id;

    return (
        <>
            <h1>Blog Slug: {slug}</h1>
        </>
    )
}

export default SingleBlog