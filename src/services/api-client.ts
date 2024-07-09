import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number
    results: T[]
    next: string | null
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "827939da5d3b4b4ea8ff4dbb55697595",
    },
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data)
    }
}

export default APIClient
