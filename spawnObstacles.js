// to spawn obstacles

function spawnLogs(){
    if(frameCount%240===0||frameCount===1){
      log= createSprite(100,80);
      log.addImage("Log",logImg);
      log.scale=0.2;
      log.x=0;
      log.velocityX=2;
      log.y=random(55,235);
    
      log.lifetime= (width/2);
      logGroup.add(log);
      
    
    }
    }
    
    function spawnCarsLeft(){
      if(frameCount%100===0){
        car = createSprite(150,500);
        car.scale=0.5;
      
        var r=Math.round (random(1,2));
        
        if(r===1){
          car.addImage(car1Img);
        }
    
        else if(r===2){
          car.addImage(car2Img);
        };
    
      car.x=0;
      car.velocityX=2;
      car.y=random(310,490);
    
      car.lifetime= (width/2);
      carLeftGroup.add(car);
      }
    
    }
    
    function spawnCarsRight(){
      if(frameCount%120===0){
        car= createSprite(150,500);
        car.scale=0.5;
    
        var r=Math.round (random(3,4));
    
        if(r===3){
          car.addImage(car3Img);
        }
    
        else if(r===4){
          car.addImage(car4Img);
        }
    
        car.x=width ;
        car.velocityX=-2;
        car.y=random(310,490);
    
        car.lifetime= (width/2);
    
        carRightGroup.add(car);
      }
    }
    
    function spawnTurtles(){
      if(frameCount%100===0){
    
        turt1=createSprite(width,150);
        turt1.addImage("TURTLE",turtImg1);
        turt1.scale=0.2;
        turt1.velocityX=-4;
        turt1.y=random(55,235);
    
        turt1.lifetime= (width/2);
    
        turtGroup.add(turt1);
    
        turt2=createSprite((turt1.x+35),150);
        turt2.addImage("TURTLE",turtImg2);
        turt2.scale=0.2;
        turt2.velocityX=-4;
        turt2.y=turt1.y
    
        turt2.lifetime= (width/2);
    
        turtGroup.add(turt2);
    
    
        turt3=createSprite((turt2.x+35),150);
        turt3.addImage("TURTLE",turtImg3);
        turt3.scale=0.2;
        turt3.velocityX=-4;
        turt3.y=turt1.y
    
        turt3.lifetime= (width/2);
    
        turtGroup.add(turt3);
        
        turt4=createSprite((turt3.x+35),150);
        turt4.addImage("TURTLE",turtImg4);
        turt4.scale=0.2;
        turt4.velocityX=-4;
        turt4.y=turt1.y
    
        turt4.lifetime= (width/2);
    
        turtGroup.add(turt4);
      }
    }
    
    function spawnCrocodile(){
    
      if(frameCount%120===0&&score>=100){
        var croc= createSprite(width);
        croc.addAnimation("CROCODILE",crocAnimation);
        croc.y= random(55,240);
        croc.velocityX=-4;
    
        croc.lifetime=(width/4);
        crocGroup.add(croc);
      }
    }