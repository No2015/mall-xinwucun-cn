<template>
  <Layout>
    <template v-slot:cont>
        <div class="product-page">
          <div class="product-banner">
            <Banner></Banner>
          </div>
          <div class="product-title">{{ detail.title }}</div>
          <div class="product-info">
            <van-row class="info-row">
              <van-col span="12">
                <span class="red">¥{{detail.price}}</span>
              </van-col>
            </van-row>
            <van-row class="info-row">
              <van-col span="12">
                <span class="label">库存</span>
                <span class="balck">{{detail.quantity}}</span>
              </van-col>
              <van-col span="12">
                <span class="label">销量</span>
                <span class="balck">{{detail.sales}}</span>
              </van-col>
            </van-row>
            <van-cell-group>
              <van-cell title="规格" :value="detail.specification" />
            </van-cell-group>
          </div>
          <Title>商品详情</Title>
          <div class="product-detail">
            <div v-html="detail.detail"></div>
          </div>
        </div>
    </template>
  </Layout>
</template>

<script>
import { defineComponent } from 'vue';
import Layout from '@/components/Layout/index.vue'
import Banner from '@/components/Banner/index.vue'
import { ProducDetail } from '@/api/index'
import logo from '@/common/assets/logo.png'
import Title from '@/components/Title/index.vue'

export default defineComponent({
  name: 'Product',
  components: {
    Layout,
    Banner,
    Title,
  },
  data() {
    return {
      detail: {},
    }
  },
  created() {
    this.req()
  },
  methods: {
    req() {
      ProducDetail({id: this.$route.query.id}).then(res => {
        if (res.ok) {
          this.detail = res.data
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
.product-page {
  background: #f6f6f8;
}
.product-title {
  font-style: italic;
  padding: 10px;
  font-size: 16px;
  background: #fff;
}
.info-row {
  background: #fff;
  font-size: 14px;
  padding: 0 10px 10px;
  .label {
    padding-right: 4px;
  }
  .red {
    color: #ff5a0c;
    font-weight: 600;
  }
  .black {
    color: #000;
  }
}
.product-detail {
  padding: 0 20px;
  background: #fff;
}
.product-banner {
}
</style>