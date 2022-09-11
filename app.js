const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.navlinks');
const testimonyBnt = document.querySelectorAll('.testimony-btn');
const testimony = [...document.querySelectorAll('.testimony')];
const form = document.querySelector('form')

//nav functionality

openBtn.addEventListener('click' , ()=>{
    nav.style.display = 'block';
    
    openBtn.style.display = 'none';
    closeBtn.style.display ='block';
    document.body.style.overflow = 'hidden'
});

closeBtn.addEventListener('click', ()=>{
    nav.style.display = '';
    openBtn.style.display ='block';
    closeBtn.style.display = '';
    document.body.style.overflow = ''
});



const active = document.querySelector('.active');

const highlight =()=>{
    testimonyBnt.forEach((item)=>{
        item.classList.remove('active')
    })
   
}
    // testimonial functionality
testimonyBnt.forEach((btn)=>{
      
     let  activeButton = document.querySelector('button.active')

        btn.addEventListener('click', (e)=>{
           highlight()
             e.currentTarget.classList.add('active')
          
           

        const filtered = testimony.filter((item)=>{
            if(item.dataset.id === e.currentTarget.dataset.id){
                return item
            }

            else return
         })

    
         testimony.forEach((item)=>{
            item.classList.remove('active')
          
         })

        filtered[0].classList.add('active')
            
        })
       
     

});

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const input = form.querySelector('input')
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(input.value=== ''){
       
        setErr(form, "Can't be blank")
    }

    else if (!input.value.match(validRegex)){
        setErr(form, "Please enter a valid Email")
    }

    else {
        form.innerHTML = `<h4>We've received your response!!</h4>`
    }

    
});

const setErr=(form, message)=>{
    form.lastElementChild.innerText = message
    setTimeout(()=>{
        form.lastElementChild.innerText = ''
    }, 2000)
}

