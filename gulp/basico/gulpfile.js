const gulp = require('gulp')
const { series, parallel } = require('gulp')

const before1 = (cb) => {
  console.log('Before Task 1')
  return cb()
}

const before2 = (cb) => {
  console.log('Before Task 2')
  return cb()
}

function copy(cb) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
  return cb()
}

const after = (cb) => {
  console.log('After Task')
  return cb()
}

module.exports.default = series(
  parallel(before1, before2),
  copy,
  after
)