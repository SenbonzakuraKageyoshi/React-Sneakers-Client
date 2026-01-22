import { type CartProduct as CartProductType } from "../../../shared/types/Products"
import CartProduct from "../CartProduct/CartProduct"

type CartProductList = {
  products: CartProductType[]
};

const CartProductList = ({ products }: CartProductList) => {
  return (
    <ul className="cartProductList">
      {products.map((product) => (
        <CartProduct {...product} key={product.id}/>
      ))}
    </ul>
  )
}

export default CartProductList