const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
/* 
*Pela variável var ter escopo global, a chamada da
*função vai retornar o último valor adicionado à
*variável, por estar visível a todos.
*/