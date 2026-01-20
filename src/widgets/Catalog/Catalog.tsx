import SectionHeader from "../../features/Header/SectionHeader/SectionHeader"
import ProductList from "../../shared/ProductList/ProductList";
import products from "../../entities/Catalog/data.json";
import { useState } from "react";

const Catalog = () => {

  const [productsList, setProductsList] = useState(products);

  const [search, setSearch] = useState('');

  const filteredProducts = productsList.filter((el) => el.title.toLowerCase().includes(search.trim().toLowerCase()));
  
  return (
    <div className="catalog">
      <SectionHeader title="Все кроссовки" search={search} setSearch={setSearch}/>
      <ProductList products={filteredProducts}/>
    </div>
  )
}

export default Catalog