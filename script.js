/*
Šablonas fetch
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e.message))


1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).
*/
fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    const img = document.createElement('img')
    img.src = data.results[0].picture.large
    img.width = 300
    document.body.append(img)

    const h1 = document.createElement('h1')
    h1.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    document.body.append(h1)

    const h2 = document.createElement('h2')
    h2.textContent = `Age: ${data.results[0].dob.age}`
    document.body.append(h2)

    const p = document.createElement('p')
    p.textContent = `Email: ${data.results[0].email}`
    document.body.append(p)
  })
  .catch(e => console.log(e.message))
