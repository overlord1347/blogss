$("#otpravka").on("click",function () {
    let name= $("#name").val().trim();
    let comment= $("#comment").val().trim();
    // let selectedfile = $('#my-file-selector').get(0).files[0];
    if(name==""){
        $("#errorm").text("Ввеедите имя");
        return false;
    }else if(comment=="") {
        $("#errorm").text("введите Коммент");
        return false;
    }
    // else if (selectedfile==undefined){
    //     $("#errorm").text("добавьте картинку");
    //     return false;
    // }

    // let fileType = selectedfile["type"];
    // let validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    // if ($.inArray(fileType, validImageTypes) < 0) {
    //     $("#errorm").text("Ток картинки");
    //     return false;
    // }

    $("#errorm").text("");
    // let formData = new FormData(this);
    // alert(formData)
    $.ajax({
        url:'http://blogss.loc/phpscript/upload.php',
        type:"POST",
        cache:false,
        // processData : false,
        // contentType : false,
        data:{"name":name,"comment":comment},
        beforeSend: function () {
            $("#otpravka").prop("disable",true);
        },
        success: function (data) {
            if(!data)
                alert(fileType);
            else {
                alert(data);
                $("#commentform").trigger("reset");
            }
            $("#otpravka").prop("disable", false);
        }
    });
})