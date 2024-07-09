import axios from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '827939da5d3b4b4ea8ff4dbb55697595'
    }
})