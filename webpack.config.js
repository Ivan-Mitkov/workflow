const path=require('path')

module.exports={
    //which file to look for entry
    entry:'./app/assets/scripts/App.js',
    output:{
        //how the bundle file is named we can choose name
        filename:'bundled.js',
        //where is this file absolute path is required
        path:path.resolve(__dirname,'app')
    },
    mode:'development',
    watch: true,
}