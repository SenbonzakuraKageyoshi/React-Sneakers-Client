import SectionHeader from "../../entities/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useSearch } from "../../hooks/useSearch";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import { emptyDataCheck } from "../../features/EmptyDataCheck/EmptyDataCheck";
import { useProductsFetch } from "../../hooks/useProductsFetch";
import { getProducts } from "./utils";

const Catalog = () => {
  const { products, isLoading, isError } = useProductsFetch(getProducts);
  const [search, onSearchInputHandler, filteredProducts] = useSearch(products);

  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {emptyDataCheck(isError, isLoading, products) && <ProductList products={filteredProducts} showAddButton={true} showAddFavoritesButton={true} />}
    </div>
  )
}

export default Catalog