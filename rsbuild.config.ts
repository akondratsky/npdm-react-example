import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';


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
          name: 'npdmjs_react_example',
          exposes: {
            './Button': './src/components/WonderfulButton.tsx',
            './Checkbox': './src/components/WonderfulCheckbox.tsx',
          },
          shared: ['react', 'react-dom'],
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
