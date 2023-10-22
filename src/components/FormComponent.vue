<template>
    <section id="form" class="md:w-1/2 m-auto mt-4 border border-gray-300 rounded-md p-5">
        <div class="input-group flex flex-col my-2">
            <label >Nome Completo</label>
                <input @input="validateFormName" @blur="validateFormName" type="text" placeholder="Digite seu nome completo" class="rounded-md border border-gray-300 py-2 px-4" v-model="localName">
                <p class="text-red-500">{{ nameError }}</p>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>E-mail</label>
            <input @input="validateFormEmail" @blur="validateFormEmail" type="text" placeholder="Digite seu e-mail" class="rounded-md border border-gray-300 py-2 px-4" v-model="localEmail">
            <p class="text-red-500">{{ emailError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Telefone</label>
                <the-mask @input="validateFormPhone" :masked="true" @blur.native="validateFormPhone" type="text" placeholder="Digite seu telefone" class="rounded-md border border-gray-300 py-2 px-4" v-model="localPhone" :mask="['(##) ####-####', '(##) #####-####']" />
                <p class="text-red-500">{{ phoneError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label>CEP</label>
                <the-mask @input="validateFormZip" @blur.native="validateFormZip" :mask="['#####-###']" type="text" placeholder="Digite seu cep" class="rounded-md border border-gray-300 py-2 px-4" v-model="localZip" />
                <p class="text-red-500">{{ zipError }}</p>
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>Endereço</label>
            <input @input="validateFormAddress" @blur="validateFormAddress" type="text" placeholder="Digite seu endereço completo" class="rounded-md border border-gray-300 py-2 px-4" v-model="localAddress" readonly>
            <p class="text-red-500">{{ addressError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Número</label>
                <input @input="validateFormNumber" @blur="validateFormNumber" type="text" placeholder="Número" class="rounded-md border border-gray-300 py-2 px-4" v-model="localNumber">
                <p class="text-red-500">{{ numberError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label>Complemento</label>
                <input @input="validateFormComplement" @blur="validateFormComplement" type="text" placeholder="Digite seu complemento" class="rounded-md border border-gray-300 py-2 px-4" v-model="localComplement" readonly>
                <p class="text-red-500">{{ complementError }}</p>
            </div>
        </div>
        <div class="input-group flex flex-col my-2">
            <label>Bairro</label>
            <input @input="validateFormNeighborhood" @blur="validateFormNeighborhood" type="text" placeholder="Digite seu bairro" class="rounded-md border border-gray-300 py-2 px-4" v-model="localNeighborhood" readonly>
            <p class="text-red-500">{{ neighborhoodError }}</p>
        </div>
        <div class="input-half-size grid md:grid-cols-2 md:gap-5">
            <div class="input-group flex flex-col my-2">
                <label>Cidade</label>
                <input @input="validateFormCity" @blur="validateFormCity" type="text" placeholder="Digite sua cidade" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCity" readonly>
                <p class="text-red-500">{{ cityError }}</p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label for="state">Selecione um estado:</label>
                <select @input="validateFormState" @blur="validateFormState" id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localState" >
                    <option value="" selected disabled>Selecione um estado</option>
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
import { mapGetters, mapActions } from 'vuex';
import {fetchCEP} from "@/services/ViaCepService.js";

export default {
    name: 'FormComponent',
    computed: {
        ...mapGetters(["getForm"]),
    },
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
            nameError: "",
            emailError: "",
            phoneError: "",
            addressError: "",
            numberError: "",
            complementError: "",
            neighborhoodError: "",
            cityError: "",
            stateError: "",
            zipError: "",
        };
    },
    methods: {
        ...mapActions(['updateForm']),
        updateFormName() {
            this.updateForm({ name: this.localName });
        },
        updateFormEmail() {
            this.updateForm({ email: this.localEmail });
        },
        updateFormPhone() {
            this.updateForm({ phone: this.localPhone });
        },
        updateFormAddress() {
            this.updateForm({ address: this.localAddress });
        },
        updateFormNumber() {
            this.updateForm({ number: this.localNumber });
        },
        updateFormComplement() {
            this.updateForm({ complement: this.localComplement });
        },
        updateFormNeighborhood() {
            this.updateForm({ neighborhood: this.localNeighborhood });
        },
        updateFormCity() {
            this.updateForm({ city: this.localCity });
        },
        updateFormState() {
            this.updateForm({ state: this.localState });
        },
        updateFormZip() {
            this.updateForm({ zip: this.localZip });
        },
        zipCheck() {
            this.getZipInfoByApi();
        },
        validateFormName() {
            console.log(this.localName);
            if (this.localName === "") {
                this.nameError = "Nome inválido";
                return;
            }
            this.nameError = "";
            this.updateFormName();
        },
        validateFormEmail() {
            if (this.localEmail === "") {
                this.emailError = "E-mail inválido";
                return;
            }
            this.emailError = "";
            this.updateFormEmail();
        },
        validateFormPhone() {
            if (this.localPhone === "" || this.localPhone.length < 14) {
                this.phoneError = "Telefone inválido";
                return;
            }
            this.phoneError = "";
            this.updateFormPhone();
        },
        validateFormAddress() {
            if (this.localAddress === "") {
                this.addressError = "Endereço inválido";
                return;
            }
            this.addressError = "";
            this.updateFormAddress();
        },
        validateFormNumber() {
            if (this.localNumber === "") {
                this.numberError = "Número inválido";
                return;
            }
            this.numberError = "";
            this.updateFormNumber();
        },
        validateFormComplement() {
            if (this.localComplement === "") {
                this.complementError = "Complemento inválido";
                return;
            }
            this.complementError = "";
            this.updateFormComplement();
        },
        validateFormNeighborhood() {
            if (this.localNeighborhood === "") {
                this.neighborhoodError = "Bairro inválido";
                return;
            }
            this.neighborhoodError = "";
            this.updateFormNeighborhood();
        },
        validateFormCity() {
            if (this.localCity === "") {
                this.cityError = "Cidade inválida";
                return;
            }
            this.cityError = "";
            this.updateFormCity();
        },
        validateFormState() {
            if (this.localState === "") {
                this.stateError = "Estado inválido";
                return;
            }
            this.stateError = "";
            this.updateFormState();
        },
        validateFormZip() {
            if (this.localZip === "" || this.localZip.length < 8) {
                this.zipError = "CEP inválido";
                return;
            }
            this.zipError = "";
            this.updateFormZip();
            this.zipCheck();
        },
        getZipInfoByApi() {
            fetchCEP(this.localZip)
                .then((response) => {
                    this.localAddress = response.logradouro;
                    this.localNeighborhood = response.bairro;
                    this.localCity = response.localidade;
                    this.localState = response.uf;
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
}
</script>
