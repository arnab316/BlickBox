// src/adapters/apiAdapters.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiAdapter {
    get: <T>(url: string) => Promise<T>;
    post: <T>(url: string, data: any) => Promise<T>;
    put: <T>(url: string, data: any) => Promise<T>;
    delete: <T>(url: string) => Promise<T>;
}

const ApiAdapter = (baseURL: string): ApiAdapter => {
    const client: AxiosInstance = axios.create({
        baseURL: baseURL,
    });

    const handleResponse = async <T>(request: Promise<AxiosResponse<T>>): Promise<T> => {
        try {
            const response = await request;
            return response.data;
        } catch (error) {
            console.error("API Error:", error);
            throw error; // Re-throw to handle at a higher level if needed
        }
    };

    return {
        get: (url) => handleResponse(client.get<T>(url)),
        post: (url, data) => handleResponse(client.post<T>(url, data)),
        put: (url, data) => handleResponse(client.put<T>(url, data)),
        delete: (url) => handleResponse(client.delete<T>(url)),
    };
};

export default ApiAdapter;
