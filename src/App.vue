<template>
  <component :is="currentView" />
</template>

<script>
  import LunchRating from './components/lunchRating.vue';
  import ChooseSchoolType from './components/chooseSchoolType.vue';
  import Login from './components/login.vue';
  import Register from './components/register.vue';
  import ChooseDepartment from './components/chooseDepartment.vue';
  import ChooseSchool from './components/ChooseSchool.vue';
  import RateSubject from './components/rateSubject.vue';
  import NotFound from './components/notFound.vue';
  import ChooseSubject from './components/chooseSubject.vue';

  const routes = {
    '/': ChooseSchoolType,
    '/skoly': ChooseSchool,
    '/rate':RateSubject,
    '/login': Login,
    '/register': Register,
    '/skoly/obedy': LunchRating,
    '/skoly/odbory':ChooseDepartment,
    '/skoly/odbory/predmety': ChooseSubject
  }

  export default{
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