import type React from "react";
import type { Product } from "../../shared/types/Product";

export type SectionHeader = {
    title: string;
    search?: string;
    onSearchInputHandler?: (value: string) => void;
    showSearch: boolean;
}