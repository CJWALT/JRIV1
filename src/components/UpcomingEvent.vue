<template> 

    <div class="w-[90%] mx-auto py-[7.4rem] xl:w-[80%]"> 
        <h2 class="mb-[1.3rem] font-[Poppins] text-[#000066] md:text-[2rem] text-[5vw] font-semibold">UPCOMING EVENTS</h2>
        <div class="flex flex-col md:flex-row gap-[3rem] px-5 justify-center md:justify-center md:flex-wrap md:gap-y-10 lg:flex-nowrap">
            <div v-for="(event_item, i) in events" :key="i" class="flex justify-center items-center flex-col gap-[.7rem] md:w-[45%]">
                <div class="w-[14rem] md:w-[80%]">
                    <img :src="`/img/${event_item.banner}`" :alt="event_item.id" class="object-cover rounded-[1rem] shadow-lg"/>
                </div>
                <div class="w-[50vw] md:w-[32vw] lg:w-[24vw] xl:w-[80%]">
                    <p class="font-[Poppins] font-normal text-[.8rem] text-center">{{event_item.title}}</p>
                    
                </div>
                
                <div class="md:10vw ">
                    <Button children="Register Now"
                         btnRounded="rounded-[1.5rem]"
                         bgColor='bg-[#FFA235]'
                         btnPd='px-[1.5rem]'
                         fntColor="text-white" 
                        :handleClick="sendMessage"
                         />
                         
                </div>

                
            </div>
            
            
        </div>
    </div>


</template>

<script setup>

    import { defineProps } from 'vue'

import events from '../upcoming_event.json'
import Button from '../components/Button.vue'


    
const props = defineProps({
    sendMessage: Function
}) 



</script>