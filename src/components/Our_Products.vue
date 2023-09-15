<template>

    
    <div class="w-[90%] mx-auto xl:w-[80%]">
        <h2 class="font-[Poppins] mb-[.7rem] text-[#000066] text-[1rem]">Our Products</h2>
        
    </div>

    <div class="overflow-x-scroll flex flex-row gap-[3rem] scroll-width">
        <div class="flex-none flex flex-col justify-center">
            <img src="../assets/img/proone.png" alt=" product one" class="mb-[.8rem] w-[16rem] xl:w-[20rem]">
            <div class="self-center">
                <Button :handleCLick="sendMessage" children="Request Now" btnPd="px-[1.5rem]" fntColor="text-white" bgColor="bg-[#FFA235]" btnRounded="rounded-[1.5rem]"/>    
            </div>
        </div>
        <div class="flex-none flex flex-col justify-center">
            <img src="../assets/img/protwo.png" alt=" product one" class="mb-[.8rem] w-[16rem] xl:w-[20rem]">
            <div class="self-center">
                <Button :handleCLick="sendMessage" children="Request Now" btnPd="px-[1.5rem]" fntColor="text-white" bgColor="bg-[#FFA235]" btnRounded="rounded-[1.5rem]"/>    
            </div>
        </div>
        <div class=" flex-none flex flex-col justify-center">
            <img src="../assets/img/prothree.png" alt=" product one" class="mb-[.8rem] w-[16rem] xl:w-[20rem]">
            <div class="self-center">
                <Button :handleCLick="sendMessage" children="Request Now" btnPd="px-[1.5rem]" fntColor="text-white" bgColor="bg-[#FFA235]" btnRounded="rounded-[1.5rem]"/>    
            </div>
        </div>
        <div class="flex-none flex flex-col justify-center">
            <img src="../assets/img/profour.png" alt=" product one" class="mb-[.8rem] w-[16rem] xl:w-[20rem]">
            <div class="self-center">
                <Button :handleCLick="sendMessage" children="Request Now" btnPd="px-[1.5rem]" fntColor="text-white" bgColor="bg-[#FFA235]" btnRounded="rounded-[1.5rem]"/>    
            </div>
        </div>
        
    </div>

</template> 


<script setup> 
    import Button from './Button.vue'

    import { defineProps } from 'vue'

    const props = defineProps({ 
        sendMessage: Function,
    })
</script>