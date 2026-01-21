export type CartMessage = {
    title: string;
    text: string;
    image: string;
    toggleIsOpened: (value: boolean) => void;
}