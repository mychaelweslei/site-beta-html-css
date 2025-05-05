// Interação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para teste

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode fazer algo como enviar os dados para um servidor ou API
    } else {
        alert('Preencha todos os campos!');
    }
});
