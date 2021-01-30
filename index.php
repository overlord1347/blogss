<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <?php
    require_once "phpscript/connect.php";
    ?>
    <title>blogss</title>
</head>
<body>
    <div class="wrapper">
        <div class="header"></div>
        <div class="blogs">
            <div class="vstavka">
                <h2 class="d-flex justify-content-center">Оставляйте посты и комментируйте их</h2>
                <form id="commentform" enctype="multipart/form-data">
                    <div class="form-group">
                        <div class="col-md-2">
                            <input id="name" placeholder="введите имя" class="form-control" ></br>
                        </div>
                    </div>
                    <label class="btn btn-success" for="file_id">
                        <input type=file id="file_id" accept="image/*" data-type='image' style="display:none"
                               onchange="$('#upload-file-info').html(this.files[0].name)">
                        Загрузите изображение
                    </label>
                    <span class='label label-info' id="upload-file-info"></span><br/>
                    <label id="commlabel">comment</label>
                    <textarea class="form-control" rows="3" id="comment"></textarea><br/>
                    <button type="submit" id="otpravka" class="btn btn-success">Отправить</button>
                </form>
                <div id="errorm"></div>
            </div>
            <script src="js/ajaxupload.js"></script>
            <div class="vivod"></div>
        </div>
        <div class="toppost"></div>
        <div class="topcomments"></div>
    </div>
</body>
</html>