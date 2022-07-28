            $(function(){
                $('.anchorMenu1').click(function(){
                    $('.anchorMenu1 a').addClass('active');
                    $('.anchorMenu2 a').removeClass('active');
                    $('.anchorMenu3 a').removeClass('active');
                    $('.anchorMenu4 a').removeClass('active');
                });
                $('.anchorMenu2').click(function(){
                    $('.anchorMenu1 a').removeClass('active');
                    $('.anchorMenu2 a').addClass('active');
                    $('.anchorMenu3 a').removeClass('active');
                    $('.anchorMenu4 a').removeClass('active');
                });
                $('.anchorMenu3').click(function(){
                    $('.anchorMenu1 a').removeClass('active');
                    $('.anchorMenu2 a').removeClass('active');
                    $('.anchorMenu3 a').addClass('active');
                    $('.anchorMenu4 a').removeClass('active');
                });
                $('.anchorMenu4').click(function(){
                    $('.anchorMenu1 a').removeClass('active');
                    $('.anchorMenu2 a').removeClass('active');
                    $('.anchorMenu3 a').removeClass('active');
                    $('.anchorMenu4 a').addClass('active');
                });
            });