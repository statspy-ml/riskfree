/**
 * Função para inicializar todas as funcionalidades interativas do currículo
 * Pode ser chamada em diferentes eventos (DOMContentLoaded, DOMContentSwitch, etc)
 */
function initializeCurriculum() {
    // Inicializar Particles.js (se disponível e o elemento existir)
    if (typeof particlesJS !== 'undefined') {
        const particlesElement = document.getElementById('particles-js');
        if (particlesElement) {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        } else {
            console.warn('Elemento particles-js não encontrado no documento');
        }
    } else {
        console.warn('Biblioteca particlesJS não está disponível');
    }
    
    // Inicializar Chart.js (se disponível)
    if (typeof Chart !== 'undefined') {
        // Gráfico de expertise (radar)
        const expertiseElement = document.getElementById('expertiseChart');
        if (expertiseElement) {
            try {
                const expertiseCtx = expertiseElement.getContext('2d');
                const expertiseChart = new Chart(expertiseCtx, {
                    type: 'radar',
                    data: {
                        labels: ['NLP', 'Machine Learning', 'Estatística', 'DevOps/MLOps', 'Fraud Detection', 'GenAI'],
                        datasets: [{
                            label: 'Nível de Expertise',
                            data: [85, 90, 95, 85, 90, 85],
                            backgroundColor: 'rgba(3, 102, 214, 0.2)',
                            borderColor: '#0366d6',
                            pointBackgroundColor: '#0366d6',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#0366d6'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            r: {
                                angleLines: {
                                    display: true
                                },
                                suggestedMin: 0,
                                suggestedMax: 100
                            }
                        }
                    }
                });
            } catch (e) {
                console.error('Erro ao inicializar gráfico de expertise:', e);
            }
        }
        
        // Gráfico de tecnologias (barras)
        const techElement = document.getElementById('techChart');
        if (techElement) {
            try {
                const techCtx = techElement.getContext('2d');
                const techChart = new Chart(techCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Python', 'R', 'SQL', 'AWS', 'Azure', 'MLOps', 'LLMOps'],
                        datasets: [{
                            label: 'Anos de Experiência',
                            data: [10, 8, 12, 7, 5, 5, 3],
                            backgroundColor: [
                                'rgba(3, 102, 214, 0.8)',
                                'rgba(88, 166, 255, 0.8)',
                                'rgba(3, 102, 214, 0.8)',
                                'rgba(88, 166, 255, 0.8)',
                                'rgba(3, 102, 214, 0.8)',
                                'rgba(88, 166, 255, 0.8)',
                                'rgba(3, 102, 214, 0.8)'
                            ],
                            borderColor: [
                                '#0366d6',
                                '#58a6ff',
                                '#0366d6',
                                '#58a6ff',
                                '#0366d6',
                                '#58a6ff',
                                '#0366d6'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            } catch (e) {
                console.error('Erro ao inicializar gráfico de tecnologias:', e);
            }
        }
    } else {
        console.warn('Biblioteca Chart.js não está disponível');
    }
}

/**
 * Função para alternar entre as abas
 * @param {Event} evt - O evento de clique
 * @param {string} tabName - O ID da aba a ser exibida
 */
function openTab(evt, tabName) {
    if (!evt || !tabName) return;
    
    // Verificar se os elementos existem
    const tabContents = document.getElementsByClassName('tab-content');
    const tabs = document.getElementsByClassName('tab');
    const targetTab = document.getElementById(tabName);
    
    if (!tabContents || !tabs || !targetTab) {
        console.warn('Elementos de aba não encontrados');
        return;
    }
    
    // Esconder todos os conteúdos de aba
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Desativar todas as abas
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Mostrar o conteúdo da aba selecionada e ativar a aba clicada
    targetTab.classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Executar inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', initializeCurriculum);

// Suporte para navegação instantânea do Material for MkDocs
document.addEventListener('DOMContentSwitch', initializeCurriculum);

// Suporte para recarregamento após a reconfiguração do tema
window.addEventListener('resize', function() {
    // Reinicializar gráficos apenas após o término do redimensionamento
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(initializeCurriculum, 500);
});

// Exportar funções para acessibilidade global
window.openTab = openTab;
window.initializeCurriculum = initializeCurriculum;