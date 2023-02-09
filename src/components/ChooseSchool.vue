<template>
    <mainHeader/>
    <div class="bg-zinc-800 flex justify-center pt-20 h-[1000px] bg-auto">
    <div class="grid justify-center absolute mt-[-95px]">
        <input placeholder="Vyhľadávanie" class="icon text-center rounded-[50px] w-[500px] h-[40px] mt-[-50px]" v-model="search">
    </div>
    <div class="flex mt-24 mr-[60px]">
        <div class="grid grid-cols-3 gap-x-[200px] gap-y-[100px] " >
            <!--<div v-for="school in filteredSchools" :key="school.id">
                <a v-bind:href="school.link"><img class="border rounded-[25px] h-[250px] w-[300px]" v-bind:src="school.img"></a>
                <p class="text-3xl text-white mt-5">{{school.title}}</p>
            </div>-->

            <div v-for="schoolNames in schools" :key="schoolNames.id">
                <a href="#/skoly/odbory">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + schoolNames.file_path">
                </a>
                <!-- <p>{{ schoolNames.file_path }}</p> -->
                <p class="text-3xl text-white mt-5">{{schoolNames.name}}</p>
            </div>
        </div>
    </div>   
</div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types';
import mainHeader from './mainHeader.vue';
import axios from 'axios';

export default{
    components:{
        mainHeader,
    },
    data(){
        return{
            schools:[],
        }
    },

    mounted(){
        axios
            .get('http://127.0.0.1:8000/api/schools').then((response) => 
            {
                this.schools = response.data
                //this.img = JSON.stringify(response.data[0].file_path)
            });
        axios
            .put('http://127.0.0.1:8000/api/schools/{id}', {
                name:'skola2'
            })
    }
}

</script>

