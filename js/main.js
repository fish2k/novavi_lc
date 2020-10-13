$(document).ready(function () {
    //$('.toggle-btn').trigger('click')

    var themeName,
        modalSetupProfile = $('.modal-setup-profile'),
        burger = $('.header-burger'),
        body   = $('body'),
        overlay = $('.overlay');

    burger.on('click', function () {
        body.toggleClass('state-nav')
    });

    overlay.on('click', function () {
        body.removeAttr('class')
    })

    $('.theme-select-input').click(function () {
        themeName = $(this).attr('id')
    });

    $('.modal-profile-form').submit(function (evt) {
        evt.preventDefault()

        var modalBody = $(this).parent()

        // если не выбрано оформление, 
        // то ставим по умолчанию light (светлый)
        modalBody.addClass(`modal-theme-${themeName === undefined ? 'light' : themeName}`)

        $(this).hide()
        modalSetupProfile.show()
    });

    $('.lc-button-profile-change').click(resetModal);

    $('#profileSetup').on('hide.bs.modal', function () {
        $('.modal-profile-form').get(0).reset();

        resetModal();
    })

    function resetModal() {
        var reset = setTimeout(function () {
            $('.modal-content-custom').removeClass('modal-theme-light modal-theme-dark modal-theme-purple');
            $('.modal-profile-form').show();
            $('.modal-setup-profile').hide();
        }, 200)
    }

    // $('#editLandingModal').modal('show')
});