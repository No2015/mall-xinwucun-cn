<template>
  <Layout>
    <template v-slot:cont>
        <div class="product-page">
          <div class="product-banner">
            <Banner></Banner>
          </div>
          <div class="product-info"></div>
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

export default defineComponent({
  name: 'Product',
  components: {
    Layout,
    Banner,
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
  padding: 0 20px;
  background: #f6f6f8;
}
.product-banner {
}
</style>