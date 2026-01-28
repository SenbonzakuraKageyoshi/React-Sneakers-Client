import { useState } from "react";

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return {
        isLoading,
        isError,
        setIsLoading,
        setIsError
    }
}