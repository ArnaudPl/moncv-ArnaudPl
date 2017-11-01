// let scrollspy = require('scrollspy');
$(document).ready(function () {
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
    // $('.navbar-nav li a').smoothscroll();

    // Scrollspy
    /*
    $('.section-title').each(function () {
        let me = this;
        let id = $(me).attr('id');

        scrollspy.add(me, {
            scrollIn: function () {
                toggleActiveToMenuItemReferingId(id);
            },
            scrollOut: function () {
                toggleActiveToMenuItemReferingId(id);
            }
        });
    });

    function toggleActiveToMenuItemReferingId (id) {
        $('.navbar-nav li').find('a[href$="' + id + '"]').parent().toggleClass('active');
    }
    */
});
