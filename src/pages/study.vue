<template>
  <div>
    <!-- 头部内容 -->
    <div class="relative">
      <!-- Swiper -->
      <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
      <!-- Swiper里面登录 -->
      <div class="absolute bottom-0 left-0 w-full flex py-2 bg-gray-900 bg-opacity-40 z-20">
        <Container>
          <div class="flex justify-between w-full">
            <!-- 分类 -->
            <ul class="flex types text-white">
              <li class="active item">每日一课</li>
              <li class="item">精品微课</li>
              <li class="item">学习计划</li>
              <li class="item">优质专栏</li>
            </ul>
            <div class="flex items-center">
              <!-- 搜索 -->
              <div class="relative bg-white rounded-6 pl-4 pr-2 h-full flex items-center mr-4">
                <input type="text" class="outline-none mr-2" placeholder="搜索课程" />
                <i class="i-ep:search"></i>
              </div>
              <!-- 登录 -->
              <div class="text-gray-200">
                <span class="mr-2 cursor-pointer hover:text-white">登录</span>|
                <span class="ml-2 cursor-pointer hover:text-white">注册</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="bg-white py-10 mb-4">
        <Container>
          <!-- 内容区域 -->
          <div class="flex w-full">
            <!-- 课程介绍 -->
            <div class="bg w-1/2"></div>
            <!-- 左图，右文档 -->
            <div class="w-1/2">
              <div class="text-3xl">课程名称</div>
              <div class="text-gray-300 mb-4 line-clamp-3">
                课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述
              </div>
              <div class="flex text-sm mb-4 text-gray-300">
                <span class="pr-2">toimcBrian</span>|
                <span class="pl-2">前端大牛</span>
              </div>
              <div class="text-orange-400 mb-8 text-2xl">￥3999.00</div>
              <div class="flex">
                <div class="btn mr-4">加入购物车</div>
                <div class="btn-plain px-10">收藏</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <!-- 课程详情 -->
        <div class="w-full flex">
          <div class="w-3/4 bg-white mr-4">
            <!-- tabs -->
            <div class="border-b-1 border-b-color-gray-200">
              <ul class="tabs flex w-full">
                <li class="active px-4 py-2 cursor-pointer">课程介绍</li>
                <li class="px-4 py-2 cursor-pointer">章节目录</li>
                <li class="px-4 py-2 cursor-pointer">学员评价</li>
              </ul>
              <!-- tabs标题 -->
            </div>
            <!-- tabs content -->
            <div class="p-4">
              <!-- 左边是Markdown的详情 -->
              <router-view></router-view>
              <!-- 课程目录 -->
              <!-- 评价 -->
            </div>
          </div>
          <!-- 右边是侧边栏 -->
          <div class="w-1/4">
            <div class="bg-white mb-2 h-20">边栏</div>
            <div class="bg-white mb-2 h-20">边栏2</div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'

import { useThemeStore } from '@/store/useThemeStore'

import bg from '@/assets/images/bg.png'

const store = useThemeStore()

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍1',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍2',
    url: 'https://www.imooc.com'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍3',
    url: 'https://www.imooc.com'
  }
]
</script>

<style scoped lang="scss">
.types {
  .item {
    @apply px-4 py-1 rounded-6 bg-gray-100 bg-opacity-20 mr-2 cursor-pointer;
    &:hover {
      @apply bg-white text-dark-200;
    }
  }
  .active {
    @apply bg-white text-dark-300;
  }
}
.tabs {
  .active {
    @apply text-sky-400 relative;
    &:after {
      @apply content-none absolute bg-sky-400 w-8 h-[2px] bottom-0 left-1/2 transform-translate-x--1/2;
    }
  }
}
</style>
