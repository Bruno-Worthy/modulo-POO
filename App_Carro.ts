// Criando o primeiro objeto da classe Carro
        Carro carro1 = new Carro();

        // Atribuindo valores aos atributos
        let carro1.marca = "Toyota";
        let carro1.modelo = "Corolla";
        let carro1.cor = "Preto";

        // Exibindo os dados
        console.log("=== DADOS DO CARRO ===");
        console.log("Marca: " + carro1.marca);
        console.log("Modelo: " + carro1.modelo);
        console.log("Cor: " + carro1.cor);

        // Menu de ações
        console.log("\n=== MENU DO CARRO ===");
        console.log("1 - Ligar");
        console.log("2 - Desligar");
        console.log("3 - Acelerar");
        console.log("4 - Frear");

        const prompt("\nDigite uma opção: ");
        let opcao = teclado.nextInt();

        // Verificando a opção escolhida
        if (opcao == 1) {

            carro1.ligar();

        } else if (opcao == 2) {

            carro1.desligar();

        } else if (opcao == 3) {

            carro1.acelerar();

        } else if (opcao == 4) {

            carro1.frear();

        } else {

            console.log("Opção inválida!");

        }

        teclado.close();
    }
}