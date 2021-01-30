$("#commentform").on("submit",function (e) {
    let name= $("#name").val().trim();
    let comment= $("#comment").val().trim();
    if(name==""){
        $("#errorm").text("Ввеедите имя");
        return false;
    }else if(comment=="") {
        $("#errorm").text("введите Коммент");
        return false;
    }
   // e.preventDefault();
   // formData = new FormData($(this)[0]);
   //  var formData = new FormData();
   //  jQuery.each($('#file_id')[0].files, function(i, file) {
   //      formData.append('file_name', file);
   //  });
   //  $("#commentform").reset();

    e.preventDefault();
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
                alert(data);
                $("#commentform").trigger("reset");
            }
            $("#otpravka").prop("disable", false);
        }
    });
})
/*$(document).ready(function () {
    function readImage ( input ) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#commentform").on("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        $.ajax({
            type: 'POST', // Тип запроса
            url: '../phpscript/upload.php', // Скрипт обработчика
            data: formData, // Данные которые мы передаем
            cache: false, // В запросах POST отключено по умолчанию, но перестрахуемся
            contentType: false, // Тип кодирования данных мы задали в форме, это отключим
            processData: false, // Отключаем, так как передаем файл
            success: function (data) {
                alert(data);
            }
        });
    });
})*/