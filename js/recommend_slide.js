            function Rotating_Slide(){
                $('#recommend_slide ul').stop().animate({marginLeft: -500}, function(){
                    $('#recommend_slide ul > li:first').appendTo('#recommend_slide ul');
                    $('#recommend_slide ul').css({marginLeft: 0});
                });
            }

            setInterval(Rotating_Slide, 3000);

            function prev(){
                $('#recommend_slide ul > li:last').prependTo('#recommend_slide ul');
                $('#recommend_slide ul').css({marginLeft: -500});
                $('#recommend_slide ul').stop().animate({marginLeft: 0}, 500);
            }

            function next(){
                $('#recommend_slide ul').stop().animate({marginLeft: -500}, function(){
                    $('#recommend_slide ul > li:first').appendTo('#recommend_slide ul');
                    $('#recommend_slide ul').css({marginLeft: 0});
                });
            }

            $('.left').click(function(){
                prev();
            });

            $('.right').click(function(){
                next();
            });
