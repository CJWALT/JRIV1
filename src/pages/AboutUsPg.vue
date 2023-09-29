<template>
  <div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/aboutus.jpg')]">
    <Header navColor="text-white" logo="jrilogo" menuColor="text-white" />
    <div class="w-[90%] xl:w-[80%] mx-auto pt-[7.2rem] h-[32rem]">
      <div class="">
        <h2
          class="font-[Poppins] font-bold text-[10vw] text-center text-white md:text-[3.5rem]"
        >
          About Us
        </h2>
        <p
          class="text-white text-[3vw] md:text-[1rem] font-[Poppins] font-medium text-center lg:w-[70%] lg:mx-auto"
        >
          We are expert solution provider in the conversion of waste to
          beautiful, aesthetic Eco-friendly products.
        </p>
      </div>
    </div>
  </div>

  <div class="w-[90%] mx-auto">
    <p class="py-[5rem]">
      We convert waste into beautiful aesthetic and functional Eco-friendly
      products. The processes by which we will provide our solution include:
      Collection of waste through our monthly clean-ups, Sorting, Washing,
      Warehousing and converting to beautiful and sustainable Eco-friendly
      product. We are committed to providing innovative solutions to waste
      management and recycling, converting fabric waste, oil barrels, tires, and
      other non-biodegradable materials into eco-friendly products that are both
      beautiful and functional. Over the years, we have successfully reached and
      empowered over 1,500 youths from various regions in Nigeria through our
      projects and campaign strategies. Our team of experts boasts over 25 years
      of experience in various fields, including project planning and execution,
      art and design, and sustainability, among others. We convert waste into
      beautiful aesthetic and functional Eco-friendly products. The processes by
      which we will provide our solution include: Collection of waste through
      our monthly clean-ups, Sorting, Washing, Warehousing and converting to
      beautiful and sustainable Eco-friendly product. We are committed to
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

    <div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro quae quis.
                </p>

        </div>
    </div>
  <Our_team />
</template>

<script setup>
import Header from "../components/Header.vue";
import Our_drive from "../components/Our_drive.vue";
import Our_team from "../components/Our_team.vue";
</script>
