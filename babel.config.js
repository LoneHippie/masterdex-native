module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         [
            require.resolve('babel-plugin-module-resolver'),
            {
               root: ['.'],
               extensions: [
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx',
                  '.android.js',
                  '.android.tsx',
                  '.ios.js',
                  '.ios.tsx'
               ],
               alias: {
                  '~app_tools': ['./src/tools'],
                  '~app_contexts': ['./src/contexts'],
                  '~app_interfaces': ['./src/interfaces'],
                  '~app_sections': ['./src/sections']
               }
            }
         ],
         [
            '@babel/plugin-proposal-decorators',
            {
               legacy: true
            }
         ]
      ]
   };
};
