import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './vendor/parallax.min.js';
import './vendor/timeline.css';

import './style.css';

import 'jquery-smooth-scroll';

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
});

