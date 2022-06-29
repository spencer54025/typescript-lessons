// function printAdress(street: string, streetTwo?: string, state = 'AZ') { 
//     console.log(street)
//     if (streetTwo) {
//         console.log(streetTwo)
//     }
//     console.log(state)
// }
// printAdress('wack street', 'huh', 'UT')
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Teams: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('astros', 'wack', 'huh', 'correa', 'bregman');
//# sourceMappingURL=function_args.js.map