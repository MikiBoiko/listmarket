import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.ucm.listmarket',
  appName: 'ListMarket',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
