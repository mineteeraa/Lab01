const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            product_description: 'This is mystery boots that make you can fly in the sky',
            image: './assets/images/socks_green.jpg',
            product_link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            onSale: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
                {id: 0001, size: 'S '},
                {id: 0002, size: 'M '},
                {id: 0003, size: 'L'}
            ]
        }
    }
})