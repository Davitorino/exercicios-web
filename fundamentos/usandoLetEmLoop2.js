const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
/* 
*Nesse caso, por estar sendo usado o let, que é limitado ao 
*bloco em que está, a função vai memorizar o valor do i 
*no momento em que foi chamada e retornar o valor daquele
*momento.
*/ 