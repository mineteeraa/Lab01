const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            product_description: 'This is mystery boots that make you can fly in the sky',
            image: './assets/images/socks_green.jpg',
            product_link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            inventory: 100,
            onSale : true
        }
    }
})