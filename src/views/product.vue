<template>
  <Layout>
    <template v-slot:cont>
        <div class="product-page">
          <div class="product-banner">
            <Banner></Banner>
          </div>
          <Title>商品规格</Title>
          <div class="product-info">
            <van-cell-group>
              <van-cell title="单元格" value="内容" />
              <van-cell title="单元格" value="内容" label="描述信息" />
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
.product-detail {
  padding: 0 20px;
  background: #fff;
}
.product-banner {
}
</style>