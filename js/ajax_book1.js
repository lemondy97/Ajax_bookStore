            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "파친코" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".ajax_box1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".ajax_box1").append("<h3>" + msg.documents[0].title + "</h3>");
                    $(".ajax_box1").append("<h5>" + msg.documents[0].authors[0] + "<h5>");
                });


                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "계속 가 보겠습니다" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".ajax_box2").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".ajax_box2").append("<h3>" + msg2.documents[0].title + "</h3>");
                    $(".ajax_box2").append("<h5>" + msg2.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "책 먹는 여우의 여름 이야기" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".ajax_box3").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".ajax_box3").append("<h3>" + msg3.documents[0].title + "</h3>");
                    $(".ajax_box3").append("<h5>" + msg3.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "사장을 위한 정관정요" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".ajax_box4").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".ajax_box4").append("<h3>" + msg4.documents[0].title + "</h3>");
                    $(".ajax_box4").append("<h5>" + msg4.documents[0].authors[0] + "<h5>");
                });