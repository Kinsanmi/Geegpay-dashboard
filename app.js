const hamburger = document.querySelector('.hamburger');

const navBar = document.querySelector('.navbar');

const remove = document.querySelector('.close')

const navContainer = document.querySelector('.nav-container')



const toggleDown = ()=>{

    hamburger.onclick = ()=>{
        hamburger.classList.toggle('close-menu');
        navBar.classList.toggle('open');
    }


    // hamburger.addEventListener('click', function(){
    //     navBar.classList.add('open')
    // });
    
    
    // remove.addEventListener('click', function(){
    //     navBar.classList.remove('open')
    // });
    
    window.onscroll = ()=>{
        navContainer.classList.toggle('sticky', this.window.scrollY > 0)
    
    }
    
};

toggleDown();


//THIS CODE IS CORRECT BUT THE TOGGLE OPEN CLASS HAS BEEN REMOVED

// document.body.addEventListener('click', function(event){
//     if(!navBar.contains(event.target) && event.target !== hamburger){
//         navBar.classList.remove('open');
//     }
// })


