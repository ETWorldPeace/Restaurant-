<template>
	<div class="main memberList">

		<datagrid api="getMembers">
		</datagrid>
	</div>
</template>

<script type="text/javascript">
	import datagrid from '../datagrid/datagrid.vue'
	import http from '../../utils/httpClient.js'

	import $ from 'jquery'
	
	export default {
		data () {
			return {
				regStatus:'员工列表'
			}
		},
		methods:{
			
		},
		components: {
			datagrid
        }
	}
</script>