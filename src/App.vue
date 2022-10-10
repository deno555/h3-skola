<template>
<a href="/Login">
  Login
</a>

<br>
<a href="/Register">
  Register
</a>
<router-view></router-view>
<component :is="currentView"></component>




  
</template>

<script>

import Register from './components/registerForm.vue';
import Login from './components/loginForm.vue';


const routes = {
  '/Login': Login,
  '/Register': Register
}
export default{
  data(){
    return {
      currentPath: window.location.hash,
    }
  },
  computed:{
    currentView(){
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted(){
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}

</script>


