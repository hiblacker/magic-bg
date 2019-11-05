const wallpaper = require('./wallpaper')
const path = require('path')

// 图片地址,随机拿一张
const num = ~~(Math.random() * 5) + 1

wallpaper.set(path.join(__dirname, `./img/test${num}.jpg`)).then(() => {
  console.log('done')
})

// wallpaper.get().then(imagePath => {
//   console.log(imagePath)
//   //=> '/Users/sindresorhus/unicorn.jpg'
// })
