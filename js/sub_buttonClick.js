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


            });