<template>
  <div class="container">
    <Breadcrumb :home="home" :model="itemsBreadCump" aria-label="breadcrumb" />
  </div>

    <div class="data-table">
        <DataTable :value="handbookStore.categoriesData?.results" :lazy="true" :paginator="true"
            class="p-datatable-customers" :rows="50" @page="onPage($event)"
            :totalRecords="handbookStore.categoriesData?.count" dataKey="id" @filter="onFilter($event)"
            @sort="onSort($event)" :rowHover="true" v-model:selection="selectedCustomers" v-model:filters="filters"
            :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport "
            currentPageReportTemplate="Показаны от {first} до {last} из {totalRecords} категориев"
            :globalFilterFields="['name']" responsiveLayout="scroll">

            <template #empty>
                Категорий не найдено
            </template>
            <template #loading>
                <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
            </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="id" header="Id" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.id }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by id" />
                </template>
            </Column>
            <Column field="name" header="Имя" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ renderName(data) }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()"
                        class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>

        </DataTable>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';
import {useHandbookStore} from '@/stores/handbook';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import type { ICategory } from '@/stores/handbook';
import { useRoute } from 'vue-router';
import Breadcrumb from 'primevue/breadcrumb';
const selectedCustomers = ref();
const filters = ref({
    'name': { value: '', matchMode: 'contains' },
});

const loading = ref(false);

const route = useRoute();

const handbookStore = useHandbookStore();

onMounted(async () => {
    loading.value = true;
    await handbookStore.loadCategories({});
    loading.value = false;
});

const home = {
  icon: 'pi pi-home',
  to: '/',
}
const itemsBreadCump = ref([
  { label: 'Категорий', to: '/categories/' }
]);

const onPage = async (event: any) => {
    loading.value = true;
    await handbookStore.loadCategories({
        page: event.page += 1
    });
    loading.value = false;
};

const onFilter = async (event: any) => {
    console.log(event);
};

const onSort = async (event: any) => {
    const field_name = event.sortOrder == -1 ? '' + event.sortField : '-' + event.sortField;
    loading.value = true;
    await handbookStore.loadCategories({
        field_name: field_name
    });
    loading.value = false;

};


const renderName = (category: ICategory) => {
    let name = category.name;
    if (category.parent != undefined) {
        name += ` > ${renderName(category.parent)}`
    }
    else {
        return name
    }

    return name
}








</script>
<style>
.data-table {
    padding: 20px;
}
.p-breadcrumb {
  border: none;
  padding: 20px;
}
</style>