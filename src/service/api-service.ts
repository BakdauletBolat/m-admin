import axios from 'axios';

export class ApiService {
    baseURL = import.meta.env.VITE_APP_API_BASE_URL

    axios = axios.create({
        baseURL: this.baseURL,
        timeout: 1000,
    });


    async get<T>(url: string) {
        return (await this.axios.get<T>(url)).data
    }

    async post<T>(url: string, body: any) {
        return (await this.axios.post<T>(url, body)).data
    }

    async delete<T>(url: string) {
        return (await this.axios.delete<T>(url)).data
    }

    async patch<T>(url: string, data: any) {
        return (await this.axios.patch<T>(url, data = data)).data
    }
}