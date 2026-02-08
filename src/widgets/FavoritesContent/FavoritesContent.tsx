import SectionHeader from "../../entities/SectionHeader/SectionHeader";
import { useFavorites } from "../../hooks/useFavorites";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import { emptyDataCheck } from "../../features/EmptyDataCheck/EmptyDataCheck";
import ProductList from "../../shared/ProductList/ProductList";
import { useSearch } from "../../hooks/useSearch";

const FavoritesContent = () => {
  const { products, isLoading, isError, removeFromFavorites } = useFavorites();
  const [search, onSearchInputHandler, filteredProducts] = useSearch(products);

  return (
    <div className="favorites">
      <SectionHeader title="Отоложенные товары" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {emptyDataCheck(isError, isLoading, products) && <ProductList products={filteredProducts} showAddButton={false} showAddFavoritesButton={true} favoritesButtonHandler={removeFromFavorites} />}
    </div>
  )
}

export default FavoritesContent