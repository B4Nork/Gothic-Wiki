 $(document).ready(function () {
        

        $(".table").hide();
        $(".collapsible-header").text("↓");

        $(".collapsible-header").click(function () {
            
            var section = $(this).closest('h3');

        
            var table = section.next('.table');

            table.slideToggle();
            
            // Zmiana tekstu w zależności od tego, czy tabela jest zwinięta czy rozwinięta
            if (table.hasClass("visible")) {
                section.find(".collapsible-header").text("↓");
                table.removeClass("visible");
            } else {
                section.find(".collapsible-header").text("↑");
                table.addClass("visible");
            }
        });
    });