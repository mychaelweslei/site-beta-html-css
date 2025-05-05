// Principal.js

document.getElementById('ctaButton').addEventListener('click', function() {
    alert("Você clicou no botão CTA! Vamos direcioná-lo para a próxima etapa.");
    window.location.href = "servicos.html";  // Redireciona para a página de serviços
});

document.getElementById('contactButton').addEventListener('click', function() {
    alert("Agora você será redirecionado para a página de Contato.");
    window.location.href = "ctt.html";  // Redireciona para a página de contato
});
