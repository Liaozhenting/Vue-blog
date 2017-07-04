<template>
    <div class="container" @click='load' id="box">
        <p>世界列表</p>
        <ul id="list-world">
          <li v-for="item in items">
            {{ item.Name }}
        </li>
    </ul>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                items:[],           
            }
        },
        methods:{
            
            load:function(){
                var data=[];
                // console.log(this.items);
                var that=this;
                axios.get('http://192.168.125.121:2333/sql', data)
                    //成功的回调
                    .then(function (response) {
                      that.items=response.data;
                      
                })
                    //失败的回调
                    .catch(function (error) {
                      console.log(error);
                });
            }
        }
    }
</script>
<style scoped> 
    @import '../assets/css/normalize.css'
</style>