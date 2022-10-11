<template>
    
    <div class="w-1440 h-[90px] bg-black">
        <div class="float-left">
            <img class="w-[122px] h-[90px]" src="@/assets/images/logo.jpg">
        </div>
        <a class="float-right px-4 py-2 mt-[21px] mr-[20px] border rounded-2xl bg-white text-slate-500 ">Odhlásiť sa</a> 
        <h1 class="text-white text-5xl text-center py-3 px-52">{{title}}</h1>   

    </div>

  
</template>

<script>
export default{
data(){
    return{
        title: ' '
    }
}

}

</script>



