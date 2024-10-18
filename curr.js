let select =document.querySelectorAll('.currency')
let button = document.getElementById('btn')
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => dropdown(res))

function dropdown(res){
    //console.log(Object.entries(res)[1][0])
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}

btn.addEventListener("click",()=>{
    let cuur1 = select[0].value
    let cuur2 = select[1].value
    let inputval = input.value
    if(cuur1===cuur2){
        document.getElementById('notcurrencies').innerHTML="choose different currencies"
    }
    else{
        convert(cuur1,cuur2,inputval)
    }
})

function convert(cuur1,cuur2,inputval) {
    fetch(`https://api.frankfurter.app/latest?base=${cuur1}&symbols=${cuur2}`)
      .then((resp) => resp.json())
      .then((data) => {
        const convertedinputval = (inputval * data.rates[cuur2]).toFixed(2);
        //alert(`${inputval} ${cuur1} = ${convertedAmount} ${cuur2}`);
        document.getElementById('result').value=`${convertedinputval}`
      });
}
