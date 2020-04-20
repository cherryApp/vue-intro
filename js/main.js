// Sutup Vue.js
const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'there are the socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
        inventory: 55,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
            },
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart = this.cart > 0 ? this.cart - 1 : 0;
        },
        updateProduct(variantImage) {
            console.log(variantImage);
            this.image = variantImage;
        }
    }
});
