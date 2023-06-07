<template>
    <mainHeader>
        <div class="text-5xl">
            {{this.$route.params.name}}   
        </div>
    </mainHeader>
    <div class="bg-zinc-800 ">        
        <div class="flex py-32 px-32">
            <img class="rounded-[20px]" src="@/assets/images/halova16.jpg">
            <div class="hviezdy-styl"><starRating/></div>
            <div class="text-3xl text-white absolute py-44 px-[400px]" v-for="schoolAddress in schools.filter(school=> school.name === this.$route.params.name)" :key="schoolAddress.id">
                <p class="text-3xl text-white mt-5">{{schoolAddress.address}}</p>
            </div>
        </div>
        
        <h1 class="text-3xl text-white px-32 odboris-nadpis">Odbory:</h1>
        
        <div class="flex items-center py-10 gap-32 odboris" v-for="school in schools.filter(school=> school.name === this.$route.params.name)" :key="school.id">
            <div class="bg-white rounded-[20px] hoverEffect mr-4" v-for="departments in schoolDepartments.filter(department => department.school_id === school.id)" :key="departments.id">
                <router-link :to="{name: 'chooseSubject', params:{department: departments.name}}">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + departments.file_path" class="rounded-[20px] w-[300px] h-[300px]">
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">{{departments.name}}</h1>
                </router-link>
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
            schools:[],
        }
    },

    mounted(){
        axios.get('http://127.0.0.1:8000/api/fields').then((response) =>
        {
            this.schoolDepartments = response.data
        });

        axios.get('http://127.0.0.1:8000/api/schools').then((response) => 
        {
            this.schools = response.data
        });
    },
}
</script>

<style>
    .hviezdy-styl{
        z-index: 2;
        padding-left: 50px;   
        padding-top: 10px; 
    }
</style>