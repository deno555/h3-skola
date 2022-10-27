<template>
    <mainHeader/>  
    <div class="bg-zinc-800 flex justify-center pt-20 ">
    <div class="flex py-32 px-32">
        <img class="rounded-[20px]" src="@/assets/images/halova16.jpg">
        <h1 class="text-3xl text-white absolute py-44 px-[400px]">Hálova 16, 85101, Bratislava-Petržalka</h1>
            <div class="flex px-10">
                <img class="h-8 m-2" src="@/assets/images/fullStar.png">
                <img class="h-8 m-2" src="@/assets/images/emptyStar.png">
                <img class="h-8 m-2" src="@/assets/images/emptyStar.png">
                <img class="h-8 m-2" src="@/assets/images/emptyStar.png">
                <img class="h-8 m-2" src="@/assets/images/emptyStar.png">
            </div>
    </div>
    <h1 class="text-3xl text-white px-32">Odbory:</h1>

    <div class="flex items-center py-10 gap-32 ">
            <div class="bg-white rounded-[20px] hoverEffect">
                <img class="rounded-[20px] w-[350px] h-[350px]" src="@/assets/images/elektrotechnika.jpg">
                <h1 class="text-2xl text-center text-black  mt-10">Elektrotechnika</h1>
            </div>
            <div class="bg-white rounded-[20px] hoverEffect">
                <img class="rounded-[20px] w-[350px] h-[350px]" src="@/assets/images/ist.jpg">
                <h1 class="text-2xl text-center text-black mt-10">IST</h1>
            </div>
            <div class="bg-white rounded-[20px] hoverEffect">
                <img class="rounded-[20px] w-[350px] h-[350px]" src="@/assets/images/pdt.jpg">
                <h1 class="text-2xl text-center text-black mt-10">PDT</h1>
            </div>
            <div class="bg-white rounded-[20px] hoverEffect">
                <img class="rounded-[20px] w-[350px] h-[350px]" src="@/assets/images/multimedia.jpg">
                <h1 class="text-2xl text-center text-black mt-10">Multimédia</h1>
            </div>
            <div class="bg-white rounded-[20px] hoverEffect">        
                <img class="rounded-[20px] w-[350px] h-[350px]" src="@/assets/images/obed.jpg">
                <h1 class="text-2xl text-center text-black mt-10">Obed</h1>
            </div>
    </div>
</div>

  
</template>

<script>
import mainHeader from './mainHeader.vue';

export default{
    components:{
        mainHeader,
    },
}
</script>



