<template> 

    <div class="bg-[#F2F2F7] relative py-[7.4rem] rounded-tr-[8rem] "> 
        
        <div class="w-[90%] xl:w-[80%] mx-auto">
        <h2 class="font-[Poppins] text-[#000066] font-semibold md:text-[2rem] text-[5vw]">ABOUT US</h2>   
                
      
        <div class=" md:flex-row flex flex-col lg:gap-10 md:gap-10 gap-4 py-4 ">  
        <div class="md:w-[40%] md:self-center">
                    
                    <img src="../assets/img/abb.png" alt="grid image"/>
            </div>  
            <div class="md:w-[60%] lg:self-center">
                
                <p class="text-[.7rem] lg:text-[1rem] md:text-justify mb-[.9rem] font-regular font-[Poppins]">
                    We convert waste into beautiful aesthetic and functional Eco-friendly products. The processes by which we will provide our solution include: Collection of waste through our monthly clean-ups, Sorting, Washing, Warehousing and converting to beautiful and sustainable Eco-friendly product.
                </p>
                <p class="text-[.7rem] lg:text-[1rem] md:text-justify mb-[.9rem] font-regular font-[Poppins]">
                    We are committed to providing innovative solutions to waste management and recycling, converting fabric waste, oil barrels, tires, and other non-biodegradable materials into eco-friendly products that are both beautiful and functional.

                </p>
                <Button children="Learn More"
                 weightFont="font-bold"
                 btnPd="px-[1.5rem]" 
                 bgColor="bg-[#FFA235]" 
                 btnRounded="rounded-[1.5rem]"
                 fntColor="text-white"
                 :handleClick="navAboutUs" 
                 
                 />
            </div>
        </div>
        </div>
      
    </div>
</template>


<script setup>

    import Button from '../components/Button.vue'
    
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const navAboutUs = () =>{ 
        
        router.push({ name: 'about-us' });
    }

</script>