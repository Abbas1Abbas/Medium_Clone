// components/ClientLayout.tsx
"use client";

import Header from "./Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default ClientLayout;
