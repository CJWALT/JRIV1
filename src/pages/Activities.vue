<template>

        
<div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/act-banner.jpg')] rounded-br-[190px]">
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

  <div class="w-[90%] mx-auto flex flex-col md:flex-row md:flex-wrap justify-center py-[5rem] px-5 gap-5">
    <div v-for="item in activity_items" 
    :key="item.id"
    class="text-center py-[1rem] grid place-items-center md:block align-center md:w-[45%] lg:w-[30%] xl:w-[30%] " 
    :style="{
        backgroundColor: 'rgba(255, 0, 0, 0.6), rgba(0, 0, 255, 0.6)',
        backgroundImage:'url(.../assets/img/acabanner.jpg)' 
    } ">
        <Card
            :icon="item.icon"   
            :title="item.title"
            :text="item.text"
        />
  </div>
  </div>
  
  <div class="bg-[#F2F2F7]"> 
    <UpcomingEvent/>
  </div>

  <div>
    <Humble_Act />
 </div>
    <Testimonial />

</template>

<script setup> 
    import Header from '../components/Header.vue'
    import Humble_Act from '../components/Humble_Act.vue';
    import activity_data from '../activity_data.json'
    import Testimonial from '../components/Testimonial.vue';
    import UpcomingEvent from '../components/UpcomingEvent.vue';
import Card from '../components/Card.vue';
    
    
    const activity_items= activity_data

</script>