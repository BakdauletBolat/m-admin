import {ref} from 'vue';
import {defineStore} from 'pinia';
import ProductService from '@/service/product-service';

export interface IProductBase {
    id: number;
    name: string;
    category_id: number;
    full_name: string;
}

export interface IProductImage {
    id: number;
    photo: string;
}

export interface IProductPrice {
    id: number,
    cost: number
}

export interface IProduct {
    id: number;
    base: IProductBase,
    images: IProductImage,
    prices: IProductPrice[]
}

interface IProductsData {
    results: IProduct[];
    count: number;
}


interface ILoadProductsProps {
    page?: number;
    field_name?: string;
}

export interface IGetProductPage {
    product_id?: number,
    store_id: number,
    lang_id?: number,
    city_id?: number
}

export interface IProductPage {
    product_id: number,
    store_id?: number,
    lang_id?: number,
    city_id?: number,
    id?:number,
    title:string,
    description: string
}


export const useProductStore = defineStore('product', () => {
    const productsData = ref<IProductsData>();
    const product = ref<IProduct>();
    const activeProductPage = ref<IProductPage>({
        title: '',
        description: '',
        city_id: 1000,
        store_id: 4,
        lang_id: 1,
        product_id: 1
    });

    async function loadProducts({page = 1, field_name = ''}: ILoadProductsProps) {
        productsData.value = await ProductService.getProducts<IProductsData>(page, field_name);
    }

    async function loadProduct(pk: number) {
        product.value = await ProductService.getProduct<IProduct>(pk);
    }

    async function setActiveProductPage(product_id:number) {

        const data = {
            city_id: activeProductPage.value.city_id,
            store_id: 4,
            lang_id: activeProductPage.value.lang_id,
            product_id: product_id
        }
            activeProductPage.value = await ProductService.getProductPage<IProductPage>(data);
    }

    return {
        loadProducts,
        loadProduct,
        setActiveProductPage,
        productsData,
        product,
        activeProductPage
    }
});



