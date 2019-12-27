<template>
  <div class="hello">
    <div>
      <el-button type="primary" @click="axioshref">axios跳转详情</el-button>
      <el-input v-model="fun.city" placeholder="地區" style="width: 100px;"></el-input>
      <el-button type="primary" @click="kaishi">搜索</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                fun: {
                    city: '',
                }
            }
        },
        created() {},
        methods: {
            kaishi() {
                this.$http.get(this.$API.aaa(), {
                    params: {
                        city: this.fun.city,
                        Key: '71928be2a146550e0a499e26a844cc25'
                    }
                }).then((resp) => {
                    console.log('resp', resp.data.result.data)
                })
            },
            axioshref() {
                this.$router.push({
                    path: '/index',
                })
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
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