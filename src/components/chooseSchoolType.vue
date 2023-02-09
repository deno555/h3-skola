<template>
    
        <mainHeader/>
        <div class="flex justify-center ">
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

<style>
    body{
        background-color: rgb(39 39 42);
    }
</style>