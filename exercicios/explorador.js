/************************************************************************************
 *                                    PASSO 1                                       *
 ************************************************************************************/
const EXPLORADOR = 'Davi'
let bolsaDeItens = []
let moedas = 0
let energia = 5
let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda']

/************************************************************************************
 *                                    PASSO 2                                       *
 ************************************************************************************/
function taverna () {
  console.log(EXPLORADOR + ' entrou na Taverna.')
  if (energia < 5) {
    while (energia < 5){
      console.log(EXPLORADOR + ' está descansando...')
      energia++
    }
    console.log(EXPLORADOR + ' está revitalizado!')
  }
}

/************************************************************************************
 *                                    PASSO 3                                       *
 ************************************************************************************/
function pegarItem (item) {
  if (item === 'Moeda') {
    console.log(EXPLORADOR + ' ganhou uma moeda!')
    moedas++
  } else {
    console.log(EXPLORADOR + ' ganhou um item!')
    bolsaDeItens.push(item)
  }
}

/************************************************************************************
 *                                    PASSO 4                                       *
 ************************************************************************************/
function batalha () {
  console.log(EXPLORADOR + ' encontrou um monstro!')
  if (energia < 1) {
    console.log(EXPLORADOR + ' fugiu para a taverna.')
    return false
  } else {
    console.log(EXPLORADOR + ' derrotou o monstro!')
    energia--
    if (energia === 0) {
      console.log(EXPLORADOR + ' fugiu para a taverna.')
      return false
    } else {
        return true
    }   
  }
}

function explorar () {
  console.log(EXPLORADOR + ' saiu para explorar.')
  if (energia < 1) {
    console.log(EXPLORADOR + ' não pode explorar.')
    taverna()
    return false
  } else {
    batalha()
    if (batalha === true) {
      roletarRecompensas()
      return true
    } else {
      taverna()
      return false
    }
  }
}

/************************************************************************************
 *                                    PASSO 5                                       *
 ************************************************************************************/
function abrirBau () {
  if (bolsaDeItens.includes('Chave')) {
    console.log('Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!')
    return true
  } else {
    return false
  }
}

/************************************************************************************
 *                        NÃO APAGUE OU MEXA NO CÓDIGO ABAIXO                       *
 ************************************************************************************/
let properties = {}
let actions = {}

const roletarRecompensas = function() {
  let random = Math.floor(Math.floor(Math.random() * recompensas.length));
  let loot  = recompensas[random];

  pegarItem(loot);
  recompensas.slice(random, 1);
}

if (typeof EXPLORADOR !== 'undefined')          {properties.EXPLORADOR = EXPLORADOR}
if (typeof bolsaDeItens !== 'undefined')        {properties.bolsaDeItens = bolsaDeItens}
if (typeof moedas !== 'undefined')              {properties.moedas = moedas}
if (typeof energia !== 'undefined')             {properties.energia = energia}
if (typeof recompensas !== 'undefined')         {properties.recompensas = recompensas}
if (typeof taverna !== 'undefined')             {actions.taverna = taverna}
if (typeof roletarRecompensas !== 'undefined')  {actions.roletarRecompensas = roletarRecompensas}
if (typeof pegarItem !== 'undefined')           {actions.pegarItem = pegarItem}
if (typeof batalha !== 'undefined')             {actions.batalha = batalha}
if (typeof explorar !== 'undefined')            {actions.explorar = explorar}
if (typeof abrirBau !== 'undefined')            {actions.abrirBau = abrirBau}

module.exports.properties = properties;
module.exports.actions = actions