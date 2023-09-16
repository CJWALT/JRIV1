<template>
        <button
         :class="[btnBg, sizeFnt, padding, fntWeight, btnRnd, colorTxt, 'font-[Poppins] py-[.5rem]']"
        @click.prevent="handleClick"> {{props.children}} </button>
</template> 


<script setup> 

     import {defineProps } from 'vue';


     const props = defineProps({
        children:String,
        bgColor:String,
        fntColor:String,
        weightFont: String,
        btnPd:String,
        btnRounded:String,
        fntSize:String,
        handleClick:Function,
     })

        const btnColor = ['red', 'bg-[#FFA235]']
        const txtColor = ['text-white', 'text-[#000066]']
        const btnPad = ['px-[2rem]', 'px-[1.5rem]']
        const btnWeight = ['font-bold', 'font-semibold']
        const btnRound = ['rounded-[1rem]', 'rounded-[1.5rem]']
        const txtSize = ['text-[1rem]', 'text-[1.3rem]']

        const btnBg = btnColor.includes(props.bgColor) ? `${props.bgColor}` : 'bg-blue-400';
        const padding = btnPad.includes(props.btnPd) ? `${props.btnPd}` : 'px-1rem';
        const colorTxt = txtColor.includes(props.fntColor) ? `${props.fntColor}` : 'text-black';
        const fntWeight = btnWeight.includes(props.weightFont) ? `${props.weightFont}` : 'null';
        const btnRnd = btnRound.includes(props.btnRounded) ? `${props.btnRounded}` : 'null'
        const sizeFnt = txtSize.includes(props.fntSize) ?  `${props.fntSize}` : 'text-[1rem]'
</script>