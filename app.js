let evento = [];
let data_oficial = [];
let j=0;

//Cadastro de eventos
//------------------------------------------------------------------------
console.log("Cadastro de eventos: ")
let nome_evento = ["Festa de Formatura","Casamento","Aniversario"];
    //Data do evento
let dia_evento = [30,05,30];
let mes_evento = [5,07,01];
let ano_evento = [2022,2022,2021];
var data_evento = [];

for(let i = 0; i < nome_evento.length;i++)
{
    data_evento[i] = new Date(ano_evento[i],mes_evento[i]-1,dia_evento[i],0,0,0);
    if(data_evento[i]<=new Date())
    {
        console.log(`${nome_evento[i]} está com a data inválida!`);
    }
    else
    {
        evento[j] = nome_evento[i];
        data_oficial[j] = data_evento[i];
        console.log(`${evento[j]} cadastrado com sucesso!`);
        console.log(`Data do evento: ${data_oficial[j]}`);
        j++;
    }
}


//------------------------------------------------------------------------
//Exibir eventos
console.log("");
console.log("Eventos disponiveis: ");
for(let i=0;i<evento.length;i++)
{
    console.log(`${i+1} - ${evento[i]}`);
}

console.log("");

let nome = [];
let k = 0;
let idade = [];
let evento_p = []

//Cadastro de participantes
console.log("Cadastro de participantes: ")
let nome_participantes = ['Antonio','Carlos','Ana','Sara'];
let idade_participantes = [20,18,17,19];
let evento_part = ['Casamento','Casamento','Casamento','Festa de Formatura'];



for(let i=0;i<nome_participantes.length;i++)
{
    if(idade_participantes[i] < 18)
    {

        console.log(`${nome_participantes[i]} não pode participar, pois é menor de idade!`);
    }
    else
    {
        nome[k] = nome_participantes[i];
        evento_p[k] = evento_part[i];
        idade[k] = idade_participantes[i];
        k++;
    }
}


console.log("");
//Exibir participantes por evento:

for(let i=0;i<evento.length;i++)
{
    console.log(`---Participantes do evento: ${evento[i]}---`)
    let t=0;
    for(let n=0;n<nome.length;n++)
    {
        if(evento[i] == evento_p[n])
        {
            t++;
            console.log(`${t} - ${nome[n]}`);
        }
    }
}







//console.log(data_evento)


