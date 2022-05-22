const arrows = [
  "arrows1",
  "arrows2",
  "arrows3",
  "arrows4",
  "arrows5",
  "arrows6",
];
const lines = [
    "line1",
    "line2",
    "line3",
    "line4",
    "line5"
    ];
const content = [
  "timelinecontent1",
  "timelinecontent2",
  "timelinecontent3",
  "timelinecontent4",
  "timelinecontent5",
  "timelinecontent6",
];

function opacity1(arrays) {
  let time = 2000;
  for (let i = 0; i < arrays.length; i++) {
    setTimeout(() => {
      document.getElementById(arrays[i]).style.opacity = 1;
    }, time);
    time = time + 500;
  }
}

function opacity06(arrays) {
  let time = 2000;
  for (let i = 0; i < arrays.length; i++) {
    setTimeout(() => {
      document.getElementById(arrays[i]).style.opacity = 0.6;
    }, time);
    time = time + 500;
  }
}

function timeline(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    let line = document.getElementById(arrays[i]);
    line.animate(
      [
        {
          height: "0px",
        },
        {
          height: "130px",
        },
      ],
      {
        duration: 2500,
        iterations: 1,
        fill: "forwards",
      }
    );
  }
}

opacity06(content)
opacity1(arrows)
timeline(lines);





