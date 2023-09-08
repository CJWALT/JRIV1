<template> 

        <div class="bg-[url('./assets/img/main-bg.jpg')]  h-full overflow-hidden bg-center bg-cover "> 
            <Header/>
            <main class="flex flex-col md:flex-row py-12 gap-8 md:gap-5 relative w-[90%] mx-auto overflow-hidden ">
                <div class="pt-8 md:order-1 md:w-[58%] md:self-center order-2">
                    <h2 class="font-bold mb-2 text-[9vw] md:text-[5vw] text-[#000066] leading-none font-[Poppins] ">
                        We convert waste <br/> to wealth
                    </h2>
                    <small class="block font-[poppins] font-medium text-[#0F0229] mb-6 text-[1rem]">
                        Waste is everywhere, Recycle one, Save Much.
                    </small>
                    <div>
                     <Button children="Join Us Now!" bgColor='bg-[#FFA235]' btnPd='px-[1.5rem]' weightFont="font-semibold" fntSize="text-[1rem]" fntColor="text-[#000066]" btnRounded="rounded-[1.5rem]" />
                    </div>
                </div>
                <div class="order-1 md:w-[40%] self-center">
                    <img src="../assets//img/main-banner.png" alt="">
                </div>
            </main>
        </div>


        <AboutUs />
        <Our_drive/>
        <Key_Activities/>
</template>


<script setup> 
    import Header from '../components/Header.vue'
    import Button from '../components/Button.vue'
    import AboutUs from '../pages/AboutUs.vue'
    import Our_drive from '../components/Our_drive.vue'
    import Key_Activities from '../components/Key_Activities.vue'

</script>