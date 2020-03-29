var firebaseConfig = {
    apiKey: "AIzaSyCowwHcthI-LeWa4WcDWQlMn6gvmzvF9V4",
    authDomain: "raed-a06f8.firebaseapp.com",
    databaseURL: "https://raed-a06f8.firebaseio.com",
    projectId: "raed-a06f8",
    storageBucket: "raed-a06f8.appspot.com",
    messagingSenderId: "1069485403041",
    appId: "1:1069485403041:web:018291e2fafe4656"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.database().ref('contact')


  $('#btnSubmit').click(function(){
      var name = $('#name').val()
      var email = $("#email").val()
      var tel = $("#number").val()
      var track = $("#track").val()

      var newMsg = db.push();
      newMsg.set({
          name:name,
          email:email,
          phone:tel,
          track:track,
      })
  })




  db.on("value",function(snapshot){
      var val = snapshot.val()
      Object.values(val).forEach(element => {
        
      });

  })

