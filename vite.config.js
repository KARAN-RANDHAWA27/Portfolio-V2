// vite.config.js

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import styledComponents from 'vite-plugin-styled-components';

export default defineConfig({
  plugins: [reactRefresh(), styledComponents()],
});
