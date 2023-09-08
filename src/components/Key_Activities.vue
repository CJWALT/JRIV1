<template>

    <div class="py-[7.4rem] bg-[#F2F2F7]"> 
        <div class="w-[90%] mx-auto">
            <h2 class="font-[Poppins] mb-[3.5rem] text-[2rem] text-[#000066] font-semibold"> 
                Our Key Activites
            </h2>            

            <div class="px-5 gap-10 flex flex-col md:flex-row md:flex-wrap md:gap-10 md:justify-center lg:justify-normal lg:gap-y-5 xl:gap-y-10 xl:gap-10 lg:px-2"> 


                    <div v-for="item in activity_items" :key="item.id" class="flex text-center flex-col md:w-[45%] lg:w-[30%] xl:w-[30%] ">
                        <img :src="getIcon(item.icon)" alt="" class="mx-auto">
                        <h4 class="text-[#000066] font-[Poppins] text-[1.4rem] font-semibold mb-[.5rem]">{{ item.title }}</h4>
                        <p class="font-[Poppins] font-normal text-[1rem]">{{item.text}}</p>
                    </div>
            </div>

        </div>
    </div>
</template> 

<script setup>
    
    import { getIcon } from '../iconutil.js'
    import activity_data from '../activity_data.json'

    const activity_items= activity_data
</script>