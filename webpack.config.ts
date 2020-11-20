import path from 'path';
import webpack, {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const webpackConfig = (env): Configuration => ({
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      '@/': path.resolve(__dirname, './src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    port: 3000,
    overlay: true,
    clientLogLevel: 'silent',
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        include: path.resolve(__dirname, 'src')
      },
      {test: /\.js$/, loader: 'source-map-loader'},
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: env.production
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './public/images',
          to: './images',
        }
      ]
    })
  ],
  devtool: 'inline-source-map',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimize: false
  }
});

export default webpackConfig;
