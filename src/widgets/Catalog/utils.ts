import { catalogService } from "../../service/CatalogService/CatalogService";

export const getProducts = async () => await catalogService.getProducts();
