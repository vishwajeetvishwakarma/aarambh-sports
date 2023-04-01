// const axios = require('axios');
        // import axios from '/Users/Admin/Desktop/jersey-store/node_modules/axios';
        
        let addToCart = document.querySelectorAll('.add-cart');

        // function updateCart(product) {
        //     axios.post('/update-cart',product).then(res => {
        //         console.log(res);
        //     })
        // }

        addToCart.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                let product = JSON.parse(btn.dataset.product)
                // updateCart(product)
                console.log(product)
            })
        })