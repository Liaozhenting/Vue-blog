<template>
  <div>
    <a href="/" ><el-button>返回主页</el-button></a>
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
        <td><el-input v-model='item.user_id' :disabled="true" ></el-input></td>
        <td><el-input v-model='item.username' :disabled="true" ></el-input></td>
        <td><el-input v-model='item.password'></el-input></td>
        <td><el-input v-model='item.question'></el-input></td>
        <td><el-input v-model='item.answer'></el-input></td>
        <td><el-input v-model='item.regtime' :disabled="true" ></el-input></td>
        <td><el-button  @click='edit(item)'><i class="el-icon-edit"></i></el-button></td>
        <td><el-button @click='del(item)'><i class="el-icon-delete" ></i></el-button></td>
      </tr>

    </table>
    <div class="fenye">
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="600">
        </el-pagination>
      </div>
    </div>

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
        edit:function(item){
          var that=this;
          axios.get('http://localhost:3000/edit',{params:item})
        //成功的回调
        .then( (response) =>{
          this.open(response.data);

        },(err)=>{
          console.log(err);
        });
      },
      del:function(item){
        axios.get('http://localhost:3000/delete',{params:{user_id:item.user_id}})
        //成功的回调
        .then( (response) =>{
          this.open(response.data);
        },(err)=>{
          console.log(err);
        });
      },

      open:function(){

        this.$message({
          message: '操作成功',
          type: 'success'
        });
      }
    }
  }
</script>
<style>
  .fenye{
    width:400px;
    margin:0 auto;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->



