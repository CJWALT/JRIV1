<template> 

        <div class="py-[5.4rem]">
            <div class="mx-auto w-[90%] xl:w-[80%]">
                <h2 
                data-aos="fade" data-aos-duration="300" data-aos-easing="ease-in"
                class="text-[5vw] md:text-[2rem] mb-[2.5rem] mx-auto text-[#000066] font-[Poppins] font-semibold">OUR WORKS SPEAKS FOR ITSELF </h2>
                
            </div>
            <div data-aos="fade" data-aos-duration="300s" data-aos-easing="ease-in" class="">
                <Our_Products :regNow="sendMessage"
                
                />
            </div>
            
            <div data-aos="zoom-in-left" data-aos-duration="300s" data-aos-easing="ease-out" class="">
                <Our_Outreaches/>
            </div>
            <div data-aos="zoom-in" data-aos-duration="600s" data-aos-easing="ease-in">
                <Past_Event/>
            </div>
        </div>
        
    


</template> 



<script setup> 

    import Our_Products from './Our_Products.vue'
    import Our_Outreaches from './Our_Outreaches.vue'
    import Past_Event from './Past_Event.vue'

    import { defineProps } from 'vue'

    const props = defineProps({
        sendMessage: Function
    })

</script>