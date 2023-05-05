var table = document.getElementById("table");
var startButton = document.getElementById("start");

var goals = ["Shooting Range: Get the exact score for Platinum (600)",
"Shooting Range: Get a combo of 120+ shots",
"Shooting Range: Silver without missing a shot, combo adds at the end (320)",
"Shooting Range: Save a total of 10 Miis (points must add to the counter)",
"Find Mii: Silver (40 levels)",
"Find Mii: Bronze while completing levels 1-20 with 1 second remaining (20 levels)",
"Find Mii: Complete 2 'find your favourite' levels (not counting 'pick a favourite')",
"Table Tennis: Silver specifically (70-99)",
"Table Tennis: Gold (100)",
"Pose Mii: Gold (800)",
"Pose Mii: Silver (400)",
"Pose Mii: Let 3 rainbow bubbles fall",
"Laser Hockey: Gold (10)",
"Laser Hockey: Finish a game exactly 8-8",
"Laser Hockey: Score 6 total goals with the alternate paddle",
"Laser Hockey: Win with the alternate paddle",
"Billiards: Platinum (60)",
"Billiards: Bronze specifically (15-24)",
"Billiards: Do a bank shot, the break doesn’t count",
"Billiards: Shoot 4 total balls off the table, cue ball doesn’t count",
"Billiards: Silver using only B to aim (no d-pad)",
"Billiards: Get all 4 types of foul in a game",
"Fishing: Gold (2300)",
"Fishing: Silver without catching King of the Pond (1600)",
"Fishing: Only catch one fish type for a game",
"Fishing: Catch 1+ of every fish type",
"Fishing: Finish a game on exactly -190",
"Charge: Get exactly 330 points",
"Charge: Get 150+ points avoiding perfect bonuses in a game",
"Charge: Get 3 or fewer points in a game",
"Tanks: Silver (10 missions)",
"Tanks: Bronze (5 missions)",
"Tanks: Kill a green tank",
"Tanks: Kill either a teal or green tank with a mine",
"Tanks: Complete 4 different missions with only mines",
"Tanks: Destroy all walls on mission 10",
"5+ Bronze or higher medals in the game select menu",
"4+ Silver or higher medals in the game select menu",
"3+ Gold or higher medals in the game select menu",
"2+ Platinum medals in the game select menu"];

var cells = [];

var available = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

for (let i = 0; i < 5; i++) {
	var newRow = table.appendChild(document.createElement("tr"));
	for (let j = 0; j < 5; j++) {
		var newCell = newRow.appendChild(document.createElement("td"));
		newCell.id = j + (i * 5);
		newCell.style.backgroundColor = "black";
		cells.push(newCell);
		
		cells[j + (i * 5)].addEventListener("click", function() {cells[j + (i * 5)].style.backgroundColor = "#bbf0b1";});
	}
}

var newRandomGoal = function() {
	var num = available[Math.floor(Math.random() * available.length)];
	available.splice(available.indexOf(num), 1);
	return goals[num];
}

for (let i = 0; i < 25; i++) {
	document.getElementById(i.toString()).innerHTML = newRandomGoal();
}

var startGame = function() {
	for (let i = 0; i < 25; i++) {
		cells[i].style.backgroundColor = "#ffffff";
	}
}

startButton.addEventListener("click", startGame);

