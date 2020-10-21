window.onload = (event) => {

    const takeoff = document.querySelector("#takeoff");
    const landing = document.querySelector('#landing');
    const abort = document.querySelector('#missionAbort');

    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left  = document.getElementById("left");
    const right = document.getElementById("right");


    takeoff.addEventListener('click', (event)=>{
     let affirm = window.confirm('Confirm that the shuttle is ready for takeoff.');
     if(affirm) {
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleBackground.style.background = "blue";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+10000;
        }
    })

    landing.addEventListener('click', (event) =>{
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The Shuttle has landed.";
        shuttleBackground.style.background ="green";

        shuttleHeight.innerHTML = 0;
    })

    abort.addEventListener('click', (event) => {
        let(affirm) = window.confirm("Confirm that you want to abort mission.");
        if(affirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green"
            shuttleHeight.innerHTML = 0;
        }
    })
let rocket Image - document.getElementById("rocket");
    rocketImage.style.position = "realative"; 
    rocketImage.style.top = "20px"; 
    rocketImage.style.left = "20px"; 
    rocketImage.style.visibility = "visable"; 
    
    let vertPosString = rocketImage.style.top
    let vertPos = Number(vertPosString.split('px')[0]);
    let horizonPosString = rocketImage.style.left;
    let horizonPos = Number(horizonPosString.split('px')[0]);

up.addEventListener('click', (event)=> {
    if(vertPos > -10)
    vertPos -= 10;
    rocketImage.style.top = `${vertPos}px`;
    height += 10000
    shuttleHeight.innerHTML = height;
    })

    down.addEventListener('click', (event) => {
        if(vertPos < 250)
        vertPos += 10;
        rocketImage.style.top = `${vertPos}px`;
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    })
    left.addEventListener('click', (event) => {
        if(horizonPos >-160)
        horizonPos -+10;
        rocketImage.style.left = `${horizonPos}px`;
    })
    right.addEventListener('click', (event) => {
        if(horizonPos < 160)
        horizonPos +=10;
        rocketImage.style.right = `${horizonPos}px`;
    })
} 
