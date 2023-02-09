<template>
    <mainHeader/>
<div class="bg-zinc-800 justify-center pt-20 ">
    
    <div class="py-10">
        <img class="mr-auto mt-[-50px] ml-auto" src="@/assets/images/obedPic.jpg">
        <h2 class="text-white text-center text-3xl py-5">Obed</h2>
    </div>

    <div class="grid text-white text-3xl justify-items-center mt-[-60px]">
        <div class="flex pt-5 m-6">
            <h1 >Chuť:</h1>
            <starRating/>
        </div>
        <div class="flex m-6">
            <h1 >Čistota:</h1>
            <starRating/>
        </div>
        <div class="flex m-6">
            <h1 >Variácia:</h1>
            <starRating/>
        </div> 
    </div>

    <div class="flex justify-center pt-10 pb-12">
        <button class="h-[80px] text-2xl text-white border-2 rounded-[5px] border-lime-900 bg-lime-900 pl-20 pr-20 pt-2 pb-2">Ohodnotiť</button>
    </div>

</div>  
</template>

<script>
import mainHeader from './mainHeader.vue';
import starRating from './starRating.vue';

export default{
    components:{
        mainHeader,
        starRating,
    },
data(){
    return{
        title: 'SPŠE Hálova 16'
    }
}

}

</script>



