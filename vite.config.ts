import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
// https://github.com/vitejs/vite/issues/1930 .env
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@common': resolve('./src/common'),
        '@components': resolve('./src/components'),
        '@store': resolve('./src/store'),
        '@views': resolve('./src/views')
      }
    },
    server: {
      open: false,
      cors: true,
      proxy: {
        "/mall": {
          target: "http://cqwphp.com",
          changeOrigin: true, // 是否跨域
          ws: true,
        },
      },
      define: {
        'process.env': env,
      }
    }
  }
})
