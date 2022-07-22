            $(function(){
                var ul_width = $("#ul_wrap ul").width();

                function slideBook(){
                    $("#ul_wrap").stop().animate({marginLeft: -ul_width}, function(){
                        $("#ul_wrap > ul:first").appendTo("#ul_wrap");
                        $("#ul_wrap").css({marginLeft: 0})
                    });
                }
                setInterval(slideBook, 3000);
            

            function prev(){
                $("#ul_wrap > ul:last").prependTo("#ul_wrap");
                $("#ul_wrap").css({marginLeft: -ul_width});
                $("#ul_wrap").stop().animate({marginLeft: 0}, 500);
            }

            function next(){
                $("#ul_wrap").stop().animate({marginLeft: -ul_width}, function(){
                    $("#ul_wrap > ul:first").appendTo("#ul_wrap");
                    $("#ul_wrap").css({marginLeft: 0})
                });
            }

            $(".section4_left").click(function(){
                prev();
            });

            $(".section4_right").click(function(){
                next();
            });

        });