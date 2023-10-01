<template>
    <div class="w-[90%] mx-auto xl:w-[80%]">
        <div class="py-[7.4rem]">
            <h2 class="mb-[1.7rem] md:text-[2rem] text-[5vw] font-semibold text-[#000066] font-[Poppins]">OUR DRIVE</h2>

            <div class="flex flex-col md:flex-row md:justify-center lg:flex-nowrap md:flex-wrap px-10 gap-10">
                <div v-for="ourDrive in driveData" :key="ourDrive.id"  class="text-center md:w-[45%] grid place-items-center md:block first-letter:lg:w-[33.3%] ">

                    
                        <Card
                        :icon="ourDrive.icon"
                        :title="ourDrive.title"
                        :text="ourDrive.text" />
                    
                    
                    <!-- <img :src= "getIcon(ourDrive.icon)" alt="" class="mx-auto w-10" />
                    <h4 class="text-[1.5rem] font-semibold text-[#000066] font-[Poppins] mb-[.5rem]">{{ ourDrive.title }}</h4>
                    <p class="text-[1rem] font-normal font-[Poppins]">
                    {{ ourDrive.text }}
                    </p> -->
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