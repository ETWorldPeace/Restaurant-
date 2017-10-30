<template>
    <div class="main orderList">
      <div class="orderHead">
        <p><span><i class="el-icon-caret-left"></i></span><span>返回</span></p>
        <div class="rightBtn">
          <el-button type="primary" plain>搜索</el-button>
        </div>
        <div class="demo-input-suffix">
          <el-input placeholder="请输入内容" v-model="inputOrder">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </div>
</template>
<script type="text/javascript">
    import './orderList.scss'
    export default {
        data () {
            return {
                input:'',
                inputOrder:'',
                regStatus: '未注册',
                tableData3: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  date: '2016-05-07',
                  name: '王小虎',
                  sex:'男',
                  login:'653652',
                  tel:'18273647362',
                  email:'1092837466@qq.com',
                  job:'员工',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        components: {
        }
    }
</script>