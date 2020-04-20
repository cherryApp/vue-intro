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
            },
            {
                variantId: 2235,
                variantColor: "blue",
            },
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
});
