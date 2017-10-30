<template>
    <div class="main orderList">
    	<datagrid>
			<h1>nihao</h1>
		</datagrid>
    </div>
</template>

<script type="text/javascript">
	
	import http from '../../utils/httpClient.js'
	
	export default {
		data: function(){
			return {
				dataset: [],
				api:"getgoods1",
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
