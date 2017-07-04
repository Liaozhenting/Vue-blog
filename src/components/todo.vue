<template>
  <div>
    <input type="text" placeholder="接下来做什么?" v-on:keyup.13='add(newLabel)'  v-model='newLabel'>
    <button v-on:click='add(newLabel)'>add</button>
    <br/>

    <div v-for='item in remains'>
      <button v-on:click='finish(item)'>Y</button>
      <span id='item' v-bind:class='ifContains(item,completed)?"finished":"no"'>{{item}}</span>

      <button v-on:click='del(item)'>X</button>
      <br>
    </div>
    <h4>总共{{remains.length}}件事。{{active.length}}件事正在做。{{completed.length}}件事做完了。</h4>
  </div>
</template>

<script>
  export default {
    data()
    {
    //return 里面保存变量，在html里面写{{name}}就能模板渲染Vue.js这几个字
    return {
      remains: [],
      completed: [],
      newLabel: '',
      active: [],/*这里不能讲active数组注册为计算属性，否则两者将同步变化*/
      editable:false /*控制能否编辑*/
    }
  }
  ,
  methods:{
    del:function (item) {
      if (this.ifContains(item, this.completed)) {
        let pos=this.completed.indexOf(item);
        this.completed.splice(pos,1);
      }
      let pos=this.remains.indexOf(item);
      this.remains.splice(pos,1);
      let pos_active=this.active.indexOf(item);
      this.active.splice(pos_active,1);
    }
    ,
    finish:function (item) {
      if (!this.ifContains(item, this.completed)) {
        let pos=this.active.indexOf(item);
        this.active.splice(pos,1);
        this.completed.push(item);
      }
    }
    ,
    add:function (item) {
      if (!this.ifContains(item, this.remains)) {
        this.remains.push(item);
        this.active.push(item);
        this.newLabel = '';
      }
    }
    ,
    edit:function(){
      if(!this.editable){
        this.editable=true;
        return true;
      }else{
        this.editable=false;
        return false;
      }
    },
    ifContains:function (item, items) {
      for (var i of items)
        if (item === i) return true;
      return false;
    }
    
  }

}
</script>

<style>
  .finished{
    text-decoration: line-through;
  }

</style>
