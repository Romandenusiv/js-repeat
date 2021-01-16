// const euros = [29.76, 41.85, 46.5];

// // сума 
// // const sum = euros.reduce((total, amount) => total + amount);

// // console.log(sum)


// // середнє арифметичне 

// const average = euros.reduce((total, amount, index, array) => {
//     total += amount;
//     if (index === array.length-1) {
//         return total/array.length;
//     } else{
//         return total;
//     }
// })

// console.log(average)



// // обэднання масиву з інших масивів 

// let array = [[1,2,3], [3,4,5], [5,6,7]];

// let concatinationsArr = array.reduce((prev, item) => {
//     return prev.concat(item);     
// }, [])


// console.log(concatinationsArr)


// // // Map и Filter как редюсеры
// // Если вы можете использовать функцию reduce, чтобы найти среднее число, то следовательно, вы можете использовать её любым образом, в принципе, каким только захотите

// // в цьому методі буде кожен елемент множитися на 2 
// // ось як це працює :

// const doubled = euros.reduce((total, amount) => {
//     total.push(amount * 2) ;
//     return total;
// }, []);



// console.log(doubled)

// // в цьому методі ми відділили з допомогою if значення які 
// // нижче 30 


// const euro = [29.76, 41.85, 46.5];
// const above30 = euro.reduce((total, amount) => {
//     if (amount > 30) {
//         total.push(amount);
//     }
//     return total;
// }, []);


// console.log(above30);


// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// const count = fruitBasket.reduce( (telly, fruit) => {
//     telly[fruit] = (telly[fruit] || 0) + 1;
//     return telly;
// }, {})

// console.log(fruitBasket);


// let a = [4, 5, 7, 100 , 0 ,-1]; 

// let c = a.filter(function(item, index) {
//     if(item >0){
//         return true
//     }
// })




// perebor elementov s pomochu for
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }








// console.log

const people = [
    {name: 'Vladilen', age: 25, budget: 40000},
    {name: 'Elen', age: 17, budget: 3400},
    {name: 'Igor', age: 49, budget: 50000},
    {name: 'Miha', age: 15, budget: 1800},
    {name: 'Vasilisa', age: 24, budget: 25000},
    {name: 'Victory', age: 38, budget: 2300}
]

// forEach 
// people.forEach(function(person, index, pArr) {
//     console.log(person)
// })

// people.forEach(person => console.log(person))

//Map 

// let newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })

// console.log(newPeople)

// Filter

// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)


// let adult = people.filter(person => person.age >= 18)


// let adult = people.filter(function(person) {
//     if(person.age >= 18) {
//         return true
//     }
// })

// console.log(adult)

//Reduce
// let amount = 0
// for (let i = 0;i < people.length; i++) {
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// },0)

// console.log(amount)

//Find
// const ygor = people.findIndex(person => person.name === 'Igor')
// console.log(ygor)
//FindIndex