const menubar = document.getElementById('menubar')
const xmark = document.getElementById('xmark')
const menuDiv = document.getElementById('menuDiv')
const scB = document.getElementById('scB')
const langs = document.getElementById('langs')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const year1 = document.getElementById('year1')
const year2 = document.getElementById('year2')
const year3 = document.getElementById('year3')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const pages = document.getElementById('pages')
const webcalc = document.getElementById('webcalc')
const searchCalc = document.getElementById('searchCalc')
const electronCalc = document.getElementById('electronCalc')
const checks1price = document.getElementById('checks1price')
const checks2price = document.getElementById('checks2price')
const checks3price = document.getElementById('checks3price')
const inp3 = document.getElementById('inp3')
const logoprice1 = document.getElementById('logoprice1')
const inpValue = document.getElementById('inpValue')
const inpValue1 = document.getElementById('inpValue1')
const inpValue2 = document.getElementById('inpValue2')
const inpValue3 = document.getElementById('inpValue3')
const inpValue4 = document.getElementById('inpValue4')
const totalPrice = document.getElementById('totalPrice')
const arr = ['.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', '.site.az', '.sayt.az', '.ureb.com', '.org.az', '.info.az', '.biz.az', '.net.az']

let flag = true
function menu(){
    menuDiv.style.right = flag ? 0 : '-100%'
    flag = !flag
}

function scrollB(){
    scrollTo({
        top: scB.offsetTop - 104,
        behavior: "smooth"
    })
}


let kod = ''

deyish()
function deyish(){
    arr.map(item => {kod+= `<option>${item}</option>`})
    langs.innerHTML = kod
}



function btndeyish(selected){
    if(selected === "ayliq"){
        btn1.style.background = "#A271F2"
        btn1.style.color = "white"
        btn2.style.background = "white"
        btn2.style.color = "gray"

        year1.innerHTML = `₼5<span class="text-[16px] font-[500]"> /ay</span>`
        year2.innerHTML = `₼10<span class="text-[16px] font-[500]"> /ay</span>`
        year3.innerHTML = `₼20<span class="text-[16px] font-[500]"> /ay</span>`
    }else{
        btn2.style.background = "#A271F2"
        btn2.style.color = "white"
        btn1.style.background = "white"
        btn1.style.color = "gray"

        year1.innerHTML = `₼60<span class="text-[16px] font-[500]"> /il</span>`
        year2.innerHTML = `₼120<span class="text-[16px] font-[500]"> /il</span>`
        year3.innerHTML = `₼240<span class="text-[16px] font-[500]"> /il</span>`
    }
}


        let swiper = new Swiper(".slider", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    

function calculator(){
    rangeData.map(item => {
        webcalc.innerHTML += `
                        <label id="checks1" class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input onclick="checkchange1(this, ${item.price})" type="checkbox" id="${item.id}">
                        </label>
        `
    })

    checkData.map(item => {
        searchCalc.innerHTML += `
                           <div class="flex items-center mr-2 cursor-pointer">
                                <input onclick="checkchange2(this, ${item.price})" type="checkbox" id="${item.id}" />
                              <p class="p-2">${item.name}</p>
                            </div> 
                        `
    })

    eccomerceData.map(item => {
        electronCalc.innerHTML += `
                        <label class="relative flex cursor-pointer justify-between items-center">
                            <span class="text-sm font-medium text-gray-900">${item.name}</span>
                            <input  onclick="checkchange3(this, ${item.price})" type="checkbox" id="${item.id}"> 
                        </label> 
                        `
    })
   }
   calculator()
    let result = 0
    let inpVal=0
    let sum = 0
    let sum1 = 0
    let sum2 = 0
    let inpVal1 = 0

   function change(){
     inpVal = (+inp1.value * 100) * (+inp2.value)
    pages.innerHTML = +inp1.value + " səhifə / " + (+inp1.value * 100) * (+inp2.value) + " ₼"
    inpValue.innerHTML ="₼ " + inpVal
    total()
}
change()


function checkchange1(elem, price){
    // if(elem.checked) sum += price
    // else sum-= price
    sum = elem.checked ? price + sum : sum - price 
    checks1price.innerHTML = "₼ " + sum
    inpValue1.innerHTML = "₼ " + sum
    total()
}


function checkchange2(elem1, price1){
    // if(elem.checked) sum += price
    // else sum-= price
    sum1 = elem1.checked ? price1 + sum1 : sum1 - price1
    checks2price.innerHTML = "₼ " + sum1
    inpValue2.innerHTML = "₼ " + sum1

    // rangeData.map(item => {})
    total()
}

function checkchange3(elem2, price2){
    // if(elem.checked) sum += price
    // else sum-= price
    sum2 = elem2.checked ? price2 + sum2 : sum2 - price2
    checks3price.innerHTML = "₼ " + sum2
    inpValue3.innerHTML = "₼ " + sum2
    console.log(elem2, price2);
    
    // rangeData.map(item => {})
    total()
}


function logoprice(){
    inpVal1 =  +inp3.value * 100
    logoprice1.innerHTML = "₼ " + inpVal1
    inpValue4.innerHTML ="₼ " + inpVal1
    total()
}


function total(){
    
    result = (+inpVal + +inpVal1 + +sum + +sum1 + +sum2)
    if(result < 450) totalPrice.innerHTML = "₼ " + 450
    else totalPrice.innerHTML = "₼ " + result
}
total()