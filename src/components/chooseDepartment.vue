<template>
    <mainHeader/>  
    <div class="bg-zinc-800 ">
        <starRating/>
        
        <div class="flex py-32 px-32">
            <img class="rounded-[20px]" src="@/assets/images/halova16.jpg">
            <h1 class="text-3xl text-white absolute py-44 px-[400px]">Hálova 16, 85101, Bratislava-Petržalka</h1>
        </div>
        
        <h1 class="text-3xl text-white px-32 odboris-nadpis">Odbory:</h1>
        
        <div class="flex items-center py-10 gap-32 odboris ">
                <div class="bg-white rounded-[20px] hoverEffect mr-4">
                    <a href="#/skoly/odbory/predmety"><img class="rounded-[20px] w-[300px] h-[300px]" src="@/assets/images/elektrotechnika.jpg"></a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">Elektrotechnika</h1>
                </div>
                <div class="bg-white rounded-[20px] hoverEffect mr-4">
                    <a href="#/skoly/odbory/predmety"><img class="rounded-[20px] w-[300px] h-[300px]" src="@/assets/images/ist.jpg"></a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">IST</h1>
                </div>
                <div class="bg-white rounded-[20px] hoverEffect mr-4">
                    <a href="#/skoly/odbory/predmety"><img class="rounded-[20px] w-[300px] h-[300px]" src="@/assets/images/pdt.jpg"></a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">PDT</h1>
                </div>
                <div class="bg-white rounded-[20px] hoverEffect mr-4">
                    <a href="#/skoly/odbory/predmety"><img class="rounded-[20px] w-[300px] h-[300px]" src="@/assets/images/multimedia.jpg"></a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">Multimédia</h1>
                </div>
                <div class="bg-white rounded-[20px] hoverEffect">        
                    <a href="#/skoly/odbory/obedy"><img class="rounded-[20px] w-[300px] h-[300px]" src="@/assets/images/obed.jpg"></a>
                    <h1 class="text-2xl text-center text-black font-semibold mt-5 mb-5">Obed</h1>
                </div>
        </div>
    </div>
  
</template>

<script>
import mainHeader from './mainHeader.vue';
import starRating from './starRating.vue';


export default{
    components:{
        mainHeader,
        starRating
    },
}
</script>