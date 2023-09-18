<template> 

    

    <div class="w-[90%] mx-auto xl:w-[80%]">
        <div class="flex-col flex-wrap py-[4rem] flex gap-[2rem] md:flex-row md:flex-nowrap">
           <div class="grid place-items-center md:w-[50%] md:place-content-center">
                <h4 class="font-[Poppins] text-center md:text-[1rem] md:justify-center lg:text-[2.4rem] md:text-left uppercase font-bold text-[3rem] text-[#000066]">
                    404  page not found 
                </h4>
                <small> it seems you're on the wrong page </small>
                
                <div class="mt-4">
                    <Button children="Go back to homepage" 
                    :handleClick="navHomepage"
                    btnPd="px-[1.5rem]"
                    bgColor="bg-[#FFA235]"
                    fntColor="text-white"
                    btnRounded="rounded-[1.5rem]" />    
                </div>
            </div>
            <div class="overflow-hidden md:w-[40%] w-full">
                <img src="../assets/img/26.png" class="object-contain " />

            </div>

        </div>
    </div>
    


</template>

<script setup> 


    import Button from '../components/Button.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter(); 
    const navHomepage = () =>{ 
        router.push({name:'homepage'})
    }
</script> 