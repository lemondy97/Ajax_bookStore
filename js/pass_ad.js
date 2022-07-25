            $(function(){
                var num = 1;

                function ChangeImage(ad){
                    if(ad){
                        if(num == 5)num = 0
                        num++; 
                    } else {
                        if(num == 1)num = 6
                        num--;
                    }
                    var Ad_Images = document.getElementsByClassName("visible_ad")[0]
                    Ad_Images.setAttribute("src", "img/main/ad_imageChange" + num + ".jpg")
                }

                $(".ad_prev").click(function(){
                    ChangeImage(0);
                });

                $(".ad_next").click(function(){
                    ChangeImage(1);
                });
            });