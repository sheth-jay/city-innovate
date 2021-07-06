const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@body-background': '#FAFAFA',
              '@font-family': '"Inter", sans-serif',              
              '@text-color': '##173851',
              '@primary-color': '#0064FF',

              '@btn-font-weight': 'normal',
              '@btn-border-radius-base': '4px',
              '@btn-height-base': '34px',

              '@btn-default-color': '#fff',
              '@btn-default-bg': '#0064FF',
              '@btn-default-border': '#0064FF',

              '@input-height-base': '34px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};