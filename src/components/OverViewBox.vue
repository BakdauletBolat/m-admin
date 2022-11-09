<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps(['name', 'value'])

</script>
<template>
    <div class="overview">
        <div class="overview-row">
            <div class="overview-name">{{ name }}</div>
            <div class="overview-value">{{ value }}</div>
        </div>
        <slot class="overview-icon" name="icon"></slot>
    </div>
</template>
<style>
.overview{
    display: flex;
    justify-content: space-between;
    padding:20px;
    background-color: white;
    color: #293241CC;
    border-radius: 5px;
}
.overview-value{
    font-size: 35px;
    
}
</style>
