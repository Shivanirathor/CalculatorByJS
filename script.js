(function(){
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.buttons');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

 
equal.addEventListener('click', () =>{
    if(screen.value === ''){
        screen.value = "Please enter";
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', () => {
    screen.value = "";
})

})();
