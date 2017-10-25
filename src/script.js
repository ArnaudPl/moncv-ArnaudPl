var $ = require('jquery');

$(document).ready(function () {
    // Met en place les paramètres des progress-bars
    var colorClasses = ['success', 'info', 'warning', 'danger'];

    $('.progress-bar').each(function () {
        let percent = $(this).attr('aria-valuenow') + '%';
        $(this).css('width', percent);
        // Pour garantir l'affichage des petits pourcentages (même s'il ne devrait pas y en avoir dans mes compétences ;) )
        $(this).css('min-width', '2em');
        $(this).text(percent);
        // Ajoute une classe changeant la couleur au hasard
        $(this).addClass('progress-bar-' + colorClasses[Math.floor(Math.random() * colorClasses.length)]);
    });

    $('.nav li a').click(function () {
        $('.nav li').each(function () {
            $(this).removeClass('active');
        });

        $(this).parent().addClass('active');
    });

    // Scrollspy
    /*
    $('.section-title').each(function () {
        let that = this;
        let id = 'presentation';

        scrollspy.add(that, {
            scrollIn: function () {
                addActiveToMenuItemReferingId(id);
            }
        });
    });

    function addActiveToMenuItemReferingId (id) {
        $('.navbar-nav li').find('a[href$="' + id + '"]').parent().addClass('active');
    }
    */
});
