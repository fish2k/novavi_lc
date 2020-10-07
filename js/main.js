$(document).ready(function () {
    //$('.toggle-btn').trigger('click')

    var themeName,
        modalSetupProfile = $('.modal-setup-profile')

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

    $('.lc-button-profile-change').click(function () {
        var changeProfileBlock = $(this).parent().parent(),
            currentModal       = $(this).parent().parent().parent(),
            currentForm        = $('.modal-profile-form')

        currentModal.removeClass('modal-theme-light modal-theme-dark modal-theme-purple')
        changeProfileBlock.hide();
        currentForm.show();
    })

    $('#profileSetup').on('hide.bs.modal', function () {
        $('.modal-profile-form').get(0).reset();

        var resetModal = setTimeout(function () {
            $('.modal-content-custom').removeClass('modal-theme-light modal-theme-dark modal-theme-purple');
            $('.modal-profile-form').show();
            $('.modal-setup-profile').hide();
        }, 200)
    })
});