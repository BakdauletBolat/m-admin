<style>
.timeline-main-text{
    padding: 0px;
    margin: 0px;
    font-size: 14px;
    margin-bottom: 5px;
   
}
.timeline-secondary {
    color: rgba(41, 50, 65, 0.5);
    font-size: 14px;
    margin: 0px;
    font-weight: 400;
    padding: 0px;
    padding-bottom: 16px;
}
.timeline-items{
    font-size: 12px;
}
.timeline-item{
    display: flex;
    gap:10px;
    margin-bottom: 16px;
}
.timeline-dot{
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 5px;
    width: 8px;
    height: 8px;
    background-color: rgb(51, 51, 255);
    border-radius: 8px;
}
.timeline-title{
    font-weight: bold;
    margin-bottom: 4px;
}
.timeline-time{
    font-size: 10px;
    margin-top: 4px;
}
</style>
<template>
<div class="timeline card">
    <h4 class="timeline-main-text">Timeline</h4>
    <h4 class="timeline-secondary">All servers</h4>
    <div class="timeline-items">
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-title">New sale</div>
                <div class="timeline-text">Richard Jones has purchased a blue t-shirt for $79.</div>
                <div class="timeline-time">3 mins ago</div>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-title">New sale</div>
                <div class="timeline-text">Richard Jones has purchased a blue t-shirt for $79.</div>
                <div class="timeline-time">3 mins ago</div>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-title">New sale</div>
                <div class="timeline-text">Richard Jones has purchased a blue t-shirt for $79.</div>
                <div class="timeline-time">3 mins ago</div>
            </div>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-title">New sale</div>
                <div class="timeline-text">Richard Jones has purchased a blue t-shirt for $79.</div>
                <div class="timeline-time">3 mins ago</div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
</script>