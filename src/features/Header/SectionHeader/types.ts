import type React from "react";
import type { ProductType } from "../../../shared/types/ProductType";

export type SectionHeader = {
    title: string;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}