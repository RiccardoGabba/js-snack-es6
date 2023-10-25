//SNACK 1 
const vip = 
[
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga', 
    'Cristiano Ronaldo', 
    'Georgina Rodriguez', 
    'Chiara Ferragni', 
    'Fedez', 
    'George Clooney', 
    'Amal Clooney', 
    'Maneskin'
]
 
    let guestName = vip.map((element, index)=>{
        return{
            tableName: 'Tavolo VIP',
            guestName: element,
            place: index + 1
        }
    })
    console.log(guestName)

//SNACK 2
const studenti =
[
    {
        id: '213',
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: '110',
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: '250',
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: '145',
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: '196',
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: '102',
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: '120',
        name: 'Francesca da Polenta',
        grades: 84
    },
]

let votiStudenti = studenti.filter((element)=>{
    return element.grades > 70
})

let id = studenti.filter((element)=>{
    return element.id > 120 && element.grades > 70
    
})

let nomiStudenti = studenti.map((element)=>{
    return element.name.toUpperCase()
})


console.log(votiStudenti)
console.log(id)
console.log(nomiStudenti)

//SNACK 3

const biciclette = [
    {
       nome: rockrider,
       peso: 8,
    },
    {
        nome: ducati,
        peso: 28,
     },
     {
        nome: olmo,
        peso: 6,
     }
]




//SNACK 4