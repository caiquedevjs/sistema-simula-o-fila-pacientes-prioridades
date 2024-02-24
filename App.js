class Hospital {
    constructor() {
        this.listaDePacientes = [];
        this.momento = this.getMomento();
    }

    getMomento() {
        const data = new Date();
        return data.getHours();
    }

    finalizarConsulta() {
        this.listaDePacientes.shift();
    }

    ConsultarPacientes() {
        const momento = this.getMomento(); 
        if (this.listaDePacientes.length === 0) {
            console.log('Não há pacientes na fila');
        } else {
            this.listaDePacientes.sort((a, b) => {
                if (a.prioridade < b.prioridade) return -1;
                if (a.prioridade > b.prioridade) return 1;
                return 0;
            });

            console.log(`Á fila de paciente às ${momento} horas, ordenada por prioridade: `);
            this.listaDePacientes.forEach((paciente, index) => {
                console.log(`  ${index + 1}. Nome: ${paciente.nome}, Prioridade: ${paciente.prioridade}`);
            });

        }
    }

    IrparaConsulta(Paciente) {
        const momento = this.getMomento(); // Atualiza o momento atual
        this.listaDePacientes.push(Paciente);
    }

}

class Paciente {
    constructor(nome, idade, peso, prioridade) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.prioridade = prioridade;
    }

}

