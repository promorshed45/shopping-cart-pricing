// function shoppingCart(){
//     const cartPrice = getShoppingItemsPrice('shopping-cart-price');
    
//     // if(isNaN(base) || isNaN(height)){
//     //     alert('Please insert Number');
//     //     return;
//     // }
//     console.log(cartPrice);
//     // setElementInnerText('const area = 0.5 * base * height;',area);
// }
    
//     // Calculated Rectangle Area
    
//     function calculatedRectangleArea(){
//         // get triangle base valude.
//        const width = getInputValue('rectangle-width');
//        const lenght = getInputValue('rectangle-lenght');
    
//        const area = width * lenght;
    
//         setElementInnerText('rectangle-result',area);
//     }

    

// // reusable get input value feild in number
  
//     function getShoppingItemsPrice(shoppingCartPrice){
//         const cartPrice = document.getElementById(shoppingCartPrice);
//         const shoppingCartPriceValue = cartPrice.innerText;
//         const value = parseFloat(shoppingCartPriceValue);
//         return value;

//     }


//     // reusable set sapn or p, div, etc text
//     function setShoppingCartPrice(cartId,area){
//         const cartPrice = document.getElementById(cartId);
//         cartPrice.innerText = area;
//     }


document.getElementById('shopping-cart-price').addEventListener('click', function()){
    console.log('click');
}