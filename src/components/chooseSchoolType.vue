<template>
    <mainHeader/>
    <div class="flex justify-center ">
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'ZS'}}">
                <!-- <div class="w-[339px] h-[415px]"> -->
                    <img class="m-20 border rounded-[20px]" src="@/assets/images/zs.jpg">
                <!-- </div> -->
                <h2 class="ml-[160px] text-white text-3xl">Základná škola</h2>
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'SS'}}">
                <img class="m-20 border rounded-[20px] w-96" src="@/assets/images/ss.jpg">
                <h2 class="ml-[160px] text-white text-3xl">Stredná škola</h2>
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'VS'}}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/vs.jpg">
                <h2 class="ml-[160px] text-white text-3xl">Vysoká škola</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
import mainHeader from './mainHeader.vue'
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
            });
    }
}
</script>

<style>
    img{
        width: 339px;
        height: 415px;
    }
</style>