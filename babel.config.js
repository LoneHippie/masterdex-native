module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module-resolver',
      {
        alias: {
          "@app_tools/*": ["src/tools/*"],
          "@app_contexts/*": ["src/contexts/*"],
          "@app_interfaces/*": ["src/interfaces/*"],
          "@app_screens/*": ["src/screens/*"]
        }
      }
    ]
  };
};
