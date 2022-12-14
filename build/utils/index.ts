// spawn函数会异步地衍生子进程，且不会阻塞 Node.js 事件循环
import {spawn} from 'child_process'
import {projectRoot} from './paths'

export const withTaskName = (name: string, fn: any) => Object.assign(fn, {displayName: name})

// 在node中使用子进程来运行脚本
/**
 * spawn(command[, args][, options]) 返回一个ChildProcess
 * command: <String> 要运行的命令
 * args: <Array> 字符串参数列表
 * options: <Object>
 *      cwd: <string> 子进程的当前工作目录
 *      env: <Object> 环境变量键值对
 *      argv0 <string> 显式地设置要发给子进程的 argv[0] 的值。 如果未指定，则设为 command
 *      stdio <Array> | <string> 子进程的 stdio 配置
 *      shell <boolean> | <string> 如果为 true，则在一个 shell 中运行 command
*/ 
export const run = async (command: string) => {
    return new Promise((resolve) => {
        // 分割命令和参数
        const [cmd, ...args] = command.split(' ');
        const app = spawn(cmd, args, {
            cwd: projectRoot,
            stdio: "inherit", // 直接将这个子进程输出
            shell: true, // 默认情况下 linux才支持 rm -rf
        })
        app.on("close", resolve)
    })
}