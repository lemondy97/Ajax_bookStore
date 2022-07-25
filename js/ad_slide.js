            $(function(){
                $('.mini_ad > img').mouseover(function(){
                    $('.hidden_adImage').stop().slideDown();

                });
                $('.close1').click(function(){
                    $(".hidden_adImage").stop().slideUp();
                });
            });