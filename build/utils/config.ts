
import path from 'path'
import {outDir} from './paths'

export const buildConfig = {
    esm: {
      module: 'ESNext', // tsconfig输出的结果es6模块
      format: 'esm', // 需要配置格式化后的模块规范
      output: {
        name: 'es', // 指定打包到哪个目录下
        path: path.resolve(outDir, 'es'),
      },
      bundle: {
        path: `r-ui/es`,
      },
    },
    cjs: {
      module: 'CommonJS',
      format: 'cjs',
      output: {
        name: 'lib',
        path: path.resolve(outDir, 'lib'),
      },
      bundle: {
        path: `r-ui/lib`,
      },
    },
}