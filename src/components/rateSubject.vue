<template>    
<mainHeader/>
<div class="bg-zinc-800 justify-center pt-20 ">
    
    <div class="py-10">
        <img class="mr-auto mt-[-50px] ml-auto" src="@/assets/images/stur.jpg">
        <h2 class="text-white text-center text-3xl py-5 capitalize">{{this.$route.params.subject}}</h2>
    </div>

    <div class="grid text-white text-3xl justify-items-center mt-[-60px]">
        <starRating @sendingStar="getSubjectRating"/>
        <p>{{ this.subject_rating }}</p>
        <starRating @sendingStar="getTeacherRating"/>
        <p>{{ this.teacher_rating }}</p>
        <starRating @sendingStar="getKnowledgeRating"/>
        <p>{{ this.knowledge_rating }}</p>
        <starRating @sendingStar="getInterpretationRating"/>
        <p>{{ this.interpretation_rating }}</p> 
    </div>

    <div class="flex justify-center pt-10 pb-12">
        <a href="/skoly/odbory/predmety"><button @click="sendRating()" class="h-[80px] text-2xl text-white border-2 rounded-[5px] border-lime-900 bg-lime-900 pl-20 pr-20 pt-2 pb-2">Ohodnotiť</button></a>
    </div>

</div>
</template>

<script>
import axios from 'axios';
import mainHeader from './mainHeader.vue';
import starRating from './starRating.vue';

export default{
    data(){
        return{
            subject_rating: 0,
            teacher_rating: 0,
            knowledge_rating: 0,
            interpretation_rating: 0,
            id: 0,
        }
    },

    components:{
        mainHeader,
        starRating,
    },

    methods:{
        getSubjectRating(rating){
            this.subject_rating = rating
        },
        getTeacherRating(rating){
            this.teacher_rating = rating
        },
        getKnowledgeRating(rating){
            this.knowledge_rating = rating
        },
        getInterpretationRating(rating){
            this.interpretation_rating = rating
        },
        sendRating(){
            axios.post('http://127.0.0.1:8000/api/subjects/1/ratings', {
                "subject_id": 1,
                "subject_rating": this.subject_rating,
                "teacher_rating": this.teacher_rating,
                "knowledge_rating": this.knowledge_rating,
                "interpretation_rating": this.interpretation_rating,
            })               
        },
    },
}
</script>