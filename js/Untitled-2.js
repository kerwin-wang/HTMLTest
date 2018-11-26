/// <reference path="./jquery.d.ts" />
$(function () {
    $("#userName").blur(function () {
        var div = $(".box2");
        var url = "http://localhost:8080/user/getUser";
        var userName = $("#userName").val();
        var args = {"userName":userName};
        if (userName == '' || userName == undefined || userName == null) {
            div.empty();
            div.append("<span id = 'emptySpan'>姓名不能为空</span>")
        } else {
            $.post(url, args, function (result) {
                var userName = result.userName;

                div.empty();

                if (userName != undefined) {
                    div.append("<span id='exitSpan'>" + userName + "已存在，请更换名称</span>")
                } else {
                    div.append("<span id = 'newSpan'>用户名可用</span>")
                }

                // $("#div").innerHTML = "";
                //
                // $("#div").innerHTML = "<span>"+userName+"</span>";
            })
        }
      })
  })