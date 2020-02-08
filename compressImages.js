const imagemin = require('imagemin-keep-folder');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['./projects/interior-design/src/raw-assets/img/**/*'], {
  use: [imageminWebp({ quality: 50 })],
  replaceOutputDir: output => {
    return output.replace('raw-assets', 'assets');
  },
}).then(data => {
  //console.log(data);
  console.log('Webp images created');
});

imagemin(['./projects/interior-design/src/raw-assets/img/**/*'], {
  plugins: [imageminMozjpeg({ quality: 40 })],
  replaceOutputDir: output => {
    return output.replace('raw-assets', 'assets');
  },
}).then(data => {
  //console.log(data);
  console.log('jpeg images compressed');
});
