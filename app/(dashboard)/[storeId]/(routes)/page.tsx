import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
    params: { storeId: string };  
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                Active Store: {store?.name}
            </div>
        </div>
    )
};

export default DashboardPage;