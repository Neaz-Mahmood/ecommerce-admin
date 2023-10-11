"use client"

import { Store } from "@prisma/client";

import { PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
}

export default function StoreSwitcher ({
    className,
    items = []
}: StoreSwitcherProps) {
    const storeModal = useStoreModal();

    return (
        <div>
            Store Switcher
        </div>
    );
};