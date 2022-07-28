                        $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "가치투자자의 탄생" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".ajax_box6").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".ajax_box6").append("<h4>" + msg.documents[0].title + "</h3>");
                    $(".ajax_box6").append("<h5>" + msg.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "그때 이렇게 말했더라면" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".ajax_box7").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".ajax_box7").append("<h4>" + msg2.documents[0].title + "</h3>");
                    $(".ajax_box7").append("<h5>" + msg2.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나는 대출없이 0원으로 소형 아파트를 산다" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".ajax_box8").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    var str = msg3.documents[0].title;
                    var str2 = str.substring(0, 16);

                    $(".ajax_box8").append("<h4>" + str2 + "</h4>");
                    $(".ajax_box8").append("<h5>" + msg3.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나는 불안할 때 논어를 읽는다" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".ajax_box9").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".ajax_box9").append("<h4>" + msg4.documents[0].title + "</h3>");
                    $(".ajax_box9").append("<h5>" + msg4.documents[0].authors[0] + "<h5>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "나를 살리는 논어 한마디" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".ajax_box10").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".ajax_box10").append("<h4>" + msg5.documents[0].title + "</h3>");
                    $(".ajax_box10").append("<h5>" + msg5.documents[0].authors[0] + "<h5>");
                });
