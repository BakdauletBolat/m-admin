import { ApiService } from "./api-service";

interface IPhoto {
    photo: string
}


class ImageService extends ApiService {
    async uploadPhoto(dataPhoto: any)  {
        return await this.post<IPhoto>(`/photo/create/`,dataPhoto);
     }
}

export default new ImageService();