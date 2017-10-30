<template>
    <div class="main orderList">
    	<div class="orderHead">
        <p><span><i class="el-icon-caret-left"></i></span><span>返回</span></p>
         <el-button type="info" plain>管理员列表</el-button>
        <div class="rightBtn">
          <el-button type="primary" plain>搜索</el-button>
        </div>
        <div class="demo-input-suffix">
          <el-input placeholder="请输入内容" v-model="inputOrder">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      	<div class="memberLeft">
  			<el-button type="primary" icon="el-icon-edit">编辑</el-button>
  			<el-button type="primary" icon="el-icon-delete">删除</el-button>
  			<el-button type="primary" icon="el-icon-remove-outline">修改</el-button>
  			<el-button type="primary" icon="el-icon-circle-plus-outline">增加</el-button>
      	</div>
    	<div class="datagrid">
			<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
				<thead>
					<tr>
						<th v-for="(value, key) in dataset[0]" >{{key}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(obj, index) in dataset">
						<td v-for="(value, key) in obj">{{value}}</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
</template>

<script type="text/javascript">
	
	import http from '../../utils/httpClient.js'
	import './adminList.scss'
	export default {
		data: function(){
			return {
				inputOrder:'',
				dataset: [],
				api:"getAdmin"
			}
		},
		methods: {
	    },
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data.message
			})
		},
		components: {
			datagrid :{
				template: `<div><slot></slot></div>`
			}
		}
	}
</script>
