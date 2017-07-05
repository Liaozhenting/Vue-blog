<template>
  <div>
    <!-- <div class="btn btn-default">{{items[0]}}</div> -->
    <table >
      <tr>
        <td>user_id</td>
        <td>账号名</td>
        <td>密码</td>
        <td>密保问题</td>
        <td>密保问题答案</td>
        <td>注册时间</td>
      </tr>
      <tr v-for='item in items'>
        <td><input type="text" v-model='item.user_id' disabled="true" /></td>
        <td><input type="text" v-model='item.username' disabled="true" /></td>
        <td><input type="text" v-model='item.password'/></td>
        <td><input type="text" v-model='item.question'/></td>
        <td><input type="text" v-model='item.answer'/></td>
        <td><input type="text" v-model='item.regtime' disabled="true" /></td>
        <td><input type="button" value="修改" @click='edit(item)'></td>
        <td><input type="button" value="删除" @click='del(item)'></td>
      </tr>

    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    created(){
      axios.get('http://localhost:3000')
        //成功的回调
        .then( (response) =>{
          //items变量保存起来
          this.items=response.data;
        },(err)=>{
          console.log(err);
        });
      },
      name: 'hello',
      data () {

        return{
          msg: '账号管理',
          items:[]
        }
      },
      methods:{
        edit:(item)=>{
          axios.get('http://localhost:3000/edit',{params:item})
        //成功的回调
        .then( (response) =>{
          alert(response.data);
        },(err)=>{
          console.log(err);
        });
      },
      del:(item)=>{
        axios.get('http://localhost:3000/delete',{params:{user_id:item.user_id}})
        //成功的回调
        .then( (response) =>{
          alert(response.data);
        },(err)=>{
          console.log(err);
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



