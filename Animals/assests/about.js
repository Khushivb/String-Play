// let select = s => document.querySelector(s),
//   selectAll = s =>  document.querySelectorAll(s),
// 		mainSVG = select('#mainSVG'),
// 		heartContainer = select('#heartContainer'),
// 		defaultPath = select('.defaultPath'),
// 		mainHeart = select('.mainHeart'),
// 		smallHeart = select('.smallHeart'),
// 		whiteHeart = select('#whiteHeart'),
// 		curviness = 0.84,
// 		rawPath,
// 		clickCount = 0

// gsap.set('svg', {
// 	visibility: 'visible'
// })
// gsap.set(smallHeart, {
// 	transformOrigin: '50% 50%'
// })
// gsap.set(whiteHeart, {
// 	transformOrigin: '20% 80%'
// })

// function destroy (heart, path) {
// 		heartContainer.removeChild(heart);
// 		heartContainer.removeChild(path);
// }

// function bounceHeart () {

// gsap.fromTo(whiteHeart, {
// 		scale: 0.18,
// 	rotation: 45
// 	},{
// 		duration: 2,
// 	rotation: 0,
// 		scale: 1,
// 		ease: 'elastic(0.83, 0.38)'
// 	})


// }
// function createPath () {
	
// 	let myPath = defaultPath.cloneNode(true);
// 	let mySmallHeart = smallHeart.cloneNode(true);
// 	heartContainer.appendChild(myPath);
// 	heartContainer.appendChild(mySmallHeart);
// 	let point1 = {x: 400, y: 550};
// 	let point2 = {x: gsap.utils.random(300, 450), y: gsap.utils.random(300, 400)};
// 	let point3 = {x: gsap.utils.random(200, 600), y: gsap.utils.random(150, 250)};
// 	let point4 = {x: gsap.utils.random(100, 700), y: gsap.utils.random(-100, 150)};
// 	let points = [point1.x, point1.y, point2.x, point2.y, point4.x, point4.y];
// 	rawPath = [MotionPathPlugin.pointsToSegment(points, curviness)];				
// 	myPath.setAttribute("d", MotionPathPlugin.rawPathToString(rawPath));
// 	gsap.set(myPath, {
// 		drawSVG: '0% 0%',
// 		autoAlpha: 0
// 	})

	
// 	let drawPos1 = gsap.utils.random(16, 45)
// 	let drawPos2 = gsap.utils.random(34, 66)
// 	let tl = gsap.timeline({onComplete: destroy, onCompleteParams: [mySmallHeart, myPath],paused: true, defaults: {
// 		ease: 'linear'
// 	}});
// 	tl.set([myPath, mySmallHeart], {
// 		autoAlpha: 1
// 	})
// 		.to(myPath, {
// 		drawSVG:'0% 33%'		
// 	})
// 	.to(myPath, {
// 		drawSVG:`${drawPos1}% 66%`		
// 	})
// 	.to(myPath, {
// 		drawSVG:'100% 100%'		
// 	})
// 	.to(mySmallHeart, {
// 		duration: 1.5,
// 		transformOrigin: '50% 50%',
// 		motionPath: {
// 			path: myPath,
// 			autoRotate: 90,
// 			offsetX: -21,
// 			offsetY: -21
// 		}
// 	}, 0)
// 	.to(mySmallHeart, {
// 		duration: 1.5,
// 		ease: 'expo.in',
// 		autoAlpha: 0
// 	}, 0)
// 	.to(myPath, {
// 		stroke: '#E8485C',
// 		ease: 'expo',
// 		duration: 1.5
// 	}, 0)
// 	let mainTl = gsap.timeline()
// 	mainTl.to(tl, {
// 		duration: 'random(0.7, 2)',
// 		time: tl.duration(),
// 		ease: 'sine.inOut'
// 	})
	
// 	if(clickCount % 10 === 0 || clickCount === 0) {
// 		bounceHeart()
// 	}
// 	clickCount++;
	
// }

// mainHeart.addEventListener('click', createPath);
// //gsap.globalTimeline.timeScale(0.25)

var currentImg,
    currentImgProps = {x: 0, y: 0},
    isZooming = false,
    column = -1,
    mouse = {x: 0, y: 0},
    delayedPlay;

for (var i = 0; i < 12; i++) {
    if (i % 4 == 0) column++;

    var b = document.createElement('div');
    $('.mainBoxes').append(b);

    gsap.set(b, {
        attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
        backgroundImage: 'url(https://images.pexels.com/photos/6291579/pexels-photo-6291579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' + i + '.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        x: [60, 280, 500][column],
        width: 400,
        height: 640,
        borderRadius: 20,
        scale: 0.5,
        zIndex: 1
    });

    b.tl = gsap.timeline({ paused: true, repeat: -1 })
        .fromTo(b, { y: [-575, 800, 800][column], rotation: -0.05 }, { duration: [40, 35, 26][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none' })
        .progress(i % 4 / 4);
}

function pauseBoxes(b) {
    var classStr = 'pb-col0';
    if ($(b).hasClass('pb-col1')) classStr = 'pb-col1';
    if ($(b).hasClass('pb-col2')) classStr = 'pb-col2';
    $('.' + classStr).each(function() {
        gsap.to(this.tl, { timeScale: 0, ease: 'sine' });
    });
}

function playBoxes() {
    $('.mainBoxes').children().each(function() {
        var tl = this.tl;
        tl.play();
        gsap.to(tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
    });
}

window.onload = function() {
    var _tl = gsap.timeline({ onStart: playBoxes })
        .set('.main', { perspective: 800 })
        .set('.photoBox', { opacity: 1, cursor: 'pointer' })
        .set('.mainBoxes', { left: '75%', xPercent: -50, width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10 })
        .set('.mainClose', { autoAlpha: 0, width: 60, height: 60, left: -30, top: -31, pointerEvents: 'none' })
        .fromTo('.main', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2);

    $('.main').on('mouseenter', '.photoBox', function(e) {
        if (currentImg) return;
        if (delayedPlay) delayedPlay.kill();
        pauseBoxes(e.currentTarget);
        var _t = e.currentTarget;
        gsap.to('.photoBox', { duration: 0.2, overwrite: 'auto', opacity: function(i, t) { return (t == _t) ? 1 : 0.33; } });
        gsap.fromTo(_t, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
    });

    $('.main').on('mouseleave', '.photoBox', function(e) {
        if (currentImg) return;
        var _t = e.currentTarget;

        if (gsap.getProperty(_t, 'scale') > 0.62) delayedPlay = gsap.delayedCall(0.3, playBoxes);
        else playBoxes();

        gsap.timeline()
            .set(_t, { zIndex: 1 })
            .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
            .to('.photoBox', { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
    });

    $('.main').on('click', '.photoBox', function(e) {
        if (!isZooming) {
            isZooming = true;
            gsap.delayedCall(0.8, function() { isZooming = false });

            if (currentImg) {
                gsap.timeline({ defaults: { ease: 'expo.inOut' } })
                    .to('.mainClose', { duration: 0.1, autoAlpha: 0, overwrite: true }, 0)
                    .to('.mainBoxes', { duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true }, 0)
                    .to('.photoBox', { duration: 0.6, opacity: 1, ease: 'power4.inOut' }, 0)
                    .to(currentImg, { duration: 0.6, width: 400, height: 640, borderRadius: 20, x: currentImgProps.x, y: currentImgProps.y, scale: 0.5, rotation: 0, zIndex: 1 }, 0);
                currentImg = undefined;
            } else {
                pauseBoxes(e.currentTarget);

                currentImg = e.currentTarget;
                currentImgProps.x = gsap.getProperty(currentImg, 'x');
                currentImgProps.y = gsap.getProperty(currentImg, 'y');

                gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
                    .set(currentImg, { zIndex: 100 })
                    .fromTo('.mainClose', { x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)' }, { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' }, 0)
                    .to('.photoBox', { opacity: 0 }, 0)
                    .to(currentImg, { width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1 }, 0)
                    .to('.mainBoxes', { duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0 }, 0.15)
                    .to('.mainBoxes', { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' }, 0.65);
            }
        }
    });

    if ('ontouchstart' in window) {
        mouse.x = window.innerWidth - 50;
        mouse.y = 60;
    } else {
        $('.main').on('mousemove', function(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            if (currentImg) gsap.to('.mainClose', { duration: 0.1, x: mouse.x, y: mouse.y, overwrite: 'auto' });
        });
    }
};