<template>
  <div @click="clickheadimg">
    <img @mousemove="move" :width="headimgSize" :height="headimgSize" :src="headimgSrc" alt="">
  </div>
</template>

<script>
export default {
    name:"Headimg",

    computed:{
        headimgSrc:function(){
            return require("../../assets/headimg.jpg")
        }
    },

    props:{
        headimgSize:{
            type:Number,
            default:50
        },
        src:{
            type:String,
            // require:true，
            default:require("../../assets/headimg.jpg")
        }
    },
    methods:{
        clickheadimg(){
            console.log("hahha");
        },
        move(){
            console.log("heihei");
        }
    },

    mounted(){
        console.log(this.headimgSrc);
    }
}
</script>

<style>

</style>