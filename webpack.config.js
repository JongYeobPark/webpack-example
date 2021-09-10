//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
  //parcel index.html
  //파일을 읽어들이기 시작하는 진입점 설정
  //webpack의 진입점은 js파일로 해야한다.
  entry: './js/main.js',
  //결과물(번들)을 반환하는 설정
  //__dirname는 현재파일이 있는 경로를 의미한다.
  output: {
    // path: path.resolve(__dirname, 'dist'), ->dist는 기본설정
    // filename: 'main.js', -> 파일이름은 위에 entry에서 지정해줬기 때문에 또 해줄 필요 없음
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        //아래 loader부터 위로 순서대로 진행한다고 보면 됨
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}