import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

type dashboardProps = {
    children: React.ReactNode;
    params: { storeId: string }
}

export default async function DashboardLayout({
    children,
    params
}: dashboardProps) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    if (!store) {
        redirect('/');
    }

    return (
        <>
            <div>This will be Navber</div>
            {children}
        </>
    )
}