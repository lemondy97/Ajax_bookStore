            $(function(){
                $('.table_menu1').click(function(){
                    $('#selected_table').css("display", "block");
                    $('#hidden_table').css("display", "none");
                });
                $('.table_menu2').click(function(){
                    $('#selected_table').css("display", "none");
                    $('#hidden_table').css("display", "block");
                });
            });