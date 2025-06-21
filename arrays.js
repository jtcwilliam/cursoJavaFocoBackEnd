//criação de array
const notas = [10, 6, 8, 5.5, 10];


//retira o ultimo elemento do arrau
notas.pop();

console.log(notas);

//_____________________________________________________________________________________



//reduz a quantidade de casas decimais e arredonda
console.log((9.45345).toFixed(2));



//Divida os alunos da sala abaixo em duas listas com a mesma quantidade de estudantes:

//



const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, (listaEstudantes.length / 2));

const sala2 = listaEstudantes.slice(listaEstudantes.length / 2);

const listaAlterada = sala1.splice(1, 2, "william", "Thays", "maria");

//_____________________________________________________________________________________


const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];

const aniversario = [nomes, idades];

console.log(aniversario);

/*
console.log(` a funcionaria ${aniversario[0][0]} 
    completaria ${aniversario[1][0]} anos de idade `);

    */






function exibiIdadePessoa(pessoa) {
    if (aniversario[0].includes(pessoa)) {

        const [nomes, idades] = aniversario;
        const indiceAniversario = nomes.indexOf(pessoa);
        const idade = idades[indiceAniversario];

        console.log(` a funcionaria ${aniversario[0][indiceAniversario]} 
            tem ${idade} anos de idade`)
    }
}


exibiIdadePessoa('Leonardo');

//_____________________________________________________________________________________

//for of

for (let idade of idades) {
    console.log(idade);
    console.log(' ');

}

nomes.forEach((nome) => {
    console.log(`o nome do usuario é:  ${nome} e sua idade é: ${idades[nomes.indexOf(nome)]}`);

});






const idadeAtual = idades.map(function (nota) {
    return nota + 1;
})

console.log(idadeAtual);


const idadeAtualizada = idadeAtual.map((idadeAtualHoje) => idadeAtualHoje + 1);

console.log(idadeAtualizada);;


/*
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
*/


const nomePequeno = nomes.filter((nome, indice) => {
    return idades[indice] > 28
})


console.log(nomePequeno);


const media = (grupoIdades) => {
    const soma = grupoIdades.reduce((acumulador, idade) => acumulador + idade, 0);

    const media = soma / grupoIdades.length;

    return media

}


console.log(media(idades));



const novaNota =[...idades, 41, 37];



console.log(novaNota);


const nomeSET = ["Ana", "Juliana", "Leonardo", "Ana", "Juliana", "William"];

const nomeAtual = new Set(nomeSET);

console.log(nomeAtual);

const novosFuncionarios = [...nomeAtual];
console.log(novosFuncionarios);

 novosFuncionarios.pop();

 

console.log(novosFuncionarios);
novosFuncionarios.pop();


console.log(novosFuncionarios);


//console.log(novosFuncionarios.pop('Leonardo'));













