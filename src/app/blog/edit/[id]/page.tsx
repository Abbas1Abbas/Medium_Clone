// app\blog\edit\[slug]\page.tsx
import { BlogSlugProps } from "@/type";

const EditBlog = ({params} : {params : BlogSlugProps}) => {
    return (
        <>
            EditBlog : {params}
        </>
    )
}

export default EditBlog