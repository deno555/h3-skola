<template>    
    <mainHeader/>
<div class="bg-zinc-800 flex justify-center pt-20 ">

    <div class="grid justify-items-center py-10">
        <img src="@/assets/images/stur.jpg">
        <h1 class="text-white text-3xl py-10">SJL</h1>
    </div>
    <div class="text-white text-3xl grid justify-items-center mt-[-60px]">
        <div class="flex m-10">
            <h1 >Baví ma predmet:</h1>
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
        </div>
        <div class="flex m-10">
            <h1 >Prístup učiteľa:</h1>
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
        </div>
        <div class="flex m-10">
            <h1 >Naučil som sa:</h1>
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
            <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
        </div>          
    </div>
    <div class="grid justify-items-center py-10">
        <button class="text-2xl text-white border-2 rounded-[5px] border-lime-900 bg-lime-900 pl-20 pr-20 pt-2 pb-2">Ohodnotiť</button>
    </div>
</div>
</template>

<script>
import mainHeader from './mainHeader.vue';

export default{
    components:{
        mainHeader,
    },
    data(){
        return{
            title: 'SPŠE Hálova 16'
        }
    }
}

</script>



