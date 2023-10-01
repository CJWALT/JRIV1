<template> 

    <div class=" bg-[#ECE7F9]">


        <div class=" w-[90%] mx-auto py-[7.4rem] xl:w-[80%]">
            
        <h2 class="font-[Poppins] mb-[1.5rem] md:text-[2rem] text-[5vw] font-semibold text-[#000066]">JRI ACADEMY</h2>

            <div class="flex flex-col md:flex-row gap-8 justify-center md:px-0 px-5"> 

                    <div class=" md:w-[40%] self-center">
                        <img src="../assets/img/jracademy.jpg" class="lg:w-[100%] shadow-lg rounded-[1.3rem] md:w-[24rem] w-[14rem]" alt="">
                    </div>
                    
                    <div class="md:w-[58%] md:self-center">
                        <p class=" mb-[.8rem] text-justify text-[.7rem] lg:text-[1rem] font-normal font-[Poppins]">
                            The JRI Academy is an engaging 6-week program slated to take begin on October 21, 2023, with a combination of lectures, workshops, hands-on activities, and an environmental-based capstone project. The weekly sessions will hold via Google Meet virtually from 4:00 pm - 6:00 pm each weekend (Saturday and Sunday) throughout the period of the fellowship. All participants are therefore advised to attend and ensure full participation in the session. 
                            The academy will be crowned by the "I Think Recycle Festival" where all knowledge gained through the period of the academy will be put into physical practice.
                        </p>
                        <div class="self-center flex flex-col items-center md:block"> 
                            <Button children="Apply Now" bgColor="bg-[#FFA235]" btnRounded="rounded-[1.5rem]" btnPd="px-[1.5rem]" fntColor="text-white" :handleClick="applyNow"/>
                        </div>
                    </div>
            </div>

        </div>

    </div>

</template>

<script setup>
        import Button from './Button.vue'

        const applyNow = () => {
            const googleForm = 'http://bit.ly/JRIAcademyApplication'

            window.open(googleForm, '_blank')
        }
</script>