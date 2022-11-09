import { ApiService } from "./api-service";


class HandbookService extends ApiService {

    async getCategories<T>(page:number,field_name: string)  {
        return await this.get<T>(`/handbook/admin/categories/?page=${page}&ordering=${field_name}`);
    }

    async getCities<T>(store:number)  {
        return await this.get<T>(`/handbook/admin/cities/?store=${store}`);
    }

}

export default HandbookService;