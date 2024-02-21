<template>  
    <div :class="[props.bgColor, props.bgOpacity, activityCard ]"> 

        <div class="z-10 w-[4rem] self-center h-[4rem]"> 
            <img :src="getIcon(props.icon)" alt="icon">
        </div>
            <h4 class="z-20 font-[Poppins] font-bold text-white text-[1rem] md:text-[1.5rem]">{{title}}</h4>
            <small class="z-20 font-[Poppins] font-normal text-[.8rem] md:text-[1rem]">
                {{text}}
            </small>
    </div>

</template> 

<script setup>

import { getIcon } from '../iconutil.js'

 const props = defineProps({ 
    icon: String, 
    title : String, 
    text : String,
    bgColor: String,
    bgOpacity:String
 })

 const activityCard = `mx-auto w-[65%] rounded-[2.2rem] bg-black bg-opacity-90 relative before:absolute before:${props.bgColor} before:w-[100%] before:rounded-[2.2rem] before:top-0 before:h-[100%] before:left-0 before:content-'' before:${props.bgOpacity} before:-z-5  z-5 bg-[url('./assets/img/bagbg.png')] text-white h-[318px] bg-no-repeat bg-cover flex justify-center flex-col text-center`

</script>