<template>
    <mainHeader/>
    <div class="flex justify-center ">
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'ZS'}}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
                <h2 class="ml-[160px] text-white text-3xl">Základná škola</h2>
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'SS'}}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
                <h2 class="ml-[160px] text-white text-3xl">Stredná škola</h2>
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'chooseSchool', params: {id: 'VS'}}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
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
