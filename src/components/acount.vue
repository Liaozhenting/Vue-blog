<template>
  <div>
    <table v-for='item in items'>
      <tr>
        <tr><td>账号名：</td><td><input type="text" v-model='item.username'/></td></tr>
        <tr><td>密码：</td><td><input type="text" v-model='item.password'/></td></tr>
        <tr><td>密保问题：</td><td><input type="text" v-model='item.question'/></td></tr>
        <tr><td>密保问题答案：</td><td><input type="text" v-model='item.answer'/></td></tr>
        <tr><td>注册时间：</td><td><input type="text" v-model='item.regtime'/></td></tr>
      </tr>

    </table>
  </div>
</template>

<script>
import axios from 'axios'
var items=[];
var load=function(){
        var data=[];

        var that=this;
        axios.get('http://localhost:3000', data)
        //成功的回调
        .then(function (response) {
          //items变量保存起来
          items=response.data;
        })
        //失败的回调
        .catch(function (error) {
          console.log(error);
        });
      }
      load();
export default {
  name: 'hello',
  data () {
    return {
      msg: '账号管理',
      items:items
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
