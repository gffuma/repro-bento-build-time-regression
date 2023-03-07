import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: 'lib',
  esbuildPlugins: [vanillaExtractPlugin() as any],
  dts: true,
  noExternal: ['@buildo/bento-design-system/lib/index.css', '@fontsource/lato'],
  format: ['esm'],
});
