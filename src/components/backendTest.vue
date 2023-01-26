<template>  
  <!-- <p>{{ schools2 }}</p> -->

  <div v-for="schoolNames in schools2" :key="schoolNames.id">
    <p>{{ schoolNames.file_path }}</p>
    <!-- <img src='\`http://127.0.0.1:8000/api/schools\${this.schoolNames.file_path}`'> -->
    <img v-bind:src="'http://127.0.0.1:8000/storage/images/' + schoolNames.file_path">
  </div>
</template>

<script>
    import axios from 'axios';

  export default{
    data(){
      return{
        school:null,
        info:null,
        schools2:[],
      }
    },

    mounted(){
      axios.get('http://127.0.0.1:8000/api/schools').then(response => {this.schools2 = response.data;});
    }
  }
</script>