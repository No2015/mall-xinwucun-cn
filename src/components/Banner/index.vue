<template>
    <van-swipe class="my-swipe" :autoplay="false" indicator-color="white">
        <van-swipe-item v-for="(item, index) in imgList" @click="onProduct(item)" :key="index">
            <div class="flex flex-box" :style="{backgroundImage: `url(${item.img})`}"></div>
        </van-swipe-item>
    </van-swipe>
</template>
<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Banner',
        props: {
            list: {
                type: Array,
                default: () => [],
            },
        },
        components: {
        },
        data() {
            return {
            }
        },
        computed: {
            imgList({ list }) {
                if (!list.length) {
                    return [{
                        img: 'https://www.baidu.com/img/bdlogo.png',
                    },{
                        img: 'https://www.baidu.com/img/bdlogo.png',
                    },{
                        img: 'https://www.baidu.com/img/bdlogo.png',
                    }]
                }
                return this.list
            }
        },
        created() {
        },
        methods: {
            onProduct(product) {
                if (!product.id) {
                    return false
                }
                this.$router.push({
                    name: 'product',
                    query: {
                        id: product.id
                    }
                })
            },
        },
    });
</script>

<style lang="scss" scoped>
.flex-box {
    width: 100%;
    background-size: cover;
    height: 0;
    padding-top: 56%;
    background-position: center;
}

.my-swipe{
    --van-swipe-indicator-inactive-background-color: #39a9ed;
  }
</style>