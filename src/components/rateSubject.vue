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
            <!--input type="checkbox" id="star1"><label for="star1"--><img class="h-8 ml-5" @click="changeStar()" :src="src"><!--/label-->
            <input type="checkbox" id="star2"><label for="star2"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star3"><label for="star3"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star4"><label for="star4"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star5"><label for="star5"><img class="h-8 ml-5" src="@/assets/images/emptyStar.png"></label>
        </div>
        <div class="flex m-10">
            <h1 >Prístup učiteľa:</h1>
            <input type="checkbox" id="star6"><label for="star6"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star7"><label for="star7"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star8"><label for="star8"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star9"><label for="star9"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star10"><label for="star10"><img class="h-8 ml-5" src="@/assets/images/emptyStar.png"></label>
        </div>
        <div class="flex m-10">
            <h1 >Naučil som sa:</h1>
            <input type="checkbox" id="star11"><label for="star11"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star12"><label for="star12"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star13"><label for="star13"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star14"><label for="star14"><img class="h-8 ml-5" src="@/assets/images/fullStar.png"></label>
            <input type="checkbox" id="star15"><label for="star15"><img class="h-8 ml-5" src="@/assets/images/emptyStar.png"></label>
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
            checked:false,
            count:1,
            src:"https://cdn.discordapp.com/attachments/768503373363806218/1037355367417520138/fullStar.png",
            number:5,
        }
    },

    methods:{
        changeStar(){
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