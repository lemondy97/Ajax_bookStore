            $(document).click(function(){
                $('.contentBox1 img').click(function(){
                    $('#popup_box').show();
                });
            });    
            $('#popup_box').not().click(function(){
                $(this).hide();
            });