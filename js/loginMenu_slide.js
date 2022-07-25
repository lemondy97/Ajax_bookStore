            $(function(){
                $("#loginMenu > .toggleBox").click(function(){
                    if($("#loginMenu").css("width")=="10px"){
                        $("#loginMenu").stop().animate({
                            width : '120',
                        })
                        $(".toggle_next").hide();
                        $(".toggle_prev").show();
                    } else {
                        $("#loginMenu").stop().animate({
                            width : '10',
                        })
                        $(".toggle_prev").hide()
                        $(".toggle_next").show()
                    }
                });
            });