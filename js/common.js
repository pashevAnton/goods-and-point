const like_mas = document.querySelectorAll('.like')
let like = document.querySelector('.like')
const delete_button_mas = document.querySelectorAll('.delete')
const active_delete_button_mas = document.querySelectorAll('.active_delete')
let roundProducts = document.querySelector('.round')
let finalPriceCheque = document.querySelector('.final_price_cheque')
let priceCheque = document.querySelector('.price_cheque')
let discountCheque = document.querySelector('.discount_cheque')
let counterProducts = document.querySelector('.counter_products')

let selectAll = document.querySelector('.label_select_all input')
const selectMenu = document.querySelectorAll('.label_select input')

const arrowButtons = document.querySelectorAll('.arrow')
let select = document.querySelector('.select')
let title_heading_wrapper = document.querySelector('.title_heading_wrapper')
let select_cheque = document.querySelector('.label_cheque input')
let textButton = document.querySelector('.text_button')


/*Validation*/
let form = document.querySelector('.recipient_form')
let formInputs = document.querySelectorAll('.input_form_group')
let inputEmail = document.querySelector('.input-email')
let inputPhone = document.querySelector('.input-phone')
let inputInn = document.querySelector('.input-inn')
let paymentButton = document.querySelector('.payment_button')
let errorText = document.querySelectorAll('.error_text')


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}


paymentButton.addEventListener('click', function() {
    formInputs.forEach(input => {
        if (input.value === '') {
            errorText.forEach(elem => {
                if (input.value === '') {
                    elem.classList.add('active')
                } else {
                    elem.classList.remove('active')
                }
            })
        }
    })
})



/*Like product*/
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

/*Delete product*/
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

/*Checkboxes*/
let listBoolean = [];
selectMenu.forEach(item=> {
    item.addEventListener('change', function () {
        selectMenu.forEach(i=> {
            listBoolean.push(i.checked);
        })
        if(listBoolean.includes(false)) {
            selectAll.checked = false;
        } else {
            selectAll.checked = true;
        }
        listBoolean = []
    })
})

selectAll.addEventListener('change', function () {
    if(this.checked) {
        selectMenu.forEach(i=> {
            i.checked = true;
        })
    } else {
        selectMenu.forEach(i=> {
            i.checked = false;
        })
    }
})

select_cheque.addEventListener('change', function(){
    let resultFinalPriceCheque = finalPriceCheque.textContent.substring(0, finalPriceCheque.textContent.length - 4)
    resultFinalPriceCheque = parseInt(resultFinalPriceCheque.replace(/\s+/g, ''))
    if(this.checked){
        textButton.textContent = `Оплатить ${resultFinalPriceCheque.toLocaleString()} сом`
    } else {
        textButton.textContent = "Заказать"
    }
})


/*Arrow buttons*/
arrowButtons.forEach( elem => {
    elem.addEventListener('click', function () {
        let heading_products_wrapper = elem.closest('.heading_products_wrapper')
        let products_wrapper = heading_products_wrapper.querySelector('.products_wrapper')

        elem.classList.toggle('not_active_arrow')
        products_wrapper.classList.toggle('not_active')
        if (select.classList.contains('select')) {
            select.classList.remove('select')
            select.classList.add('not_active')
            title_heading_wrapper.style.display = 'block'
        } else {
            select.classList.remove('not_active')
            select.classList.add('select')
            title_heading_wrapper.style.display = 'none'
        }

    })
})