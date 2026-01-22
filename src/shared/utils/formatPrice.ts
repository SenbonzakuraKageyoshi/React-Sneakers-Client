export const formatPrice = (price: number) => {
    return Intl.NumberFormat('ru', {currency: 'RUB', style: 'currency'}).format(price);
};