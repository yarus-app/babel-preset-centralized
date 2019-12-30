function processPlugins(plugins = {}) {
  const processed = Object.entries(plugins)
    .filter(([, value]) => value)
    .map(([name, value]) =>
      typeof value === 'object' && Object.keys(value).length
        ? [name, value]
        : name
    );

  return processed;
}

export default processPlugins;
