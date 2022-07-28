            $(function(){
                $('.toggle_button').click(
                    function(){
                        $('.review_space').slideToggle();
                    }
                )

                $('button[type="submit"]').click(function(event){
                    alert("등록되셨습니다");
                event.preventDefault();
                });

	   $('#image_button').click(function(){
                    $('#image_button').hide();
                    $('#bookImage_space').css("height", "2950px");
                });


            });
