<template>
    <div class="page-box">
        <div class="slot-head">
            <slot name="head"></slot>
        </div>
        <div class="slot-cont">
            <slot name="cont"></slot>
        </div>
        <div class="slot-foot">
            <Foot></Foot>
        </div>
        <div class="slot-default">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Foot from './foot.vue'

export default defineComponent({
    name: 'Layout',
    components: {
        Foot,
    },
})
</script>

<style lang="scss" scoped>
.page-box {
    display: flex;
    flex-flow: column;
    height: 100%;
    overflow: hidden;
    .slot-cont {
        flex: 1;
        overflow: auto;
        position: relative;
    }
}
</style>