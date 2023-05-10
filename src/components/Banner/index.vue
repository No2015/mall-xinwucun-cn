<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :pagination="{
            clickable: true,
        }"
        :autoplay="false"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        ref="mySwiper"
    >
        <swiper-slide v-for="(item, index) in imgList" @click="onProduct(item)" :key="index">
        <div class="flex flex-box" :style="{backgroundImage: `url(${item.img})`}"></div>
        </swiper-slide>
    </swiper>
</template>
<script>
    import { defineComponent } from 'vue';
    // 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
    import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    const modules = [Autoplay, Pagination, Navigation, A11y];
    import 'swiper/css'
    import 'swiper/css/navigation'
    export default defineComponent({
        name: 'Banner',
        props: {
            list: {
                type: Array,
                default: () => [],
            },
        },
        components: {
            Swiper, SwiperSlide
        },
        data() {
            return {
                modules,
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

.mySwiper {
    --swiper-navigation-size: 16px;
    --swiper-navigation-color: #ff5a0c;
}
</style>