// --------------------------------------------------------------------------
// Define rover object and boundaries
// --------------------------------------------------------------------------

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var boundary = {
  xMin: 0,
  xMax: 9,
  yMin: 0,
  yMax: 9
}

// --------------------------------------------------------------------------
// Turning functions
// --------------------------------------------------------------------------

function turnLeft(rover){
  console.log("turnLeft was called!");

  var newDirection;

  switch(rover.direction) {
    case "N":
      newDirection = "W"
    break;

    case "E":
      newDirection = "N"
    break;

    case "S":
      newDirection = "E"
    break;

    case "W":
      newDirection = "S"
    break;

    default:
      null
    break;
  }

  rover.direction = newDirection;
  console.log(`New direction is ${newDirection}`);
}

function turnRight(rover){
  console.log("turnRight was called!");

  var newDirection;

  switch(rover.direction) {
    case "N":
      newDirection = "E"
    break;

    case "E":
      newDirection = "S"
    break;

    case "S":
      newDirection = "W"
    break;

    case "W":
      newDirection = "N"
    break;

    default:
      null
    break;
  }

  rover.direction = newDirection;
  console.log(`New direction is ${newDirection}`);
}

// --------------------------------------------------------------------------
// Boundary checks
// --------------------------------------------------------------------------

function atBoundaryForward(rover){

  if(rover.direction === "N" && rover.y === boundary.yMin) {
    return 1;
  } else {
    if (rover.direction === "E" && rover.x === boundary.xMax) {
      return 1;
    } else {
      if (rover.direction === "S" && rover.y === boundary.yMax) {
        return 1;
      } else {
        if(rover.direction === "W" && rover.x === boundary.xMin) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }
}

function atBoundaryBackward(rover){

  if(rover.direction === "N" && rover.y === boundary.yMax) {
    return 1;
  } else {
    if (rover.direction === "E" && rover.x === boundary.xMin) {
      return 1;
    } else {
      if (rover.direction === "S" && rover.y === boundary.yMin) {
        return 1;
      } else {
        if(rover.direction === "W" && rover.x === boundary.xMax) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }
}


// --------------------------------------------------------------------------
// Moving functions (+ logging)
// --------------------------------------------------------------------------


function moveForward(rover){
  console.log("moveForward was called");

  // Boundary check
  if(atBoundaryForward(rover)) {
    console.log("At boundary, can't move in this direction");
    return;
  }

  var initialPos = [rover.x,rover.y];  // For logging

  if(rover.direction === "N") {
    rover.y += -1;
  } else {
    if (rover.direction === "E") {
      rover.x += 1;
    } else {
      if (rover.direction === "S") {
        rover.y += 1;
      } else {
        if(rover.direction === "W") {
          rover.x += -1;
        }
      }
    }
  };

  rover.travelLog.push(`(${initialPos})`); // Log

  console.log(`New coordinates are (${rover.x},${rover.y})`);

}

function moveBackward(rover){
  console.log("moveBackward was called");

  // Boundary check
  if(atBoundaryBackward(rover)) {
    console.log("At boundary, can't move in this direction");
    return;
  }

  var initialPos = [rover.x,rover.y];  // For logging

  if(rover.direction === "N") {
    rover.y += 1;
  } else {
    if (rover.direction === "E") {
      rover.x += -1;
    } else {
      if (rover.direction === "S") {
        rover.y += -1;
      } else {
        if(rover.direction === "W") {
          rover.x += 1;
        }
      }
    }
  };

  rover.travelLog.push(`(${initialPos})`); // Log

  console.log(`New coordinates are (${rover.x},${rover.y})`);

}


// --------------------------------------------------------------------------
// Command entry
// --------------------------------------------------------------------------

function command(list) {

  for(var i = 0; i < list.length; i++) {

    switch(list[i]) {
      case "f": 
        moveForward(rover);
        break;
      case "b": 
        moveBackward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        console.log("Command not recognised");
      }
  }

  console.log(`TravelLog is ${rover.travelLog}`);

}