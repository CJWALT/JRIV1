<template> 

    <div class="bg-[#F2F2F7] relative py-[7.4rem] rounded-tr-[8rem] "> 
       <div class="w-[90%] md:flex-row flex flex-col lg:gap-10 md:gap-5 gap-4 py-4 mx-auto">  
            <div class="grid grid-cols-7 grid-rows-7 gap-4 md:w-[50%]">
                    <div class="img-oneU">
                        <img src="../assets/img/img-one.png" alt="people gathering" class="w-[100%] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                
                    <span class="bg-[#000066] rounded-[0.5rem] abs-box">
                    </span>

                    <div class="z-10 img-twoU">
                        <img src="../assets/img/img-two.png" alt="people gathering" class="w-[100%] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                    <div class="img-threeU">
                        <img src="../assets/img/img-three.png" alt="people gathering" class="w-[100%] object-contain rounded-[1rem] shadow-lg h-auto"/>
                    </div>
                    <span class="abs-boxTwo bg-[#000066] w-[9rem] rounded-[0.5rem] ">
                    </span>
            </div>  
            <div class="md:w-[48%] lg:self-center ">
                <h2 class="font-[Poppins] text-[#000066] font-semibold text-[2rem]">About Us</h2>
                <p class="font-[1rem] mb-[.9rem] font-regular font-[Poppins]">
                    We convert waste into beautiful aesthetic and functional Eco-friendly products. The processes by which we will provide our solution include: Collection of waste through our monthly clean-ups, Sorting, Washing, Warehousing and converting to beautiful and sustainable Eco-friendly product.
                </p>
                <Button children="Learn More" btn-pd="px-[1.5rem]" />
            </div>
        </div>
    </div>
</template>


<script setup>

    import Button from '../components/Button.vue'

</script>