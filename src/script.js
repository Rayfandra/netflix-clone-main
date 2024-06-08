$('#search-button').on('click', function() {

    $.ajax({
      url: 'http:omdbapi.com',
      type: 'get',
      dataType: 'json',
      data:{
          'apikey' : 'be1266a5',
          's' : $('#search-input').val()
      },
      succes: function (result) {
  
        console.log(result);
      }
    });
  
  });