var socket = io.connect();

var redirect = {
  go:function(){
     location.href= this.href

  }
}

socket.on("server_to_client", function(data){

  redirect.go()
});
