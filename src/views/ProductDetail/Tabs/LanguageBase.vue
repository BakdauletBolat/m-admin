<template>
  <div class="form">
    <div class="form-group">
      <h5>Заголовок H1</h5>
      <InputText type="text" v-model="productStore.activeProductPage.title" />
    </div>
    <div class="form-group">
      <h5>Описание</h5>
      <Editor @load="onLoadQuild" v-model="productStore.activeProductPage.description" editorStyle="height: 320px" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Editor from 'primevue/editor';
import InputText from 'primevue/inputtext';
import ImageService from '@/service/image-service';
import {useProductStore} from "@/stores/product";
const productStore = useProductStore();
const quill = ref<any>();
const onLoadQuild = (quillInstance:any) => {
  let toolbar = quillInstance.instance.getModule('toolbar');
  quill.value = quillInstance.instance;
  toolbar.addHandler('image', imageHandler);
}

const imageHandler = () => {
  const input: any = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();
  input.onchange = async () => {
    const file = input.files[0];
    console.log('User trying to uplaod this:', file);
    const formData = new FormData();
    formData.append('photo', file)
    const data = (await ImageService.uploadPhoto(formData));
    const range = quill.value.getSelection();
    quill.value.insertEmbed(range.index, 'image', data.photo);
  }
}


</script>
<style>

.form-group{
  display: grid;
  grid-template-columns: 200px 1fr;
  margin-top: 20px;
}


</style>