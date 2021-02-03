$("#commentform").on("submit",function (e) {
    e.preventDefault();
    let name = $("#name").val().trim();
    let comment = $("#comment").val().trim();
    let kartina = $("#file_id").val();
    if (name == "") {
        $("#errorm").text("Ввеедите имя");
        return false;
    } else if (comment == "") {
        $("#errorm").text("введите Коммент");
        return false;
    } else if (kartina == "") {
        $("#errorm").text("Приикрепите изображение");
        return false;
    }
    var fd = new FormData();
    fd.append('img', $("#file_id")[0].files[0]);
    fd.append('name', name );
    fd.append('comment',comment);
    $.ajax({
        url:'../phpscript/upload.php',
        type:"POST",
        cache:false,
        processData : false,
        contentType : false,
        data: fd,
        beforeSend: function () {
            $("#otpravka").prop("disable",true);
        },
        success: function (data) {
            if(!data)
                alert("ошибка")
                // alert(fileType);
            else {
                // alert(data);
                user = JSON.parse(data);
                $("#newcomm").append('<hr>'+name+'<br>'+comment+'<hr>');
                $("#commentform").trigger("reset");
                $("#upload-file-info").text("");
            }

            $("#otpravka").prop("disable", false);
        }
    })
})
