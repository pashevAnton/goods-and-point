const like_mas = document.querySelectorAll('.like')
let like = document.querySelector('.like')
const delete_button_mas = document.querySelectorAll('.delete')
const active_delete_button_mas = document.querySelectorAll('.active_delete')
let roundProducts = document.querySelector('.round')
let finalPriceCheque = document.querySelector('.final_price_cheque')
let priceCheque = document.querySelector('.price_cheque')
let discountCheque = document.querySelector('.discount_cheque')
let counterProducts = document.querySelector('.counter_products')
let delivery_images = document.querySelectorAll('.product_image')

const counter_wrappers = document.querySelectorAll('.counter_wrapper')


like_mas.forEach(elem => {
    elem.addEventListener('click', function () {
        if (elem.classList.contains('like')) {
            elem.classList.remove('like')
            elem.classList.add('active_svg')
        } else {
            elem.classList.remove('active_svg')
            elem.classList.add('like')
        }
    })
})

active_delete_button_mas.forEach(elem => {
    elem.addEventListener('click', function () {
        let product = elem.closest('.product')

        let price = product.querySelector('.sum')
        let discount = product.querySelector('.discount_text')

        let resultPrice = price.textContent.substring(0, price.textContent.length - 4)
        resultPrice = parseInt(resultPrice.replace(/\s+/g, ''))
        let resultDiscount = discount.textContent.substring(0, discount.textContent.length - 4)
        resultDiscount = parseInt(resultDiscount.replace(/\s+/g, ''))

        let counter_products_cheque = parseInt(counterProducts.textContent[0]) - 1

        product.style.display = "none"

        counters()

        let resultFinalPriceCheque = finalPriceCheque.textContent.substring(0, finalPriceCheque.textContent.length - 4)
        resultFinalPriceCheque = parseInt(resultFinalPriceCheque.replace(/\s+/g, ''))

        let resultPriceCheque = priceCheque.textContent.substring(0, priceCheque.textContent.length - 4)
        resultPriceCheque = parseInt(resultPriceCheque.replace(/\s+/g, ''))

        let resultDiscountCheque = discountCheque.textContent.substring(0, discountCheque.textContent.length - 4)
        resultDiscountCheque = parseInt(resultDiscountCheque.replace(/\s+/g, ''))


        resultFinalPriceCheque -= resultPrice
        resultPriceCheque -= resultDiscount
        resultDiscountCheque += resultDiscount - resultPrice


        document.querySelector(".final_price_cheque").innerHTML = resultFinalPriceCheque.toLocaleString() + " сом";
        document.querySelector(".price_cheque").innerHTML = resultPriceCheque.toLocaleString() + " сом";
        document.querySelector(".discount_cheque").innerHTML = resultDiscountCheque.toLocaleString() + " сом";
        document.querySelector(".final_price_down_cheque").innerHTML = resultFinalPriceCheque.toLocaleString() + " сом";
        document.querySelector(".price_down_cheque").innerHTML = resultPriceCheque.toLocaleString() + " сом";
        document.querySelector(".discount_down_cheque").innerHTML = resultDiscountCheque.toLocaleString() + " сом";
        document.querySelector('.counter_products').innerHTML = counter_products_cheque.toString() + " товара"
        document.querySelector('.counter_products_down').innerHTML = counter_products_cheque.toString() + " товара"

    })
})

delete_button_mas.forEach(elem => {
    elem.addEventListener('click', function () {
        let product = elem.closest('.product')
        product.style.display = "none"
    })
})


function counters() {
    if (parseInt(roundProducts.textContent) <= 1) {
        roundProducts.style.display = "none"
    } else {
        roundProducts.textContent -= 1
    }
}



counter_wrappers.forEach(elem => {
    let ride_side = elem.closest('.right_side')
    const pluses = ride_side.querySelectorAll('.plus')
    const minuses = ride_side.querySelectorAll('.minus')
    const numbers = ride_side.querySelectorAll('.number')
    const remains = ride_side.querySelectorAll('.remains')

    pluses.forEach( elem => {
        elem.addEventListener('click', function () {
            numbers.forEach( elem2 => {
                elem2.textContent++
                remains.forEach( elem3 => {
                    let counter_remains = parseInt(elem3.textContent[9]) - 1
                    console.log(elem2, counter_remains)
                    if(parseInt(elem2.textContent) < counter_remains){
                        elem3.style.display = "block"
                        elem.removeAttribute('disabled')

                    }
                    if(counter_remains <= 0) {
                        elem3.style.display = "none"
                        elem.setAttribute('disabled', 'true')
                    }
                    if (counter_remains > 0) {
                        elem3.innerHTML = "Осталось " + counter_remains + " шт."
                    }
                })
            })
        })
    })

    minuses.forEach( elem => {
        elem.addEventListener('click', function () {
            numbers.forEach( elem2 => {

                elem2.textContent--
                remains.forEach( elem3 => {
                    let counter_remains = parseInt(elem3.textContent[9]) + 1
                    console.log(parseInt(elem2.textContent))
                    if(counter_remains > 0){
                        elem.removeAttribute('disabled')
                    }
                    if(parseInt(elem2.textContent) === 0) {
                        elem.setAttribute('disabled', 'true')
                    }
                    if (counter_remains > 0) {
                        elem3.innerHTML = "Осталось " + counter_remains + " шт."
                    }
                })
            })
        })
    })

})


