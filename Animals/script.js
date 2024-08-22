// //Path Animation
// var path = "M 20 100 Q 600 100 812 86";
// var finalPath = "M 20 100 Q 600 100 812 86";
// var cursor = document.querySelector("#cursor");
// var main = document.querySelector("#main");

// var string = document.querySelector("#string");
// string.addEventListener("mousemove", function (dets) {
//   path = `M 20 100 Q ${dets.offsetX} ${dets.offsetY} 812 86`;

//   gsap.to("svg path", {
//     attr: { d: path },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// });

// // To bring back string to initial position when mouse leaves
// string.addEventListener("mouseleave", function () {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: "elastic.out(1.5, 0.2)",
//   });
// });

// main.addEventListener("mousemove", function (dets) {
//   gsap.to(cursor, {
//     x: dets.x,
//     y: dets.y,
//     ease: "back.out",
//     duration: 1,
//   });
// });

// //nav-bar animation
// const tl = gsap.timeline();

// tl.from("h1",{
//     y:-30,
//     opacity:0,
//     duration : 1,
//     delay: 0.5
// })
// tl.from("h3",{
//     y:-30,
//     opacity:0,
//     duration : 1,
//     stagger: 1
// })

// //with different animations
// function breakTheText() {
//     var h1 = document.querySelector("#content h1")
//     var h1Text = h1.textContent

//     var splittedText = h1Text.split("")
//     var halfValue = Math.floor(splittedText.length / 2)

//     var clutter = ""

//     splittedText.forEach(function (elem, index) {
//       if (index < halfValue) {
//         clutter += `<span class="a">${elem}</span>`
//       } else {
//         clutter += `<span class="b">${elem}</span>`
//       }
//     });
//     h1.innerHTML = clutter
//   }

//   breakTheText()

//   gsap.from("h1 .a", {
//     y: 60,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.5,
//     stagger: 0.15,
//     repeat:-1,
//     color:"#f4a52c"
//   })
//   gsap.from("h1 .b", {
//     y: 60,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.5,
//     stagger: -0.15,
//     repeat:-1,
//     color:"#f4a52c"
//   })

//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   //Comment me out to see issue
//   const smoother = ScrollSmoother.create({
//    wrapper: "#smooth-wrapper",
//    content: "#smooth-content",
//    smooth: 2,
//    normalizeScroll: true,
//    ignoreMobileResize: true,
//    effects: true,
//    preventDefault: true
//   });

//   //Horizontal Scroll Galleries
//   if (document.getElementById("portfolio")) {
//       const horizontalSections = gsap.utils.toArray('.horiz-gallery-wrapper')

//       horizontalSections.forEach(function (sec, i) {

//         const pinWrap = sec.querySelector(".horiz-gallery-strip");

//         let pinWrapWidth;
//         let horizontalScrollLength;

//         function refresh() {
//           pinWrapWidth = pinWrap.scrollWidth;
//           horizontalScrollLength = pinWrapWidth - window.innerWidth;
//         }

//         // window.addEventListener("load", function () {
//           refresh();
//           // Pinning and horizontal scrolling
//           let scrollTween = gsap.to(pinWrap, {
//             scrollTrigger: {
//               scrub: true,
//               trigger: sec,
//               pin: sec,
//               start: "center center",
//               end: () => `+=${pinWrapWidth}`,
//               invalidateOnRefresh: true
//             },
//             x: () => -horizontalScrollLength,
//             ease: "none"
//           });

//         pinWrap.querySelectorAll("[data-speed-x]").forEach((el, i) => {
//           let speed = parseFloat(el.getAttribute("data-speed-x"));
//           gsap.to(el, {
//             x: () => (1 - speed) * (window.innerWidth + el.offsetWidth),
//             ease: "none",
//             scrollTrigger: {
//               containerAnimation: scrollTween,
//               trigger: el,
//               onRefresh: self => {
//                 let start = Math.max(0, self.start);
//                 self.setPositions(start, start + (self.end - self.start) / Math.abs(speed)); // adjust for how long it'll stay in view
//                 self.animation.progress(0);
//               },
//               scrub: true
//             }
//           });
//         });

//           ScrollTrigger.addEventListener("refreshInit", refresh);
//         // });
//       });
//   }

// Path Animation


var path = "M 20 100 Q 600 100 812 86";
var finalPath = "M 20 100 Q 600 100 812 86";

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  path = `M 20 100 Q ${dets.offsetX} ${dets.offsetY} 812 86`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

// To bring back string to initial position when mouse leaves
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1.5, 0.2)",
  });
});

//Cursor Animation
var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    ease: "back.out",
    duration: 1,
  });
});

//Navigation Bar Animation
const tl = gsap.timeline();

tl.from("h1", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.5,
}).from("h3", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 1,
});

//Breaking and Animating Text
function breakTheText() {
  var h1 = document.querySelector("#content h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = Math.floor(splittedText.length / 2);

  var clutter = "";

  splittedText.forEach(function (elem, index) {
    if (index < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
  repeat: -1,
  color: "#f4a52c",
});
gsap.from("h1 .b", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
  repeat: -1,
  color: "#f4a52c",
});

//page2
const slider = document.querySelector(".slider");
const items = gsap.utils.toArray(".item");

function moveCard() {
  const lastItem = items.pop(); // Remove the last item from the array
  items.unshift(lastItem); // Add the last item to the start of the array
  slider.insertBefore(lastItem, slider.firstChild); // Move the DOM element
}

document.body.addEventListener("click", () => {
  // Capture the current state of the items
  let state = Flip.getState(items);

  moveCard();

  // Animate the transition to the new state
  Flip.from(state, {
    targets: items,
    ease: "sine.inOut",
    duration: 0.6,
    stagger: 0.05,
    absolute: true,
    onEnter: (elements) => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          yPercent: 20,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.6,
          ease: "sine.out",
        }
      );
    },
    onLeave: (elements) => {
      gsap.to(elements, {
        opacity: 0,
        yPercent: 20,
        duration: 0.6,
        ease: "sine.in",
      });
    },
  });
});

//page3
let section = document.getElementById('section'),
    title = document.getElementById('title'),
    mark = title.querySelector("span"),
    dot = document.querySelector(".dot");

gsap.registerPlugin(ScrollTrigger);

gsap.set(dot, {
  width: "142vmax", // ensures it fills every part of the screen.
  height: "80vmax",
  xPercent: -50, // center the dot in the section area
  yPercent: -50,
  top: "50%",
  left: "50%"
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "bottom top",
    // markers: true,
    scrub: 1.5,
    pin: section,
    pinSpacing: true,
    invalidateOnRefresh: true,
  },
  defaults: { ease: "none" }
});

tl1
  .to(title, { opacity: 1, duration: 1 })
  .fromTo(dot, {
    scale: 0,
    x: () => {
      let markBounds = mark.getBoundingClientRect(),
          px = markBounds.left + markBounds.width * 0.54; // dot is about 54% from the left of the bounds of the character
      return px - section.getBoundingClientRect().width / 2;
    },
    y: () => {
      let markBounds = mark.getBoundingClientRect(),
          py = markBounds.top + markBounds.height * 0.73; // dot is about 73% from the top of the bounds of the character
      return py - section.getBoundingClientRect().height / 2;
    }
  }, { 
    x: 0,
    y: 0,
    ease: "power3.in",
    scale: 1,
    duration: 1
  });

//page6


console.clear();

gsap.registerPlugin(Draggable);

let rowSize = 110;
let colSize = 163;
let totalRows = 3;
let totalCols = 3;

let clampCol = gsap.utils.clamp(0, totalCols - 1);
let clampRow = gsap.utils.clamp(0, totalRows - 1);

let cells = [];

// Map cell locations to array
for (let row = 0; row < totalRows; row++) {
  for (let col = 0; col < totalCols; col++) {
    cells.push({
      row: row,
      col: col,
      x: col * colSize,
      y: row * rowSize
    });
  }
}

let container = document.querySelector(".container");
let listItems = gsap.utils.toArray(".list-item");
let sortables = listItems.map(Sortable); // Array of sortables
let total = sortables.length;

gsap.to(container, { autoAlpha: 1, duration: 0.5 });

function changeIndex(item, to, sameRow, sameCol) {
  if ((sameRow && !sameCol) || (!sameRow && sameCol)) {
    // Swap positions in array
    var temp = sortables[to];
    sortables[to] = item;
    sortables[item.index] = temp;
  } else {
    // Change position in array
    arrayMove(sortables, item.index, to);
  }

  // Simple, but not optimized way to change element's position in DOM. Not always necessary.
  sortables.forEach(sortable => container.appendChild(sortable.element));

  // Set index for each sortable
  sortables.forEach((sortable, index) => sortable.setIndex(index));
}

function Sortable(element, index) {
  let content = element.querySelector(".item-content");

  let animation = gsap.to(content, {
    duration: 0.3,
    boxShadow: "rgba(0,0,0,0.2) 0px 16px 32px 0px",
    force3D: true,
    scale: 1.1,
    paused: true
  });

  let dragger = new Draggable(element, {
    onDragStart: downAction,
    onRelease: upAction,
    onDrag: dragAction,
    cursor: "inherit"
  });

  let getProp = gsap.getProperty(element);

  let sortable = {
    cell: cells[index],
    dragger: dragger,
    element: element,
    index: index,
    setIndex: setIndex
  };

  gsap.set(element, { 
    x: sortable.cell.x, 
    y: sortable.cell.y 
  });

  function setIndex(index) {
    let cell = cells[index];
    let dirty = getProp("x") !== cell.x || getProp("y") !== cell.y;
    sortable.cell = cell;
    sortable.index = index;
    if (!dragger.isDragging && dirty) layout();
  }

  function downAction() {
    animation.play();
    this.update();
  }

  function dragAction() {
    let col = clampCol(Math.round(this.x / colSize));
    let row = clampRow(Math.round(this.y / rowSize));
    let cell = sortable.cell;
    let sameCol = col === cell.col;
    let sameRow = row === cell.row;
    if (!sameRow || !sameCol) {
      var index = totalCols * row + col;
      changeIndex(sortable, index, sameRow, sameCol);
    }
  }

  function upAction() {
    animation.reverse();
    layout();
  }

  function layout() {    
    gsap.to(element, { 
      duration: 0.3,
      x: sortable.cell.x, 
      y: sortable.cell.y
    });  
  }
  return sortable;
}

// Changes an elements's position in array
function arrayMove(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
}

//page7
var circle = document.querySelector(".main-circle"),
    imageURLs = ["https://cdn0.iconfinder.com/data/icons/dog-activities-editable-stroke-line/130/dog-03-512.png","https://th.bing.com/th/id/OIP.75YtiDXRumwpIQ1qLIPtrwHaHa?rs=1&pid=ImgDetMain","https://static.vecteezy.com/system/resources/previews/015/550/911/original/boy-play-dog-icon-outline-style-vector.jpg","https://th.bing.com/th/id/OIP.gO7Ooj-rdkVARULNluko_QHaHG?rs=1&pid=ImgDetMain"],
    images = placeImages(imageURLs, 100, 100), 
    spin = new TimelineMax({repeat:-1});

//rotate the circle clockwise while at the same time rotating each image counter-clockwise to make them look like they're not spinning at all. 
spin.to(circle, 60, {rotation:360, ease:Linear.easeNone})
    .to(images, 60, {rotation:-360, ease:Linear.easeNone}, 0);

//feed an array of URLs into this function and it'll place the images evenly around the edge of the circle, setting them to whatever width/height you define (in pixels)
function placeImages(imageURLs, width, height) {
  var angleIncrement = Math.PI * 2 / imageURLs.length,
      radius = circle.offsetWidth / 2,
      images = [],
      image, angle, i;
  for (i = 0; i < imageURLs.length; i++) {
    image = new Image();
    images.push(image);
    image.setAttribute("src", imageURLs[i]);
    circle.appendChild(image);
    angle = angleIncrement * i;
    TweenLite.set(image, {
      width:width, 
      height:height, 
      position:"absolute", 
      top:0, 
      left:0, 
      xPercent:-50, 
      yPercent:-50,
      transformOrigin:"50% 50%",
      x: radius + Math.cos(angle) * radius,
      y: radius + Math.sin(angle) * radius
    });
  }
  return images;
}
 
Draggable.create('.main-circle', {
    type: 'rotation',
    throwProps:true,
    onPressInit: function(){
      spin.pause();
    },
    onDrag:function() {
      //just convert the rotation into a progress value for the spin timeline. Easy peasy. Very performant too. 
      var angle = (this.rotation + 360 * 100000) % 360; //ensure that the value is always between 0 and 360. Don't let it go negative or beyond 360. 
      spin.progress(angle/360);
    },
    onThrowUpdate: function(){
      var angle = (this.rotation + 360 * 100000) % 360;
      spin.progress(angle/360);
    },
    onThrowComplete: function() {
      spin.resume();
      //ease back into the normal spin by tweening the timeScale from 0 to 1
      TweenLite.fromTo(spin, 1, {timeScale:0}, {timeScale:1, ease:Power1.easeIn});
    }
});


