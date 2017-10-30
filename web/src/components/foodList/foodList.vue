<template>
	<div class="main foodList">
		<div class="head">
			<div class="headLeft">
				<button type="button" class="btn btn-lg btn-primary" disabled="disabled"><i class="glyphicon glyphicon-hand-down"></i>菜单分类</button>
			</div>
			<div class="headRight">
				<button type="button" class="btn btn-primary">编辑</button>
				<button type="button" class="btn btn-success">增加</button>
				<button type="button" class="btn btn-danger">删除</button>
				<button type="button" class="btn btn-info">保存</button>
			</div>
		</div>
		<div class="food">
			<div class="foodLeft">
				<ul>
					<li><i class="glyphicon glyphicon-chevron-up"></i></li>
					<li>全部</li>
					<li>精致冷碟</li>
					<li>精选热菜</li>
					<li>特色小炒</li>
					<li>川府菜肴</li>
					<li>精品点心</li>
					<li>酒水饮料</li>
					<li><i class="glyphicon glyphicon-chevron-down"></i></li>
				</ul>
			</div>
			<div class="foodRight">
				<div class="tableRight">
				 	<el-table :data="tableData3" height="380" border style=" overflow-x:none;">
				    <el-table-column prop="date" label="入职日期" width="100"></el-table-column>
				    <el-table-column prop="name" label="姓名" width="70"></el-table-column>
				    <el-table-column prop="sex" label="性别" width="70"></el-table-column>
				    <el-table-column prop="login" label="登陆账号" width="100"></el-table-column>
				    <el-table-column prop="tel" label="联系电话" width="120"></el-table-column>
				    <el-table-column prop="email" label="邮箱" width="170"></el-table-column>
				    <el-table-column prop="job" label="职级" width="70"></el-table-column>
				    <el-table-column prop="address" label="地址"></el-table-column></el-table>
			    </div>
			    <div class="search">
			    	   <el-input v-model="input" placeholder="请输入内容"></el-input>
			    	   <el-button type="primary" icon="el-icon-search">搜索</el-button>
			    </div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import './foodList.scss'
	export default {
		data () {
			return {
				input:'',
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