$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(415, 640, 100, 50, "red");
    createPlatform(635, 550, 150, 50, "black");
    createPlatform(200, 220, 150, 50, "firebrick");
    createPlatform(435, 330, 200, 50, "green",400,600,2);
    createPlatform(800, 450, 50, 50, "red");
    createPlatform(900, 300, 50, 300, "red");
    createPlatform(800, 450, 50, 50, "red");
    createPlatform(200, 500, 200, 50, "yellow");
    createPlatform(1300, 200, 200, 50, "black", 400, 900, 2);

    // TODO 3 - Create Collectables
    createCollectable("steve", 300, 455);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("kennedi", 1300, 170, 0.5, 0.7, 400, 900, 2);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 2000);
    createCannon("right", 600, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
