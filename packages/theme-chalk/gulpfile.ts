// 打包样式 
// pnpm install gulp-sass @types/gulp-sass @types/sass @types/gulp-autoprefixer gulp-autoprefixer @types/gulp-clean-css gulp-clean-css sass -D -w
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'

import path from 'path'
import { series, src, dest } from "gulp";
// Vinyl 是描述文件的元数据对象
// src(globs, [options]) 创建一个流，用于从指定的文件中读取 Vinyl对象。返回一个可以在管道的开始或中间使用的流，用于根据给定的 globs 添加文件
// dest(directory, [options]) 创建一个用于将 Vinyl 对象写入到文件系统的流。
// 流（stream）所提供的主要的 API 是 .pipe() 方法，用于连接转换流（Transform streams）或可写流（Writable streams）。

function compile() {
    const sass = gulpSass(dartSass)
    return src(path.resolve(__dirname, './src/*.scss')) // 要处理的文件
        .pipe(sass.sync()) // 处理sass文件
        .pipe(autoprefixer()) // 加前缀
        .pipe(cleanCss()) // 压缩css
        .pipe(dest('./dist/css')) // 最后将处理后的文件写入指定的位置
}

function copyfont() {
    return src(path.resolve(__dirname, './src/fonts/**')) // 要处理的文件
        .pipe(cleanCss())
        .pipe(dest('./dist/fonts'))
}

function copyfullStyle() {
    return src(path.resolve(__dirname, './dist/**')) // 要处理的文件
        .pipe(dest(path.resolve(__dirname, '../../dist/theme-chalk')))
}

export default series(
    compile,
    copyfont,
    copyfullStyle
)