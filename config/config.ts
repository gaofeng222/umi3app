import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  devServer: {
    port: 9090,
  },
  title: 'umi后台管理系统',
  favicon: '/favicon.ico',
  dynamicImport: {
    loading: '@/components/Loading',
  },
  mountElementId: 'app',
  theme,
});
