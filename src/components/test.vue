<template>
    <mainHeader/>
    <div class="bg-zinc-800 flex justify-center pt-20 ">
    <div class="left-0 right-0">
        <input placeholder="Vyhľadávanie" class="icon text-center rounded-[50px] w-[400px] h-[40px] mt-[-50px]">
    </div>
    <div class="flex justify-center mt-24 mr-[60px]">
        <div class="grid grid-cols-3 gap-x-[200px] gap-y-[100px]">
            <div>
                <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>
            <div>
                <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>
            <div>
                <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>
            <div>
                <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>
            <div>
               <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>
            <div>
                <a href="#/skoly/odbory"><img class="border rounded-[25px] h-[250px] w-[300px]" src="@/assets/images/picture.jpg"></a>
                <p class="text-3xl text-white mt-5">Skola </p>
            </div>            
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
data(){
    return{
        title: 'SPŠE Hálova 16'
    }
}
}

</script>

