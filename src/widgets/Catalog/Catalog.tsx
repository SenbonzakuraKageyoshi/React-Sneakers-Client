import SectionHeader from "../../entities/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useSearch } from "../../hooks/useSearch";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import { emptyDataCheck } from "../../features/EmptyDataCheck/EmptyDataCheck";
import { useProductsFetch } from "../../hooks/useProductsFetch";
import { getProducts } from "./utils";
import { favoritesService } from "../../service/FavoritesService/FavoritesService";

const Catalog = () => {
  const { products, isLoading, isError } = useProductsFetch(getProducts);
  const [search, onSearchInputHandler, filteredProducts] = useSearch(products);

  const favoritesButtonHandler = async (id: number) => await favoritesService.addToFavorites(id);

  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {emptyDataCheck(isError, isLoading, products) && <ProductList favoritesButtonHandler={favoritesButtonHandler} products={filteredProducts} showAddButton={true} showAddFavoritesButton={true} />}
    </div>
  )
}

export default Catalog