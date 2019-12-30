import merge from 'lodash.merge';
import proposalsPart from './parts/proposals';
import conveniencePart from './parts/convenience';
import importsPart from './parts/imports';
import compressionPart from './parts/compression';
import reactPart from './parts/react';
import envPart from './parts/env';
import typescriptPart from './parts/typescript';
import getOptions from './options/get-options';
import processPlugins from './utils/process-plugins';
import shouldPrintComment from './utils/should-print-comment';

function buildPreset(context, input) {
  const options = getOptions(input);

  const { presets = {}, plugins = {}, ...config } = merge(
    // Mainly plugins
    proposalsPart(options),
    conveniencePart(options),
    importsPart(options),

    // Mainly presets
    // env => react => compression
    compressionPart(options),
    reactPart(options),
    envPart(options),
    typescriptPart(options)
  );

  return {
    // Babel basic configuration
    compact: options.minified || 'auto',
    minified: options.minified,

    // Whether to enable source maps
    sourceMaps: options.sourceMaps,

    // Fine tune comment output
    shouldPrintComment,

    // Add lists of presets and plugins
    presets: processPlugins(presets || {}),
    plugins: processPlugins(plugins || {}),

    ...config
  };
}

export default buildPreset;
