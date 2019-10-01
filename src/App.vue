<template>
<div id="app">

<br/><br/><br/><br/>
<el-row type="flex" justify="center">
<el-col :xs="24" :md="20" :lg="16" :xl="8">


<center>
<el-upload
  class="upload-demo"
  :on-success="uploadSuccess"
  action="https://jsonplaceholder.typicode.com/posts/"
  ref="file"
  drag
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">
    将文件拖到此处，或<em>点击上传</em>
  </div>

</el-upload>

</center>

<center>
<div v-if="showTable">


<el-divider></el-divider>
<el-table
    :data="table_source"
    style="width: 100%"
    align="center"
    >
    <el-table-column
        type="index"
    >
    </el-table-column>
    <el-table-column
        v-for="(K,V,I) in tableHead"
        :prop="V"
        :label="K"
        :key="I"
        align="center"
    >
    </el-table-column>
  
  </el-table>

</div>

</center>
</el-col>
</el-row>    
<br />
</div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
        return{
          showTable: false,
          table_source:{},
          tableWidth:0,
          SOURCE:{},
          tableHead:{},

        }
    },

  methods: {

    uploadSuccess(res,file) {

      this.$rexine.rawFile(file.raw,(i,e)=>{
          this.$rexine.read(e.target.result);
          this.SOURCE = this.$rexine;
          this.tableHead = this.SOURCE.json[0]
          this.tableWidth = this.SOURCE.width;
          this.table_source = this.SOURCE.json.slice(1);
          this.showTable = true;
      })

    },


  },
}
</script>

<style>
  body {
    background-image: url('/bk.jpg')
  }

</style>
