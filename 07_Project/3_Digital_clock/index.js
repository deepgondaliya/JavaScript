const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {

    // console.log(date.toLocaleTimeString());
    
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
} , 1000)