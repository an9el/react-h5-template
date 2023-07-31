import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('当前模式', command)
  console.log('当前环境配置', currentEnv) //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    plugins: [
      react(),
      legacy({
        targets: ['chrome 52'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        renderLegacyChunks: true,
      }),
      AutoImport({
        imports: ['react', 'mobx', 'react-router-dom'],
        dts: './src/auto-imports.d.ts',
        dirs: ['src/store'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
    ],
    //项目部署的基础路径,
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    resolve: {
      //别名
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@store': resolve(__dirname, './src/store'),
        '@views': resolve(__dirname, './src/views'),
        '@assets': resolve(__dirname, './src/assets'),
        '@hooks': resolve(__dirname, './src/hooks'),
      },
    },
    //服务
    server: {
      host: '0.0.0.0',
      https: {
        // cert: fs.readFileSync(path.join(__dirname, 'keys/cert.crt')),
        // key: fs.readFileSync(path.join(__dirname, 'keys/cert.key')),
        cert: resolve(__dirname, 'keys/cert.crt'),
        key: resolve(__dirname, 'keys/cert.key'),
      },
      //自定义代理---解决跨域
      proxy: {
        // 选项写法
        '/inssceneprod': {
          target: 'https://dev.deepinnet.com',
          changeOrigin: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            '@root-entry-name': 'variable',
          },
          javascriptEnabled: true,
        },
      },
    },
    //构建
    build: {
      // outDir: `dist_${format(new Date(), 'yyyyMMdd_HHmm')}`, //输出路径  新增打日期包
      //构建后是否生成 source map 文件
      sourcemap: mode != 'production',
      target: 'es2015',
      //打包去掉打印信息 保留debugger vite3需要单独安装terser才行
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: false,
      //   },
      // },
    },
  })
}
