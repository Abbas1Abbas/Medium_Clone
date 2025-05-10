// app/profile/[username]/page.tsx
import { ProfileSlugProps } from "@/type";

const Profile = ({ params }: ProfileSlugProps) => {

    const name = params.username.split('').splice(3);


    return (
        <>
            <h1>Profile Page for: {name}</h1>
        </>
    );
};

export default Profile;
