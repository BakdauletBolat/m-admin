import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import HandbookService from '@/service/handbook-service';
export interface ICategory {
    id: number;
    name: string;
    parent: this;
}

export interface ICity {
    id: number;
    name: string;
}


interface ICategoryData {
    results: ICategory[];
    count: number;
}   


interface ILoadCategoriesProps {
    page?: number;
    field_name?: string;
}



export const useHandbookStore = defineStore('handbook', () => {
    const apiService = new HandbookService();
    const categoriesData = ref<ICategoryData>();
    const cities = ref<ICity[]>([]);

    async function loadCategories({page=1,field_name=''}:ILoadCategoriesProps) {
        const data = await apiService.getCategories<ICategoryData>(page,field_name);
        categoriesData.value = data;
    }

    async function loadCities(store:number = 4) {
        const data = await apiService.getCities<ICity[]>(store);
        cities.value = data;
    }

    return {
        loadCategories,loadCities,
        categoriesData,cities
    }
});



