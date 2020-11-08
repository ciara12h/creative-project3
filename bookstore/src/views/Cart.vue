<template>
    <div class="wrapper">
    <div v-if="cartItems.length === 0"> <p>The Cart is Empty</p></div>
        <div class="products">
            <div class="product" v-for="product in cartItems" :key="product.id">
                <div class="info">
                    <h1>{{product.title}}</h1>
                    <p>{{product.author}}</p>
                </div>
                <div class="image">
                    <img :src="'/images/'+product.image">
                </div>
                <div class="price">
                    <h2>{{product.price}}</h2>
                    <button v-on:click="removeFromCart(product)" class="auto">Remove from Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        computed: {
            cartItems() {
                return this.$root.$data.cart;
            }

        },
        methods: {
            removeFromCart: function (product) {
                let cart = this.$root.$data.cart;
                cart.splice(cart.indexOf(product), 1);
            }
        }
    }


</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .products {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .product {
        margin: 10px;
        margin-top: 50px;
        width: 200px;
    }

        .product img {
            border: 2px solid #333;
            height: 250px;
            width: 200px;
            object-fit: cover;
        }

        .product .image {
            display: flex;
            justify-content: center;
            margin-bottom: 5px;
        }

    .info {
        background-color: darkseagreen;
        color: #000;
        padding: 10px 30px;
        height: 80px;
    }

        .info h1 {
            font-size: 16px;
        }

        .info h2 {
            font-size: 14px;
        }

        .info p {
            margin: 0px;
            font-size: 10px;
        }


    .price {
        display: flex;
    }

    button {
        height: 50px;
        background: #000;
        color: white;
        border: none;
    }

    .auto {
        margin-left: auto;
    }
</style>