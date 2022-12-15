// 打包utils  指令  hooks

import {series, parallel, src, dest} from 'gulp'
import { buildConfig } from './utils/config'
import path from 'path'
import {outDir, projectRoot} from './utils/paths'
import {withTaskName} from './utils'
// pnpm install gulp-typescript -D -w
import ts from 'gulp-typescript'


export const buildPackages = (dirname: string, name: string) => {
    // 打包的格式需要是什么类型？cjs es模块   umd是在浏览器中使用

    // 可以使用rollup 此处的这个逻辑只是将 ts => js 即可
    const tasks = Object.entries(buildConfig).map(([module, config]) => {
        const output = path.resolve(dirname, config.output.name)
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json');
        // 匹配所有的.ts文件 去除gulpfile.ts 以及 node_modules
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return series(
            // 将dirname目录下的一些文件进行打包输出
            withTaskName(`build: ${dirname}`, async () => {
                return src(inputs)
                    .pipe(ts.createProject(tsConfig, {
                        declaration: true, // 需要生成.d.ts声明文件
                        strict: false,
                        module: config.module
                    })())
                    .pipe(dest(output))
            }),
            // 将上一步打包好的output下的所有文件copy到指定目录下
            withTaskName(`copy: ${dirname}`, async () => {
                return src(`${output}/**`)
                    .pipe(dest(path.resolve(outDir, config.output.name, name)))
            })
        );
    })

    return parallel(...tasks)
    // 最终发布的是dist目录
}