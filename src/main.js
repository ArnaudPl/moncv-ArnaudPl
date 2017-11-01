import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './vendor/parallax.min.js';
import './vendor/timeline.css';

import './style.css';

import 'jquery-smooth-scroll';
import Chart from 'chart.js';

$(document).ready(() => {
    // Met en place les paramètres des progress-bars
    let colorClasses = ['success', 'info', 'warning', 'danger'];

    $('.progress-bar').each(function () {
        let percent = $(this).attr('aria-valuenow') + '%';
        $(this).css('width', percent);
        // Pour garantir l'affichage des petits pourcentages (même s'il ne devrait pas y en avoir dans mes compétences ;) )
        $(this).css('min-width', '2em');
        $(this).text(percent);
        // Ajoute une classe changeant la couleur au hasard
        $(this).addClass('progress-bar-' + colorClasses[Math.floor(Math.random() * colorClasses.length)]);
    });

    // Smooth scroll
    $('a').smoothScroll();

    // Si js est activé, on remplace toutes les progress par ChartJS
    const chartTag = '<canvas class="progress-chartjs"></canvas>';
    let charts;
    let colors = ['red', 'green', 'yellow', 'purple', 'blue'];
    $('.progress').each(function () {
        $(this).hide();
        $(this).parent().append(chartTag);

        let data = [];
        data.push(parseInt($(this).find('div').attr('aria-valuenow')));
        data.push(100 - data[0]); // Ajoute la valeur qui manque pour faire 100%

        charts = new Chart($(this).parent().find('.progress-chartjs'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: [colors[Math.floor(Math.random() * colorClasses.length)], 'transparent']
                }]
            }
        });
    });
    console.log(charts);
});

