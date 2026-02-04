import SectionHeader from "../../entities/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useSearch } from "../../hooks/useSearch";
import FetchStatus from "../../shared/FetchStatus/FetchStatus";
import { useCatalog } from "../../hooks/useCatalog";
import { emptyDataCheck } from "../../features/EmptyDataCheck/EmptyDataCheck";

const Catalog = () => {
  const { products, isLoading, isError } = useCatalog();
  const [search, onSearchInputHandler, filteredProducts] = useSearch(products);

  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} onSearchInputHandler={onSearchInputHandler}/>
      <FetchStatus isLoading={isLoading} isError={isError}/>
      {emptyDataCheck(isError, isLoading, products) && <ProductList products={filteredProducts} showActions={true} />}
    </div>
  )
}

export default Catalog