//  -----------> animation when page relod <-------------

gsap.from('#startmsg', {
    top: "0",
    duration: 0.4,
    opacity: 0
});

document.querySelector("#start").addEventListener('click', () => {
    gsap.to("#startmsg", {
        top: 0,
        opacity: 0,
        duration: 0.4,
        display: "none",
    });
    gsap.to(".gamebox", {
        opacity: 1
    });
});

//Win animation
function PlayerWin() {
    if (clickCount == 9 && isDraw) {
        document.querySelector('#gameovermsg span').innerHTML = `Match Drawn`;
        clickCount = 0;
    } else {
        document.querySelector('#gameovermsg span').innerHTML = `Player${player}Wins`;
        clickCount = 0;
    }
    let tl_1 = gsap.timeline();
    tl_1.to(box, {
        opacity: 0.2
    })
    tl_1.to('#gameovermsg', {
        display: "flex",
        top: "50%",
        opacity: 1,
        duration: 0.2
    })


    document.querySelector("#restart").addEventListener('click', () => {
        gsap.to("#gameovermsg", {
            top: 0,
            opacity: 0,
            duration: 0.4,
            display: "none",
        });
        box.forEach((el) => {
            el.innerHTML = '';
        });
        gsap.to(".gamebox", {
            opacity: 1
        });
    });
}




















// document.getElementById("tpanal").addEventListener('click', ()=>{
//     PlayerWin();
// })