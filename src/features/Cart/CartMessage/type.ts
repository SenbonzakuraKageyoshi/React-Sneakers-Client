export type CartMessage = {
    title: string;
    text: string;
    image: string;
    setCartIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}