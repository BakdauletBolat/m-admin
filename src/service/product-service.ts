import {ApiService} from "./api-service";
import type {IGetProductPage, IProductPage} from "@/stores/product";

class ProductService extends ApiService {

    async getProducts<T>(page: number, field_name: string) {
        return await this.get<T>(`/product/admin/?page=${page}&ordering=${field_name}`);
    }

    async getProduct<T>(pk: number) {
        return await this.get<T>(`/product/admin/${pk}/`);
    }

    async getProductPage<T>(body: IGetProductPage) {
        return await this.post<T>(`/product/admin/get-product-page/`, body);
    }


    async createProductPage<T>(body: IProductPage) {
        return await this.post<T>(`/product/admin/create-product-page/`, body);
    }

    uploadImageUrl = `${this.baseURL}/product/admin/upload-image`

}

export default new ProductService();