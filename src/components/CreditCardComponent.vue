<template>
    <div id="credit-card" class="grid grid-cols-2 mt-5 gap-5">
        <div id="credit-card-info">
            <div class="input-group flex flex-col my-2">
                <label for="name" class="text-sm">Número do Cartão</label>
                <input type="text" placeholder="Digite somente os números" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="name" class="text-sm">Titular do Cartão</label>
                <input type="text" placeholder="Digite o nome impresso no cartão" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="name" class="text-sm">CPF/CNPJ do Titular</label>
                <input type="text" placeholder="Para emissão da nota fiscal" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="half-input grid grid-cols-3">
                <div class="col-span-2 grid grid-cols-2">
                    <div class="input-group flex flex-col my-2">
                        <select id="state" name="state" class="rounded-md border border-gray-300 py-2 px-4">
                            <option value="" disabled selected>Mês</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div class="input-group flex flex-col my-2">
                        <select id="state" name="state" class="rounded-md border border-gray-300 py-2 px-4">
                            <option value="" disabled selected>Ano</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>
                    </div>
                </div>
                <div class="input-group flex flex-col my-2">
                    <label for="name" class="text-sm">CVV</label>
                    <input type="text" placeholder="CVV" class="rounded-md border border-gray-300 py-2 px-4">
                </div>
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="name" class="text-sm">Número de parcelas</label>
                <select id="state" name="state" class="rounded-md border border-gray-300 py-2 px-4">
                    <option value="1" checked>1x de R$ 50,00</option>
                    <option value="2">2x de R$ 25,00</option>
                    <option value="3">3x de R$ 16,66</option>
                </select>
            </div>
        </div>
        <div class="credit-card-simulate">
            <div class="bg-[url('@/assets/image/credit-card.png')] w-100 rounded-md p-6">
                <div class="flex flex-row justify-between items-center ">
                    <img src="@/assets/image/chip.png" alt="chip" class="w-10">
                    <img src="@/assets/image/visa.png" alt="visa" class="w-10">
                </div>
                <p class="text-white my-3">#### #### #### ####</p>
                <div class="grid grid-cols-2">
                    <div>
                        <p class="text-white text-xs font-light">Titular</p>
                        <p class="text-white text-xs">Nome Completo</p>
                    </div>
                    <div>
                        <p class="text-white text-xs font-light">Validade</p>
                        <p class="text-white text-xs font-light">Mês/Ano</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
