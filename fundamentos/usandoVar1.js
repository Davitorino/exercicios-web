{
    {
        {
            {
                 var sera = 'Será???'
                 console.log(sera)    
            }
        }     
    }        
}
console.log(sera) 
/*
* Variável var dentro de um bloco de código que não
* seja uma função, ficará visível para todos os outros
* blocos.
*/

function teste() {
    var local = 123
    console.log(local) 
    /* 
    *Dentro de uma função, a variável var fica limitada somente à função, 
    *não podendo ser usada fora.
    */
}

teste()
console.log(local)

/* 
*Variável var só tem dois escopos, global, visível para todo mundo, ou
*o escopo de uma função, limitado somente àquela função.
*/

// Dica JS: fuja do escopo global ao declarar variáveis var