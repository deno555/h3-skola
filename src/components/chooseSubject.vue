<template>
    
    <div class="bg-zinc-800 h-[190vh] chooseSubject">
        <mainHeader/>  

            <div class="flex px-10 justify-center subjects">
                <!-- <div>
                    <img class="w-[380px] h-[380px] mt-[60px] img1" src="@/assets/images/SJL.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">SJL</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] mt-[60px] img" src="@/assets/images/MAT.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">MAT</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] mt-[60px] img" src="@/assets/images/ANJ.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ANJ</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] mt-[60px] img" src="@/assets/images/PRO.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">PRO</h2>
                </div>
            </div>
            <div class="flex px-10 justify-center subjects">
                <div>
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/TCK.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">TCK</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/ELK.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ELK</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/ELM.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ELM</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/ELE.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ELE</h2>
                </div>
            </div>
            <div class="flex px-10 justify-center subjects">
                <div>
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/NEJ.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">NEJ</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/SIE.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">SIE</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/ROB.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ROB</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/OBN.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">OBN</h2>
                </div>
            </div>-->
            <div class="flex px-10 justify-center subjects">
                <div>
                    <!--<img class="w-[380px] h-[380px] img" src="@/assets/images/ELS.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">ELS</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/TSV.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">TSV</h2>
                </div>
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/DAA.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">DAA</h2>
                </div>-->
                <div class="ml-[30px] fix">
                    <img class="w-[380px] h-[380px] img" src="@/assets/images/EKN.jpg">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt">EKN</h2>
                </div>

                <div v-for="subjects in schoolSubjects" :key="subjects.id" class="ml-[30px] fix">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + subjects.file_path" class="w-[380px] h-[380px] img">
                    <h2 class="text-4xl text-white font-sans text-center mt-[10px] txt"> {{ subjects.name }}</h2>
                </div>
            </div>
        </div> 
    </div></div>
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
        }
    },
    
    methods(){
        axios
            .get('http://127.0.0.1:8000/api/subjects')
            .then((response) => {this.schoolSubjects = response.data})
    }

}

</script>