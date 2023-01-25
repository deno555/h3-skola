<template>  
  <p>test</p>
</template>

<script>
    import axios from 'axios';

  export default{
    data(){
      return{
        school:null,
        info:null,
      }
    },

    mounted(){
      axios.get('http://127.0.0.1:8000/api/schools').then(response => {this.schools2 = response.data;})
    }
  }
</script>