import ProductListLoader from "../ProductListSceleton/ProductListSceleton"

type FetchStatus = {
    isLoading: boolean,
    isError: boolean
}

const FetchStatus = ({isLoading, isError}: FetchStatus) => {
  return (
      <>
      {isError && <p>Error</p>}
      {isLoading && <ProductListLoader/>}
      </>
  )
}

export default FetchStatus;