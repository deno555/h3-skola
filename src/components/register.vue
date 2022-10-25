<template>
    
    <div class="grid h-screen bg-zinc-800 place-items-center text-center">
        <div>
        <h1 class="text-5xl text-white ">Registrácia</h1>
                <input type="text" placeholder="Mail" class="p-3 w-[440px] rounded-3xl h-12 mt-8 ">
                    <br>
                <input type="text" placeholder="Používateľké meno" class=" p-3 w-[440px] rounded-3xl h-12 m-3">
                     <br>
                     <input type="text" placeholder="Heslo" class="p-3 w-[440px] rounded-3xl h-12 ">
                    <br>
                <input type="text" placeholder="Potvrďte heslo" class=" p-3 w-[440px] rounded-3xl h-12 mt-3 mb-8">
                     <br>
            <a class="border-green-700 rounded-2xl bg-green-700 text-slate-500 px-8 py-3 text-gray-700">Registrovať</a>
        <h4 class="text-gray-500 mt-5">Už máš účet? Prihlás sa <router-link to="/login"><a class="text-green-700"> tu</a></router-link>!</h4>
    </div>
</div>
</template>







