<template>
  <!-- <component :is="currentView" /> -->
  <router-view/>
</template>

<script>
  import LunchRating from '@/components/lunchRating.vue';
  import ChooseSchoolType from '@/components/chooseSchoolType.vue';
  import Login from '@/components/login.vue';
  import Register from '@/components/register.vue';
  import ChooseDepartment from '@/components/chooseDepartment.vue';
  import ChooseSchool from '@/components/chooseSchool.vue';
  import RateSubject from '@/components/rateSubject.vue';
  import NotFound from '@/components/notFound.vue';
  import ChooseSubject from '@/components/chooseSubject.vue';
  import test from '@/components/test.vue';
  // import routes from '@/components/router.js';

  const routes = {
    '/': ChooseSchoolType,
    '/skoly': ChooseSchool,
    '/skoly/odbory/predmety/rate':RateSubject,
    '/login': Login,
    '/register': Register,
    '/skoly/odbory/obedy': LunchRating,
    '/skoly/odbory':ChooseDepartment,
    '/skoly/odbory/predmety': ChooseSubject,
    '/test': test,
  }

  export default{
    data() {
      return {
        currentPath: window.location.hash,
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

<style>
  body{
    background-color: rgb(39, 39, 42);
  }
</style>