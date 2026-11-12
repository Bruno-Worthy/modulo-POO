
// ------------ Classe Carro e seus Métodos ------------

public class Carro {

    // Atributos
    private String marca;
    private String modelo;
    private String cor;

    // Construtor
    public Carro(String marca, String modelo, String cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    // Métodos
    public void ligar() {
        System.out.println("Carro ligado!");
    }

    public void desligar() {
        System.out.println("Carro desligado!");
    }

    public void acelerar() {
        System.out.println("Carro acelerando!");
    }

    public void frear() {
        System.out.println("Carro freando!");
    }

    // Exibir informações
    public void exibirInformacoes() {
        System.out.println("=== DADOS DO CARRO ===");
        System.out.println("Marca: " + marca);
        System.out.println("Modelo: " + modelo);
        System.out.println("Cor: " + cor);
    }
}
