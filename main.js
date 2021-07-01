const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            product_description: 'This is mystery shoes that make you can fly in the sky',
            image: './assets/images/socks_green.jpg',
            product_link: 'https://www.camt.cmu.ac.th',
            inStock: true,
            onSale: true,
            inventory: 15,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
                { id: 0001, size: 'S ' },
                { id: 0002, size: 'M ' },
                { id: 0003, size: 'L' }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            if (this.inventory > 0) {
                this.cart += 1
                this.inventory -= 1
            }
            else {
                this.inventory = 0
            }
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.inventory += 1
            }
            else {
                this.cart = 0
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})