
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
        <p>这里是模板的内容</p>
    </div>
</template>
<style lang="scss">
    $qwe:#098;
    body{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
    }
        h1:hover{
            height:100px;
    }

        h2{
            background-color: #999;
    }
    }
</style>
<script>
    //es6
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"yyw",
                age:"22"
            }
        }
    }
</script>
