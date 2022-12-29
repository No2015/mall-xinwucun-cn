<template>
  <Layout>
    <template v-slot:cont>
        <div class="home-page">
          <div class="product-list pd-4 flex fxsb fww">
            <div class="product-item pd-4" v-for="(item, key) in list" :key="key">
              <div class="pd-4 product-item-box">
                <div class="item-picture">
                  <img @error="onEmtpy($event)" :src="item.picture" alt="">
                </div>
                <div class="item-info pd-8 mt-8">
                  <div class="item-title">{{ item.title }}</div>
                  <div class="flex pt-8 fxsb">
                    <div class="item-price">￥{{ item.price }}</div>
                    <div class="item-quantity">库存 {{ item.quantity }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </template>
  </Layout>
</template>

<script>
import { defineComponent } from 'vue';
import Layout from '@/components/Layout/index.vue'
import { ProductList } from '@/api/index'
import logo from '@/common/assets/logo.png'

export default defineComponent({
  name: 'Home',
  components: {
    Layout,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.req()
  },
  methods: {
    req() {
      ProductList({page: 0, pageSize: 10}).then(res => {
        console.log(res)
        if (res.ok) {
          this.list = res.list
        }
      })
    },
    onEmtpy(event) {
      event.target.src = logo
    },
  },
});
</script>

<style lang="scss" scoped>
.product-item {
  width: 50%;
  .item-picture {
    position: relative;
    padding-top: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .item-title {
    font-size: 14px;
    color: #222;
  }
  .item-price {
    color: #ff5a0c;
  }
  .item-quantity {
    color: #444;
  }
  .product-item-box {
    box-shadow: 0 0 6px 2px #ddd;
  }
}
</style>