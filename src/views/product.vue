<template>
  <Layout>
    <template v-slot:cont>
        <div class="product-page">
          <div class="product-banner"></div>
          <div class="product-info"></div>
          <div class="product-info"></div>
        </div>
    </template>
  </Layout>
</template>

<script>
import { defineComponent } from 'vue';
import Layout from '@/components/Layout/index.vue'
import { ProducDetail } from '@/api/index'
import logo from '@/common/assets/logo.png'

export default defineComponent({
  name: 'Product',
  components: {
    Layout,
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
.product-banner {
}
</style>