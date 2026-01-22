import type React from "react";
import type { Product } from "../../../shared/types/Products";

export type SectionHeader = {
    title: string;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}