import SectionHeader from "../../features/Header/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useCatalog } from "../../hooks/useCatalog";
import { useSearch } from "../../hooks/useSearch";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";

const Catalog = () => {

  const { productsList, isLoading, isError } = useCatalog();
  const [search, onSearchInputHandler, filteredProducts] = useSearch(productsList);

  const showCatalog = !isError && !isLoading && productsList.length && filteredProducts.length;

  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {showCatalog && <ProductList products={filteredProducts}/>}
    </div>
  )
}

export default Catalog