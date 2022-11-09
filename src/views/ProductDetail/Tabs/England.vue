<template>
  <LanguageBase></LanguageBase>
</template>
<script setup lang="ts">
import LanguageBase from "@/views/ProductDetail/Tabs/LanguageBase.vue";
import {onMounted} from "vue";
import {useProductStore} from "@/stores/product";
import {useRoute} from "vue-router";

const productStore = useProductStore();
const route = useRoute();

onMounted(async ()=>{
  productStore.activeProductPage.lang_id = 2;
  try {
    await productStore.setActiveProductPage(parseInt(route.params.id.toString()));
  }
  catch (e) {
    console.log(e)
  }

});
</script>