<template>
    <section id="form" class="md:w-1/2 m-auto mt-4 border border-gray-300 rounded-md p-5">
        <div class="input-group flex flex-col my-2">
            <label >Nome Completo</label>
                <input type="text" placeholder="Digite seu nome completo" class="rounded-md border border-gray-300 py-2 px-4" v-model="localName" @input="emitNameChange" @focus="emitNameFocus" @blur="emitNameBlur" ref="name">
                <p class="text-red-500">{{ nameError }}</p>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>E-mail</label>
            <input type="text" placeholder="Digite seu e-mail" class="rounded-md border border-gray-300 py-2 px-4" v-model="localEmail" @input="emitEmailChange" @focus="emitEmailFocus" @blur="emitEmailBlur">
            <p class="text-red-500">{{ emailError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Telefone</label>
                <the-mask type="text" placeholder="Digite seu telefone" class="rounded-md border border-gray-300 py-2 px-4" @input="emitPhoneChange" v-model="localPhone"  :mask="['(##) ####-####', '(##) #####-####']" @focus="emitPhoneFocus" @blur="emitPhoneBlur" />
                <p class="text-red-500">{{ phoneError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label>CEP</label>
                <the-mask :mask="['#####-###']" type="text" placeholder="Digite seu cep" class="rounded-md border border-gray-300 py-2 px-4" v-model="localZip" @input="emitZipChange" @focus="emitZipFocus" @blur="emitZipBlur" />
                <p class="text-red-500">{{ zipError }}</p>
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>Endereço</label>
            <input type="text" placeholder="Digite seu endereço completo" class="rounded-md border border-gray-300 py-2 px-4" v-model="localAddress" @input="emitAddresChange" readonly @focus="emitAddressFocus">
            <p class="text-red-500">{{ addressError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Número</label>
                <input type="text" placeholder="Número" class="rounded-md border border-gray-300 py-2 px-4" v-model="localNumber" @input="emitNumberChange" @focus="emitNumberFocus" @blur="emitNumberBlur">
                <p class="text-red-500">{{ numberError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label>Complemento</label>
                <input type="text" placeholder="Digite seu complemento" class="rounded-md border border-gray-300 py-2 px-4" v-model="localComplement" @input="emitComplementChange" readonly @focus="emitComplementFocus">
                <p class="text-red-500">{{ complementError }}</p>
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>Bairro</label>
            <input type="text" placeholder="Digite seu bairro" class="rounded-md border border-gray-300 py-2 px-4" v-model="localNeighborhood" @input="emitNeighbourhoodChange" readonly @focus="emitNeighbourhoodFocus">
            <p class="text-red-500">{{ neighborhoodError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Cidade</label>
                <input type="text" placeholder="Digite sua cidade" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCity" @input="emitCityChange" readonly @focus="emitCityFocus">
                <p class="text-red-500">{{ cityError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="state">Selecione um estado:</label>
                <select id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localState" @input="emitStateChange" @focus="emitStateFocus" >
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
                <p class="text-red-500">{{ stateError }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import {fetchCEP} from "@/services/ViaCepService.js";

export default {
    name: 'FormComponent',
    props: {
        name: String,
        email: String,
        phone: String,
        address: String,
        number: String,
        complement: String,
        neighborhood: String,
        city: String,
        state: String,
        zip: String,
        nameError: String,
        emailError: String,
        phoneError: String,
        addressError: String,
        numberError: String,
        complementError: String,
        neighborhoodError: String,
        cityError: String,
        stateError: String,
        zipError: String,
    },
    data() {
        return {
            localName: this.name,
            localEmail: this.email,
            localPhone: this.phone,
            localAddress: this.address,
            localNumber: this.number,
            localComplement: this.complement,
            localNeighborhood: this.neighborhood,
            localCity: this.city,
            localState: this.state,
            localZip: this.zip,
            localNameError: this.nameError,
            localEmailError: this.emailError,
            localPhoneError: this.phoneError,
            localAddressError: this.addressError,
            localNumberError: this.numberError,
            localComplementError: this.complementError,
            localNeighborhoodError: this.neighborhoodError,
            localCityError: this.cityError,
            localStateError: this.stateError,
            localZipError: this.zipError,
        };
    },
    methods: {
        emitNameChange() {
            this.$emit('name-changed', this.localName);
        },
        emitEmailChange() {
            this.$emit('email-changed', this.localEmail);
        },
        emitPhoneChange() {
            this.$emit('phone-changed', this.localPhone);
        },
        emitAddresChange() {
            this.$emit('address-changed', this.localAddress);
        },
        emitNumberChange() {
            this.$emit('number-changed', this.localNumber);
        },
        emitComplementChange() {
            this.$emit('complement-changed', this.localComplement);
        },
        emitNeighbourhoodChange() {
            this.$emit('neighborhood-changed', this.localNeighborhood);
        },
        emitCityChange() {
            this.$emit('city-changed', this.localCity);
        },
        emitStateChange() {
            this.$emit('state-changed', this.localState);
        },
        emitZipChange() {
            this.$emit('zip-changed', this.localZip);
            this.zipCheck();
        },
        emitNameFocus() {
            this.$emit('name-focus');
        },
        emitEmailFocus() {
            this.$emit('email-focus');
        },
        emitPhoneFocus() {
            this.$emit('phone-focus');
        },
        emitAddressFocus() {
            this.$emit('address-focus');
        },
        emitNumberFocus() {
            this.$emit('number-focus');
        },
        emitComplementFocus() {
            this.$emit('complement-focus');
        },
        emitNeighbourhoodFocus() {
            this.$emit('neighborhood-focus');
        },
        emitCityFocus() {
            this.$emit('city-focus');
        },
        emitStateFocus() {
            this.$emit('state-focus');
        },
        emitZipFocus() {
            this.$emit('zip-focus');
        },
        emitNameBlur() {
            this.$emit('name-blur');
        },
        emitEmailBlur() {
            this.$emit('email-blur');
        },
        emitPhoneBlur() {
            this.$emit('phone-blur');
        },
        emitNumberBlur() {
            this.$emit('number-blur');
        },
        emitZipBlur() {
            this.$emit('zip-blur');
        },
        zipCheck() {
            if (this.localZip.length === 8) {
                this.getZipInfoByApi();
            }
        },
        getZipInfoByApi() {
            fetchCEP(this.localZip)
                .then((response) => {
                    this.localAddress = response.logradouro;
                    this.localNeighborhood = response.bairro;
                    this.localCity = response.localidade;
                    this.localState = response.uf;
                    this.emitAddresChange();
                    this.emitNeighbourhoodChange();
                    this.emitCityChange();
                    this.emitStateChange();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
}
</script>
