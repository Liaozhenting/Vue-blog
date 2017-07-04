<template>
<!-- 第一个日历 -->

<div class="calendar">
{{name}}这是 counter:{{counter}}
  <div class="title">
    <h1 class="green calendar-title">Month</h1>
    <h2 class="green small calendar-year">Year</h2>
    <a href="javascript:;" v-on:click='counter-=1' class="prev">Prev Month</a>
    <a href="javascript:;" v-on:click='counter+=1' class="next">Next Month</a>
  </div>
  <div class="body">
    <div class="lightgrey body-list">
      <ul>
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
        <li>SUN</li>
      </ul>
    </div>
    <div class="darkgrey body-list">
      <ul class="days">
      <p>{{12|currency '￥'}}</p>
      <p>{{12|currency}}</p>

      </ul>
    </div>
  </div>
</div>

</template>
<script>
  
  export default {
    data() {
      //return 里面保存变量，在html里面写{{name}}就能模板渲染Vue.js这几个字
      return {
        name: 'Vue.js',
        counter: 0
      }
    },
    methods:{
      
    }
  }
</script>
<style scoped>
@import '../assets/css/ui.css'

</style>