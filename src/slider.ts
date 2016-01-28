import {Component} from 'angular2/core';

@Component({
  selector: 'slider',
  template: `
    <h2>test</h2>
    <p>
    <label for="amount">Volume:</label>
        <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
    </p>
    <div id="slider-vertical" style="height:200px;"></div>
    <script>
    $(function() {
        $( "#slider-vertical" ).slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
        }
        });
        $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
    });
    </script>  
`
})

export class Slider { }