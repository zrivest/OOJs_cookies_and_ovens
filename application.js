function CookieBatch(batchType, bakeTime){
  this.batchType = batchType;
  this.bakeTime = bakeTime;
  this.id = new Date().getTime();
  this.time_baked = 1;
}

CookieBatch.prototype.bake = function() {
  console.log(this.bakeTime - this.time_baked)
   if(this.bakeTime - this.time_baked <= 2 && this.bakeTime - this.time_baked != 0 ) {
      $("." + this.id).css("background-color", "green")
    }
    else if(this.bakeTime - this.time_baked == 0) {
      $("." + this.id).css("background-color", "black")
      $("." + this.id).css("color", "white")
      return;
    }
    else {
      $("." + this.id).css("background-color", "yellow")
      $("." + this.id).css("color", "white")
    }
    this.time_baked += 1;

  }

var all_batches = [];
var oven = [];
$(document).ready(function(){

  $('#new_batch').submit(function(e){

    e.preventDefault();
    var batch_type = this.batch_type.value
    var bake_time = this.bake_time.value
    var batch = new CookieBatch(batch_type, bake_time)
    var id = batch.id;
    all_batches.push(batch)
    $("#prep_batches").append("<li>" + batch_type + "<button id="+id+" class='add'>Add</a></li>")
  });
    count = 0

  $('#prep_batches').on("click", "button", function(e) {
    e.preventDefault();
    object_id = $(this).attr("id");
    for (var i=0; i < all_batches.length; i++) {
      if(all_batches[i].id == object_id)
      {
        oven.push(all_batches[i]);
        // alert("cookies be jownin");
        $(this).parent().remove();
       $("#rack_" + count).html(all_batches[i].batchType);
       $("#rack_" + count).css("background-color" , "red");
       $("#rack_" + count).addClass(object_id)
        count += 1;

      }
    }
  });

    $("#bake").click(function(){
      for (var i=0; i < oven.length; i++) {
        oven[i].bake();

      }

    });


});


