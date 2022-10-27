<template>
    
    <div class="bg-zinc-800 h-screen">
        <div class="w-1440 h-[90px] bg-black">
            <div class="float-left">
                <img class="w-[60px] h-[40px] mt-[24px] ml-[15px]" src="@/assets/images/Back.png">
            </div>
            <a class="float-right px-4 py-2 mt-[21px] mr-[20px] border rounded-2xl bg-white text-slate-500 ">Odhlásiť sa</a> 
            <h1 class="text-white text-5xl text-center py-3 px-52">{{title}}</h1>   
        </div>
            <div class="flex px-10 ml-[260px] mt-[-70px]">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/SJL.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/MAT.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/PRO.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ANJ.jpg">
            </div>
            <div class="flex px-10 ml-[260px]">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/TCK.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ELK.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ELE.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ELM.jpg">
            </div>
            <div class="flex px-10 ml-[260px]">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/NEJ.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/OBN.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/SIE.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ROB.jpg">
            </div> 
            <div class="flex px-10 ml-[260px]">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/ELS.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/EKN.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/TSV.jpg">
                <img class="w-[230px] h-[230px] ml-[30px] mt-[100px]" src="@/assets/images/DAA.jpg">
            </div>
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