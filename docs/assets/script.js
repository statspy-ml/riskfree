// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Configure and initialize particle animation
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
    
    // Initialize expertise radar chart
    const expertiseCtx = document.getElementById('expertiseChart').getContext('2d');
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
    
    // Initialize technology experience bar chart
    const techCtx = document.getElementById('techChart').getContext('2d');
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Tab functionality
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Deactivate all tabs
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Show the selected tab content and activate the clicked tab
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}