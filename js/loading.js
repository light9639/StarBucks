$(document).ready(function(){
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(data){
            aa = $("#header").html(data).find("header>.innerBox");
            $("#header").html(aa);
        }
    })
    $.ajax({
        url:"mobile.html",
        dataType:"html",
        success:function(data){
            bb = $(".app").html(data).find(".app>.sidebar");
            $(".app").html(bb);
        }
    })
    $.ajax({
        url:"footer.html",
        dataType:"html",
        success:function(data){
            cc = $("#footer").html(data).find("footer");
            $("#footer").html(cc);
        }
    })
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(data){
            dd = $("#search").html(data).find("#search>.search-header");
            $("#search").html(dd);
        }
    })
})