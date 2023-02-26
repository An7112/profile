import { useCallback, useEffect, useState } from "react";

type Response<T> = {
    data: T[];
    loading: boolean;
    error?: string;
    fetchMore: (increment: number) => void;
};

export function useApi<T>(url: string, initialItems: number): Response<T> {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [pageSize, setPageSize] = useState<number>(initialItems | 0);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try{
            const response = await fetch(`${url}&_limit=${pageSize}`);
            const newData: Array<any> = await response.json();
            setData((prevData) => [...prevData, ...newData]);
        }catch (error) {
            setError("Error fetching data");
        }finally{
            setLoading(false);
        }

    }, [url, pageSize]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

   const fetchMore = (increment: number) => {
    setPageSize((prevPageSize) => prevPageSize + increment);
   };
   
   return { data, loading, error, fetchMore };
}