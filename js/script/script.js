$( document ).ready(function() {
  $.ajax({
        url: "http://localhost:8080/station"
    }).then(function(data) {
       $.each(data, function(i, item) {
           $('#start_station').append($('<option>', {
                value: data[i].id,
                text: data[i].name
           }));
           $('#end_station').append($('<option>', {
                value: data[i].id,
                text: data[i].name
           }));
       });
    });
});

$("#search_it").click(function(){
    var start = $('#start_station').find(":selected").val();
    var end = $('#end_station').find(":selected").val();
    $.ajax({
        url: "http://localhost:8080/itinerary/" + start + "/" + end
    }).then(function(data) {
        $.each(data, function(i, item) {
            $("#itinerary").append(data[i].text);
        });
    });
});

