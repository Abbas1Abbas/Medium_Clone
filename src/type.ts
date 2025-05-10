export type RootLayoutType = Readonly<{
    children: React.ReactNode
}>

export type ProfileSlugProps = {
    params: {
        username: string;
    };
};

export type BlogSlugProps = {
    params: {
        id: string;
    };
};
