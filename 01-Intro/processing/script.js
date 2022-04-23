
const SIZE = 400;

function sketch(processing){

    processing.setup = function(){
      processing.frameRate(2); // fps
		  processing.size(SIZE, SIZE);
    }
    processing.drawGame = function(world){
      processing.background(255,255,200);

      processing.strokeWeight(4);  // Default

      processing.point(200, 200); // origen

      /* 
      processing.line (0,SIZE/2,SIZE,SIZE/2);//linea horizontal
      processing.line (SIZE/2,0,SIZE/2,SIZE);// linea vertical
       */

      /* cubo con primitivas */
  
      processing.line(200, 200, 300, 200);
      processing.line(200, 300, 300, 300);
      processing.line(200, 200, 200, 300);
      processing.line(300, 200, 300, 300);

      processing.line(150, 150, 250, 150);
      processing.line(150, 250, 250, 250);
      processing.line(150, 150, 150, 250);
      processing.line(250, 150, 250, 250);

      processing.line(150, 150, 200, 200);
      processing.line(150, 250, 200, 300);
      processing.line(250, 250, 300, 300);
      processing.line(250, 150, 300, 200);

     /*  processing.line(600, 80, 640, 300);

      processing.ellipse(420, 320, 30, 30);
      
      processing.rect(400, 80, 30, 30);

      processing.strokeWeight(16);  // Thicker
      processing.point(200, 80);


      var d = 100;
      var p1 = d;
      var p2 = p1+d;
      var p3 = p2+d;
      var p4 = p3+d;

      // Draw gray box
      processing.line(p3, p3, p2, p3);
      processing.line(p2, p3, p2, p2);
      processing.line(p2, p2, p3, p2);
      processing.line(p3, p2, p3, p3);

      // Draw white points
      processing.point(p1, p1);
      processing.point(p1, p3); 
      processing.point(p2, p4);
      processing.point(p3, p1); 
      processing.point(p4, p2);
      processing.point(p4, p4); */


    }
    processing.onTic = function(world) {
    }

    processing.onMouseEvent = function (world, event) {
        return world;
    }

  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function () {
    processing.drawGame(processing.state);
    processing.state = processing.onTic(processing.state);
  };
  // Esta función se ejecuta cada vez que presionamos una tecla. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function () {
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }
  // Esta función se ejecuta cada vez movemos el mouse. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
  }

  // Estas funciones controlan los eventos del mouse. 
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseDragged = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mousePressed = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseReleased = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }
  // Fin de los eventos del mouse


}

const canvas = document.getElementById("canvas");
const instance = new Processing(canvas, sketch);