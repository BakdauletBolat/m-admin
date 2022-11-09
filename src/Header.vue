<template>
    <div class="p-menubar-wrapper">
        <Menubar :model="items">
        <template #start>
            <h2 class="menu-bar-title">M</h2>
        </template>
        <template #end>
            <InputText placeholder="Search" type="text" />
        </template>
    </Menubar>
    </div>
    
</template>
<style>
.menu-bar-title{
    margin: 0px 20px;
}
.p-menubar-wrapper{
    padding: 15px 20px!important;
}
.p-menubar{
    border:none!important;
    background-color: white!important;
    padding: 15px 20px!important;
}
.p-submenu-list{
  border-radius: 5px;
}
</style>
<script lang="ts" setup>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const items = ref([
    {
        label: 'Каталог',
        icon: 'pi pi-fw pi-tags',
        items: [
            {
                label: 'Категорий',
                to: '/categories',
                icon: 'pi pi-fw pi-list',
            },
            {
                to: '/products',
                label: 'Товары',
                icon: 'pi pi-fw pi-tags'
            },
           
            {
                label: 'Отзывы',
                icon: 'pi pi-fw pi-hashtag'
            }
        ]
    },
    {
        label: 'Продажи',
        icon: 'pi pi-fw pi-cart-plus',
        items: [
            {
                label: 'Заказы',
                icon: 'pi pi-fw pi-cart-plus'
            },
            {
                label: 'Коммерческое предложений',
                icon: 'pi pi-fw pi-credit-card'
            }
        ]
    },
    {
        label: 'Клиенты',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Клиенты',
                icon: 'pi pi-fw pi-user-plus',
            },
            {
                label: 'Группы клиентов',
                icon: 'pi pi-fw pi-user-minus',
            },
           
        ]
    },

]);

</script>