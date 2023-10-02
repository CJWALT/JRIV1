<template>
  <div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/aboutus.jpg')]">
    <Header navColor="text-white" logo="jrilogo" menuColor="text-white" />
    <div class="w-[90%] xl:w-[80%] mx-auto pt-[7.2rem] h-[28rem] lg:h-[32rem]">
      <div class="">
        <h2
          class="font-[Poppins] font-bold text-[10vw] text-center text-white md:text-[3.5rem]"
        >
          About Us
        </h2>
        <p
          class="text-white text-[3vw] md:text-[1rem] font-[Poppins] font-medium text-center md:w-[75%] lg:w-[60%] xl:w-[50%] md:mx-auto"
        >
          We are expert solution provider in the conversion of waste to
          beautiful, aesthetic Eco-friendly products.
        </p>
      </div>
    </div>
  </div>

  <div class="w-[90%] mx-auto xl:w-[80%]">
    <p class="py-[5rem] text-[.7rem] md:text-[1rem] font-normal text-justify font-[Poppins]">
      We convert waste into beautiful aesthetic and functional Eco-friendly
      products. The processes by which we will provide our solution include:
      Collection of waste through our monthly clean-ups, Sorting, Washing,
      Warehousing and converting to beautiful and sustainable Eco-friendly
      product. <br/>We are committed to providing innovative solutions to waste
      management and recycling, converting fabric waste, oil barrels, tires, and
      other non-biodegradable materials into eco-friendly products that are both
      beautiful and functional. Over the years, we have successfully reached and
      empowered over 1,500 youths from various regions in Nigeria through our
      projects and campaign strategies. Our team of experts boasts over 25 years
      of experience in various fields, including project planning and execution,
      art and design, and sustainability, among others. <br/> We convert waste into
      beautiful aesthetic and functional Eco-friendly products. The processes by
      which we will provide our solution include: Collection of waste through
      our monthly clean-ups, Sorting, Washing, Warehousing and converting to
      beautiful and sustainable Eco-friendly product.<br/> We are committed to
      providing innovative solutions to waste management and recycling,
      converting fabric waste, oil barrels, tires, and other non-biodegradable
      materials into eco-friendly products that are both beautiful and
      functional. Over the years, we have successfully reached and empowered
      over 1,500 youths from various regions in Nigeria through our projects and
      campaign strategies. Our team of experts boasts over 25 years of
      experience in various fields, including project planning and execution,
      art and design, and sustainability, among others.
    </p>
  </div>
  <div class="bg-[#f2f2f7]">
    <Our_drive />
  </div>

    <div class="w-[90%] mx-auto py-[5rem] xl:w-[80%]">
        
            <h2 class="text-[5vw] text-[#000066] font-semibold font-[Poppins] mb-[.4rem] md:text-[2rem]">OUR SDGs FOCAL POINT</h2>
            <p class="mb-[1rem] font-[Poppins] text-black font-normal text-[1rem]">We are particular about the following SDGs:</p>
            <div class="flex flex-row gap-8 overflow-x-scroll scroll-width">
                <img src="../assets/img/goltre.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
                <img src="../assets/img/goalsix.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
                <img src="../assets/img/golfor.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
                <img src="../assets/img/golthir.png" alt="" class="w-[9.4rem] h-[9.5rem] shadow-lg">
                <img src="../assets/img/goleig.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
                <img src="../assets/img/golnin.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
                <img src="../assets/img/golsev.png" alt="" class="w-[7.6rem] h-[7.7rem] shadow-lg">
            </div>
        </div>
  <Our_team />
</template>

<script setup>
import Header from "../components/Header.vue";
import Our_drive from "../components/Our_drive.vue";
import Our_team from "../components/Our_team.vue";
</script>
