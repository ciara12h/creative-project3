<template>
    <div id="app">
        <div id="menu">
            <div id="brand">
                <router-link to="/">
                    <img src="/images/home.jpg">
                </router-link>
            </div>
            <div id="left-side">
                <router-link to="/browse">
                    <div class="menu-item browse">
                        <img style="height: 50px; width: 50px; justify-content: flex-start;" src="/images/series.jpg">
                        <p>Browse by Series</p>
                    </div>
                </router-link>
                <router-link to="/price">
                    <div class="menu-item browse">
                        <img style="height: 50px; width: 50px; justify-content: flex-start;" src="/images/price.png">
                        <p>Browse by Price</p>
                    </div>
                </router-link>
               
            </div>
            <div id="right-side">
                <router-link to="/cart">
                    <div class="menu-item">
                        <img style="height:50px; width: 50px;" src="/images/cart.png">
                        <p>{{numberOfItems}} items</p>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view />

        <footer class="page-footer text-center py-3">
            You can find my git repo <a href="https://github.com/ciara12h/creative-project3.git">here</a>
        </footer>

    </div>
</template>

<script>
   
    export default {
        name: 'App',
        props: {
            cart: Array,
        },
        computed: {
            numberOfItems() {
                return this.$root.$data.cart.length;
            }
        }

  
        
    }


</script>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 50px 100px;
    }

    #menu {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 5px;
        grid-template-areas: "none brand side";
        margin-bottom: 50px;
        background-color: aliceblue;
    }

        #menu a {
            color: #B84901;
        }

    #brand {
        grid-area: brand;
        display: flex;
        justify-content: center;
    }

        #brand img {
            height: 200px;
        }

    #right-side {
        grid-area: side;
        display: flex;
        justify-content: flex-end;
    }


    #left-side {
        grid-area: side;
        display: flex;
        justify-content: flex-start;
    }

    .menu-item {
        display: flex;
        flex-direction: column;
    }

        .menu-item p {
            margin: 0px;
        }

    .browse {
        margin-right: 50px;
    }
</style>
