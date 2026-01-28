import Cart from "../../widgets/Cart/Cart"
import Catalog from "../../widgets/Catalog/Catalog"
import { homeStore } from "../../entities/CartStore/HomeStore";

const Home = () => {

  const { isOpened, toggleIsOpened } = homeStore();

  return (
    <>
      <Catalog />
      {isOpened && <Cart toggleIsOpened={toggleIsOpened}/>}
    </>
  )
}

export default Home