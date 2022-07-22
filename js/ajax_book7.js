                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "민사법 2개년 최신판례" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg){
                    $(".Ajax_boxes25").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes25").append("<h5>" + msg.documents[0].title + "</h5>");
                    $(".Ajax_boxes25").append("<p>" + "18,900원 + 1050p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "2023 권규호 공무원 최소국어" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg2){
                    $(".Ajax_boxes26").append("<img src='" + msg2.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes26").append("<h5>" + msg2.documents[0].title + "</h5>");
                    $(".Ajax_boxes26").append("<p>" + "18,000원 + 1000p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "해커스 신용분석사 2부 이론+적중문제+모의고사 4회" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg3){
                    $(".Ajax_boxes27").append("<img src='" + msg3.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes27").append("<h5>" + msg3.documents[0].title + "</h5>");
                    $(".Ajax_boxes27").append("<p>" + "24,210원 + 1340p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "혼자 해도 프로 작가처럼 잘 그리는 아이패드 드로잉" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg4){
                    $(".Ajax_boxes28").append("<img src='" + msg4.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes28").append("<h5>" + msg4.documents[0].title + "</h5>");
                    $(".Ajax_boxes28").append("<p>" + "19,800원 + 1100p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "바로 쓰는 영어" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg5){
                    $(".Ajax_boxes29").append("<img src='" + msg5.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes29").append("<h5>" + msg5.documents[0].title + "</h5>");
                    $(".Ajax_boxes29").append("<p>" + "16,200원 + 900p" + "<p>");
                });

                $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: "EBS 왕초보영어(하)(2022)" },
                headers: { Authorization: "KakaoAK 5c9917469ae8a14e144babc252a1b16c" }
            })
                .done(function(msg6){
                    $(".Ajax_boxes30").append("<img src='" + msg6.documents[0].thumbnail + "'/>");
                    $(".Ajax_boxes30").append("<h5>" + msg6.documents[0].title + "</h5>");
                    $(".Ajax_boxes30").append("<p>" + "10,800원 + 600p" + "<p>");
                });