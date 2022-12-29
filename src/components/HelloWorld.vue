<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <van-button type="primary">primary</van-button>
  <van-button type="success">success</van-button>
  <van-button type="default">default</van-button>
  <van-button type="warning">warning</van-button>
  <van-button type="danger">danger</van-button>
  <div>
    <input type="file" ref="file">
    <van-button type="primary" @click="onSubmit">submit</van-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject } from 'vue';
import * as qiniu from 'qiniu-js'
import { getCurrentInstance } from "vue"

// import axios from 'axios'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0);
    const file = ref(null)
    const token = ref('')
    return { count, file, token };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const axios = getCurrentInstance()?.appContext.config.globalProperties.$axios
      axios.request({
        url: 'https://www.xinwucun.cn/upload/getToken',
        method: 'post',
      }).then((res: any) => {
        console.log(res)
        if (res.data && res.data.status) {
          this.token = res.data.upToken
        }
      })
    },
    onSubmit() {
      // if (!this.file.files.length) {
      //   console.log('请选择文件')
      //   return false
      // }
      // const file = this.file.files[0]
      // console.log(file)
      // const observable = qiniu.upload(file, 'test/20221122/1149/' + file.name, this.token)
      // const observer = {
      //   next(res: any){
      //     console.log(res)
      //     // ...
      //   },
      //   error(err: any){
      //     console.log(err)
      //     // ...
      //   },
      //   complete(res: any){
      //     console.log(res)
      //     // ...
      //   }
      // }
      // const subscription = observable.subscribe(observer)
      
    },
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
