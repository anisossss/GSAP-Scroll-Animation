var tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".two",
		start: "0% 95%",
		end: "70% 50%",
		scrub: 3,
	}
})

tl.to("#fanta", {
	top: "125%",
	left: "0%"
}, 'fanta')

tl.to("#orange-cut", {
	top: "160%",
	left: "23%"
}, 'fanta')

tl.to("#orange", {
	width: "15%",
	top: "165%",
	right: "10%"
}, 'fanta')

tl.to("#leaf", {
	top: "110%",
	rotate: "130deg",
	left: "70%"
}, 'fanta')

tl.to("#leaf2", {
	top: "110%",
	rotate: "130deg",
	left: "0%"
}, 'fanta')


var tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".three",
		start: "0% 95%",
		end: "50% 50%",
		scrub: 3,
	}
})

tl2.from(".lemon1", {
	rotate: "-90deg",
	left: "-100%",
	top: "110%"
}, 'ca')

tl2.from("#cocacola", {
	rotate: "-90deg",
	top: "110%",
	left: "-100%",
}, 'ca')

tl2.from(".lemon2", {
	rotate: "90deg",
	left: "100%",
	top: "110%"
}, 'ca')

tl2.from("#pepsi", {
	rotate: "90deg",
	top: "110%",
	left: "100%",
}, 'ca')

tl2.to("#orange-cut", {
	width: "18%",
	left: "42%",
	top: "204%"
}, 'fanta', 'ca')

tl2.to("#fanta", {
	width: "35%",
	top: "213%",
	left: "33%",
}, 'fanta', 'ca')
