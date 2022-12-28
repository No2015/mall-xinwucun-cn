<template>
    <div class="foot-box">
        <router-link class="menu" :class="{active: $route.path === menu.path}" v-for="(menu, key) in list" :key="key" :to="menu.path">
            <img class="menu-icon" :src="menu.icon" alt="">
            <span class="menu-name">{{ menu.name }}</span>
        </router-link>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import logo from '@/common/assets/logo.png'

export default defineComponent({
    name: 'Foot',
    data() {
        return {
            list: [
                {
                    name: '首页',
                    path: '/home',
                    icon: logo
                },
                {
                    name: '分类',
                    path: '/cate',
                    icon: logo
                },
                {
                    name: '购物车',
                    path: '/cart',
                    icon: logo
                },
                {
                    name: '我的',
                    path: '/my',
                    icon: logo
                }
            ]
        }
    },
})
</script>

<style lang="scss" scoped>
.foot-box {
    display: flex;
    height: 52px;
    background: #f1f2f6;
    .menu {
        padding: 5px 0;
        text-align: center;
        color: #222;
        flex: 1;
        &.active {
            color: #ff056c;
        }
    }
    .menu-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .menu-name {
        display: block;
    }
}
</style>