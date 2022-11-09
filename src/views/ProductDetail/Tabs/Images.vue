<template>
    <div class="images-container">
        <FileUpload :maxFileSize="1000000" :multiple="true" accept="image/*"
                    name="images" chooseLabel="Выбрать"
                    uploadLabel ="Загрузить"
                    cancelLabel = "Отменить"
                    :url="ProductService.uploadImageUrl+`/${route.params.id}/`" @select="select" @upload="onAdvancedUpload($event)">
          <template #content="{ files, uploadedFiles, onUploadedFileRemove, onFileRemove }">
            <div v-if="files.length > 0">
              <h5>Файлы для загрузки</h5>

              <div class="flex flex-wrap p-5 gap-5">
                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                  <div>
                    <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" class="shadow-2" />
                  </div>
                  <span class="font-semibold">{{ file.name }}</span>
                  <div>{{ formatSize(file.size) }}</div>
                  <Badge value="Pending" severity="warning" />
                  <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, onFileRemove, index)" class="p-button-outlined p-button-danger p-button-rounded" />
                </div>
              </div>
            </div>



            <div v-if="uploadedFiles.length > 0">
              <h5>Загружены</h5>
              <div class="flex flex-wrap p-5 gap-5">
                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                  <div>
                    <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" class="shadow-2" />
                  </div>
                  <span class="font-semibold">{{ file.name }}</span>
                  <div>{{ formatSize(file.size) }}</div>
                  <Badge value="Completed" class="mt-3" severity="success" />
                  <Button icon="pi pi-times" @click="onUploadedFileRemove(index)" class="p-button-outlined p-button-danger p-button-rounded" />
                </div>
              </div>
            </div>
            <div v-if="productStore.product?.images.length > 0">
              <h5>Уже загруженные</h5>

              <div class="flex flex-wrap p-3 gap-5">
                <div v-for="image of productStore.product?.images" :key="image.id" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                  <div>
                    <img role="presentation" :alt="image.photo" :src="image.photo" height="50" class="shadow-2" />
                  </div>

                  <Badge value="Pending" severity="warning" />
                  <Button icon="pi pi-times" @click="onRemoveTemplatingFile('file', onFileRemove, 1)" class="p-button-outlined p-button-danger p-button-rounded" />
                </div>
              </div>
            </div>
          </template>
            <template #empty>
                <p>Выберите файлы или перетащите</p>
            </template>
        </FileUpload>
    </div>
</template>
<script lang="ts" setup>
import { useToast } from 'primevue/usetoast';
import {ref,onMounted} from 'vue';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import ProductService from "@/service/product-service";
import {useRoute} from "vue-router";
import {useProductStore} from "@/stores/product";

const route = useRoute();

const toast = useToast();

const select = () => {
    console.log('asd')
}

const files = ref([]);
const totalSize = ref(0);
const totalSizePercent = ref(0);

const productStore = useProductStore();


const onRemoveTemplatingFile = (file:any, onFileRemove:any, index:number) => {
  onFileRemove(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
}


const onAdvancedUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
}

const formatSize = (bytes:any) => {
  if (bytes === 0) {
    return '0 B';
  }

  let k = 1000,
      dm = 3,
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

</script>