<template>
    <h1>test2 {{ this.$route.params.id }}</h1>

    <div class="flex mt-24 mr-[60px]">
            <div class="grid grid-cols-3 gap-x-[200px] gap-y-[100px]" >
                <div v-for="schoolNames in schools.filter(id => this.$route.params.id).filter(school => school.type === this.$route.params.id)" :key="schoolNames.id">
                    <a href="/skoly/odbory">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + schoolNames.file_path">
                    </a>
                    <p class="text-3xl text-white mt-5">{{schoolNames.name}}</p>
                </div>
            </div>
        </div>
</template>

<style>
    body{
        color: white;
    }
</style>

<script>
import axios from 'axios';

export default{
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
            });
    }
}
</script>
