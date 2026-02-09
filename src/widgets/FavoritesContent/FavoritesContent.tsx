import SectionHeader from "../../entities/SectionHeader/SectionHeader";
import { useFavorites } from "../../hooks/useFavorites";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import ProductList from "../../shared/ProductList/ProductList";
import { useSearch } from "../../hooks/useSearch";
import EmptyMessage from "../../shared/EmptyMessage/EmptyMessage";

const FavoritesContent = () => {
  const { products, isLoading, isError, removeFromFavorites } = useFavorites();
  const [search, onSearchInputHandler, filteredProducts] = useSearch(products);

  const dataIsFulfilled = !isError && !isLoading;

  return (
    <div className="favorites">
      <SectionHeader showSearch={Boolean(products.length)} title="Отоложенные товары" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {
      dataIsFulfilled && Boolean(products.length)
      &&
      <ProductList isFavorite={true} products={filteredProducts} showAddButton={false} showAddFavoritesButton={true} favoritesButtonHandler={removeFromFavorites} />
      }
      {
      dataIsFulfilled && !Boolean(products.length)
      &&
      <EmptyMessage title="Закладок нет :(" message="Вы ничего не добавляли в закладки" />
      }
    </div>
  )
}

export default FavoritesContent