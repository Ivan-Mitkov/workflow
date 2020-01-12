const path = require("path");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer")
];
module.exports = {
  //which file to look for entry
  entry: "./app/assets/scripts/App.js",
  output: {
    //how the bundle file is named we can choose name
    filename: "bundled.js",
    //where is this file absolute path is required
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      //loader for css files files ending with .css
      {
        test: /\.css$/i,
        //css-loader load css files in bundle.js style-loader uses this bundle css
        use: [
          "style-loader",
          //?url=false By default, the css-loader will attempt to handle any images
          // we reference in our CSS (e.g. background images, etc...).
          // While this is great in certain situations, for our usage
          // in this course we want to disable this and we'll manage our image files manually.
          "css-loader?url=false",
          //postcss config
          {
            loader: "postcss-loader",
            options: {
              plugins: postCSSPlugins
            }
          }
        ]
      }
    ]
  }
};
