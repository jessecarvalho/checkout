<template>
    <section id="header" class="md:w-1/2 m-auto md:mt-4 border border-gray-300 rounded-md">
        <div class="grid grid-cols-4 p-5 gap-5 items-center relative pt-12 md:pt-4">
            <div>
                <img src="@/assets/image/img.png" alt="Imagem header">
            </div>
            <div class="col-span-3">
                <p class="font-bold">Nome do produto</p>
                <p class="font-medium text-orange-500 text-2xl">R$ 50,00 / mês</p>
                <p class="text-sm">Plano mensal com renovação automática</p>
            </div>
        </div>
        <div id="email" class="bg-orange-600 text-white py-2 px-4">
            contatolivrediet@gmail.com
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>
