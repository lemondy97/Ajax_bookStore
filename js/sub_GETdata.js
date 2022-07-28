            $(function(){
                $.get("./ajax_text/ajax_data1.txt", function(data){
                    $("#ajax_dataBox1").html(data);
                })
                $.get("./ajax_text/ajax_data2.txt", function(data){
                    $("#ajax_dataBox2").html(data);
                })
                $.get("./ajax_text/ajax_data3.txt", function(data){
                    $("#ajax_dataBox3").html(data);
                })
                $.get("./ajax_text/ajax_data4.txt", function(data){
                    $("#ebook_explain").html(data);
                })
            })