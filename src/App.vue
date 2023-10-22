<template>
    <div>
        <header-component></header-component>
        <form-component
            :name="name"
            :email="email"
            :phone="phone"
            :address="address"
            :number="number"
            :complement="complement"
            :neighborhood="neighborhood"
            :zip="zip"
            :city="city"
            :state="state"
            :nameError="nameError"
            :emailError="emailError"
            :phoneError="phoneError"
            :addressError="addressError"
            :numberError="numberError"
            :complementError="complementError"
            :neighborhoodError="neighborhoodError"
            :zipError="zipError"
            :cityError="cityError"
            :stateError="stateError"
            @name-changed="handleNameChange"
            @email-changed="handleEmailChange"
            @phone-changed="handlePhoneChange"
            @address-changed="handleAddressChange"
            @number-changed="handleNumberChange"
            @complement-changed="handleComplementChange"
            @neighborhood-changed="handleNeighbourhoodChange"
            @city-changed="handleCityChange"
            @state-changed="handleStateChange"
            @zip-changed="handleZipChange"
            @name-focus="handleFocus()"
            @email-focus="handleFocus()"
            @phone-focus="handleFocus()"
            @address-focus="handleFocus()"
            @number-focus="handleFocus()"
            @complement-focus="handleFocus()"
            @neighborhood-focus="handleFocus()"
            @city-focus="handleFocus()"
            @state-focus="handleFocus()"
            @zip-focus="handleFocus()"
            @name-blur="handleNameBlur()"
            @email-blur="handleEmailBlur()"
            @phone-blur="handlePhoneBlur()"
            @number-blur="handleNumberBlur()"
            @zip-blur="handleZipBlur()"
        >
        </form-component>
        <payment-component
            :creditCardNumber="creditCardNumber"
            :creditCardName="creditCardName"
            :creditCardDocument="creditCardDocument"
            :creditCardExpirationMonth="creditCardExpirationMonth"
            :creditCardExpirationYear="creditCardExpirationYear"
            :creditCardCvv="creditCardCvv"
            :creditCardInstallments="creditCardInstallments"
            :paymentDoc="paymentDoc"
            :creditCardNumberError="creditCardNumberError"
            :creditCardNameError="creditCardNameError"
            :creditCardDocumentError="creditCardDocumentError"
            :creditCardExpirationError="creditCardExpirationError"
            :creditCardCvvError="creditCardCvvError"
            :creditCardInstallmentsError="creditCardInstallmentsError"
            :paymentDocError="paymentDocError"
            @credit-card-number-changed="handleCreditCardNumberChange"
            @credit-card-name-changed="handleCreditCardNameChange"
            @credit-card-document-changed="handleCreditCardDocumentChange"
            @credit-card-expiration-month-changed="handleCreditCardExpirationMonthChange"
            @credit-card-expiration-year-changed="handleCreditCardExpirationYearChange"
            @credit-card-cvv-changed="handleCreditCardCvvChange"
            @credit-card-installments-changed="handleCreditCardInstallmentsChange"
            @payment-doc-changed="handlePaymentDocChange"
            @credit-card-number-focus="handleCreditCardNumberFocus"
            @credit-card-name-focus="handleCreditCardNameFocus"
            @credit-card-document-focus="handleCreditCardDocumentFocus"
            @credit-card-expiration-month-focus="handleCreditCardExpirationMonthFocus"
            @credit-card-expiration-year-focus="handleCreditCardExpirationYearFocus"
            @credit-card-cvv-focus="handleCreditCardCvvFocus"
            @credit-card-installments-focus="handleCreditCardInstallmentsFocus"
            @payment-doc-focus="handlePaymentDocFocus"
            @credit-card-number-blur="handleCreditCardNumberBlur"
            @credit-card-name-blur="handleCreditCardNameBlur"
            @credit-card-document-blur="handleCreditCardDocumentBlur"
            @credit-card-expiration-month-blur="handleCreditCardExpirationMonthBlur"
            @credit-card-expiration-year-blur="handleCreditCardExpirationYearBlur"
            @credit-card-cvv-blur="handleCreditCardCvvBlur"
            @credit-card-installments-blur="handleCreditCardInstallmentsBlur"
            @payment-doc-blur="handlePaymentDocBlur"
            @checkout-click="handleCheckoutClick"
        >
        </payment-component>

        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FormComponent from './components/FormComponent.vue'
import PaymentComponent from './components/PaymentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default  {
    name: 'App',
    components: {
      HeaderComponent,
      FormComponent,
      PaymentComponent,
      FooterComponent,
    },
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            address: "",
            number: "",
            complement: "",
            neighborhood: "",
            zip: "",
            city: "",
            state: "",
            creditCardNumber: "",
            creditCardName: "",
            creditCardDocument: "",
            creditCardExpirationMonth: "",
            creditCardExpirationYear: "",
            creditCardCvv: "",
            creditCardInstallments: 1,
            paymentDoc: "",
            initiateCheckout: false,
            addToCart: false,
            fillAddress: false,
            changeWindow: false,
            nameError: "",
            emailError: "",
            phoneError: "",
            addressError: "",
            numberError: "",
            complementError: "",
            neighborhoodError: "",
            zipError: "",
            cityError: "",
            stateError: "",
            creditCardNumberError: "",
            creditCardNameError: "",
            creditCardDocumentError: "",
            creditCardExpirationError: "",
            creditCardCvvError: "",
            creditCardInstallmentsError: "",
            paymentDocError: "",
        };
    },
    methods: {
        handleNameChange(newName) {
            this.name = newName;
        },
        handleEmailChange(newEmail) {
            this.email = newEmail;
        },
        handlePhoneChange(newPhone) {
            this.phone = newPhone;
        },
        handleAddressChange(newAddress) {
            this.address = newAddress;
        },
        handleNumberChange(newNumber) {
            this.number = newNumber;
        },
        handleComplementChange(newComplement) {
            this.complement = newComplement;
        },
        handleNeighbourhoodChange(newNeighborhood) {
            this.neighborhood = newNeighborhood;
        },
        handleCityChange(newCity) {
            this.city = newCity;
        },
        handleStateChange(newState) {
            this.state = newState;
        },
        handleZipChange(newZip) {
            this.zip = newZip;
        },
        handleCreditCardNumberChange(newCreditCardNumber) {
            this.creditCardNumber = newCreditCardNumber;
        },
        handleCreditCardNameChange(newCreditCardName) {
            this.creditCardName = newCreditCardName;
        },
        handleCreditCardDocumentChange(newCreditCardDocument) {
            this.creditCardDocument = newCreditCardDocument;
        },
        handleCreditCardExpirationMonthChange(newCreditCardExpirationMonth) {
            this.creditCardExpirationMonth = newCreditCardExpirationMonth;
        },
        handleCreditCardExpirationYearChange(newCreditCardExpirationYear) {
            this.creditCardExpirationYear = newCreditCardExpirationYear;
        },
        handleCreditCardCvvChange(newCreditCardCvv) {
            this.creditCardCvv = newCreditCardCvv;
        },
        handleCreditCardInstallmentsChange(newCreditCardInstallments) {
            this.creditCardInstallments = newCreditCardInstallments;
        },
        handlePaymentDocChange(newPaymentDoc) {
            this.paymentDoc = newPaymentDoc;
        },
        handleFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleNameBlur() {
            this.checkAddToCart();
        },
        handleEmailBlur() {
            this.checkAddToCart();
        },
        handlePhoneBlur() {
            this.checkAddToCart();
        },
        handleZipBlur(){
            this.checkFillAddress();
        },
        handleNumberBlur(){
            this.checkFillAddress();
        },
        handleBeforeUnload(event) {
            event.returnValue = 'Tem certeza que deseja sair?';
            console.log("CloseWindow")
        },
        handleCreditCardNumberFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardNameFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardDocumentFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardExpirationMonthFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardExpirationYearFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardCvvFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardInstallmentsFocus() {
            this.checkIfItIsFirstFocus();
        },
        handlePaymentDocFocus() {
            this.checkIfItIsFirstFocus();
        },
        handleCreditCardNumberBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardNameBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardDocumentBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardExpirationMonthBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardExpirationYearBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardCvvBlur() {
            this.checkAddPaymentInfo();
        },
        handleCreditCardInstallmentsBlur() {
            this.checkAddPaymentInfo();
        },
        handlePaymentDocBlur() {
            this.checkAddPaymentInfo();
        },

        handleMouseOut(event) {
            if (this.changeWindow) return false;
            if (event.relatedTarget === null && !event.toElement) {
                console.log("ChangeWindow");
                this.changeWindow = true;
            }
        },

        checkIfItIsFirstFocus(){
            if (this.initiateCheckout) return false;
            console.log("InitiateCheckout");
            this.initiateCheckout = true;
        },
        checkAddToCart(){
            if (this.addToCart) return false;
            if (this.name.length > 1 && (this.email.length > 1 || this.phone.length > 1)) {
                this.addToCart = true;
                console.log("AddToCart")
            }
        },
        checkFillAddress(){
            if (this.fillAddress) return false;
            if (this.zip.length > 1 && this.number.length ) {
                this.fillAddress = true;
                console.log("FillAddress")
            }
        },
        checkAddPaymentInfo(){
            if (this.creditCardName.length > 0 && this.creditCardNumber.length > 0 && this.creditCardDocument.length > 0 && this.creditCardExpirationMonth.length > 0 && this.creditCardExpirationYear.length > 0 && this.creditCardCvv.length > 0 && this.creditCardInstallments.length > 0) {
                let data = {
                    AddPaymentInfo: {
                        name: this.creditCardName,
                        number: this.creditCardNumber,
                        document: this.creditCardDocument,
                        expirationMonth: this.creditCardExpirationMonth,
                        expirationYear: this.creditCardExpirationYear,
                        cvv: this.creditCardCvv,
                        installments: this.creditCardInstallments,
                    }
                };
                console.log(data);
            } else if (this.paymentDoc.length > 0) {
                console.log(this.paymentDoc);
            }
        },
        handleCheckoutClick(){
            if (!(this.name.length > 0)){
                this.nameError = "Digite seu nome"
                console.log("PurchaseFail");
                return false;
            }
            this.nameError = ""

            if (!(this.email.length > 0)){
                this.emailError = "Digite seu email"
                console.log("PurchaseFail");
                return false;
            }
            this.emailError = ""

            if (!(this.phone.length > 0)){
                this.phoneError = "Digite seu telefone"
                console.log("PurchaseFail");
                return false;
            }
            this.phoneError = ""

            if (!(this.zip.length > 0)){
                this.zipError = "Digite o CEP"
                console.log("PurchaseFail");
                return false;
            }
            this.zipError = ""

            if (!(this.address.length > 0)){
                this.addressError = "Digite seu endereço"
                console.log("PurchaseFail");
                return false;
            }
            this.addressError = ""

            if (!(this.number.length > 0)){
                this.numberError = "Digite o número"
                console.log("PurchaseFail");
                return false;
            }
            this.numberError = ""

            if (!(this.neighborhood.length > 0)){
                this.neighborhoodError = "Digite o bairro"
                console.log("PurchaseFail");
                return false;
            }
            this.neighborhoodError = ""

            if (!(this.city.length > 0)){
                this.cityError = "Digite a cidade"
                console.log("PurchaseFail");
                return false;
            }
            this.cityError = ""

            if (!(this.state.length > 0)){
                this.stateError = "Digite o estado"
                console.log("PurchaseFail");
                return false;
            }
            this.stateError = ""
            console.log(this.creditCardNameError);

            if (!(this.creditCardName.length > 0)){
                this.creditCardNameError = "Digite o nome impresso no cartão"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardNameError = ""

            console.log(this.creditCardNumber);

            if (!(this.creditCardNumber.length > 0)){
                this.creditCardNumberError = "Digite o número do cartão"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardNumberError = ""

            if (!(this.creditCardDocument.length > 0)){
                this.creditCardDocumentError = "Digite o CPF"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardDocumentError = ""

            if (!(this.creditCardExpirationMonth.length > 0)){
                this.creditCardExpirationError = "Digite o mês de vencimento"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardExpirationError = ""

            if (!(this.creditCardExpirationYear.length > 0)){
                this.creditCardExpirationError = "Digite o ano de vencimento"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardExpirationError = ""

            if (!(this.creditCardCvv.length > 0)){
                this.creditCardCvvError = "Digite o CVV"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardCvvError = ""

            if (!(this.creditCardInstallments.length > 0)){
                this.creditCardInstallmentsError = "Digite o número de parcelas"
                console.log("PurchaseFail");
                return false;
            }
            this.creditCardInstallmentsError = ""

            if (!(this.paymentDoc.length > 0)){
                this.paymentDocError = "Digite o código PIX"
                console.log("PurchaseFail");
                return false;
            }
            this.paymentDocError = ""

            console.log("Purchase");
        }
    },
    created() {
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
    beforeDestroy() {
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    mounted() {
        window.addEventListener("mouseout", this.handleMouseOut);
    },
    beforeUnmount() {
        window.removeEventListener("mouseout", this.handleMouseOut);
    },
}
</script>
