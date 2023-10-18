<template>
    <div id="ticket" class="mt-5" :class="{'hidden': this.hidden}">
        <div id="ticket-info">
            <h2 class="text-left mb-5 text-sm text-gray-600">Atenção:</h2>
            <div class="grid md:grid-cols-3 gap-5">
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.83335V14.8333L20.3333 17.5M28.3333 14.8333C28.3333 22.1971 22.3638 28.1667 15 28.1667C7.63616 28.1667 1.66663 22.1971 1.66663 14.8333C1.66663 7.46955 7.63616 1.50002 15 1.50002C22.3638 1.50002 28.3333 7.46955 28.3333 14.8333Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-xs mt-2">Boletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados.</p>
                </div>
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3252 2.84477L27.3626 9.36905C27.7173 9.59959 27.8946 9.71486 28.0231 9.86862C28.1368 10.0047 28.2223 10.1622 28.2744 10.3317C28.3333 10.5232 28.3333 10.7347 28.3333 11.1577V20.9333C28.3333 23.1735 28.3333 24.2937 27.8973 25.1493C27.5138 25.9019 26.9019 26.5139 26.1493 26.8974C25.2936 27.3333 24.1735 27.3333 21.9333 27.3333H8.06663C5.82642 27.3333 4.70631 27.3333 3.85066 26.8974C3.09802 26.5139 2.48609 25.9019 2.1026 25.1493C1.66663 24.2937 1.66663 23.1735 1.66663 20.9333V11.1577C1.66663 10.7347 1.66663 10.5232 1.72552 10.3317C1.77765 10.1622 1.86309 10.0047 1.97682 9.86862C2.10531 9.71486 2.28264 9.59959 2.63732 9.36905L12.6747 2.84477M17.3252 2.84477C16.4836 2.29769 16.0628 2.02416 15.6093 1.91773C15.2085 1.82365 14.7914 1.82365 14.3906 1.91773C13.9372 2.02416 13.5163 2.2977 12.6747 2.84477M17.3252 2.84477L25.5815 8.21132C26.4986 8.80746 26.9572 9.10553 27.116 9.48352C27.2548 9.81386 27.2548 10.1862 27.116 10.5165C26.9572 10.8945 26.4986 11.1926 25.5815 11.7887L17.3252 17.1552C16.4836 17.7023 16.0628 17.9759 15.6093 18.0823C15.2085 18.1764 14.7914 18.1764 14.3906 18.0823C13.9372 17.9759 13.5163 17.7023 12.6747 17.1552L4.41844 11.7887C3.50131 11.1925 3.04274 10.8945 2.88392 10.5165C2.74513 10.1862 2.74513 9.81386 2.88392 9.48352C3.04274 9.10553 3.50131 8.80746 4.41844 8.21132L12.6747 2.84477M27.6666 24.6667L18.8095 16.6667M11.1904 16.6667L2.33329 24.6667" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-xs mt-2">Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM)</p>
                </div>
                <div class="rounded-md border border-gray-300 p-3 flex flex-col justify-start items-center text-center">
                    <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 12.6667H2M19.3333 2.00002V7.33335M8.66667 2.00002V7.33335M8.4 28.6667H19.6C21.8402 28.6667 22.9603 28.6667 23.816 28.2307C24.5686 27.8472 25.1805 27.2353 25.564 26.4826C26 25.627 26 24.5069 26 22.2667V11.0667C26 8.82647 26 7.70637 25.564 6.85072C25.1805 6.09807 24.5686 5.48615 23.816 5.10266C22.9603 4.66668 21.8402 4.66668 19.6 4.66668H8.4C6.15979 4.66668 5.03969 4.66668 4.18404 5.10266C3.43139 5.48615 2.81947 6.09807 2.43597 6.85072C2 7.70637 2 8.82647 2 11.0667V22.2667C2 24.5069 2 25.627 2.43597 26.4826C2.81947 27.2353 3.43139 27.8472 4.18404 28.2307C5.03969 28.6667 6.15979 28.6667 8.4 28.6667Z" stroke="#939598" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-xs mt-2">A cada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TicketComponent',
    props: {
        hidden: Boolean
    }
}
</script>
