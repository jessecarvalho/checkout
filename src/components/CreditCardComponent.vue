<template>
    <div id="credit-card" class="md:grid md:grid-cols-2 mt-5 gap-5" :class="{'hidden md:hidden': this.hidden}">
        <div id="credit-card-info">
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Número do Cartão</label>
                <the-mask :masked="true" @input="validateCreditCardNumber" @blur.native="validateCreditCardNumber" :mask="['#### #### #### ####']" v-model="localCreditCardNumber" type="text"  placeholder="Digite somente os números" class="rounded-md border border-gray-300 py-2 px-4 " maxlength='20'  />
                <p class="text-red-500"> {{ creditCardNumberError }} </p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Titular do Cartão</label>
                <input @input="validateCreditCardName" @blur="validateCreditCardName" type="text" placeholder="Digite o nome impresso no cartão" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardName" >
                <p class="text-red-500"> {{ creditCardNameError }} </p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">CPF/CNPJ do Titular</label>
                <the-mask :masked="true" @input="validateCreditCardDocument" @blur.native="validateCreditCardDocument" :mask="['###.###.###.##', '##.###.###/####-##']"  type="text" placeholder="Para emissão da nota fiscal" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardDocument"/>
                <p class="text-red-500"> {{ creditCardDocumentError }} </p>
            </div>
            <div class="half-input grid grid-cols-3">
                <div class="col-span-2 grid grid-cols-2">
                    <div class="input-group flex flex-col my-2">
                        <label class="text-sm">Mês</label>
                        <select @change="validateCreditCardExpirationMonth" @blur="validateCreditCardExpirationMonth" id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardExpirationMonth">
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
                        <label class="text-sm">Ano</label>
                        <select @change="validateCreditCardExpirationYear" @blur="validateCreditCardExpirationYear" id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardExpirationYear">
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
                    <label class="text-sm">CVV</label>
                    <input @input="validateCreditCardCvv" @blur="validateCreditCardCvv" type="text" placeholder="CVV" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardCvv" >
                </div>
            </div>
            <p class="text-red-500"> {{ creditCardExpirationMonthError }} </p>
            <p class="text-red-500"> {{ creditCardCvvError }} </p>
            <p class="text-red-500"> {{ creditCardExpirationYearError }} </p>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Número de parcelas</label>
                <select id="creditCard" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardInstallments">
                    <option value="1">1x de R$ 50,00</option>
                    <option value="2">2x de R$ 25,00</option>
                    <option value="3">3x de R$ 16,66</option>
                    <p class="text-red-500"> {{ creditCardInstallmentsError }} </p>
                </select>
            </div>
        </div>
        <div class="credit-card-simulate">
            <div class="bg-[url('@/assets/image/credit-card.png')] w-full py-12 rounded-md p-6">
                <div class="flex flex-row justify-between items-center ">
                    <img src="@/assets/image/chip.png" alt="chip" class="w-10" >
                    <img src="@/assets/image/visa.png" alt="visa" class="w-10" :class="{'hidden': this.visaHidden}">
                    <img src="@/assets/image/mastercard.png" alt="mastercard" class="w-10" :class="{'hidden': this.mastercardHidden}">
                    <img src="@/assets/image/amex.png" alt="amex" class="w-10" :class="{'hidden': this.amexHidden}">
                    <img src="@/assets/image/diners.png" alt="diners" class="w-10" :class="{'hidden': this.dinersHidden}">
                    <img src="@/assets/image/hipercard.png" alt="hipercard" class="w-10" :class="{'hidden': this.hipercardHidden}">
                    <img src="@/assets/image/elo.png" alt="elo" class="w-10" :class="{'hidden': this.eloHidden}">
                </div>
                <p class="text-white my-3">{{ localCreditCardNumber || '#### #### #### ####' }}</p>
                <div class="grid grid-cols-2">
                    <div>
                        <p class="text-white text-xs font-light">Titular</p>
                        <p class="text-white text-xs">{{ localCreditCardName || 'Nome Completo' }}</p>
                    </div>
                    <div>
                        <p class="text-white text-xs font-light">Validade</p>
                        <p class="text-white text-xs font-light">{{ (localCreditCardExpirationMonth || 'Mês') + '/' + (localCreditCardExpirationYear || 'Ano') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'CreditCardComponent',
    computed: {
        ...mapGetters(["getCreditCard"]),
    },
    methods: {
        ...mapActions(['updateCreditCard']),
        updateCreditCardNumber() {
            this.updateCreditCard({ number: this.localCreditCardNumber });
        },
        updateCreditCardName() {
            this.updateCreditCard({ name: this.localCreditCardName });
        },
        updateCreditCardDocument() {
            this.updateCreditCard({ document: this.localCreditCardDocument });
        },
        updateCreditCardExpirationMonth() {
            this.updateCreditCard({ expirationMonth: this.localCreditCardExpirationMonth });
        },
        updateCreditCardExpirationYear() {
            this.updateCreditCard({ expirationYear: this.localCreditCardExpirationYear });
        },
        updateCreditCardCvv() {
            this.updateCreditCard({ cvv: this.localCreditCardCvv });
        },
        validateCreditCard() {
            for (const type in this.creditCardRegex) {
                if (this.creditCardRegex[type].test(this.localCreditCardNumber)) {
                    if (type === "visa") {
                        this.hiddenAllFlags();
                        this.visaHidden = false;
                    } else if (type === "mastercard"){
                        this.hiddenAllFlags();
                        this.mastercardHidden = false;
                    } else if (type === "diners") {
                        this.hiddenAllFlags();
                        this.dinersHidden = false;
                    } else if (type === "amex") {
                        this.hiddenAllFlags();
                        this.amexHidden = false;
                    } else if (type === "hipercard") {
                        this.hiddenAllFlags();
                        this.hipercardHidden = false;
                    } else if (type === "elo") {
                        this.hiddenAllFlags();
                        this.eloHidden = false;
                    }
                    return true;
                }
            }
            return false;
        },
        hiddenAllFlags() {
            this.visaHidden = true;
            this.mastercardHidden = true;
            this.dinersHidden = true;
            this.amexHidden = true;
            this.hipercardHidden = true;
            this.eloHidden = true;
        },
        validateCreditCardNumber() {
            if (this.localCreditCardNumber === "" || this.localCreditCardNumber.length < 16 || !this.validateCreditCard()) {
                this.hiddenAllFlags();
                this.creditCardNumberError = "Número de cartão inválido";
                return;
            }
            this.updateCreditCardNumber();
            this.creditCardNumberError = "";
            this.updateCreditCard({ number: this.localCreditCardNumber });
        },
        validateCreditCardName() {
            if (this.localCreditCardName === "") {
                this.creditCardNameError = "Nome inválido";
                return;
            }
            this.updateCreditCardName();
            this.creditCardNameError = "";
        },
        validateCreditCardDocument() {
            if (this.localCreditCardDocument === "" || this.localCreditCardDocument.length <= 13) {
                this.creditCardDocumentError = "CPF/CNPJ inválido";
                return;
            }
            this.updateCreditCardDocument();
            this.creditCardDocumentError = "";
        },
        validateCreditCardExpirationMonth() {
            if (this.localCreditCardExpirationMonth === "") {
                this.creditCardExpirationMonthError = "Mês inválido";
                return;
            }
            this.updateCreditCardExpirationMonth();
            this.creditCardExpirationMonthError = "";
        },
        validateCreditCardExpirationYear() {
            if (this.localCreditCardExpirationYear === "") {
                this.creditCardExpirationYearError = "Ano inválido";
                return;
            }
            this.updateCreditCardExpirationYear();
            this.creditCardExpirationYearError = "";
        },
        validateCreditCardCvv() {
            if (this.localCreditCardCvv === "" || this.localCreditCardCvv.length < 3) {
                this.creditCardCvvError = "CVV inválido";
                return;
            }
            this.updateCreditCardCvv();
            this.creditCardCvvError = "";
        },
    },
    data() {
        return {
            localCreditCardNumber: "",
            creditCardNumberError: "",
            localCreditCardName: "",
            creditCardNameError: "",
            localCreditCardDocument: "",
            creditCardDocumentError: "",
            localCreditCardExpirationMonth: "",
            creditCardExpirationMonthError: "",
            localCreditCardExpirationYear: "",
            creditCardExpirationYearError: "",
            localCreditCardCvv: "",
            creditCardCvvError: "",
            localCreditCardInstallments: "1",
            creditCardInstallmentsError: "",
            visaHidden: true,
            mastercardHidden: true,
            dinersHidden: true,
            amexHidden: true,
            hipercardHidden: true,
            eloHidden: true,
            creditCardRegex: {
                visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
                mastercard: /^5[1-5][0-9]{14}$/,
                diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                amex: /^3[47][0-9]{13}$/,
                hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
                elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/,
            },
        };
    },
    props: {
        hidden: Boolean,
        creditCardNumber: String,
        creditCardName: String,
        creditCardDocument: String,
        creditCardExpirationMonth: String,
        creditCardExpirationYear: String,
        creditCardCvv: String,
        creditCardInstallments: Number,
    },
}
</script>
