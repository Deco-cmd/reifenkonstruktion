const retanguloAnimado = document.getElementById('retangulo1');
const retangulosParaSumir = [
    document.getElementById('retangulo3'),
    document.getElementById('retangulo4'),
    document.getElementById('retangulo5'),
    document.getElementById('retangulo6')
];
const retangulo18 = document.getElementById('retangulo18'); // Retângulo 18
const retangulo17 = document.getElementById('retangulo17'); // Retângulo 17
const retangulo22 = document.getElementById('retangulo22'); // Retângulo 22
const margemLimite = 400; // Margem que o retângulo deve manter das bordas
let left = 400; // Começa na posição 400px
let direction = 3; // Velocidade de movimento

function animar() {
    left += direction;
    retanguloAnimado.style.left = left + 'px';

    // Verifica se o retângulo atingiu a posição 400px e faz os outros desaparecerem
    if (left >= 400 && left < 405) {
        retangulosParaSumir.forEach(retangulo => {
            retangulo.style.display = 'none'; // Desaparece os retângulos
        });

        // Faz o retângulo 18 descer
        retangulo18.style.top = '415px'; // Move o retângulo 18 para baixo

        // Depois de 2 segundos, faz o retângulo 18 voltar para a posição original
        setTimeout(() => {
            retangulo18.style.top = '325px'; // Volta o retângulo 18 para sua posição original

            // Depois que o retângulo 18 voltou, faz o retângulo 17 se mover para baixo
            setTimeout(() => {
                retangulo17.style.top = '395px'; // Move o retângulo 17 para baixo

                // Depois de 2 segundos, faz o retângulo 17 voltar para a posição original
                setTimeout(() => {
                    retangulo17.style.top = '325px'; // Volta o retângulo 17 para a posição original

                    // Após o retângulo 17 voltar, faz o retângulo 22 mover para a direita
                    setTimeout(() => {
                        retangulo22.style.left = '485px'; // Move o retângulo 22 para 485px

                        // Depois de 0.5 segundos, retorna o retângulo 22 para a posição original
                        setTimeout(() => {
                            retangulo22.style.left = '390px'; // Volta o retângulo 22 para a posição original

                            // Depois que o retângulo 22 voltou, move o retângulo 27 para cima
                            setTimeout(() => {
                                const retangulo27 = document.getElementById('retangulo27'); // Seleciona o retângulo 27
                                retangulo27.style.top = '420px'; // Move o retângulo 27 para cima até 495px

                                // Depois de 0.5 segundos, faz o retângulo 27 voltar para a posição original
                                setTimeout(() => {
                                    retangulo27.style.top = '560px'; // Volta o retângulo 27 para sua posição original
                                }, 200); // Tempo de espera de 0.5 segundos para retornar o retângulo 27
                            }, 200); // Tempo de espera de 0.5 segundos antes de mover o retângulo 27
                        }, 500); // Tempo de espera de 0.5 segundos para retornar o retângulo 22
                    }, 500); // Tempo de espera de 0.5 segundos antes de mover o retângulo 22
                }, 200); // Tempo de espera de 2 segundos para retornar o retângulo 17
            }, 500); // Tempo de espera de 2 segundos para mover o retângulo 17
        }, 600); // Tempo de espera de 2 segundos para o retorno do retângulo 18
    }

    // Verifica se o retângulo atingiu a posição 1000px e faz os outros reaparecerem
    if (left >= 1000) {
        retangulosParaSumir.forEach(retangulo => {
            retangulo.style.display = 'block'; // Reaparece os retângulos
        });
    }

    // Ajusta os limites para que o retângulo não toque as bordas
    if (left >= window.innerWidth - retanguloAnimado.offsetWidth - margemLimite) {
        direction = -3; // Inverte a direção
    } else if (left <= margemLimite) {
        direction = 2; // Inverte a direção
    }

    requestAnimationFrame(animar);
}

animar();
