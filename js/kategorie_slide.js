            $(function(){
                $('.kategorie_button').click(function(){
                    $('#kategorie_slide').slideDown();
                });
                $('#kategorie_slide li').click(function(){
                    $('#kategorie_slide').slideUp();
                });
                $('.close2').click(function(){
                    $('#kategorie_slide').slideUp();
                });
            });