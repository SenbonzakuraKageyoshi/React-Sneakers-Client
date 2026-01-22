import SectionHeader from "../../features/Header/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import { useEffect, useState } from "react";
import { Product } from "../../shared/types/Products";
import { catalogService } from "../../service/CatalogService/CatalogService";

const Catalog = () => {

  const [productsList, setProductsList] = useState<null | Product[]>(null);
  
  const [search, setSearch] = useState('');

  const filteredProducts = productsList?.filter((el) => el.title.toLowerCase().includes(search.trim().toLowerCase()));

  const getProducts = async () => {
    return await catalogService.getProducts();
  };

  useEffect(() => {
    getProducts().then((data) => setProductsList(data))
  }, []);
  
  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} setSearch={setSearch}/>
      {productsList && filteredProducts && <ProductList products={filteredProducts}/>}
    </div>
  )
}

export default Catalog