import Loader from "../Loader/Loader"

type FetchStatus = {
    isLoading: boolean,
    isError: boolean
}

const FetchStatus = ({isLoading, isError}: FetchStatus) => {
  return (
      <>
      {isError && <p>Error</p>}
      {isLoading && <Loader/>}
      </>
  )
}

export default FetchStatus;