const imagemin = require('imagemin-keep-folder'); // The imagemin module.// Output folder // PNG images
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
JPEGImages = './src/asser.jpg'; // JPEG images

imagemin(['./src/assets/img/**/*.jpg'], {
  plugins: [imageminMozjpeg({ quality: 50 })],
}).then(data => {
  console.log(data);
  console.log('Images optimized');
});
