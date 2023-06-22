<template>
  <div>
    <!-- 推荐内容 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">推荐内容</div>
    </Container>
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in recommend"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-start text-gray-500 mb-4">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端课程</span>
              </div>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                <div>
                  <span class="mr-2 text-orange">￥{{ item.price }}</span>
                  <span>{{ item.counts }}人学习</span>
                </div>
                <div class="i-mdi:cart text-3xl text-sky-400"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">每日一课</div>
    </Container>
    <!-- 每日一课 -->
    <Container class="flex-col">
      <!-- tabs -->
      <Tabs :items="['Java', 'Vue', 'React', '小程序']" v-model="activeIndex"></Tabs>
      <!-- Grid -->
      <div class="grid grid-cols-6 gap-3 py-4">
        <!-- 左侧 row*2 col*2 -->
        <div class="col-start-1 col-span-2">
          <a
            :href="item.url"
            target="_blank"
            v-for="(item, index) in [recommend[0]]"
            :key="index"
            class="flex flex-col h-full"
          >
            <Card
              class="w-full rounded-3 flex-1 h-full flex flex-col pb-4 justify-between transition-all hover:(transform-translate-y--1 shadow-lg)"
              :image="item.image"
              :height="'h-65'"
              image-type="rounded"
              :title="item.title"
              :clamp="3"
              border
            >
              <template #default>
                <div class="mx-4 flex items-center justify-start text-gray-500">
                  <span class="mr-2">Brian</span>|
                  <span class="ml-2">前端课程</span>
                </div>
              </template>
            </Card>
          </a>
        </div>
        <!-- 右侧 8 * item -> row*2 col*4 -->
        <div class="col-start-3 col-span-4">
          <div class="grid grid-cols-4 grid-rows-2 gap-3">
            <a
              :href="item.url"
              target="_blank"
              v-for="(item, index) in [...recommend, ...recommend]"
              :key="index"
              class="flex"
            >
              <Card
                class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
                height="h-30"
                :image="item.image"
                image-type="rounded"
                :title="item.title"
                title-class="py-1 px-4 text-lg"
                :clamp="2"
                border
              >
                <template #default>
                  <div class="mx-4 flex items-center justify-start text-gray-500 text-sm mb-4">
                    <span class="mr-2">Brian</span>|
                    <span class="ml-2">前端课程</span>
                  </div>
                </template>
              </Card>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="flex">
        <div class="w-1/3">1</div>
        <div class="w-2/3">
          <div class="grid grid-cols-4 grid-rows-2 gap-3">2</div>
        </div>
      </div> -->
    </Container>
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">精品微课</div>
    </Container>
    <!-- 精品微课 -->
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in [...recommend, ...recommend]"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-start text-gray-500 mb-4">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端课程</span>
              </div>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                <div>
                  <span class="mr-2 text-orange">￥{{ item.price }}</span>
                  <span>{{ item.counts }}人学习</span>
                </div>
                <div class="i-mdi:cart text-3xl text-sky-400"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 学习计划 -->
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">学习计划</div>
    </Container>
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div
          class="lt-sm:px-4 py-4 relative h-40 flex items-center justify-center transition-all cursor-pointer hover:(transform-translate-y--1 shadow-lg) group"
          v-for="(item, index) in recommend"
          :key="index"
        >
          <div
            class="absolute w-full h-full bg-cover bg-center rounded-3 overflow-hidden"
            :style="{ 'background-image': 'url(' + item.image + ')' }"
          >
            <div class="bg-black bg-opacity-30 w-full h-full group-hover:display-none"></div>
          </div>
          <div class="z-30 px-4 line-clamp-3 text-xl text-white">{{ item.title }}</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="text-3xl font-bold pb-2 pt-6">优质专栏</div>
    </Container>
    <!-- 优质专栏 -->
    <Container>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in [...recommend, ...recommend]"
          :key="index"
          class="flex"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-start text-gray-500 mb-4">
                <span class="mr-2">Brian</span>|
                <span class="ml-2">前端课程</span>
              </div>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                <div>
                  <span class="mr-2 text-orange">￥{{ item.price }}</span>
                  <span>{{ item.counts }}人学习</span>
                </div>
                <div class="i-mdi:cart text-3xl text-sky-400"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import bg from '@/assets/images/bg.png'

const activeIndex = ref(0)

const recommend = ref([
  {
    image: bg,
    title:
      '第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！',
    comments: '9',
    url: 'https://class.imooc.com/sale/embedded',
    hours: '350 小时',
    counts: '227',
    price: ' 12999.00',
    originPrice: ' 14999'
  },
  {
    image: bg,
    title: '前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）',
    comments: '9',
    url: 'https://class.imooc.com/sale/fe2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4666.00',
    originPrice: ' 5980'
  },
  {
    image: bg,
    title:
      '以一线互联网公司产品标准，打造适合零基础学习的全干货Java课程。选择Java，高薪就业的第一步！',
    comments: '9',
    url: 'https://class.imooc.com/sale/java2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4429.00',
    originPrice: ' 5680'
  },
  {
    image: bg,
    title: '未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通',
    comments: '9',
    url: 'https://class.imooc.com/sale/newgo',
    hours: '350 小时',
    counts: '227',
    price: ' 3099.00',
    originPrice: ' 3888'
  }
])
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
