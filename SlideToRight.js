$(document).ready(function () {
    const imageContainer = $('#image-container');

    imageContainer.on('click', function () {
        const currentImageC = $('#dynamic-imageC').attr('src');
        const currentImageB = $('#dynamic-imageB').attr('src');

        // Zmiana obrazu po kliknięciu
        if (currentImageC === '../image/spiacyCieniostwor.png') {
            $('#dynamic-imageC').attr('src', '../image/goniacyCieniostwor.png');
        } else {
            $('#dynamic-imageC').attr('src', '../image/spiacyCieniostwor.png');
        }
        // Zmiana obrazu po kliknięciu
        if (currentImageB === '../image/smiejacyBezi.png') {
            $('#dynamic-imageB').attr('src', '../image/biegnacyBezi.png');
        }

        // Przesunięcie na prawo i automatyczne wrócenie po 1 sekundzie
        imageContainer.addClass('final-state');
        setTimeout(function () {
            if (currentImageC === '../image/spiacyCieniostwor.png') {
                $('#dynamic-imageC').attr('src', '../image/spiacyCieniostwor.png');
            }
            if (currentImageB === '../image/smiejacyBezi.png') {
                $('#dynamic-imageB').attr('src', '../image/goniacySmok.png');
                setTimeout(function(){
                    $('#dynamic-imageB').attr('src', '../image/smiejacyBezi.png');
                }, 3300)
            }
            imageContainer.removeClass('final-state');
        }, 3000);
    });
});
