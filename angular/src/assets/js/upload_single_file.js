(function($){
    $('#fileInput').on('change', function() {
      var file = $(this)[0].files[0];
  
      var fileReader = new FileReader();
      fileReader.onload = function() {
        var str = '<div class="col-md-2">' +
          '<span class="js-file-name"></span><br>' +
          '<span class="js-file-size"></span> (Byte)<br>' +
          '<img class="img-thumbnail js-file-image" style="width: 100%; height: 100%">' +
        '</div>';
        $('.js-file-list').append(str);
  
        var imageSrc = event.target.result;
        var fileName = file.name;
        var fileSize = file.size;
        $('.js-file-name').text(fileName);
        $('.js-file-size').text(fileSize);
        $('.js-file-image').attr('src', imageSrc);
      };
      fileReader.readAsDataURL(file);
    });
  });
  