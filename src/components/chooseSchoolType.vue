<template>
    <mainHeader />
    <div class="bg-zinc-800 flex justify-center pt-20 min-h-[90.2vh] max-h-[100vh] overflow-y-hidden">
        <div>
            <a href="#/skoly"><img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg"></a>
            <h2 class="ml-[160px] text-white text-3xl">Základná škola</h2>
        </div>
        <div>
            <a href="#/skoly"><img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg"></a>
            <h2 class="ml-[160px] text-white text-3xl">Stredná škola</h2>
        </div> 
        <div>                
            <a href="#/skoly"><img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg"></a>
            <h2 class="ml-[160px] text-white text-3xl">Vysoká škola</h2>
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
            title: 'Vyberte si štúdium',
        }
    }
}

</script>

