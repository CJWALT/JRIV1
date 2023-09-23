<template>

    
    <div class=" bg-[url('./assets/img/jracad.png')] bg-cover bg-center h-[100vh]">

    <Header navColor="text-white" logo="jrilogo" menuColor="text-white"/>
    <div class="w-[90%] mx-auto flex h-[50vh]"> 
        <div class="self-center">
            <h2 class="font-[Poppins] font-bold text-[3.5rem] text-center text-white">JRI ACADEMY</h2>
            <p class="text-white text-[2vw] font-[Poppins] font-medium text-center" >A six-week weekend value-packed academy on waste management, featuring 
leaders with proven records in the sector.</p>
        </div>
        
    </div>
    </div>

    <div class="mx-auto w-[90%] flex flex-col gap-[2rem] py-[4rem] items-center">
        <div class="">
            <img src="../assets/img/jracademy.jpg" class="rounded-[1.6rem] shadow-lg" />
        </div>
        <div class="">
            <p class="text-[1rem] font-[Poppins] font-normal text-justify mb-[.7rem]">
                JRI Academy is a social enterprise arm of the Just Recycle Initiative. We focus on maximizing the knowledge economy, empowering young people to rise in tackling the challenge of climate change and improper waste management in our world today. The JRI Academy was founded in Nigeria in 2023 to increase youth involvement in climate change activism while we achieve our vision of a "Just sustainable world free of waste and unemployment". The academy offers a fascinating and engaging educational experience that empowers young people to positively impact their communities and beyond with internationally leading experts in the field of Climate change, waste management, innovation, and circular economy. The academy is geared towards contributing to the achievement of the United Nation's sustainable development goal 13: Climate action, providing students with practical skills in problem-solving, critical thinking, and project management through a combination of lectures, workshops, and hands-on activities.
            </p>
            <Button children="Register Now" btnPd="px-[1.5rem]" btnRounded="rounded-[1.5rem]"/>
        </div>
    </div>

</template>


<script setup>
    import Header from '../components/Header.vue'
    import Button from '../components/Button.vue'
</script>