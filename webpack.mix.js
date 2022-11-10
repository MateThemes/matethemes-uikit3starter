// webpack.mix.js

let mix = require('laravel-mix');
// sass/scss compiling
mix.sass('assets/src/scss/styles.scss', 'assets/dist/css/styles.css', {
    sassOptions: {
        outputStyle: 'compressed'
    }
});
// Merge and compile multiple scripts to dist/app.js
mix.minify(['assets/src/js/uikit.min.js', 'assets/src/js/uikit-icons.min.js'], 'assets/dist/js/app.js');