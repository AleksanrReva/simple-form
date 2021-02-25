const getUrl = "../ajax/test.json";
const postUrl = "../ajax/test.php";

$( document ).ready(function () {

  $( "#Select1" ).change(function () {
    if ( $( "#Select1" ).val() == 2 ) {

      $.getJSON( getUrl )
        .done(function( data ) {
          $.each( data, function ( key, val ) {
            $( "#Select2" ).children()[key - 1].textContent = val;
          });
        })
        .fail(function() {
          alert( "Что-то пошло не так" );
        })
        .always(function() {
          $( "#SelectAjax" ).toggleClass( "hidden" );
        });

    } else {

      $( "#Select2" ).prop( "selectedIndex", 0 );
      $( "#SelectAjax" ).toggleClass( "hidden" );

    }
  });

  $( ".whole-form" ).submit(function( event ) {
    $( ".btn" ).prop( "disabled", true );
    
    $.post( postUrl, $(this).serializeArray() )
      .done(function( data ) {
        alert( data );
      })
      .fail(function() {
        alert( "Что-то пошло не так" );
      })
      .always(function() {
        $( ".btn" ).prop( "disabled", false );
      });
    
    event.preventDefault();
  });

});