<template>
    <div class="wrapper">
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="image">
                    <img :src="'/images/'+product.image">
                </div>
                <div class="info">
                    <h1>{{product.title}}</h1>
                    <p>{{product.author}}</p>
                </div>

                <div class="price">
                    <h2 style="margin-left: 8px;">{{product.price}}</h2>
                    <button style="margin-right: 8px;" v-on:click="addToCart(product)" class="auto">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductList',
        props: {
            products: Array,
        },
        
        methods: {
            addToCart: function (product) {
                this.$root.$data.cart.push(product);
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
        background-color: lightgrey;
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
    .auto:hover {
        background-color: darkseagreen;
    }
</style>