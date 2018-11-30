module.exports = {
  module: {
    rules: [{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',  //编译的规则， 需要安装额外的依赖
            'stage-0',
            ['env', {
              targets: {
                borwsers: ['last 2 verisons']
              }
            }]
          ]
        }
      }]
  }
}