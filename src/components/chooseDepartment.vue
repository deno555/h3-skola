<template>
    <mainHeader/>  
    <div class="bg-zinc-800 ">        
        <div class="flex py-32 px-32">
            <img class="rounded-[20px]" src="@/assets/images/halova16.jpg">
            <h1 class="text-3xl text-white absolute py-44 px-[400px]">Hálova 16, 85101, Bratislava-Petržalka</h1>
            <div class="hviezdy-styl"><starRating/></div>
        </div>
        
        <h1 class="text-3xl text-white px-32 odboris-nadpis">Odbory:</h1>
        
        <div class="flex items-center py-10 gap-32 odboris ">
                <div class="bg-white rounded-[20px] hoverEffect mr-4" v-for="departments in schoolDepartments" :key="departments.id">
                    <a href="#/skoly/odbory/predmety">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + departments.file_path" class="rounded-[20px] w-[300px] h-[300px]">
                    </a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">{{departments.name}}</h1>
                </div>

                <div class="bg-white rounded-[20px] hoverEffect mr-4">
                    <a href="#/skoly/odbory/predmety">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/48/42/64/1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" class="rounded-[20px] w-[300px] h-[300px]">
                    </a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">test 1</h1>
                </div>
        </div>
    </div>
  
</template>

<script>
import mainHeader from './mainHeader.vue';
import starRating from './starRating.vue';
import axios from 'axios';

export default{
    components:{
        mainHeader,
        starRating
    },
    
    data(){
        return{
            schoolDepartments:[],
        }
    },

    mounted(){
        axios
            .get('http://127.0.0.1:8000/api/fields').then((response) => 
            {
                this.schoolDepartments = response.data
            })
    }
}
</script>

<style>
    .hviezdy-styl{
        z-index: 2;
        padding-left: 50px;   
        padding-top: 10px; 
    }
</style>