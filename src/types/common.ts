import type { LucideIcon } from "lucide-react";

type MenuWithPath = {
    name: string;
    icon: LucideIcon;
    path: string;
    onClick?: never;
};

type MenuWithAction = {
    name: string;
    icon: LucideIcon;
    onClick: () => void;
    path?: never;
};

export type SideMenuItem = MenuWithPath | MenuWithAction;