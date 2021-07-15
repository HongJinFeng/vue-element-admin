<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2020/07/11',
          title: '史诗级会晤',
          content: '我和他讨论，要不，去考个博？'
        },
        {
          timestamp: '2021/01/23',
          title: '去他的公司找他',
          content: '第一次去找他，不自觉地被他牵了手，臭流氓，我好喜欢'
        },
        {
          timestamp: '2021/01/16',
          title: '要不，出来见个面',
          content: '第一次见面，外面天气10度，我们的脸颊热的像是50度的小太阳。'
        },
        {
          timestamp: '2021/01/07',
          title: '要不，加个微信呗',
          content: '你好，常老师，我是马院的李主任'
        }
      ]
    }
  }
}
</script>
