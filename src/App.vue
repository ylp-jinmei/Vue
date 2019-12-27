<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{count}}</h1> -->
    <!-- <button @click="$store.commit('countIncrease', 20)">{{add}}</button> -->
    <!-- <button @click="$store.commit('countIncreaseremove')">{{remove}}</button> -->
    <!-- <ul>
      <li v-for="(item,index) in ylp" :key="index">
        {{item}}
      </li>
    </ul> -->
    <el-link type="primary" @click="Welcome" v-if="show" >跳转欢迎页</el-link>
    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'App',
        components: {

        },
        data() {
            return {
                add: '加上1',
                remove: '减去1',
                ylp: this.$store.state.ylp,
                show: true,
            }
        },
        watch: {
            $route(to, from) {

                console.log(to.path);
                if (to.path != '/') {
                    this.show = false
                } else {
                    this.show = true
                }
            }
        },
        created() {

        },
        methods: {
            countIncrease() {
                //第一个参数为调用的方法名，第二个为传值
                this.$store.commit('countIncrease', 10)
            },
            countIncreaseremove() {
                this.$store.commit('countIncreaseremove')

            },
            Welcome() {
                this.$router.push({
                    path: '/hello'
                })
            }

        },
        //计算属性
        computed: {
            count() {
                return this.$store.state.count
            },
            // ylp() {
            //     return this.$store.state.ylp
            // }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>