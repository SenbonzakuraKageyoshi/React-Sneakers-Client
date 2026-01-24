import SectionHeader from "../../features/Header/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useCatalog } from "../../hooks/useCatalog";
import { useSearch } from "../../hooks/useSearch";

const Catalog = () => {

  const [ productsList ] = useCatalog();
  const [search, onSearchInputHandler, filteredProducts] = useSearch(productsList);
  
  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} onSearchInputHandler={onSearchInputHandler}/>
      {productsList && filteredProducts && <ProductList products={filteredProducts}/>}
    </div>
  )
}

export default Catalog