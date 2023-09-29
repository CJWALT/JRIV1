<template>

    
<div class="h-auto aboutus-banner shadow-xl bg-[url('../src/assets/img/acabanner.jpg')]">
    <Header navColor="text-white" logo="jrilogo" menuColor="text-white" />
    <div class="w-[90%] xl:w-[80%] mx-auto pt-[7.2rem] h-[32rem]">
        <div class="">
            <h2 class="font-[Poppins] font-bold text-[10vw] text-center text-white md:text-[3.5rem]">JRI ACADEMY</h2>
            <p class="text-white text-[3vw] md:text-[1rem] font-[Poppins] font-medium text-center lg:w-[70%] lg:mx-auto" >A six-week weekend value-packed academy on waste management, featuring 
leaders with proven records in the sector.</p>
        </div>
        
    </div>
    </div>

    <div class="mx-auto w-[90%] xl:w-[80%] flex flex-col md:flex-row gap-[2rem] py-[4rem]">
        <div class="md:w-[40%]">
            <img src="../assets/img/jracademy.jpg" class="rounded-[1.6rem] shadow-lg w-[14rem] md:w-auto mx-auto" />
        </div>
        <div class="self-center md:w-[60%]">
            <p class="text-[1rem] font-[Poppins] font-normal text-justify mb-[.7rem] leading-[1.5rem]">
                JRI Academy is a social enterprise arm of the Just Recycle Initiative.
                 We focus on maximizing the knowledge economy, empowering young people to rise in 
                 tackling the challenge of climate change and improper waste management in our world today.
                The JRI Academy was founded in Nigeria in 2023 to increase youth involvement in climate change
                activism while we achieve our vision of a "Just sustainable world free of waste and unemployment". 
                The academy offers a fascinating and engaging educational experience that empowers young people to positively
                impact their communities and beyond with internationally leading experts in the field of Climate change, waste management, innovation, and circular economy. 
                The academy is geared towards contributing to the achievement of the United Nation's sustainable development goal 13: Climate action, providing students with
                practical skills in problem-solving, critical thinking, and project management through a combination of lectures, workshops, and hands-on activities.
            </p>
            <Button children="Register Now"
             btnPd="px-[1.5rem]"
              btnRounded="rounded-[1.5rem]"
               bgColor="bg-[#FFA235]"
               fntColor="text-white"
               weightFont="text-bold"/>
        </div>
    </div>

    <div class="bg-[#f2f2f7] py-[5rem]">
        <div class="w-[90%] xl:w-[80%] mx-auto">
            <h2 class="text-[2rem] font-[Poppins] text-[#000066] font-bold mb-[1.5rem]">OUR DRIVE </h2>

            <div class="flex flex-col gap-5 items-center md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center md:gap-y-9">
                <Card icon="mission"
                title="Mission"
                text="Promoting eco-friendly waste solutions, empowering youth with profitable skills, and fostering responsible waste management in young minds."/>  
            <Card icon="vision"
                title="Vision"
                text="To become a leading institution that empowers young people with the necessary skills to create a sustainable and waste-free world while reducing unemployment."/>  
            <Card icon="approach"
                title="Approach"
                text="Each year, our hybrid Academy features top global climate change experts, empowering youth to create positive community and global impacts."/>  
            </div>
            
        </div>
        
    </div>

    <div class="w-[90%] xl:w-[80%] mx-auto py-[5rem]">

        <div>
            <h2 class="font-[Poppins] font-bold text-[5vw] mb-9 text-[#000066]">"I THINK RECYCLE" FESTIVAL</h2>
            <div class="flex flex-col md:flex-row gap-10"> 
                <div class="md:w-[50%] xl:w-[40%]">
                    <img src="../assets/img/jracademy.jpg" class="rounded-[1.5rem] shadow-lg w-[14rem] md:w-full mx-auto"/>
                </div>
                <div class="md:w-[50%] xl:w-[60%] xl:self-center">
                <p class="font-[Poppins] font-normal text-[1rem] leading-[1.5rem] text-justify">
                    The I Think Recycle Festival, organized by JRI Academy, is a hybrid event that brings together students, #
                    professionals, community members, and organizations.
                     The festival offers a curated selection of activities
                      designed by JRI Academy geniuses, aimed at promoting
                       creativity, education, social interaction, and sustainability.
                        The festival includes workshops, clean-up drives, webinars/seminars,
                         research presentations, and exhibitions. While the event covers a range of causes,
                          it primarily focuses on environmental problems, climate change, and waste management.
                          The urgency of the climate crisis necessitates that African youth take responsibility for addressing this challenge in their respective regions.
                          <br/> However, this can only happen if they are equipped with the necessary skills to do so.
The festival represents the consolidation of JRI academy initiatives at a regional level, conceived, propelled, and executed by the JRI academy's geniuses.
                </p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#F2F2F7]">
        <div class="w-[90%] xl:w-[80%] mx-auto py-[5rem]">
            <h2 class="font-[Poppins] font-bold text-[2rem] text-[#000066] mb-[1.5rem]">WHAT YOU WILL LEARN</h2>
                <p class="font-[Poppins] text-[1rem] leading-[1.6rem] text-justify mb-[1.4rem]">The JRI Academy offers a comprehensive program that equips African youth with the necessary skills to address the challenge of Climate Change. Our program is designed to empower students to establish ventures that generate economic value for themselves and their communities, while also creating solutions for environmental sustainability.
Upon completion of the program, students will have:
</p>
        <div class="flex flex-col gap-5 md:justify-center academy-learn md:flex-row md:flex-wrap lg:gap-y-9">

            <div class="bg-[#000066] text-white">
                <p>Gained a deep understanding of waste management and its importance in addressing Climate Change</p>
            </div> 
            <div class="bg-[#FEBD01] text-[#000066]">
            <p>Honed their skills in creative thinking, problem-solving, and economic value generation</p>
            </div> 
            <div class="bg-[#00FFFF] text-[#000066]">
                <p>The ability to develop a viable and practical idea that effectively tackles Climate Change</p>
            </div> 
            <div class="bg-[#000066] text-white">
                <p>Learn how to secure funding for their waste management project</p>
            </div> 
            <div class="bg-[#00FFFF] text-[#000066]">
                <p>Learn how to think innovatively and creatively, enabling them to create a capital venture from waste management.</p>
            </div> 



        </div>

        </div>
    </div>

</template>


<script setup>
    import Header from '../components/Header.vue'
    import Button from '../components/Button.vue'
    import Card from '../components/Card.vue'
</script>