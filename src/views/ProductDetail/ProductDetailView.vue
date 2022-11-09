<template>
  <div class="container">
    <Breadcrumb :home="home" :model="itemsBreadCump" aria-label="breadcrumb"/>
    <div class="tab-menu">
      <TabMenu :model="items">
      </TabMenu>
      <router-view/>
    </div>
  </div>
</template>
<style>
.tab-menu {
  margin-top: 20px;
}

.p-breadcrumb {
  border: none;
  padding: 20px;
}
</style>
<script lang="ts" setup>
import TabMenu from 'primevue/tabmenu';
import {ref, onMounted} from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import {useRoute} from 'vue-router';
import {useProductStore} from '@/stores/product';

const productStore = useProductStore();

const home = {
  icon: 'pi pi-home',
  to: '/',
}
const itemsBreadCump = ref([
  {label: 'Продукты', to: '/products/'}
]);

const route = useRoute();

onMounted(async () => {
  await productStore.loadProduct(parseInt(route.params.id.toString()));
  itemsBreadCump.value.push({
    label: productStore.product?.base.full_name!,
    to: '#'
  });
})


const items = [
  {
    label: 'Основные',
    icon: 'pi pi-fw pi-home',
    to: {
      name: 'product_detail_main',
      params: route.params.id
    }
  },
  {
    label: 'Данные',
    icon: 'pi pi-fw pi-calendar',
    to: {
      name: 'product_detail_base',
      params: route.params.id
    }
  },
  {
    label: 'Атрибуты',
    icon: 'pi pi-fw pi-pencil',
    to: `/attributes/${route.params.id}`
  },
  {
    label: 'Изображения',
    icon: 'pi pi-fw pi-file',
    to: {
      name: 'product_detail_images',
      params: route.params.id
    }
  },
  {
    label: 'Склады',
    icon: 'pi pi-fw pi-cog',
    to: `/warehouses/${route.params.id}`
  },
  {
    label: 'Цены',
    icon: 'pi pi-fw pi-cog',
    to: {
      name: 'product_detail_prices',
      params: route.params.id
    }
  },

];
</script>