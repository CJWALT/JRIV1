<template> 

        <div class="py-[5.4rem]">
            <div class="mx-auto w-[90%] xl:w-[80%]">
                <h2 class="text-[5vw] md:text-[2rem] mb-[2.5rem] mx-auto text-[#000066] font-[Poppins] font-semibold">OUR WORKS SPEAKS FOR ITSELF </h2>
                
            </div>
            <div class="mb-[1.3rem]">
                <Our_Products :regNow="sendMessage"/>
            </div>
            <div class="mb-[1.3rem]">
                <Our_Outreaches/>

            </div>
            <div>
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