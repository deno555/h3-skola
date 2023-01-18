<template>
    <p>test</p>
    <p>{{ school }}</p>
    <p>test2</p>
    <p>{{ info }}</p>
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
            axios.get('http://127.0.0.1:8000/api/schools/1').then(response => (this.school = response.data.name))
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => this.info = response.data.bpi)
        }
    }
</script>