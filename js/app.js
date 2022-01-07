//extra item cost function
function getExtraCost(item, price) {
    const extraCost = document.getElementById(item + '-cost');
    let extraItemCost = parseInt(extraCost.innerText);
    extraItemCost = 1 * price;
    extraCost.innerText = extraItemCost;
    getTotalPrice();
}

//total price calculation function
function getTotalPrice() {
    const totalPrice = document.getElementById('total-price');
    let totalPriceUpdate = parseInt(totalPrice.innerText);
    const total = document.getElementById('total');

    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const moemoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const delivaryCost = parseInt(document.getElementById('delivary-cost').innerText);

    //updating total price after adding extra cost
    totalPriceUpdate = bestPrice + moemoryCost + storageCost + delivaryCost;
    totalPrice.innerText = totalPriceUpdate;

    //updating total at the bottom part
    total.innerText = totalPriceUpdate;
}

//----event for extra memory button clicked
document.getElementById('add-8gb-memory').addEventListener('click', function() {
    getExtraCost('memory', 0);
});
document.getElementById('add-16gb-memory').addEventListener('click', function() {
    getExtraCost('memory', 180);
});

//----event for extra storage button clicked
document.getElementById('add-256gb-ssd').addEventListener('click', function() {
    getExtraCost('storage', 0);
});
document.getElementById('add-512gb-ssd').addEventListener('click', function() {
    getExtraCost('storage', 100);
});
document.getElementById('add-1tb-ssd').addEventListener('click', function() {
    getExtraCost('storage', 180);
});

//----event for faster shipment
document.getElementById('free-delivery').addEventListener('click', function() {
    getExtraCost('delivary', 0);
});
document.getElementById('paid-delivary').addEventListener('click', function() {
    getExtraCost('delivary', 20);
});

//coupon-apply code 
document.getElementById('coupon-apply').addEventListener('click', function() {
    const couponInput = document.getElementById('coupon-input');
    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('total');
    //coupn apply condition stevekaku
    if (couponInput.value == 'stevekaku') {
        let discountPrice = parseInt(totalPrice.innerText);
        discountPrice = discountPrice - (discountPrice * 0.2);
        total.innerText = discountPrice;
    }
    couponInput.value = '';
})