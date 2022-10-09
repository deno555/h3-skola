<template>
    <div class="bg-zinc-800 h-screen">
        <div class="w-1440 h-[90px] bg-black">
            <div class="border rounded-full float-left p-4 mt-[15px] ml-[20px] bg-white">
                <p>logo</p>
            </div>
            <a class="float-right px-4 py-2 mt-[21px] mr-[20px] border rounded-2xl bg-white text-slate-500 ">Odhlásiť sa</a> 
            <h1 class="text-white text-5xl text-center py-3 px-20">{{title}}</h1>    
        </div> 
    </div>

    
</template>

<script>

export default{
data(){
    return{
        title: 'Vyberte si štúdium',
    }
}

}

</script>

