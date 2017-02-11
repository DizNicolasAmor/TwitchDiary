/*
TwitchDiary
- - - - - - - - - -
http://codepen.io/DizNicolasAmor/pen/wgQjPq
Author:  Diz, Nicolás Amor (https://github.com/DizNicolasAmor)
This project is a challenge posed by FreeCodeCamp.
Use the Twitch.tv API
*/


$(document).ready(function() {

  var FCConline = false; 
  var storbeckonline = false; 
  var loserfruitonline = false;
  var fakenameonline = false;
  
  /* buttons color*/
  $('#all').addClass('active');
  $('#online').removeClass('active');
  $('#offline').removeClass('active');


  //Free Code Camp
  $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/freecodecamp', 
      //other url in case this does not work
      //'https://wind-bow.gomix.me/twitch-api',
      headers: {
        'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
      },
      success: function(data) {
//        console.log(data);
        
        if(data.stream !==null){
          $('#online?FCC').html('ONLINE');
          FCConline = true;
        }
      }  
    });  //ajax
  
  $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/freecodecamp', 
      headers: {
        'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
      },
      success: function(data2) {
 //       console.log(data2);

        if(data2.status != null) {
          $('#statusFCC').html(data2.status);
        }
        if(data2.logo != null){
          $('#logoFCC').html('<img class="img-circle center-block" width="50" src='+data2.logo+'>');
        }
      }  
    });  //ajax

  
  //Storbeck
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/storbeck', 
      //other url in case this does not work
      //'https://wind-bow.gomix.me/twitch-api',
    headers: {
      'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
    },
    success: function(data3) {
   // console.log(data3);
        
      if(data3.stream !==null){
        storbeckonline = true; 
        $('#online?storbeck').html('ONLINE');
      }
    }  
  });  //ajax
  
  $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/storbeck', 
      headers: {
        'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
      },
      success: function(data4) {
//        console.log(data4);

        if(data4.status != null) {
          $('#statusStorbeck').html(data4.status);
        }
        if(data4.logo != null){
          $('#logoStorbeck').html('<img class="img-circle center-block" width="50" src='+data4.logo+'>');
        }
      }  
    });  //ajax

  
  //loserfruit
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/loserfruit', 
      //other url in case this does not work
      //'https://wind-bow.gomix.me/twitch-api',
    headers: {
      'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
    },
    success: function(data5) {
   //     console.log(data5);
    
      if(data5.stream !==null){
        loserfruitonline = true; 
        $('#online?loserfruit').html('ONLINE');
      }
    }  
  });  //ajax
  
  $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/channels/loserfruit', 
      headers: {
        'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'  //miID
      },
      success: function(data6) {
  //      console.log(data6);

        if(data6.status != null) {
          $('#statusLoserfruit').html(data6.status);
        }
        if(data6.logo != null){
          $('#logoLoserfruit').html('<img class="img-circle center-block" width="50" src='+data6.logo+'>');
        }
      }  
    });  //ajax

  
  //fakename
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/fakename', 
    headers: {
      'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'
    },
    success: function(data7) {
      //console.log(data7);
        
      if(data7.stream !==null){
        fakenameonline = true; 

        $('#online?fakename').html('ONLINE');  
      }
      else if (data7.stream === undefined) {
        $('#online?fakename').html('Account Closed');
        $('#statusFakename').html('No status');
      }

    }  
  });  //ajax
  
  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/channels/fakename', 
    headers: {
      'Client-ID': 'vl57e7ek4qtrdtk0aks5wnps6wax3r'
    },
    error: function(dataError){
      console.log(dataError);
      
      if (dataError.status === 422) {
        $('#logoFakename').html('<img class="img-circle center-block" width="50" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Icon_Simple_Error.png">');
        $('#online?fakename').html('account closed');
        $('#statusFakename').html('No status');
      }
      else if (dataError.status === 404) {
        $('#logoFakename').html('<img class="img-circle center-block" width="50" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Icon_Simple_Error.png">');
        $('#online?fakename').html('non-existant account');
        $('#statusFakename').html('No status');
      }
      else{
        $('#logoFakename').html('<img class="img-circle center-block" width="50" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Icon_Simple_Error.png">');
        $('#online?fakename').html('ERROR');
        $('#statusFakename').html('No status');
      }

    },
    success: function(data8) {
        console.log(data8);

        if(data8.status != null) {
          $('#statusFakename').html(data8.status);
        }
        if(data8.logo != null){
          $('#logoFakename').html('<img class="img-circle center-block" width="50" src='+data8.logo+'>');
        }
      }  
    });  //ajax
  
  
  //buttons
  
  // all
  $('#all').click(function() {
        $('#all').addClass('active');
        $('#online').removeClass('active');
        $('#offline').removeClass('active');

        $('#FCC').show();
        $('#storbeck').show();
        $('#loserfruit').show();
        $('#fakename').show();
      });

  // online
  $('#online').click(function() {
    $('#all').removeClass('active');
    $('#online').addClass('active');
    $('#offline').removeClass('active');
    
    if(FCConline === false){
      $('#FCC').hide();
    }else{
      $('#FCC').show();
    }
    if(storbeckonline === false){
      $('#storbeck').hide();
    }else{
      $('#storbeck').show();
    }
    if(loserfruitonline === false){
      $('#loserfruit').hide();
    }else{
      $('#loserfruit').show();
    }
    if(fakenameonline === false){
      $('#fakename').hide();
    }else{
      $('#fakename').show();
    }
    
  });

  // offline
  $('#offline').click(function() {
      $('#all').removeClass('active');
      $('#online').removeClass('active');
      $('#offline').addClass('active');

    if(FCConline === true){
      $('#FCC').hide();
    }else{
      $('#FCC').show();
    }
    if(storbeckonline === true){
      $('#storbeck').hide();
    }else{
      $('#storbeck').show();
    }
    if(loserfruitonline === true){
      $('#loserfruit').hide();
    }else{
      $('#loserfruit').show();
    }
    if(fakenameonline === true){
      $('#fakename').hide();
    }else{
      $('#fakename').show();
    }
    
    });
  
});  //document ready
