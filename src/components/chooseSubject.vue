<template>
    
    <div class="bg-zinc-800 h-display chooseSubject">
        <mainHeader/>  

            <div class="flex flex-wrap px-10 mx-[100px] justify-center subjects" v-for="departments in schoolDepartments.filter(department => department.name === this.$route.params.department)" :key="departments.id">
                <div v-for="subjects in schoolSubjects.filter(subject => subject.field_id === departments.id)" :key="subjects.id" class="ml-[30px] mt-[40px] fix">
                    <router-link :to="{name:'rateSubject', params:{subject: subjects.name}}">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + subjects.file_path" class="w-[380px] h-[380px] img">
                        <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt"> {{ subjects.name }}</h2>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>
import mainHeader from '../components/mainHeader.vue'
import axios from 'axios'

export default{
    components:{
        mainHeader
    },

    data(){
        return{
            schoolSubjects:[],
            schoolDepartments:[],
        }
    },
    
    mounted(){
        axios.get('http://127.0.0.1:8000/api/subjects').then((response) => 
        {
            this.schoolSubjects = response.data
        });

        axios.get('http://127.0.0.1:8000/api/fields').then((response) =>
        {
            this.schoolDepartments = response.data
        });
    }

}

</script>