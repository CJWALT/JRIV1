<template>

    <div class="py-[7.4rem] bg-[#F2F2F7]"> 
        <div class="w-[90%] mx-auto xl:w-[80%]">
            <h2 
            data-aos="fade-in" data-aos-duration="300s" data-easing="ease-in"
            class="font-[Poppins] mb-[3.5rem] md:text-[2rem] text-[5vw] text-[#000066] font-semibold"> 
                OUR KEY ACTIVITIES
            </h2>            

            <div class="px-5 gap-10 flex flex-col md:flex-row md:flex-wrap md:gap-10 md:justify-center xl:gap-y-10 xl:gap-10 lg:px-0 xl:px-5"> 
                <div v-for="item in activity_items" :key="item.id" class="text-center grid place-items-center md:block align-center md:w-[45%] lg:w-[30%] xl:w-[30%] ">
                    <Card
                    data-aos="fade-in" data-aos-duration="300s" data-easing="ease-in"
                        :icon="item.icon"
                        :title="item.title"
                        :text="item.text"
                    />
                </div>
            </div>

        </div>
    </div>
</template> 

<script setup>
    
    
    import activity_data from '../activity_data.json'
    import Card from './Card.vue';
    const activity_items= activity_data
</script>