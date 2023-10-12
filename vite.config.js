import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// element-plus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // 用到JSX语法
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@':  path.resolve(__dirname, 'src')
    }
  },
  build: {
		outDir: "elementplus-auto-form", //输出文件名称
		lib: {
			// entry: path.resolve(__dirname, "./src/main.js"), //指定组件编译入口文件
			entry: path.resolve(__dirname, "./src/package/index.js"), //指定组件编译入口文件
			name: "elementplus-auto-form",
			fileName: "elementplus-auto-form",
		}, //库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
			},
		}, 
	},
})
