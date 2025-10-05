<template>
  <uni-card
    title="基础卡片"
    sub-title="副标题"
    extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
  >
    <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>
  <button size="mini" type="primary" plain @tap="getData">发送</button>
  <button
    size="mini"
    type="primary"
    plain
    @tap="
      memberStore.setProfile({
        nickname: 'j',
        token: '12345',
      })
    "
  >
    保存
  </button>

  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const title = ref('Hello World')
const memberStore = useMemberStore()
const getData = async () => {
  const res = await http<string[]>({
    method: 'GET',
    url: '',
    header: {},
  })
  console.log('请求成功', res)
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
