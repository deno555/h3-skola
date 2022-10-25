<template>
<ChooseSchoolType></ChooseSchoolType>


</template>

<script>
  import LunchRating from './components/lunchRating.vue';
  import ChooseSchoolType from './components/chooseSchoolType.vue';
  import Login from './components/login.vue';
  import Register from './components/register.vue';
  import ChooseDepartment from './components/chooseDepartment.vue';
  import ChooseSchool from './components/ChooseSchool.vue';
  import RateSubject from './components/rateSubject.vue';
  import NotFound from './components/notFound.vue'

  const routes = {
    '/': ChooseSchoolType,
    '/skoly': ChooseSchool,
    '/rate':RateSubject,
    '/login': Login,
    '/register': Register,
    '/skoly/obedy': LunchRating,
    '/skoly/odbory':ChooseDepartment,
  }
  
  export default{
    components:{
      ChooseSchoolType,
    },
    data() {
      return {
        currentPath: window.location.hash
      }
    },
    computed: {
      currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
      }
    },
    mounted() {
      window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
      })
    }
  }
</script>