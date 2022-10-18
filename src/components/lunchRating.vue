<template>
    
    <div class="bg-zinc-800 h-[100%]">
        <div class="w-1440 h-[90px] bg-black">
            <div class="float-left">
                <img class="w-[122px] h-[90px]" src="@/assets/images/logo.jpg">
            </div>
            <a class="float-right px-4 py-2 mt-[21px] mr-[20px] border rounded-2xl bg-white text-slate-500 ">Odhlásiť sa</a> 
            <h1 class="text-white text-5xl text-center py-3 px-52">{{title}}</h1>   
        </div>


        <div class="grid justify-items-center py-10">
            <img src="@/assets/images/obedPic.jpg">
            <h1 class="text-white text-3xl py-10">Obed</h1>
        </div>
        <div class="text-white text-3xl grid justify-items-center mt-[-60px]">
            <div class="flex m-10">
                <h1 >Chuť:</h1>
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
            </div>
            <div class="flex m-10">
                <h1 >Čistota:</h1>
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
            </div>
            <div class="flex m-10">
                <h1 >Variácia:</h1>
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/fullStar.png">
                <img class="h-8 ml-5" src="@/assets/images/emptyStar.png">
            </div>
          
        </div>
        <div class="grid justify-items-center py-10">
            <button class="text-2xl text-white border-2 rounded-[5px] border-lime-900 bg-lime-900 pl-20 pr-20 pt-2 pb-2">Ohodnotiť</button>
        </div>

    </div>
    
  
</template>

<script>
export default{
data(){
    return{
        title: 'SPŠE Hálova 16'
    }
}

}

</script>



