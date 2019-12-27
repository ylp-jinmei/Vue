<template>
  <div>
    <!-- <el-button type="primary" @clicl="back">{{title}}</el-button> -->
    <el-container>
      <el-aside width="200px">
        <h1>我是你大爷</h1>
      </el-aside>
      <el-container>
        <el-header>图片展示</el-header>
        <el-main>
          <div class="demo-image__lazy">
            <el-image v-for="(url,index) in imageList" :key="index" :src="url.thumbnail_pic_s" lazy></el-image>
          </div>
        </el-main>

      </el-container>
      <div>
        111111111111111111111111111111
      </div>
      <div class="demo-image__preview">
        <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList1">
        </el-image>
      </div>
    </el-container>

  </div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {
                title: 'axios跳转过来了',
                imageList: [],
                srcList: [],
                srcList1: [],
                url: ''
            }
        },
        mounted() {
            console.log(this.$API.toutiao())

        },
        created() {
            this.back()
        },
        methods: {
            // back() {
            //     this.$http.get(this.$API.toutiao(), {
            //         params: {
            //             // apiid: '923',
            //             type: 'top',
            //             key: 'fea178a8a1bff7f9c0e5e35f65eb5a34'
            //         },

            //     }).then((resp) => {
            //         console.log('resp', resp.data.result.data)
            //         this.imageList = resp.data.result.data
            //         this.srcList = resp.data.result.data
            //         this.srcList.map((inde, item) => {
            //             this.srcList1.push(inde.thumbnail_pic_s03)
            //         })
            //         this.url = resp.data.result.data[1].thumbnail_pic_s

            //     })
            // },
            async back() {
                const resp = await this.$http.get(this.$API.toutiao(), {
                    params: {
                        // apiid: '923',
                        type: 'top',
                        key: 'fea178a8a1bff7f9c0e5e35f65eb5a3'
                    },
                })
                console.log(resp)
                if (resp.data.error_code === 0) {
                    this.imageList = resp.data.result.data
                    this.srcList = resp.data.result.data
                    this.srcList.map((inde, item) => {
                        this.srcList1.push(inde.thumbnail_pic_s03)
                    })
                    this.url = resp.data.result.data[1].thumbnail_pic_s
                } else {
                    this.$notify.error({
                        title: '错误信息',
                        message: resp.data.reason
                    });
                }
            }

        },
    }
</script>
<style>

</style>