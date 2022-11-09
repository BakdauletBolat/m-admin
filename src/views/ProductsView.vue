<template>
    <ConfirmDialog></ConfirmDialog>
    <div class="container">
        <Breadcrumb :home="home" :model="itemsBreadCump" aria-label="breadcrumb" />
    </div>
    
    <div class="data-table">
        <DataTable :value="productsStore.productsData?.results" :lazy="true" :paginator="true" class="p-datatable-customers"
            :rows="50" @page="onPage($event)" :totalRecords="productsStore.productsData?.count" dataKey="id"
            @filter="onFilter($event)"
            @sort="onSort($event)"
            :rowHover="true" 
            v-model:selection="selectedCustomers" 
            v-model:filters="filters" 
            :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport "
            currentPageReportTemplate="Показаны от {first} до {last} из {totalRecords} продуктов"
            :globalFilterFields="['name','category']" responsiveLayout="scroll">

            <template #empty>
                Продуктов не найдено
            </template>
            <template #loading>
                <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="id" header="Id" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    <RouterLink class="base-link" :to="{
                        name: 'product_russian',
                        params: {
                            id: data.id
                        }
                    }">{{ data.id }}</RouterLink>
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by id"/>
                </template>
            </Column>
            <Column field="name" header="Имя" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.base.full_name }}
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/>
                </template>
            </Column>
            <Column field="category" header="Категория" style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.base.category.name }}
                </template>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search by name"/>
                </template>
            </Column>
            <Column field="action" header="Действий" style="min-width: 14rem">
                <template #body="{ data }">
                   <div>
                    <Button @click="deleteProduct(data.id)"  icon="pi pi-trash" label="Удалить" class="p-button-help mr-2"></Button>
                   </div>
                </template>
                
            </Column>
            
        </DataTable>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import {useProductStore} from '@/stores/product';
import Column from 'primevue/column';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import { useConfirm } from "primevue/useconfirm";
import ProgressSpinner from 'primevue/progressspinner';
import Breadcrumb from 'primevue/breadcrumb';



const selectedCustomers = ref();
const filters = ref({
    'name': {value: '', matchMode: 'contains'},
});

const loading = ref(false);

const productsStore = useProductStore();
const confirm = useConfirm();

const onPage = async (event:any) => {
    loading.value = true;
    await productsStore.loadProducts({
        page:event.page += 1
    });
    loading.value = false;
};

const onFilter = async (event:any) => {
    console.log(event);
};


const home = {
    icon: 'pi pi-home',
    to: '/',
}
const itemsBreadCump = ref([
    { label: 'Продукты', to: '/products/' }
]);


const deleteProduct = (id:number) => {
    confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                // accept: () => {
                //     toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                // },
                // reject: () => {
                //     toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                // },
                // onHide: () => {
                //     this.$toast.add({severity:'error', summary:'Hide', detail:'You have hidden', life: 3000});
                // }
            });
}

const onSort = async (event:any) => {
    const field_name = event.sortOrder == -1 ? '' + event.sortField : '-' +  event.sortField;
    loading.value = true;
    await productsStore.loadProducts({
        field_name: field_name
    });
    loading.value = false;
    
};


onMounted(async () => {
    loading.value = true;
    await productsStore.loadProducts({});
    loading.value = false;
});



</script>
<style>
.data-table{
    padding: 20px;
}
.p-breadcrumb {
    border: none;
    padding: 20px;
}

</style>