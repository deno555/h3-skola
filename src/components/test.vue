<template>
    <h1>test</h1>
    <!-- <div v-for="post in posts" :key="post.id">
        <router-link :to="{params: {id: post.id}, name: 'test2'}">{{ post.title }}</router-link>    
    </div> -->

    <div class="flex justify-center ">
        <div>
            <router-link :to="{params: {id: 'ZS'}, name: 'test2'}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
            </router-link>
            <h2 class="ml-[160px] text-white text-3xl">Základná</h2>
        </div>

        <div>
            <router-link :to="{params: {id: 'SS'}, name: 'test2'}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
            </router-link>
            <h2 class="ml-[160px] text-white text-3xl">Stredna</h2>
        </div>

        <div>
            <router-link :to="{params: {id: 'VS'}, name: 'test2'}">
                <img class="m-20 border rounded-[20px]" src="@/assets/images/picture.jpg">
            </router-link>
            <h2 class="ml-[160px] text-white text-3xl">Vysoka</h2>
        </div>
    </div>
</template>

    <!-- <script>

        export default{
            data(){
                return{
                    posts:[
                        {
                            type: 'ZS',
                            title: 'ZS',
                            body: 'toto je 1',
                        },
                        {
                            type: 'SS',
                            title: 'SS',
                            body: 'toto je 2',
                        },
                        {
                            type: 'VS',
                            title: 'VS',
                            body: 'toto je 3',
                        }
                    ]
                }
            }
        }
    </script> -->

<style>
    body{
        color: white;
    }
</style>