import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { getRemoteName } from '@npdm/module-federation';
import { name, version } from './package.json';

export default defineConfig({
  output: {
    distPath: {
      root: 'npdm',
    },
    assetPrefix: 'auto',
    cleanDistPath: true,
    filename: {
      js: '[name].js',
      css: '[name].css',
      font: '[name].[ext]',
      image: '[name].[ext]',
      media: '[name].[ext]',
      svg: '[name].[ext]',
    },
  },

  server: {
    port: 3000,
  },

  dev: {
    assetPrefix: 'auto',
  },

  tools: {
    rspack: (config, { appendPlugins }) => {
      if (config.output) {
        config.output.uniqueName = 'npdmjs-react-example';
      }
      appendPlugins([
        new ModuleFederationPlugin({
          name: getRemoteName(name, version),
          exposes: {
            './Button': './src/components/WonderfulButton.tsx',
            './Checkbox': './src/components/WonderfulCheckbox.tsx',
          },
          shared: {
            'react': {
              singleton: true,
            },
            'react-dom': {
              singleton: true,
            },
            '@emotion/react': {
              singleton: true,
            },
            '@emotion/styled': {
              singleton: true,
            },
          },
          manifest: false,
          filename: 'entry.js',
          dts: {
            extraOptions: {
              output: {
                outDir: 'npdm',
              },
            },
          },
        }),
      ]);
    },
  },

  plugins: [pluginReact()],
});
