celciusinput=document.querySelector('#celcius > input')
fahrenheitinput=document.querySelector('#fahrenheit > input')
kelvininput=document.querySelector('#kelvin > input')
let bt=document.querySelector('.bt button')
function rn(number)
{
    return Math.round(number*100)/100
}
celciusinput.addEventListener('input',function()
{
   let c=parseFloat(celciusinput.value)
   let f=(c*(9/5))+32
   let k=c+273.15
   fahrenheitinput.value = rn(f)
   kelvininput.value = rn(k)
})
fahrenheitinput.addEventListener('input',function()
{
   let f=parseFloat(fahrenheitinput.value)
   let c=(f-32)*5/9
   let k=c+273.15
   celciusinput.value = rn(c)
   kelvininput.value = rn(k)
})
kelvininput.addEventListener('input',function()
{
   let k=parseFloat(kelvininput.value)
   let c=k-273.15
   let f=c*(9/5)+32
   fahrenheitinput.value = rn(f)
   celciusinput.value = rn(c)
})
bt.addEventListener('click',()=>
{
    celciusinput.value=""
    fahrenheitinput.value=""
    kelvininput.value=""
    
})
