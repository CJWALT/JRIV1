<template> 


<div>
        
    
    
    <section class="py-[7.4rem] bg-[url('./assets/img/sub-banner.png')] bg-cover bg-no-repeat mb-[7.5rem]" >

        <div class="w-[90%] xl:w-[80%] mx-auto items-center text-center flex flex-col">
            <h3 class="text-[#ffff] text-[4vw] md:text-[2rem] font-[Poppins] font-semibold  ">Subscribe to our newsletter </h3>
            <small class="font-[Poppins] font-normal md:text-[1rem] text-[2vw] mb-6 text-white">Join the JRI family to get latest news, updates and special offers.</small>
            <form class="w-full">
                <input type="email"
                class="w-[90%] h-[2.87rem] rounded-[1.5rem] mb-3 md:w-[41rem] "
                onChange=""/>
                
                <div>
                    <Button children="Subscribe" btnRounded="rounded-[1rem]" bgColor="bg-[#FFA235]" btnPd="px-[1.5rem]"/>
                </div>
            </form>
        </div>

</section>


    <footer class=" bg-[#000066]">

        <div class="mx-auto md:justify-between md:gap-[2rem] w-[90%] xl:w-[80%] md:flex md:flex-row md:flex-wrap py-[7.4rem] text-white">
            <div class="md:w-[30%]"> 

                <div class="w-[5.8rem] mb-[.9rem]">
                   <router-link to="/"><img src="../assets/img/jrilogo.png" alt="just logo 2" /></router-link>
                </div>
                <p class="font-[Poppins] font-normal text-[.8rem] w-[60%] md:w-auto xl:w-[60%] lg:w-[90%] mb-[1.7rem]">
                    We convert waste into beautiful, aesthetic and functional eco-friendly products. 
                </p>
                <div class="flex flex-row gap-2">
                    <a href="https://www.facebook.com/profile.php?id=100060847144128"><img src="../assets/img/facebook.svg" alt="icons" class="w-[1.8rem] lg:w-[2rem]"/> </a>
                    <a href="https://www.instagram.com/just_recycle_initiative"><img src="../assets/img/instagram.svg" alt="icons" class="w-[1.8rem] lg:w-[2rem]"/> </a>
                    <a href="https://x.com/_Justrecycle"><img src="../assets/img/twitter.svg" alt="icons" class="w-[1.8rem] lg:w-[2rem]"/> </a>
                    <a href="https://www.linkedin.com/company/just-recycle-initiative/"><img src="../assets/img/twitter.svg" alt="icons" class="w-[1.8rem] lg:w-[2rem]"/> </a>
                    <a href="https://www.tiktok.com/@just_recycle_initiative"><img src="../assets/img/twitter.svg" alt="icons" class="w-[1.8rem] lg:w-[2rem]"/> </a>
                    
                </div>

            </div>  
            <div class="mt-[2rem] text-[1rem]"> 
                <h4 class="font-[Poppins] font-bold mb-1 ">Permalinks</h4>
                <ul>
                    <li class="font-[Poppins] font-medium mb-[.6rem]"><router-link to="/" class="">Home</router-link> </li>
                    <li class="font-[Poppins] font-medium mb-[.6rem]"><router-link to="#">About</router-link></li>
                    <li class="font-[Poppins] font-medium mb-[.6rem]"><router-link to="#">Activities</router-link></li>
                    <li class="font-[Poppins] font-medium mb-[.6rem]"><router-link to="#">Gallery</router-link></li>
                    <li class="font-[Poppins] font-medium"><router-link to="#">Blog</router-link>    </li>
                </ul>
                
            </div>  
            <div class="mt-[2rem] font-[Poppins]">
                <h4 class="text-[1rem] font-bold mb-1">Policies</h4>
                <ul class="font-medium">
                    <li class="mb-[.6rem]"><router-link to="#">Shipping Policy</router-link></li>
                    <li class="mb-[.6rem]"><router-link to="#">Refund Policy</router-link></li>
                    <li class="mb-[.6rem]"><router-link to="#">Terms and Condition</router-link></li>
                    <li class="mb-[.6rem]"><router-link to="#">Privacy Policy</router-link></li>
                    <li><router-link to="#">Payment</router-link></li>
                </ul>
            </div>
            <div class="mt-[2rem] flex flex-col gap-8">
                <div>
                    <h4 class="font-bold font-[Poppins] text-[1rem]">Business Enquiry</h4>
                    <small class="font-medium text-[1rem] font-[Poppins] "> 25, Efosa Street, off Agbonma Street, <br/> Ekehuan Road, Benin City, Edo State.</small>
                </div>
                <div>
                    <h4 class="font-bold font-[Poppins] text-[1rem]">Customer Support</h4>
                    <small class="font-medium text-[1rem] block font-[Poppins]">info@justtravels.com</small>
                    <small class="font-medium text-[1rem] font-[Poppins]">+2347059994436</small>
                </div>
            </div>
        </div>

        

        <small class="text-center w-full text-white">&copy; Just Recycle Initiative 2023</small>

    </footer>
    

</div>


</template>


<script setup>
    import Button from './Button.vue'
</script>