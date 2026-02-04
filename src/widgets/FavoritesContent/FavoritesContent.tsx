import SectionHeader from "../../entities/SectionHeader/SectionHeader";
import { useFavorites } from "../../hooks/useFavorites";

const FavoritesContent = () => {
  const { products, isLoading, isError } = useFavorites();

  return (
    <SectionHeader title="Отоложенные товары"/>
  )
}

export default FavoritesContent