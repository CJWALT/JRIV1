<template>

        
<div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/aboutus.jpg')] rounded-br-[190px]">
    <Header navColor="text-white" logo="jrilogo" menuColor="text-white" />
    <div class="w-[90%] xl:w-[80%] mx-auto pt-[5.2rem] h-[28rem]">
      <div class="">
        <h2
          class="font-[Poppins] font-bold text-[10vw] text-center text-white md:text-[3.5rem]"
        >
          Our Activities
        </h2>
        <p
          class="text-white text-[3vw] md:text-[1rem] font-[Poppins] font-medium text-center md:w-[75%] lg:w-[60%] xl:w-[58%] md:mx-auto"
        >

         <strong> Our activities includes: </strong> monthly clean-ups, Sorting, Washing, Warehousing and converting 
            to beautiful and sustainable Eco-friendly product.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-[#F2F2F7]"> 
    <UpcomingEvent/>
  </div>



</template>

<script setup> 
    import Header from '../components/Header.vue'
    import UpcomingEvent from '../components/UpcomingEvent.vue';
    
    

</script>