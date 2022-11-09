<template>
  <div v-for="price in productStore.product.prices">
    {{price.cost}}
  </div>
</template>
<script lang="ts" setup>
import {useProductStore} from "@/stores/product";

const productStore = useProductStore();



</script>