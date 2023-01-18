<template>
    <mainHeader/>
    <div class="bg-zinc-800 flex justify-center pt-20 h-screen">
    <div class="grid justify-center absolute mt-[-95px]">
        <input placeholder="Vyhľadávanie" class="icon text-center rounded-[50px] w-[500px] h-[40px] mt-[-50px]" v-model="search">
    </div>
    <div class="flex mt-24 mr-[60px]">
        <div class="grid grid-cols-3 gap-x-[200px] gap-y-[100px] " >
            <!--<div v-for="school in filteredSchools" :key="school.id">
                <a v-bind:href="school.link"><img class="border rounded-[25px] h-[250px] w-[300px]" v-bind:src="school.img"></a>
                <p class="text-3xl text-white mt-5">{{school.title}}</p>
            </div>-->

            <div v-for="schoolNames in schools2" :key="schoolNames.id">
                <p class="text-3xl text-white mt-5">{{schoolNames.name}}</p>
                <p class="text-3xl text-white mt-5">test</p>
            </div>

            <p>test1</p>
                   

            <div v-for="post in posts" :key="post.id">
                <h2>{{ post.id }} {{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </div>
        </div>
    </div>   
</div>

<div>{{schoolName}}</div>
</template>

<script>
//import { assertExpressionStatement } from '@babel/types';
import mainHeader from './mainHeader.vue';
import axios from 'axios';

class School{
    constructor(title,img,link){
        this.title = title;
        this.img = img;
        this.link = link;
    }
}
export default{
    components:{
        mainHeader,
    },
    data(){
        return{
            title: 'SPŠE Hálova 16',
            search: '',
            id:null,
            schoolName:null,
            schools:[
                new School(
                    'Skola 1',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'
                ),
                new School(
                    'Skola 2',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'

                ),
                new School(
                    'Skola 3',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'

                ),
                new School(
                    'Skola 4',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'
                ),
                new School(
                    'Skola 5',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'

                ),
                new School(
                    'Skola 6',
                    require('@/assets/images/picture.jpg'),
                    '#/skoly/odbory'

                )
            ],
            schools2:[],
            posts:[],

            
        }
    },

    computed:{
        filteredSchools(){
            return this.schools.filter(school => school.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    mounted(){
        axios
            .get('http://127.0.0.1:8000/api/schools').then((response) => this.schools2 = response.data)
    }
}

</script>

