
var inputData = [
    {
        id: 1,
        title: 'hippo',
        faveFood: 'carrots'
    },
    {
        id: 2,
        title: 'Cat',
        faveFood: 'carrots'
    },
    {
        id: 3,
        title: 'ducks',
        faveFood: 'breadcrumbs'
    },
]

findAnimal = function() {
    for(x=0; x<3; x++) {
        if(inputData[x].title = inputData[0]) {
            var answer = inputData[x].faveFood
        }
    }
    return answer
}

console.log(findAnimal('hippo'))