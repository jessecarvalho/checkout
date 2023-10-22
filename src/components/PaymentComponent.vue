<template>
    <div id="payment" class="md:w-1/2 m-auto mt-4 border border-gray-300 rounded-md p-5 items-center">
        <div class="md:w-4/5 m-auto grid grid-cols-3 gap-3 items-center">
            <div class="text-center md:text-left flex flex-col md:flex-row gap-2 border-2 border-gray-400 p-2 rounded-md cursor-pointer items-center justify-center h-28 md:h-16 hover:border-orange-400 hover:bg-orange-100 hover:text-white" :class="{'bg-orange-100': !this.creditCardHidden}" @click="toggleCreditCard">
                <svg width="53" height="39" viewBox="0 0 53 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.1667 14.8333H4.83337M24.3334 23.5H13.5M4.83337 10.9333L4.83337 27.4C4.83337 29.8269 4.83337 31.0403 5.30568 31.9673C5.72113 32.7827 6.38405 33.4456 7.19941 33.861C8.12637 34.3333 9.33981 34.3333 11.7667 34.3333L41.2334 34.3333C43.6603 34.3333 44.8737 34.3333 45.8007 33.861C46.616 33.4456 47.279 32.7827 47.6944 31.9673C48.1667 31.0403 48.1667 29.8269 48.1667 27.4V10.9333C48.1667 8.50644 48.1667 7.293 47.6944 6.36604C47.279 5.55068 46.616 4.88776 45.8007 4.47231C44.8737 4 43.6603 4 41.2334 4L11.7667 4C9.33981 4 8.12637 4 7.19942 4.4723C6.38405 4.88776 5.72113 5.55067 5.30568 6.36604C4.83337 7.29299 4.83337 8.50644 4.83337 10.9333Z" stroke="#8E939A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-sm text-gray-700">Cartão de crédito</p>
            </div>
            <div class="text-center md:text-left flex flex-col md:flex-row gap-2 border-2 border-gray-400 p-2 rounded-md cursor-pointer items-center justify-center h-28 md:h-16 hover:border-orange-400 hover:bg-orange-100" :class="{'bg-orange-100': !this.pixHidden}" @click="togglePix">
                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.9523 27.7955C30.2091 27.798 29.4728 27.6616 28.7858 27.3942C28.0989 27.1268 27.4749 26.7337 26.95 26.2375L21.1687 20.7819C20.9642 20.5975 20.6922 20.4946 20.4093 20.4946C20.1263 20.4946 19.8543 20.5975 19.6498 20.7819L13.849 26.2525C13.3244 26.7494 12.7006 27.1433 12.0136 27.4115C11.3267 27.6797 10.5902 27.8169 9.84668 27.8151H8.71484L16.0406 34.7238C17.1394 35.7578 18.6281 36.3385 20.1803 36.3385C21.7325 36.3385 23.2213 35.7578 24.32 34.7238L31.6605 27.8001L30.9523 27.7955Z" fill="#8E939A"/>
                    <path d="M9.8479 8.51539C10.5914 8.51351 11.3279 8.65064 12.0149 8.91884C12.7019 9.18704 13.3257 9.58099 13.8502 10.0779L19.651 15.5497C19.8527 15.7392 20.1258 15.8457 20.4105 15.8457C20.6952 15.8457 20.9683 15.7392 21.1699 15.5497L26.95 10.0986C27.4741 9.60109 28.0978 9.20666 28.7848 8.93823C29.4719 8.66981 30.2086 8.53273 30.9523 8.53496H31.6483L24.3078 1.61238C23.7642 1.09957 23.1189 0.692777 22.4086 0.415237C21.6983 0.137698 20.937 -0.00515175 20.1681 -0.00515175C19.3993 -0.00515175 18.6379 0.137698 17.9276 0.415237C17.2174 0.692777 16.572 1.09957 16.0284 1.61238L8.71484 8.51539H9.8479Z" fill="#8E939A"/>
                    <path d="M37.7202 14.2623L33.2844 10.0791C33.1844 10.1176 33.0775 10.1379 32.9694 10.1389H30.9524C29.9028 10.1414 28.8966 10.5345 28.1527 11.2328L22.3726 16.6804C21.8521 17.1704 21.1467 17.4456 20.4112 17.4456C19.6757 17.4456 18.9702 17.1704 18.4497 16.6804L12.6476 11.2121C11.9039 10.5134 10.8978 10.1198 9.84797 10.1171H7.37185C7.26981 10.1149 7.16896 10.0958 7.07394 10.0606L2.61008 14.2623C1.5137 15.2985 0.897949 16.7025 0.897949 18.1664C0.897949 19.6302 1.5137 21.0342 2.61008 22.0704L7.06417 26.2709C7.15899 26.2351 7.25996 26.216 7.36208 26.2145H9.84797C10.8977 26.2116 11.9038 25.8181 12.6476 25.1195L18.4485 19.6489C19.4973 18.6609 21.3251 18.6609 22.3726 19.6489L28.1527 25.0987C28.8966 25.797 29.9028 26.1901 30.9524 26.1926H32.9694C33.0775 26.1933 33.1845 26.2137 33.2844 26.2525L37.7202 22.0692C38.264 21.5566 38.6953 20.948 38.9896 20.2781C39.2839 19.6083 39.4354 18.8903 39.4354 18.1652C39.4354 17.4401 39.2839 16.7221 38.9896 16.0523C38.6953 15.3824 38.264 14.7738 37.7202 14.2612" fill="#8E939A"/>
                </svg>
                    <p class="text-sm text-gray-700">PIX</p>
            </div>
            <div class="text-center md:text-left flex flex-col md:flex-row gap-2 border-2 border-gray-400 p-2 rounded-md cursor-pointer items-center justify-center h-28 md:h-16 hover:border-orange-400 hover:bg-orange-100" :class="{'bg-orange-100': !this.ticketHidden}" @click="toggleTicket">
                <svg width="46" height="31" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.166626 0H1.4532V30.3333H0.166626V0ZM2.73977 0H4.02635V30.3333H2.73977V0ZM10.4647 0H11.7512V30.3333H10.4647V0ZM35.5078 0H36.7943V30.3333H35.5078V0ZM43.8801 0H45.1666V30.3333H43.8801V0ZM18.9599 0H20.2465V30.3333H18.9599V0ZM6.08595 0H8.40233V30.3333H6.08595V0ZM21.3746 0H23.691V30.3333H21.3746V0ZM32.1097 0H34.4261V30.3333H32.1097V0ZM37.6056 0H39.922V30.3333H37.6056V0ZM13.0378 0H17.6706V30.3333H13.0378V0ZM25.0458 0H28.6488V30.3333H25.0458V0Z" fill="#8E939A"/>
                </svg>
                <p class="text-sm text-gray-700">Boleto</p>

            </div>
        </div>

        <credit-card-component
            :hidden="this.creditCardHidden"
            :creditCardNumber="this.creditCardNumber"
            :creditCardName="this.creditCardName"
            :creditCardDocument="this.creditCardDocument"
            :creditCardExpirationMonth="this.creditCardExpirationMonth"
            :creditCardExpirationYear="this.creditCardExpirationYear"
            :creditCardCvv="this.creditCardCvv"
            :creditCardInstallments="this.creditCardInstallments"
            :creditCardNumberError="this.creditCardNumberError"
            :creditCardNameError="this.creditCardNameError"
            :creditCardDocumentError="this.creditCardDocumentError"
            :creditCardExpirationMonthError="this.creditCardExpirationMonthError"
            :creditCardExpirationYearError="this.creditCardExpirationYearError"
            :creditCardCvvError="this.creditCardCvvError"
            :creditCardInstallmentsError="this.creditCardInstallmentsError"

        >
        </credit-card-component>

        <pix-component
            :hidden="this.pixHidden"
        >
        </pix-component>

        <ticket-component
            :hidden="this.ticketHidden"
        >
        </ticket-component>

        <div class="checkout mt-5">
            <p>Detalhes da compra</p>
            <div class="flex flex-row justify-between">
                <p class="font-bold my-2 text-sm">Nome do produto</p>
                <p class="my-2 text-sm">R$ 50,00 / mês</p>
            </div>
            <p class="flex items-center gap-2 text-xs" :class="{'hidden': this.creditCardHidden}">
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.33325H21V4.53325C21 3.41315 21 2.8531 20.782 2.42527C20.5903 2.04895 20.2843 1.74299 19.908 1.55124C19.4802 1.33325 18.9201 1.33325 17.8 1.33325H4.2C3.0799 1.33325 2.51984 1.33325 2.09202 1.55124C1.7157 1.74299 1.40973 2.04895 1.21799 2.42527C1 2.85309 1 3.41315 1 4.53325V12.1333C1 13.2534 1 13.8134 1.21799 14.2412C1.40973 14.6176 1.71569 14.9235 2.09202 15.1153C2.51984 15.3333 3.0799 15.3333 4.2 15.3333H10M13.5 17.3333L15.525 16.9283C15.7015 16.8929 15.7898 16.8753 15.8721 16.843C15.9452 16.8143 16.0147 16.7772 16.079 16.7323C16.1516 16.6817 16.2152 16.618 16.3426 16.4907L20.5 12.3333C21.0523 11.781 21.0523 10.8855 20.5 10.3333C19.9477 9.78097 19.0523 9.78097 18.5 10.3333L14.3426 14.4907C14.2152 14.618 14.1516 14.6817 14.101 14.7542C14.0561 14.8186 14.0189 14.888 13.9903 14.9611C13.958 15.0434 13.9403 15.1317 13.905 15.3083L13.5 17.3333Z" stroke="#CED4DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
            </p>
            <div class="input-group flex flex-col my-2 md:w-1/2" :class="{'hidden': !creditCardHidden || (pixHidden && ticketHidden)}">
                <label class="text-sm">CPF/CNPJ (Para emissão de Nota Fiscal)</label>
                <the-mask :mask="['###.###.###.##', '##.###.###/####-##']"  type="text" placeholder="" class="rounded-md border border-gray-300 py-2 px-4" v-model="localPaymentDoc" />
                <p class="text-red-500"> {{ paymentDocError }} </p>
            </div>
            <button class="w-full md:w-fit md:px-28 py-3 bg-orange-400 text-white cursor-pointer mt-5 hover:bg-orange-500" >Comprar Agora</button>
            <div class="flex items-center justify-center">
                <img src="@/assets/image/secure.png" alt="Site Seguro" class="w-48 mt-5">
            </div>
        </div>
    </div>
</template>

<script>
import PixComponent from './PixComponent.vue'
import CreditCardComponent from './CreditCardComponent.vue'
import TicketComponent from './TicketComponent.vue'

export default {
    name: 'PaymentComponent',
    data() {
        return {
            creditCardHidden: true,
            ticketHidden: true,
            pixHidden: true,
            localPaymentDoc: this.paymentDoc,
        };
    },
    props: {
        creditCardNumber: String,
        creditCardName: String,
        creditCardDocument: String,
        creditCardExpirationMonth: String,
        creditCardExpirationYear: String,
        creditCardCvv: String,
        creditCardInstallments: Number,
        paymentDoc: String,
        creditCardNumberError: String,
        creditCardNameError: String,
        creditCardDocumentError: String,
        creditCardExpirationMonthError: String,
        creditCardExpirationYearError: String,
        creditCardCvvError: String,
        creditCardInstallmentsError: String,
        paymentDocError: String,
    },
    components: {
        PixComponent,
        CreditCardComponent,
        TicketComponent,
    },
    methods: {
        toggleCreditCard() {
            this.hideAllPaymentMethods();
            this.creditCardHidden = !this.creditCardHidden;
        },
        togglePix() {
            this.hideAllPaymentMethods();
            this.pixHidden = !this.pixHidden;
        },
        toggleTicket() {
            this.hideAllPaymentMethods();
            this.ticketHidden = !this.ticketHidden;
        },
        hideAllPaymentMethods() {
            this.ticketHidden = true;
            this.creditCardHidden = true;
            this.pixHidden = true;
        },
    }
}
</script>
