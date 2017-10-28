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
		</div>
	</div>
</template>

<script type="text/javascript">
	import './foodList.scss'
	export default {
		data () {
			return {
				regStatus: '未注册'
			}
		},
		components: {
		}
	}
</script>