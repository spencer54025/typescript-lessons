// function printAdress(street: string, streetTwo?: string, state = 'AZ') { 
//     console.log(street)
//     if (streetTwo) {
//         console.log(streetTwo)
//     }
//     console.log(state)
// }

// printAdress('wack street', 'huh', 'UT')

function lineupCard(team: string, ...players: string[]) {
    console.log('Teams: ' + team)
    for (let player of players) {
        console.log(player)
    }
}

lineupCard('astros', 'wack', 'huh', 'correa', 'bregman')

