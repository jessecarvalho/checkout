<template>
    <div id="credit-card" class="md:grid md:grid-cols-2 mt-5 gap-5" :class="{'hidden md:hidden': this.hidden}">
        <div id="credit-card-info">
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Número do Cartão</label>
                <the-mask :mask="['#### #### #### ####']" v-model="localCreditCardNumber" @input="emitCreditCardNumberChange" @focus="emitCreditCardNumberFocus" @blur="emitCreditCardNumberBlur"  type="text"  placeholder="Digite somente os números" class="rounded-md border border-gray-300 py-2 px-4 " maxlength='20' />
                <p class="text-red-500"> {{ creditCardNumberError }} </p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Titular do Cartão</label>
                <input type="text" placeholder="Digite o nome impresso no cartão" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardName" @input="emitCreditCardNameChange" @focus="emitCreditCardNameFocus" @blur="emitCreditCardNameBlur">
                <p class="text-red-500"> {{ creditCardNameError }} </p>
            </div>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">CPF/CNPJ do Titular</label>
                <the-mask :mask="['###.###.###.##', '##.###.###/####-##']"  type="text" placeholder="Para emissão da nota fiscal" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardDocument" @input="emitCreditCardDocumentChange" @focus="emitCreditCardDocumentFocus" @blur="emitCreditCardDocumentBlur" />
                <p class="text-red-500"> {{ localCreditCardDocumentError }} </p>
            </div>
            <div class="half-input grid grid-cols-3">
                <div class="col-span-2 grid grid-cols-2">
                    <div class="input-group flex flex-col my-2">
                        <label class="text-sm">Mês</label>
                        <select id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardExpirationMonth" @input="emitCreditCardExpirationMonthChange" @focus="emitCreditCardExpirationMonthFocus" @blur="emitCreditCardExpirationMonthBlur">
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
                        <p class="text-red-500"> {{ localCreditCardExpirationMonthError }} </p>
                    </div>
                    <div class="input-group flex flex-col my-2">
                        <label class="text-sm">Ano</label>
                        <select id="state" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardExpirationYear" @input="emitCreditCardExpirationYearChange" @focus="emitCreditCardExpirationYearFocus" @blur="emitCreditCardExpirationYearBlur">
                            <option value="" disabled selected>Ano</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>
                        <p class="text-red-500"> {{ localCreditCardExpirationYearError }} </p>
                    </div>
                </div>
                <div class="input-group flex flex-col my-2">
                    <label class="text-sm">CVV</label>
                    <input type="text" placeholder="CVV" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardCvv" @input="emitCreditCardCvvChange" @focus="emitCreditCardCvvFocus" @blur="emitCreditCardCvvBlur">
                    <p class="text-red-500"> {{ localCreditCardCvvError }} </p>
                </div>
            </div>
            <div class="input-group flex flex-col my-2">
                <label class="text-sm">Número de parcelas</label>
                <select id="creditCard" class="rounded-md border border-gray-300 py-2 px-4" v-model="localCreditCardInstallments" @input="emitCreditCardInstallmentsChange" @focus="emitCreditCardInstallmentsFocus" @blur="emitCreditCardInstallmentsBlur">
                    <option value="1">1x de R$ 50,00</option>
                    <option value="2">2x de R$ 25,00</option>
                    <option value="3">3x de R$ 16,66</option>
                    <p class="text-red-500"> {{ localCreditCardInstallmentsError }} </p>
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
export default {
    name: 'CreditCardComponent',
    data() {
        return {
            isCreditCardValid: false,
            creditCardRegex: {
                visa: /^4[0-9]{15}$/,
                mastercard: /^(50|5[6-9]|6007|6220|6304|6703|6708|6759|676[1-3])|((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
                diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
                amex: /^3[47][0-9]{13}$/,
                hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
                elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
            },
            visaHidden: true,
            mastercardHidden: true,
            dinersHidden: true,
            amexHidden: true,
            hipercardHidden: true,
            eloHidden: true,
            localCreditCardNumber: this.creditCardNumber,
            localCreditCardName: this.creditCardName,
            localCreditCardDocument: this.creditCardDocument,
            localCreditCardExpirationMonth: this.creditCardExpirationMonth,
            localCreditCardExpirationYear: this.creditCardExpirationYear,
            localCreditCardCvv: this.creditCardCvv,
            localCreditCardInstallments: this.creditCardInstallments,
            localCreditCardNumberError: this.creditCardNumberError,
            localCreditCardNameError: this.creditCardNameError,
            localCreditCardDocumentError: this.creditCardDocumentError,
            localCreditCardExpirationMonthError: this.creditCardExpirationMonthError,
            localCreditCardExpirationYearError: this.creditCardExpirationYearError,
            localCreditCardCvvError: this.creditCardCvvError,
            localCreditCardInstallmentsError: this.creditCardInstallmentsError,
        };
    },
    methods: {
        emitCreditCardNumberChange() {
            this.$emit('creditCardNumberChange', this.localCreditCardNumber);
            this.validateCreditCard();
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
                    this.isCreditCardValid = true;
                    return;
                }
            }
            this.isCreditCardValid = false;
            this.hiddenAllFlags();
        },
        hiddenAllFlags() {
            this.visaHidden = true;
            this.mastercardHidden = true;
            this.dinersHidden = true;
            this.amexHidden = true;
            this.hipercardHidden = true;
            this.eloHidden = true;
        },
        checkCreditCartValidation() {
            if (!this.isCreditCardValid) {
                this.localCreditCardNumberError = "Número de cartão inválido";
            }
        },
        emitCreditCardNameChange() {
            this.$emit('creditCardNameChange', this.localCreditCardName);
        },
        emitCreditCardDocumentChange() {
            this.$emit('creditCardDocumentChange', this.localCreditCardDocument);
        },
        emitCreditCardExpirationMonthChange() {
            this.$emit('creditCardExpirationMonthChange', this.localCreditCardExpirationMonth);
        },
        emitCreditCardExpirationYearChange() {
            this.$emit('creditCardExpirationYearChange', this.localCreditCardExpirationYear);
        },
        emitCreditCardCvvChange() {
            this.$emit('creditCardCvvChange', this.localCreditCardCvv);
        },
        emitCreditCardInstallmentsChange() {
            this.$emit('creditCardInstallmentsChange', this.localCreditCardInstallments);
        },
        emitCreditCardNumberFocus() {
            this.$emit('creditCardNumberFocus');
        },
        emitCreditCardNameFocus() {
            this.$emit('creditCardNameFocus');
        },
        emitCreditCardDocumentFocus() {
            this.$emit('creditCardDocumentFocus');
        },
        emitCreditCardExpirationMonthFocus() {
            this.$emit('creditCardExpirationMonthFocus');
        },
        emitCreditCardExpirationYearFocus() {
            this.$emit('creditCardExpirationYearFocus');
        },
        emitCreditCardCvvFocus() {
            this.$emit('creditCardCvvFocus');
        },
        emitCreditCardInstallmentsFocus() {
            this.$emit('creditCardInstallmentsFocus');
        },
        emitCreditCardNumberBlur() {
            this.$emit('creditCardNumberBlur');
            this.checkCreditCartValidation();
        },
        emitCreditCardNameBlur() {
            this.$emit('creditCardNameBlur');
        },
        emitCreditCardDocumentBlur() {
            this.$emit('creditCardDocumentBlur');
        },
        emitCreditCardExpirationMonthBlur() {
            this.$emit('creditCardExpirationMonthBlur');
        },
        emitCreditCardExpirationYearBlur() {
            this.$emit('creditCardExpirationYearBlur');
        },
        emitCreditCardCvvBlur() {
            this.$emit('creditCardCvvBlur');
        },
        emitCreditCardInstallmentsBlur() {
            this.$emit('creditCardInstallmentsBlur');
        },
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
        creditCardNumberError: String,
        creditCardNameError: String,
        creditCardDocumentError: String,
        creditCardExpirationMonthError: String,
        creditCardExpirationYearError: String,
        creditCardCvvError: String,
        creditCardInstallmentsError: String,
    },
}
</script>
