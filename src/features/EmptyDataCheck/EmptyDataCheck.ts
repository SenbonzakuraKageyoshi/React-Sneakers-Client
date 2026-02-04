type emptyDataCheck = (sError: boolean, isLoading: boolean, data: any[]) => boolean;

export const emptyDataCheck: emptyDataCheck = (isError, isLoading, data) => {
    return !isError && !isLoading && Boolean(data.length);
}