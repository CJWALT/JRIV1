<template>
    <div class="w-[90%] mx-auto xl:w-[80%]">
        <div class="py-[7.4rem]">
            <h2 data-aos="fade" data-aos-duration="300s" data-aos-easing="ease-in" class="mb-[1.7rem] md:text-[2rem] text-[5vw] font-semibold text-[#000066] font-[Poppins]">OUR DRIVE</h2>

            <div class="flex flex-col md:flex-row md:justify-center lg:flex-nowrap md:flex-wrap px-10 gap-10">
                <div v-for="ourDrive in driveData" :key="ourDrive.id"  class="text-center md:w-[45%] grid place-items-center md:block first-letter:lg:w-[33.3%] ">
                        <Card
                        data-aos="fade" 
                        data-aos-duration="300s" 
                        data-aos-easing="ease-out"
                        :icon="ourDrive.icon"
                        :title="ourDrive.title"
                        :text="ourDrive.text" />
                </div>
            </div>
        </div>
            
        </div>
    

</template>

<script setup>

import ourDriveData from '../drive_data.json'
// import {ref} from 'vue';
import {getIcon} from '../iconutil.js'
import Card from './Card.vue';



const driveData = ourDriveData

</script>