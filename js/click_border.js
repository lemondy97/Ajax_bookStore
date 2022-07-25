            $(function(){
                $('#product_container2').hide();

                $('.SaleMenu1').click(function(){
                    $('#sale_menu li:nth-of-type(1)').addClass('border_active');
                    $('#sale_menu li:nth-of-type(2)').removeClass('border_active');
                    $('#product_container2').hide();
                    $('#product_container1').show();
                });
                $('.SaleMenu2').click(function(){
                    $('#sale_menu li:nth-of-type(1)').removeClass('border_active');
                    $('#sale_menu li:nth-of-type(2)').addClass('border_active');
                    $('#product_container1').hide();
                    $('#product_container2').show();
                });
            });