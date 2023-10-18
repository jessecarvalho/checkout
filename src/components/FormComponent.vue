<template>
    <section id="form" class="md:w-1/2 m-auto mt-4 border border-gray-300 rounded-md p-5">
        <div class="input-group flex flex-col my-2">
            <label for="name">Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" class="rounded-md border border-gray-300 py-2 px-4">
        </div>
        <div class="input-group flex flex-col my-2">
            <label for="name">E-mail</label>
            <input type="text" placeholder="Digite seu nome completo" class="rounded-md border border-gray-300 py-2 px-4">
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label for="name">Telefone</label>
                <input type="text" placeholder="Digite seu telefone" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="name">CEP</label>
                <input type="text" placeholder="Digite seu cep" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label for="name">Endereço</label>
            <input type="text" placeholder="Digite seu nome completo" class="rounded-md border border-gray-300 py-2 px-4">
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label for="name">Número</label>
                <input type="text" placeholder="Número" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="name">Complemento</label>
                <input type="text" placeholder="Digite seu complemento" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label for="name">Bairro</label>
            <input type="text" placeholder="Digite seu bairro" class="rounded-md border border-gray-300 py-2 px-4">
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label for="name">Cidade</label>
                <input type="text" placeholder="Digite sua cidade" class="rounded-md border border-gray-300 py-2 px-4">
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="state">Selecione um estado:</label>
                <select id="state" class="rounded-md border border-gray-300 py-2 px-4">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>

            </div>
        </div>
    </section>
</template>

