
const prompt = require("prompt-sync")({ sigint: true });
class Ships {
constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower; 
    this.accuracy = accuracy;


    
}

attack (enemy) {
    if (Math.random() < this.accuracy) {
        console.log('=====================================')
        console.log(`${enemy.name} health is this value before hit ${enemy.hull}`)
        console.log(`This is the amount of damage taken ${this.firepower}`)

        
        
        enemy.hull -= this.firepower 
console.log(`${enemy.name} health after damage is ${enemy.hull}`)
    } else {
        console.log(`${this.name} has missed ${enemy.name}!`);
    }
return enemy.hull


}
}









 


//this var creates the player ship
//the following function makes enemy ships using the amount key word 
// to determine how many ships to create 
// A for loop is needed to iterate through and randomize the hull, firepower, and accuracy 
// of all enemy ships created 
//The randomized variables are then pushed to an empty array that is created (EnemyShips)

function makeEnemy (amount) {
    const EnemyShip = []
for (let i = 0; i < amount; i++){
    let hull = (Math.floor(Math.random() * (6 - 3 + 1)) + 3)
let firepower = (Math.floor(Math.random() * (4 - 2 + 1)) + 2)
let accuracy =  (Math.random() * (.8 - .6) + .6).toFixed(1);


EnemyShip.push(new Ships ('Alien1', hull, firepower, accuracy))
}
console.log(EnemyShip)
return EnemyShip

}
// let input = prompt('Player name?')
// console.log(input)


function battle (player, enemy) {
    console.log( `A new ship approaches ${player.name}`)

    while (enemy.hull > 0) {
        let input = prompt('Do you want to attack or retreat?')
        if (input === 'attack') {
            enemy.hull = player.attack(enemy);
            if(enemy.hull > 0) {
               player.hull = enemy.attack(player)
            } else {
                console.log('=====================================')
                console.log(`${enemy.name} has been destroyed!`);
            }
            if(player.hull <= 0) {
                // console.log('player has been destroyed') 
                break
            }


    } else if (input === 'retreat') {
        console.log('You have quit the battle')
        break
    } else {
        console.log('Please enter the appropriate value attack or retreat')
    }
}
}

function playAgain () {
    return playGame () 
}

function playGame () {
    const USSHelloWorld = new Ships ('MyShip', 20, 5, .7)  
    let enemyShips = makeEnemy(6)
    console.log(`${USSHelloWorld.name} begins battle with ${enemyShips.length} enemies`)
    for (let i = 0; i < enemyShips.length; i++) {
        if(USSHelloWorld.hull > 0 === false) {
            console.log('You have been destroyed')
            console.log('=====================================')
            break;
        }
        battle(USSHelloWorld, enemyShips[i])
    }
    if(enemyShips[5].hull <= 0){
        console.log('Congratualtions, You win!')
        let input = prompt ('Would you like to replay this game?')
        if(input = 'yes') {
            playAgain()
        }
    }
    

    
    
}
playGame()


























 









// actors = player ship & 6 alien ships 
// create one alien ship first and go back to add others 
// action = fucntion that will be created to initate attacks on ships 
// would like to create one large object with other nested objects inside for alien ships
// iterate through each alien ship attacking them one by one and 
// only allowing players with a remaining hull score to continue 
// try running a nested loop as well, one for battle and another to iterate over aliens 






























