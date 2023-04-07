<template>
  <Layout>
    <template v-slot:cont>
        <div class="home-page">
          <div class="cate-list pd-4 mb-8 flex fxsb fww">
            <div class="cate-item pd-4 mg-4" v-for="(cate, key) in cateList" :key="key" @click="onCate(cate)">
              <div class="cate-icon">
                <img @error="onEmtpy($event)" :src="cate.icon" alt="">
              </div>
              <div class="cate-name mt-8">{{ cate.name }}</div>
            </div>
          </div>
          <div class="product-list pd-4 flex fxsb fww">
            <div class="product-item pd-4" v-for="(product, key) in productList" :key="key" @click="onProduct(product)">
              <div class="pd-8 product-box">
                <div class="product-picture">
                  <img @error="onEmtpy($event)" :src="getSrc(product.picture)" alt="">
                </div>
                <div class="product-info mt-12">
                  <div class="product-title">{{ product.title }}</div>
                  <div class="flex pt-8 fxsb">
                    <div class="product-price">￥{{ product.price }}</div>
                    <div class="product-quantity">库存 {{ product.quantity }}</div>
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
import { ProductList, CateList } from '@/api/index'
import logo from '@/common/assets/logo.png'

export default defineComponent({
  name: 'Home',
  components: {
    Layout,
  },
  data() {
    return {
      cateList: [],
      productList: [],
    }
  },
  created() {
    this.req()
  },
  methods: {
    req() {
      CateList({page: 0, pageSize: 8}).then(res => {
        if (res.ok) {
          this.cateList = res.list
        }
      })
      ProductList({page: 0, pageSize: 10}).then(res => {
        if (res.ok) {
          this.productList = res.list
        }
      })
    },
    onEmtpy(event) {
      event.target.src = logo
    },
    onCate(cate) {
      this.$router.push({
        name: 'cate',
        query: {
          id: cate.id
        }
      })
    },
    onProduct(product) {
      this.$router.push({
        name: 'product',
        query: {
          id: product.id
        }
      })
    },
    getSrc(imgs) {
      if (!imgs) return logo
      let src = ''
      try {
        imgs = JSON.parse(imgs)
        if (imgs.length > 0) {
          src = imgs[0].url
        } else {
          src = logo
        }
      } catch (error) {
        src = logo
      }
      return src
    },
  },
});
</script>

<style lang="scss" scoped>
.cate-item {
  width: 20%;
  .cate-icon {
    position: relative;
    padding-top: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 50%;
      background: #f1f2f6;
    }
  }
  .cate-name {
    font-size: 12px;
    color: #666;
    text-align: center;
  }
}
.product-item {
  width: 50%;
  .product-picture {
    position: relative;
    padding-top: 100%;
    border: 1px solid #f1f2f6;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #f1f2f6;
    }
  }
  .product-title {
    font-size: 14px;
    color: #222;
  }
  .product-price {
    color: #ff5a0c;
  }
  .product-quantity {
    color: #444;
  }
  .product-box {
    box-shadow: 0 0 6px 2px #ddd;
  }
}
</style>