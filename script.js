document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção de elementos do DOM
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const divResultado = document.getElementById('resultado');
    const cards = document.querySelectorAll('.card');

    // Função para calcular a economia de água (Exemplo fictício: 15.000 litros por hectare/ano)
    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            divResultado.textContent = "Por favor, insira um número válido de hectares maior que zero.";
            divResultado.style.borderColor = "#ff4d4d";
            divResultado.classList.remove('escondido');
            return;
        }

        const economiaLitros = hectares * 15000;
        
        // Formata o número para o padrão brasileiro
        const litrosFormatados = economiaLitros.toLocaleString('pt-BR');

        divResultado.innerHTML = `🌱 Com a tecnologia de precisão, sua propriedade de <strong>${hectares} ha</strong> pode economizar cerca de <strong>${litrosFormatados} litros</strong> de água por ano!`;
        divResultado.style.borderColor = "#2d6a4f";
        divResultado.classList.remove('escondido');
    });

    // Interatividade nos cards de Pilares
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pilar = card.getAttribute('data-pilar');
            alert(`Você demonstrou interesse no pilar: ${pilar.toUpperCase()} do Agro Sustentável!`);
        });
    });
});
