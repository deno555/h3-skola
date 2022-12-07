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
            <starRating/>
        </div>
        <div class="flex m-10">
            <h1 >Prístup učiteľa:</h1>
            <starRating/>
        </div>
        <div class="flex m-10">
            <h1 >Naučil som sa:</h1>
            <starRating/>
        </div> 
        <div class="flex m-10">
            <h1 >Zaujimavy vyklad:</h1>
            <starRating/>
        </div> 
        
    </div>
    <div class="grid justify-items-center py-10">
        <button class="text-2xl text-white border-2 rounded-[5px] border-lime-900 bg-lime-900 pl-20 pr-20 pt-2 pb-2">Ohodnotiť</button>
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
            checked:false,
            src:"https://cdn.discordapp.com/attachments/768503373363806218/1037355367417520138/fullStar.png",
            starID:{
                star1:1,
                star2:2,
                star3:3,
                star4:4,
                star5:5}
        }
    },

    methods:{
        changeStarState(){
            if(this.checked==true){
                this.src="https://cdn.discordapp.com/attachments/768503373363806218/1037355367417520138/fullStar.png"
                this.checked=false
            }
            else{
                this.src="https://media.discordapp.net/attachments/768503373363806218/1037355367925043200/emptyStar.png"
                this.checked=true
            }
        },
    },
}
</script>