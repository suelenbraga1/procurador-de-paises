document.getElementById('card').style.setProperty('display', 'none', 'important')

function Procurar(){
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let país = document.getElementById('país').value
    let finalURL = `https://restcountries.com/v3.1/name/${país}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].population)
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])

        let bandeira = document.getElementById(`bandeira`)
        let nome = document.getElementById(`nome`)
        let capital = document.getElementById(`capital`)
        let pop = document.getElementById(`pop`)
        let cont = document.getElementById(`cont`)

        nome.innerHTML = país
        capital.innerHTML = data[0].capital[0]
        cont.innerHTML = data[0].continents[0]
        pop.innerHTML = data[0].population
        bandeira.src = data[0].flags.svg
})
}
