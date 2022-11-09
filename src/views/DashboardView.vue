<style>
.grid-overview {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.grid-row {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 24px;
}
.mt-5 {
    margin-top: 20px;
}
</style>
<template>
    <main>
        <div class="container">
            <div class="grid-overview">
                <OverViewBox name="Заказы" value="3000">
                    <template #icon>
                        <i class="pi pi-tag"></i>
                    </template>
                </OverViewBox>
                <OverViewBox name="Заказы" value="3000">
                    <template #icon>
                        <i class="pi pi-tag"></i>
                    </template>
                </OverViewBox>
                <OverViewBox name="Заказы" value="3000">
                    <template #icon>
                        <i class="pi pi-tag"></i>
                    </template>
                </OverViewBox>
                <OverViewBox name="Заказы" value="3000">
                    <template #icon>
                        <i class="pi pi-tag"></i>
                    </template>
                </OverViewBox>
                <OverViewBox name="Заказы" value="3000">
                    <template #icon>
                        <i class="pi pi-tag"></i>
                    </template>
                </OverViewBox>
            </div>
            <div class="grid-row mt-5">
                <Timeline></Timeline>
                <div class="card">
                    <Chart type="bar" :data="basicData" :options="basicOptions" />
                </div>
            </div>
        </div>
    </main>

</template>
<script lang="ts" setup>
import OverViewBox from '@/components/OverViewBox.vue';
import Timeline from '@/components/Timeline.vue';
import { ref } from 'vue';

const basicData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#FFA726',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
});

const basicOptions = ref(
    {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    }
);

</script>
