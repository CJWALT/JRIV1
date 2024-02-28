<template> 


    <div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/galban.png')] rounded-br-[190px]">
        <Header navColor="text-white" logo="jrilogo" menuColor="text-white" />
        <div class="w-[90%] xl:w-[80%] mx-auto pt-[5.2rem] h-[28rem]">
          <div class="">
            <h2
              class="font-[Poppins] font-bold text-[10vw] text-center text-white md:text-[3.5rem]"
              
              >
              Gallery
            </h2>
            <p
              class="text-white text-[3vw] md:text-[1rem] font-[Poppins] font-medium text-center md:w-[75%] lg:w-[60%] xl:w-[58%] md:mx-auto"
            >
                We convert waste to Fashion, Furniture, and Art (FFA). We also empower
                youths and women from low Income background.
            </p>
          </div>
        </div>
      </div>  

      <!-- waste to fashion section  -->
      <section class=" pt-[3.4rem] pb-[4rem] border-2 w-[78%] mx-auto border-red-400">
          <div> 

            <h2 class="font-[Poppins] font-semibold text-[2rem] text-[#000066] mb-[1rem] ">Waste to Fashion</h2>
            <div class="mx-auto w-[80%] border-2 border-red-400 flex flex-col gap-[.7rem] items-center">
              <img src="../assets/img/evone.png" class="w-[50%] md:w-[60%] lg:border-2 lg:border-red-400"/>
              
            </div>

          </div> 
      </section>  
      <!-- end -->


      <!-- waste to furniture -->

      <section class="border-2 w-[78%] mx-auto border-red-400">
          <div> 

            <h2>Waste to fashion</h2>
            <div>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
            </div>

          </div> 
      </section>


      <!-- end -->

      <!-- waste to arts -->

      <section class="border-2 w-[78%] mx-auto border-red-400">
          <div> 

            <h2>Waste to fashion</h2>
            <div>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
              <img src="../assets/img/evone.png"/>
            </div>

          </div> 
      </section>


        <!-- end -->
</template>

<script setup> 
    import Header from '../components/Header.vue'
</script>