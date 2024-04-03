$(document).ready(function () {
    // Obsługa kliknięcia w elementy listy
    $('ul').on('click', '.nazwa_potwor', function () {
        // Pobierz tekst elementu listy
        var creatureName = $(this).text().trim();

        var sectionId = $(this).closest('section').attr('id');

        // Sprawdź, które zdjęcie powinno być wyświetlone i zmień obraz
        switch (creatureName) {
            //Potwory Gothic 1
            case 'Chrząszcz':
                changeImageAndText('chrzaszcz.jpg', 'Chrząszcz', sectionId);
                break;
            case 'Kretoszczur':
                changeImageAndText('kretoszczur.jpg', 'Kretoszczur', sectionId);
                break;
            case 'Ścierwojad':
                changeImageAndText('Scierwojad.jpg', 'Ścierwojad', sectionId);
                break;
            case 'Goblin':
                changeImageAndText('Goblin_G1.jpg', 'Goblin', sectionId);
                break;
            case 'Czarny goblin':
                changeImageAndText('CzGoblin.jpg', 'Czarny goblin', sectionId);
                break;
            case 'Goblin wojownik':
                changeImageAndText('WojGoblin.jpg', 'Goblin wojownik', sectionId);
                break;
            case 'Krwiopijca':
                changeImageAndText('Krwiopijca.jpg', 'Krwiopijca', sectionId);
                break;
            case 'Wilk':
                changeImageAndText('Wilk.jpg', 'Wilk', sectionId);
                break;
            case 'Troll':
                changeImageAndText('Troll.jpg', 'Troll', sectionId);
                break;
            case 'Cieniostwór':
                changeImageAndText('Cieniostwór.jpg', 'Cieniostwór', sectionId);
                break;
            //Potwory gothic 2
            case 'Polne bestie':
                changeImageAndText('PolnaB.jpg', 'Polne bestie', sectionId);
                break;
            case 'Olbrzymie szczury':
                changeImageAndText('Oszczur.jpg', 'Olbrzymie szczury', sectionId);
                break;
            case 'Wargi':
                changeImageAndText('Warg.jpg', 'Wargi', sectionId);
                break;
            case 'Smocze zębacze':
                changeImageAndText('SmoZeb.jpg', 'Smocze zębacze', sectionId);
                break;
            case 'Ogniki':
                changeImageAndText('Ognik.jpg', 'Ogniki', sectionId);
                break;
            case 'Czarny troll':
                changeImageAndText('CZTroll.jpg', 'Czarny troll', sectionId);
                break;
            case 'Jaszczuroludzie':
                changeImageAndText('Jaszczurludzie.jpg', 'Jaszczuroludzie', sectionId);
                break;
            case 'Elitarni orkowie':
                changeImageAndText('Ork_Elit.jpg', 'Elitarni orkowie', sectionId);
                break;
            //Potwory gothic 3
            case 'Pustynny cieniostwór':
                changeImageAndText('PCieniostwor.jpg', 'Pustynny cieniostwór', sectionId);
                break;
            case 'Krokodyl':
                changeImageAndText('Krokodyl.jpg', 'Krokodyl', sectionId);
                break;
            case 'Golemy':
                changeImageAndText('Golemy.jpg', 'Golemy', sectionId);
                break;
            case 'Kamienny golem':
                changeImageAndText('KGolem.jpg', 'Kamienny golem', sectionId);
                break;
            case 'Lodowy golem':
                changeImageAndText('LGolem.jpg', 'Lodowy golem', sectionId);
                break;
            case 'Ognisty golem':
                changeImageAndText('OGolem.jpg', 'Ognisty golem', sectionId);
                break;
            case 'Ogr':
                changeImageAndText('Ogr.jpg', 'Ogr', sectionId);
                break;
            case 'Smok':
                changeImageAndText('Smok.jpg', 'Smok', sectionId);
                break;
            default:
                // Domyślne zdjęcie
                changeImageAndText('default.jpg', '', sectionId);
                break;
        }
    });

    // Funkcja do zmiany obrazu
    function changeImageAndText(imageSource, newText, sectionId) {
        $('#' + sectionId + ' .raddle_pic img').attr('src', '../image/' + imageSource);
        $('#' + sectionId + ' .raddle_pic p').text(newText);
    }

});
