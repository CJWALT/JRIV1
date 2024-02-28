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

  <div class="w-[90%] xl:w-[80%] mx-auto flex flex-col border-2 border-red-400 md:border-2 md:border-green-400 md:flex-row  justify-center py-[5rem] px-5 gap-5">
    <div v-for="item in activity_items" 
    :key="item.id"
    class="">
        <ActivitiesCard
            :bgColor="item.bgColor"
            :bgOpacity="item.bgOpacity"
            :icon="item.icon"   
            :title="item.title"
            :text="item.text"
        />
  </div>
  </div>
  
  <div class="bg-[#F2F2F7]"> 
    <UpcomingEvent/>
  </div>

   <!-- ourOutreaches -->


    <section class="w-[90%] xl:w-[80%] mx-auto pt-[3rem] pb-[5rem]"> 
      
        <div class="">
          <h2 class="font-[Poppins] font-semibold text-[#000066] text-[2rem] mb-[.7rem]"> Our Outreaches </h2>
          <div>
            <div class="flex w-[80%] mx-auto flex-col gap-8 items-center md:flex-row md:flex-wrap justify-center">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
              <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            </div>
          </div>
        </div>

      </section>


   <!-- end of our ourtreaches -->

       
   <!-- our past events -->

   <section class="bg-[#F2F2F7] pt-[3rem] pb-[5rem]"> 
      
      <div class="w-[90%] xl:w-[80%] mx-auto">
        <h2 class="font-[Poppins] font-semibold text-[#000066] text-[2rem] mb-[.7rem]"> Our Past Events </h2>
        <div>
          <div class="flex w-[80%] mx-auto flex-col gap-8 items-center md:flex-row md:flex-wrap justify-center">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
            <img src="../assets/img/bagbg.png" class="w-[36%] md:w-[26%]" alt="bag ankara">
          </div>
        </div>
      </div>

    </section>


 
   <!-- end of our past events -->


  <div>
    <Humble_Act />
 </div>
    <Testimonial />

</template>

<script setup> 
    import Header from '../components/Header.vue'
    import Humble_Act from '../components/Humble_Act.vue';
    import activity_data from '../activities_card_data.json'
    import Testimonial from '../components/Testimonial.vue';
    import UpcomingEvent from '../components/UpcomingEvent.vue';
    import ActivitiesCard from '../components/ActivitiesCard.vue';
    
    
    const activity_items= activity_data

</script>