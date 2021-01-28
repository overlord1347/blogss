$("#otpravka").on("click",function () {
    var name= $("#name").val().trim();
    var comment= $("#comment").val().trim();
    if(name==""){
        $("#errorm").text("Ввеедите имя");
        return false;
    }else if(comment=="") {
        $("#errorm").text("введите Коммент");
        return false;
    }
    var selectedfile = $('#my-file-selector').get(0).files[0];
    var fileType = selectedfile["type"];
    var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if ($.inArray(fileType, validImageTypes) < 0) {
        $("#errorm").text("Ток картинки");
        return false;
    }
    $("#errorm").text("123");

    $.ajax({
        url:'../phpscript/upload.php',
        type:'POST',
        cache:false,
        processData : false,
        contentType : false,
        data:{'name':name,'comment':comment,'kartinka':selectedfile},
        dataType:'html',
        beforeSend: function () {
            $("#otpravka").prop("disable",true);
        },
        success: function (data) {
            alert(data)
            $("#otpravka").prop("disable",false);
        }
    });
})