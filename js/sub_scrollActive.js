                        $(function(){
                $(window).scroll(function(){
                    var location = $(this).scrollTop();
                    var anchorMenu1 = $('#anchor1').offset().top;
                    var anchorMenu2 = $('#anchor2').offset().top;
                    var anchorMenu3 = $('#anchor3').offset().top;
                    var anchorMenu4 = $('#anchor4').offset().top;
                    if(location > anchorMenu1 - 200){
                        $('.anchorMenu1 a').addClass('active');
                        $('.anchorMenu2 a').removeClass('active');
                        $('.anchorMenu3 a').removeClass('active');
                        $('.anchorMenu4 a').removeClass('active');
                    }
                    if(location > anchorMenu2 - 200){
                        $('.anchorMenu1 a').removeClass('active');
                        $('.anchorMenu2 a').addClass('active');
                        $('.anchorMenu3 a').removeClass('active');
                        $('.anchorMenu4 a').removeClass('active');
                    }
                    if(location > anchorMenu3 - 200){
                        $('.anchorMenu1 a').removeClass('active');
                        $('.anchorMenu2 a').removeClass('active');
                        $('.anchorMenu3 a').addClass('active');
                        $('.anchorMenu4 a').removeClass('active');
                    }
                    if(location > anchorMenu4 - 200){
                        $('.anchorMenu1 a').removeClass('active');
                        $('.anchorMenu2 a').removeClass('active');
                        $('.anchorMenu3 a').removeClass('active');
                        $('.anchorMenu4 a').addClass('active');
                    }
                });
            });