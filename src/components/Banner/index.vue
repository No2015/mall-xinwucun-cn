<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :pagination="{
            clickable: true,
        }"
        :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        ref="mySwiper"
    >
        <swiper-slide v-for="(item, index) in imgList" :key="index">
        <div style="width: 100%" class="flex">
            <img
            style="width: 100%; height: 100%"
            :src="item"
            />
        </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    import { defineComponent } from 'vue';
    // 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
    import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper';
    const modules = [Autoplay, Pagination, Navigation, A11y];
    import 'swiper/css'
    import 'swiper/css/navigation'
    export default defineComponent({
    name: 'Banner',
        components: {
        },
        data() {
            return {
                imgList: ['https://www.baidu.com/img/bdlogo.png','https://www.baidu.com/img/bdlogo.png','https://www.baidu.com/img/bdlogo.png'],
                modules,
            }
        },
        created() {
        },
        methods: {
        },
    });
</script>