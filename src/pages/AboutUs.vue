<template> 

    <div class="bg-[#F2F2F7] relative py-[7.4rem] rounded-tr-[8rem] "> 
       <div class="w-[90%] xl:w-[80%] md:flex-row flex flex-col lg:gap-10 md:gap-10 gap-4 py-4 mx-auto">  
            <div class="md:w-[40%] w-[60%] md:self-center">
                    <!-- <div class="img-oneU h-20 border-2 border-red-400 w-20">
                        <img src="../assets/img/img-one.png" alt="people gathering" class="w-[40vw] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                
                    <span class="h-20 w-20 bg-[#000066] rounded-[0.5rem] abs-box">
                    </span>

                    <div class="h-20 w-20 z-10  border-2 border-red-400 img-twoU">
                        <img src="../assets/img/img-two.png" alt="people gathering" class="w-[35vw] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                    <div class="h-20 w-20 img-threeU">
                        <img src="../assets/img/img-three.png" alt="people gathering" class="w-[30vw] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                    <span class="h-20 abs-boxTwo bg-[#000066] w-[9rem] rounded-[0.5rem] ">
                    </span> -->
                    <img src="../assets/img/abb.png" alt="grid image"/>
            </div>  
            <div class="md:w-[60%] lg:self-center ">
                <h2 class="font-[Poppins] text-[#000066] font-semibold md:text-[2rem] text-[5vw]">ABOUT US</h2>
                <p class="text-[.7rem] lg:text-[1rem] md:text-justify mb-[.9rem] font-regular font-[Poppins]">
                    We convert waste into beautiful aesthetic and functional Eco-friendly products. The processes by which we will provide our solution include: Collection of waste through our monthly clean-ups, Sorting, Washing, Warehousing and converting to beautiful and sustainable Eco-friendly product.
                </p>
                <p class="text-[.7rem] lg:text-[1rem] md:text-justify mb-[.9rem] font-regular font-[Poppins]">
                    We are committed to providing innovative solutions to waste management and recycling, converting fabric waste, oil barrels, tires, and other non-biodegradable materials into eco-friendly products that are both beautiful and functional.

                </p>
                <Button children="Learn More"
                 btnPd="px-[1.5rem]" 
                 bgColor="bg-[#FFA235]" 
                 btnRounded="rounded-[1.5rem]"
                 fntColor="text-white"
                 :handleClick="navAboutUs" />
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