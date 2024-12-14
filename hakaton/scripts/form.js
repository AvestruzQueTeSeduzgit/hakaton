   document.getElementById('form-noticia').addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (nome && email && mensagem) {
                document.querySelector('.success-message').style.display = 'block';
                document.querySelector('.error-message').style.display = 'none';
                console.log(Notícia enviada: Nome - ${nome}, Email - ${email}, Mensagem - ${mensagem});
                this.reset();
            } else {
                document.querySelector('.success-message').style.display = 'none';
                document.querySelector('.error-message').style.display = 'block';
            }
        });

        
    function votar(opcao) {
        alert(`Seu voto para "${opcao}" foi registrado. Obrigado!`);
    }