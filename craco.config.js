const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Config': path.resolve(__dirname, './src/Config'),
      '@HOC': path.resolve(__dirname, './src/HOC'),
      '@Layouts': path.resolve(__dirname, './src/Layouts'),
      '@Redux': path.resolve(__dirname, './src/Redux'),
      '@Routers': path.resolve(__dirname, './src/Routers'),
      '@Services': path.resolve(__dirname, './src/Services'),
      '@Shared': path.resolve(__dirname, './src/Shared'),
      '@Pages': path.resolve(__dirname, './src/Pages'),
      '@Assets': path.resolve(__dirname, './src/Assets'),
      '@Models': path.resolve(__dirname, './src/Models'),
      '@Templates': path.resolve(__dirname, './src/Templates'),
      '@Utils': path.resolve(__dirname, './src/Utils'),
      '@Admin': path.resolve(__dirname, './src/Admin'),
      /*=========================================================*/
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@services': path.resolve(__dirname, './src/services'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@models': path.resolve(__dirname, './src/models'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@admin': path.resolve(__dirname, './src/admin'),
    },
  },

};
