type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

type CartProduct = {
    id: number;
    Product: Product;
    createdAt: string;
    updatedAt: string;
}

export {
    Product, CartProduct
}