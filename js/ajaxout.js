// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//

$(document).ready(function () {
        $("#newcomm").text("");
        // sleep(60000);
        // alert("Как дела?");
        $.ajax({
            type: 'POST',
            url: '../phpscript/newcomments.php',
            dataType: "json",
            success: function (dataArray) {
                // alert(data);
                $("#p1").text('');
                $("#p2").text('');
                for (var i in dataArray) {
                    var data = dataArray[i];
                    // $("#p1").text($("#p1").text() + ' - ' + data.id);
                    $("#comm").append('<hr>'+data.name+'<br>'+data.comm+'<hr>');
                    // $("#p2").text($("#p2").text() + '|' + data.name);
                }
            }
        })
})

