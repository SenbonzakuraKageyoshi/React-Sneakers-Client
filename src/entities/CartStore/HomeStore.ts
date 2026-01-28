import { create } from 'zustand'

type Store = {
  isOpened: boolean
  toggleIsOpened: (value: boolean) => void
};

export const homeStore = create<Store>()((set) => ({
  isOpened: false,
  toggleIsOpened: (value) => set(() => ({isOpened: value}))
}));