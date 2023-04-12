

const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")



const convertValues = async () => {
   const inputReais = document.getElementById('input-real').value
   const realValueText = document.getElementById('real-value-text')
   const currencyValueText = document.getElementById('currecy-value-text')

   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

   const dolar = data.USDBRL.high
   const euro = data.EURBRL.high
   const bitcoin = data.BTCBRL.high
   


   realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL",
   }).format(inputReais)

   if (select.value === 'U$$ Dólar Americano') {
      currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
         style: "currency",
         currency: "USD",
      }).format(inputReais / dolar)

   }
   if (select.value === '€ Euro') {
      currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
         style: "currency",
         currency: "EUR",
      }).format(inputReais / euro);

   }
   if (select.value === '₿ Bitcoin') {
      currencyValueText.innerHTML = new Intl.NumberFormat('bt-BT', {
         style: "currency",
         currency: "BTC",
      }).format(inputReais / bitcoin)

   }
}

changeCurrency = () => {
   const currencyName = document.getElementById("currecy-name")
   const currencyImg = document.getElementById("currency-img")

   if (select.value === 'U$$ Dólar Americano') {
      currencyName.innerHTML = "Dólar americano"
      currencyImg.src = "./imagems/eua.png"
   }

   if (select.value === '€ Euro') {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "./imagems/simobolo do euro.png"
   }

   if (select.value === "₿ Bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImg.src = "./imagems/bbitcoin.png"

   }
   convertValues()

}




button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)