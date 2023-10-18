<template>
    <div id="pix" class="mt-5" :class="{'hidden': this.hidden}">
        <div id="pix-info">
            <h2 class="text-center mb-5 text-sm text-gray-600">Libere sua compra rapidamente pagando com o Pix!</h2>
            <div class="grid md:grid-cols-2 gap-5">
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.33335V16.3333L21.3333 19M29.3333 16.3333C29.3333 23.6971 23.3638 29.6667 16 29.6667C8.63621 29.6667 2.66667 23.6971 2.66667 16.3333C2.66667 8.96955 8.63621 3.00002 16 3.00002C23.3638 3.00002 29.3333 8.96955 29.3333 16.3333Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3 class="font-bold text-sm my-3">Rápida aprovação</h3>
                    <p class="text-xs">Pagamento em segundos, sem complicação.</p>
                </div>
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 7.00001H6.68M21.3333 7.00001H21.3467M6.66667 21.6667H6.68M15.3333 15.6667H15.3467M21.3333 21.6667H21.3467M20.6667 26.3333H26V21M16.6667 20.3333V26.3333M26 17H20M18.8 11.6667H23.8667C24.6134 11.6667 24.9868 11.6667 25.272 11.5214C25.5229 11.3935 25.7268 11.1895 25.8547 10.9387C26 10.6534 26 10.2801 26 9.53334V4.46668C26 3.71994 26 3.34657 25.8547 3.06136C25.7268 2.81047 25.5229 2.6065 25.272 2.47867C24.9868 2.33334 24.6134 2.33334 23.8667 2.33334H18.8C18.0533 2.33334 17.6799 2.33334 17.3947 2.47867C17.1438 2.6065 16.9398 2.81047 16.812 3.06136C16.6667 3.34657 16.6667 3.71994 16.6667 4.46668V9.53334C16.6667 10.2801 16.6667 10.6534 16.812 10.9387C16.9398 11.1895 17.1438 11.3935 17.3947 11.5214C17.6799 11.6667 18.0533 11.6667 18.8 11.6667ZM4.13333 11.6667H9.2C9.94674 11.6667 10.3201 11.6667 10.6053 11.5214C10.8562 11.3935 11.0602 11.1895 11.188 10.9387C11.3333 10.6534 11.3333 10.2801 11.3333 9.53334V4.46668C11.3333 3.71994 11.3333 3.34657 11.188 3.06136C11.0602 2.81047 10.8562 2.6065 10.6053 2.47867C10.3201 2.33334 9.94674 2.33334 9.2 2.33334H4.13333C3.3866 2.33334 3.01323 2.33334 2.72801 2.47867C2.47713 2.6065 2.27316 2.81047 2.14532 3.06136C2 3.34657 2 3.71994 2 4.46668V9.53334C2 10.2801 2 10.6534 2.14532 10.9387C2.27316 11.1895 2.47713 11.3935 2.72801 11.5214C3.01323 11.6667 3.3866 11.6667 4.13333 11.6667ZM4.13333 26.3333H9.2C9.94674 26.3333 10.3201 26.3333 10.6053 26.188C10.8562 26.0602 11.0602 25.8562 11.188 25.6053C11.3333 25.3201 11.3333 24.9467 11.3333 24.2V19.1333C11.3333 18.3866 11.3333 18.0132 11.188 17.728C11.0602 17.4771 10.8562 17.2732 10.6053 17.1453C10.3201 17 9.94674 17 9.2 17H4.13333C3.3866 17 3.01323 17 2.72801 17.1453C2.47713 17.2732 2.27316 17.4771 2.14532 17.728C2 18.0132 2 18.3866 2 19.1333V24.2C2 24.9467 2 25.3201 2.14532 25.6053C2.27316 25.8562 2.47713 26.0602 2.72801 26.188C3.01323 26.3333 3.3866 26.3333 4.13333 26.3333Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3 class="font-bold text-sm my-3">Facilidade na finalização</h3>
                    <p class="text-xs">Basta escanear, com o aplicativo do seu banco, o QRCode que iremos gerar para sua compra.</p>
                </div>
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0693 27.1532C12.3645 27.3254 12.5121 27.4115 12.7204 27.4562C12.8821 27.4908 13.1179 27.4908 13.2796 27.4562C13.4879 27.4115 13.6355 27.3254 13.9306 27.1532C16.528 25.6379 23.6667 20.8779 23.6667 14.3333V9.26666C23.6667 7.83481 23.6667 7.11888 23.4459 6.61067C23.2216 6.09413 22.9981 5.81935 22.5381 5.49454C22.0854 5.17497 21.1982 4.99043 19.4236 4.62136C17.4677 4.21458 15.9657 3.48005 14.5925 2.41776C13.934 1.90836 13.6048 1.65365 13.3471 1.58418C13.0752 1.51088 12.9247 1.51088 12.6529 1.58418C12.3952 1.65365 12.066 1.90836 11.4075 2.41776C10.0343 3.48005 8.53226 4.21458 6.57639 4.62136C4.80183 4.99043 3.91454 5.17497 3.46192 5.49454C3.00189 5.81935 2.77838 6.09413 2.55404 6.61067C2.33333 7.11888 2.33333 7.83481 2.33333 9.26666V14.3333C2.33333 20.8779 9.47194 25.6379 12.0693 27.1532Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3 class="font-bold text-sm my-3">Maior segurança</h3>
                    <p class="text-xs">O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro.</p>
                </div>
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 12.6667H2M19.3333 2V7.33333M8.66667 2V7.33333M8.4 28.6667H19.6C21.8402 28.6667 22.9603 28.6667 23.816 28.2307C24.5686 27.8472 25.1805 27.2353 25.564 26.4826C26 25.627 26 24.5069 26 22.2667V11.0667C26 8.82646 26 7.70635 25.564 6.8507C25.1805 6.09806 24.5686 5.48613 23.816 5.10264C22.9603 4.66667 21.8402 4.66667 19.6 4.66667H8.4C6.15979 4.66667 5.03969 4.66667 4.18404 5.10264C3.43139 5.48613 2.81947 6.09806 2.43597 6.8507C2 7.70635 2 8.82646 2 11.0667V22.2667C2 24.5069 2 25.627 2.43597 26.4826C2.81947 27.2353 3.43139 27.8472 4.18404 28.2307C5.03969 28.6667 6.15979 28.6667 8.4 28.6667Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3 class="font-bold text-sm my-3">Facilidade na finalização</h3>
                    <p class="text-xs">A cada renovação da assinatura enviaremos um código PIX. Assim, você fica sempre em dia sem se preocupar.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PixComponent',
    props: {
        hidden: Boolean
    }
}
</script>
