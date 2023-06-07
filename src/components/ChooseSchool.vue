<template>
    <mainHeader/>
    <div class="bg-zinc-800 flex justify-center pt-20 h-[1000px] bg-auto">
        <div class="grid justify-center absolute mt-[-95px]">
            <input placeholder="Vyhľadávanie" class="icon text-center rounded-[50px] w-[500px] h-[40px] mt-[-50px]">
        </div>
        <div class="flex mt-24 mr-[60px]">
            <div class="grid grid-cols-3 gap-x-[200px] gap-y-[100px] pl-20" >
                <div v-for="schoolNames in schools.filter(id => this.$route.params.id).filter(school=> school.type === this.$route.params.id)" :key="schoolNames.id">
                   <router-link :to="{name: 'chooseDepartment', params:{name: schoolNames.name}}">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + schoolNames.file_path">
                        <p class="text-3xl text-white mt-5">{{schoolNames.name}}</p>
                    </router-link>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import mainHeader from './mainHeader.vue';
import axios from 'axios';

export default{
    components:{
        mainHeader,
    },

    data(){
        return{
            schools:[]
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

