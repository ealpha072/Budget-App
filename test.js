let exp = [
    {t:'Alpha', am:300},
    {t:'Allan',am:400}
]

let am = exp.map(elem=>elem.am).reduce((a,b)=> a+b)

console.log(am)