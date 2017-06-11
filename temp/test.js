
function* gen(list){
    let i = 0
    while(i < list.length)
        for(item of list){
            yield list
        }
        i++
}

let list = [
    {val:'a'},
    {val:'b'},
    {val:'c'},
]

let genn = gen(list)
console.log(genn.next())

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

anotherGenerator(1).next()