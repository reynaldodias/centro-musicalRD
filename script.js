document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para os links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemplo de manipulação do formulário (sem envio real, apenas feedback)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário

            // Aqui você processaria os dados do formulário (ex: enviar para um backend)
            // Por enquanto, apenas um feedback visual
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

            // Limpa o formulário
            this.reset();
        });
    }
});