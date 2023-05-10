<template>
    <div class="search-box">
        <div class="search-input"></div>
        <div class="search-btn"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Search',
})
</script>

<style lang="scss" scoped>
.search-box {
    background: #fff;
    padding: 10px 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>