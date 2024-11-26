function wait(delay) {
  for (let buffer = 0; buffer < delay; buffer++) {
  }
}

function repeat(times, char) {
  let string = "";
  for (let j = 0; j < times; j++) {
    string += " ";
  }

  string += char + "\n";
  console.log(string);
  wait(89999999);
}

function wave() {
  let angle = 0;
  while (true) {
    repeat((30 * (Math.sin(angle/4) + 65)), '🟢');
    repeat((30 * (Math.cos((angle/4) + 90) + 65)), '🔴');

    angle += 1;
  }   
}  

wave(); 
