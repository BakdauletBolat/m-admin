<template>
  <div class="main-tab-container">
    <div class="main-tab-header">
      <h1 class="main-tab-title">Редактирование</h1>
      <div class="main-tab-row">
        <Dropdown @change="onCityChange" v-model:modelValue="productStore.activeProductPage.city_id" v-model="selectedCity" :options="handbookStore.cities" optionValue="id" optionLabel="name"
                  :placeholder="selectedCity.name"/>
        <div class="main-tab-button">
          <Button label="Сохранить" @click="saveProductPage"></Button>
        </div>

      </div>
    </div>
    <div class="tab-menu">
      <TabMenu :activeIndex="0" :model="items">
        <template #item="{ item }">
          <li class="p-tabmenuitem" role="presentation">
            <RouterLink role="menuitem" :to="item.to" class="p-menuitem-link" :aria-label="item.label"
                        tabindex="-1">
              <img class="p-menu-img" :src="item.url" alt=""/>
              <span class="p-menuitem-text">{{ item.label }}</span>
            </RouterLink>
          </li>
        </template>
      </TabMenu>
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Dropdown from 'primevue/dropdown';
import {ref, onMounted} from 'vue';
import {useHandbookStore} from '@/stores/handbook';
import TabMenu from 'primevue/tabmenu';
import {useRoute} from 'vue-router';
import RusImg from '@/assets/images/rus.jpeg';
import EngImg from '@/assets/images/eng.jpeg';
import KazImg from '@/assets/images/kaz.jpeg';
import Button from 'primevue/button';

import {useProductStore} from "@/stores/product";
import ProductService from "@/service/product-service";
import {useToast} from "primevue/usetoast";

const handbookStore = useHandbookStore();
const productStore = useProductStore();
const selectedCity = ref({
  name:'asdasd',
  id: 1000
});

const toast = useToast();
const route = useRoute();

onMounted(async () => {
  await handbookStore.loadCities();
});

const onCityChange = async () => {
  try {
    await productStore.setActiveProductPage(parseInt(route.params.id.toString()));
  }
  catch (e) {
    if (e.response.data.status_code == 404) {
      toast.add({severity: 'info', summary: 'Для этого города еще не создано информаций', life: 3000});
    }
  }
}
const saveProductPage = async () => {

  try {
    await ProductService.createProductPage(productStore.activeProductPage);
    toast.add({severity: 'success', summary: 'Успешно сохранен', life: 3000});
  } catch (e) {
    toast.add({severity: 'error', summary: 'Ошибка при сохранений', life: 3000});
  }

  console.log(productStore.activeProductPage)

}


const items = [
  {
    label: 'Русский',
    url: RusImg,
    to: `/product/${route.params.id}/main/russian/`
  },
  {
    label: 'Англиский',
    url: EngImg,
    to: `/product/${route.params.id}/main/england/`
  },
  {
    label: 'Казахский',
    url: KazImg,
    to: `/product/${route.params.id}/main/kazakh/`
  }
];

</script>
<style>
.main-tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-tab-container {
  background-color: white;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-top: 20px;
}

.p-menu-img {
  width: 40px;
  height: 20px;
  margin-right: 10px;
  object-fit: cover;
}

.main-tab-button {
  margin-left: 20px;
}

.main-tab-row {
  display: flex;
}
</style>