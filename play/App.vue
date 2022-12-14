<template>
    <div>
        测试组件 {{state.num}}
        <RIcon color="red" class="r-icon-loading3" :size="30">哈哈哈</RIcon>
        <div>
            <button @click="increment">点一下</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'

const state = reactive({
    num: 1
})

const increment = () => {
    state.num++
}

const x = ref(0)
console.log(x, 'x===')
</script>

<style lang="less" scoped>

</style>
