function marry(person1,person2){
    console.log(arguments)
    console.log(typeof arguments)
    let args = Array.from(arguments);
    args.pop('tina')
    console.log(args);
    return `${person1} will marry ${person2}`;
}

marry("Himanshu","Tina");
