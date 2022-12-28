<template>
    <div class="page-box">
        <div class="page-head">
            <slot name="head"></slot>
        </div>
        <div class="page-cont">
            <slot name="cont"></slot>
        </div>
        <div class="page-foot">
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style lang="scss" scoped>
.page-box {
    display: flex;
    height: 100%;
    overflow: hidden;
    .page-cont {
        flex: 1;
    }
}
</style>