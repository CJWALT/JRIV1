

<template>  

    <header class="py-10  w-full">
        <div class="relative w-[90%] mx-auto flex items-center lg:gap-10 justify-between xl:w-[80%]">
               <router-link to="/"> <img :src="`/img/${props.logo}.png`" class="w-[3rem] md:w-[6rem]" alt="just recycle"/> </router-link> 
                <div :class="{'hidden' : !openNav, 'block': openNav}" class="absolute z-10 top-0 right-0 bg-[#a2a2cc] rounded-md p-8 text-red-400 font-[Poppins] lg:w-[70%] lg:relative lg:flex lg:flex-row lg:justify-between lg:gap-5 lg:p-0 lg:bg-transparent xl:w-[58%]">
                    <ul :class="[props.navColor, 'font-semibold text-[1rem] mb-4 grid gap-2 lg:flex lg:self-center lg:mb-0 lg:gap-5' ]">
                        <li class="relative"><router-link to ="/"  exact  active-class="active" @click="toggleNav"> Home</router-link> </li>
                        <li class="relative"><router-link to ="/about-us/full"  exact  active-class="active" @click="toggleNav"> About </router-link></li>
                        <li class="relative"><router-link to="/activities"  exact  active-class="active" @click="toggleNav"> Activities</router-link> </li>
                        <li class="relative"><router-link to="/academy" exact   active-class="active" @click="toggleNav"> Academy</router-link> </li>
                        <li class="relative"><router-link to="/gally" exact   active-class="active" @click="toggleNav"> Gallery</router-link> </li>
                        <li class="relative"><router-link to="/blo"  exact active-class="active"  @click="toggleNav"> Blog</router-link> </li>
                    </ul>
                    <Button bgColor='bg-[#FFA235]'
                        children='Contact'
                        fntColor="text-[#000066]" 
                        btnRounded="rounded-[1rem]" 
                        weightFont="font-bold"
                        btnPd="px-[2rem]"
                        fntSize="text-[1.3rem]"
                        :handleClick="handleEmail"
                        />
                </div>
                <div class="p-3 rounded-lg bg-gray-700 lg:hidden bg-opacity-10">
                    <i :class="[props.menuColor, 'fa-solid fa-bars cursor-pointer text-[1.5rem]']"
                        @click="toggleNav"></i>
                </div>  
        </div>
    </header>



</template>


<script setup>
    import { ref } from 'vue'
    import Button from './Button.vue'
    
    const openNav = ref(false)

    const props = defineProps({ 
        logo:String,
        navColor:String,
        menuColor:String,
    })

    const toggleNav = () =>{ 
        openNav.value = !openNav.value;
    }

    const handleEmail = () =>{ 

        const myEmail = 'justrecycle1@gmail.com';
        
        const mailtoUri = `mailto:${myEmail}`;

        window.location.href = mailtoUri;
        toggleNav()

    }


    
</script> 
