                        $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "마법천자문 53: 결정을 내리다! 결단할 결" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".Ajax_boxes19").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes19").append("<h5>" + msg.documents[0].title + "</h5>");
                    $(".Ajax_boxes19").append("<p>" + "12,600원 + 700p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "이상한 과자 가게 전천당 15" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".Ajax_boxes20").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes20").append("<h5>" + msg2.documents[0].title + "</h5>");
                    $(".Ajax_boxes20").append("<p>" + "11,700원 + 650p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "아무네 가게" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".Ajax_boxes21").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes21").append("<h5>" + msg3.documents[0].title + "</h5>");
                    $(".Ajax_boxes21").append("<p>" + "11,700원 + 650p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "초등 1학년이 꼭 알아야 할 지구와 세계" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".Ajax_boxes22").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes22").append("<h5>" + msg4.documents[0].title + "</h5>");
                    $(".Ajax_boxes22").append("<p>" + "10,800원 + 600p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "선새앵님, 안녕하세요오?" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".Ajax_boxes23").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes23").append("<h5>" + msg5.documents[0].title + "</h5>");
                    $(".Ajax_boxes23").append("<p>" + "9,900원 + 550p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "명탐견 오드리 수사는 발끝에서부터" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg6){
                    $(".Ajax_boxes24").append("<img src='" + msg6.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes24").append("<h5>" + msg6.documents[0].title + "</h5>");
                    $(".Ajax_boxes24").append("<p>" + "9,900원 + 550p" + "<p>");
                });