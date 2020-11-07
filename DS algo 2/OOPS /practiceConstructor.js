function player(name,club,goals,international){
    this.name = name;

    this.club = club;
    this.goals = goals;
    this.international = international;

    this.intro = function(){
        console.log(`I am ${this.name} I play for ${this.club} Scored ${this.goals} goals`)
    }

    this.internationalGoals = function(){
        console.log(`I also play for ${this.international}`);
    }
}

var info = new player('messi','barcelona','654','Argentina');
var int = info.intro();

console.log(info);
console.log(int);