<template> 

        <div class="bg-[url('./assets/img/main-bg.jpg')]  h-full overflow-hidden bg-center bg-cover "> 
            <Header logo="Jrlogo" navColor="text-[#000066]" menuColor="text-black"/>
            <main class="flex flex-col md:flex-row pt-12 pb-20  gap-8 md:gap-5 relative w-[90%] mx-auto overflow-hidden xl:w-[80%] xl:gap-8 ">
                <div class="pt-8 md:order-1 md:w-[58%] md:self-center order-2 xl:w-[50%]">
                    <h2 class="font-bold mb-2 text-[9vw] md:text-[5vw] text-[#000066] leading-none font-[Poppins] xl:text-[4vw] ">
                        We convert waste <br/> to wealth
                    </h2>
                    <small class="block font-[poppins] font-medium text-[#0F0229] mb-6 text-[.8rem] md:text-[1rem] ">
                        Waste is everywhere, Recycle one, Save Much.
                    </small>
                    <div>
                     <Button children="Join Us Now!"
                     bgColor='bg-[#FFA235]' 
                     btnPd='px-[1.5rem]'
                     weightFont="font-semibold"
                     fntSize="text-[1rem]" 
                     fntColor="text-[#000066]" 
                     btnRounded="rounded-[1.5rem]" 
                     :handleClick="joinWhatsappGroup"/>
                    </div>
                </div>
                <div class="order-1 md:w-[40%] self-center xl:w-[48%]">
                    <img src="../assets/img/main-banner.png" alt="" class="xl:w-[100%] object-contain">
                </div>
            </main>
            <AboutUs />
        </div>


        
        <Our_drive/>
        <Key_Activities/>
        <UpcomingEvents :sendMessage="sendWhatsapp"/>
        <Jri_Academy />
        <Our_Works :sendMessage= "sendWhatsapp"/>
        <Our_team/>
        <Humble_Act/>
        <Testimonial/>
</template>


<script setup> 
    import Header from '../components/Header.vue'
    import Button from '../components/Button.vue'
    import AboutUs from '../pages/AboutUs.vue'
    import Our_drive from '../components/Our_drive.vue'
    import Key_Activities from '../components/Key_Activities.vue'
    import UpcomingEvents from '../components/UpcomingEvent.vue'
    import Jri_Academy from '../components/Jri_Academy.vue'
    import Our_Works from '../components/Our_Works.vue'
    import Our_team from '../components/Our_team.vue'
    import Humble_Act from '../components/Humble_Act.vue'
    import Testimonial from '../components/Testimonial.vue'


    const joinWhatsappGroup = () =>{
        const groupLink = 'http://bit.ly/JRI_Genius'

        window.open(groupLink, '_blank')
    }

    const sendWhatsapp = () =>{
        const no = 'http://wa.me/2347069694395'

        window.open(no, '_blank')
    }

</script>