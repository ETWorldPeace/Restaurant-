<template>
    <div id="app">
        <div class="headLogin">
        <p><i></i>XX餐厅后台管理系统</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './login.scss'
    export default {
        name: 'app',
        data () {
            return {
              regStatus: '未注册',
              index:'首页',
              //页面数据
              indexData:{
                //数据管理
                foodList:'菜单',
                orderList:'订单',
                memberList:'员工',
                adminList:'管理员',
                adminLimit:'设置'
              }
            }
        },
        methods: {
            generateToolBar: function(obj){
                //动态生成按钮
            },
            indexRight:function(){
            }
        }
    }
</script>