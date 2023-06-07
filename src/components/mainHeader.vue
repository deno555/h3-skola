<template>
    
        <div class="w-1440 h-[90px] bg-black">
            <div class="float-left">
                <router-link :to="{name: 'chooseSchoolType'}">
                    <img class="w-[122px] h-[90px]" src="@/assets/images/logo.jpg">
                </router-link>
            </div>
           <router-link :to="{name: 'login'}" class="float-right px-4 py-2 mt-[21px] mr-[20px] border rounded-2xl bg-white text-slate-500 ">Odhlásiť sa</router-link> 
            <div class="text-center">
                <!---< input placeholder="Vyhľadávanie" class="icon text-center rounded-[50px] w-[350px] h-[40px] mt-[26px] ">   --> 
                <slot/>
            </div>
        </div>
</template>