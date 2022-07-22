            $(function(){
                function slideBook(){
                    $("#book_slideContainer > ul").stop().animate({marginLeft: -800}, function(){
                        $("#book_slideContainer > ul > li:first").appendTo("#book_slideContainer > ul");
                        $("#book_slideContainer > ul").css({marginLeft: 0})
                    });
                }
                setInterval(slideBook, 3000);
            });

            function prev(){
                $("#book_slideContainer > ul > li:last").prependTo("#book_slideContainer > ul");
                $("#book_slideContainer > ul").css({marginLeft: -500})
                $("#book_slideContainer > ul").stop().animate({marginLeft: 0}, 500);
            }

            function next(){
                $("#book_slideContainer > ul").stop().animate({marginLeft: -800}, function(){
                    $("#book_slideContainer > ul > li:first").appendTo("#book_slideContainer > ul");
                    $("#book_slideContainer > ul").css({marginLeft: 0});
                });
            }

            $(".section4_left").click(function(){
                prev();
            });

            $(".section4_right").click(function(){
                next();
            });