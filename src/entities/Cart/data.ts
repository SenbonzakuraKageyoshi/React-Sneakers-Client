import CartEmpty from '../../assets/png/cart-empty.png';
import CartSuccess from '../../assets/png/cart-success.png';

export const cartVariants = [
    {
        id: 1,
        title: "Корзина пустая",
        text: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.",
        image: CartEmpty
    },
    {
        id: 2,
        title: "Заказ оформлен!",
        text: "Ваш заказ скоро будет передан курьерской доставке",
        image: CartSuccess
    }
]