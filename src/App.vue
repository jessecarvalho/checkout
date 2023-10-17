<template>
    <div>
        <header-component></header-component>
        <form-component></form-component>
        <payment-component></payment-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FormComponent from './components/FormComponent.vue'
import PaymentComponent from './components/PaymentComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
      HeaderComponent,
      FormComponent,
      PaymentComponent,
      FooterComponent,
  }
}
</script>
