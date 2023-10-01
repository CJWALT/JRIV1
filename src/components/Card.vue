<template>  
        <div class="w-[80%] md:w-auto text-center items-center flex flex-col gap-[.6rem]"> 

            <div class="w-[4rem] h-[4rem]"> 
                <img :src="getIcon(props.icon)" alt="icon">
            </div>
                <h4 class="font-[Poppins] font-bold text-[#000066] text-[1rem] md:text-[1.5rem]">{{title}}</h4>
                <small class="font-[Poppins] font-normal text-[.7rem] md:text-[1rem]">
                    {{text}}
                </small>
        </div>

</template> 

<script setup>

    import { getIcon } from '../iconutil.js'

     const props = defineProps({ 
        icon: String, 
        title : String, 
        text : String
     })

</script>