// vite.config.ts
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';

const writeCNAME = (): Plugin => {
  return {
    name: 'write-cname',
    closeBundle() {
      fs.writeFileSync(resolve('dist/CNAME'), 'enencia.sandmgroup.in');
    }
  };
};

export default defineConfig({
  plugins: [
    react(),
    writeCNAME()
  ],
  base: '/'
});
