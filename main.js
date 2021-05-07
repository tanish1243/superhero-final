canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width= 30;
block_image_height=30;
var player_image_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_image_object=Img;
        player_image_object.scaleToWidth(150);
        player_image_object.scaleToHeight(140);
        player_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image_object);
    });

}
function newimage(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });

    
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
      var keypressed= e.keyCode
      console.log(keypressed);
      if(e.shiftKey==true && keypressed=="80"){
          console.log("shift and p clicked");
          block_image_width= block_image_width + 10;
          block_image_height= block_image_height + 10;
          document.getElementById("current_width").innerHTML=block_image_width;
          document.getElementById("current_height").innerHTML=block_image_height;
      }
      if(e.shiftKey==true && keypressed=="77"){
        console.log("shift and m clicked");
        block_image_width= block_image_width - 10;
        block_image_height= block_image_height - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=="70"){
        newimage("ironman_face.png");
        console.log("f pressed"); 
    }
    if(keypressed=="66"){
        newimage("hulkd_body.png");
        console.log("b pressed");
    }
    if(keypressed=="76"){
        newimage("spiderman_legs.png");
        console.log("l pressed");
    }
    if(keypressed=="82"){
        newimage("thor_right_hand.png");
        console.log("r pressed");
    }
    if(keypressed=="72"){
        newimage("thor_left_hand.png");
        console.log("h pressed");
    }
    if(keypressed=="37"){
        left();
       console.log("left arrow");
    }
    if(keypressed=="38"){
        up();
       console.log("up arrow");

    }
    if(keypressed=="39"){
        right();
       console.log("right arrow");}

       if(keypressed=="40"){
        down();
       console.log("down arrow");
    }

}
function up(){
    if(player_y>=0){
        player_y=player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("up key is pressed, x = " + player_x+" player y is "+player_y);
        canvas.remove(player_image_object);
        player_update();
    }
}
   function down(){
       if(player_y<=500){
        player_y=player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("up key is pressed, x = " + player_x+" player y is "+player_y);
        canvas.remove(player_image_object);
        player_update();
       }
   }
   function left(){
       if(player_x>=0){
        player_x=player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("up key is pressed, x = " + player_x+" player y is "+player_y);
        canvas.remove(player_image_object);
        player_update();
       }
   }
   function right(){
       if(player_x<=850){
        player_x=player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("up key is pressed, x = " + player_x+" player y is "+player_y);
        canvas.remove(player_image_object);
        player_update();
       }
   }
   
