

<template>  

    <header class="py-10  w-full">
        <div class="relative w-[90%] mx-auto flex items-center justify-between">
               <a href="/"> <img src="../assets/img/Jrlogo.png" class="w-[3rem]" alt="just recycle logo"/> </a> 
                <div :class="{'hidden' : !openNav, 'block': openNav}" class="absolute top-0 right-0 bg-[#a2a2cc] rounded-md p-8 text-red-400 font-[Poppins]">
                    <ul class="text-[#000066] mb-4 grid gap-2">
                        <li><a href="/home" @click="toggleNav"> Home</a> </li>
                        <li><a href="/home" @click="toggleNav"> About </a> </li>
                        <li><a href="/home" @click="toggleNav"> Activities</a> </li>
                        <li><a href="/home" @click="toggleNav"> Academy</a> </li>
                        <li><a href="/home" @click="toggleNav"> Gallery</a> </li>
                        <li><a href="/home" @click="toggleNav"> Blog</a> </li>
                    </ul>
                    <Button bgColor='bg-[#FFA235]' children='Contact' fntColor="text-[#000066]" btnRounded="rounded-[1rem]" weightFont="font-bold" btnPd="px-[2rem]" fntSize="text-[1.3rem]"/>
                </div>
                <div class="p-3 rounded-lg bg-gray-700 bg-opacity-10">
                    <i class="fa-solid fa-bars cursor-pointer text-[1.5rem]"
                        @click="toggleNav"></i>
                </div>  
        </div>
    </header>



</template>


<script setup>
    import { ref } from 'vue'
    import Button from './Button.vue'
    
    const openNav = ref(false)

    const toggleNav = () =>{ 
        openNav.value = !openNav.value
    }
    
</script> 
