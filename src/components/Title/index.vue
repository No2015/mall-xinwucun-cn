<template>
    <div class="title-box">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Title',
})
</script>

<style lang="scss" scoped>
.title-box {
    background: #fff;
    padding: 10px 6px;
    margin-top: 6px;
    height: 36px;
    line-height: 16px;
    font-size: 16px;
    padding-left: 14px;
    position: relative;
    &::before {
        content: "";
        background: #ff5a0c;
        height: 16px;
        width: 2px;
        border-radius: 2px;
        position: absolute;
        left: 6px;
        top: 10px;
    }
}
</style>