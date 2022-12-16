// 串行和并行
import {series, parallel} from 'gulp'
import {withTaskName, run} from './utils'

// 打包样式 打包工具方法 打包所有组件 打包没个组件  生成一个组件库  发布组件
export default series(
    // 打包前先清除dist目录
    withTaskName('clean', () => { return run('rm -rf ./dist')}),
    withTaskName('start build packages', () => 
        // 并行执行指定目录下的所有的 build命令
        run('pnpm run --filter "./packages/**" --parallel build')
    ),
)