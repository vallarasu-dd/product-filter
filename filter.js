const button=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const search=document.querySelector('#search');



search.addEventListener('keyup',(e)=>{
        store=e.target.value.toLowerCase().trim();
        
        boxes.forEach(box=>{
            const data=box.dataset.find;

            if(data.includes(store))
            {
                box.style.display='block';
            }
            else{
                box.style.display='none';
            }
        });
       
        button.forEach((btn)=>{
            btn.classList.remove('btn-active');
          });
          button[0].classList.add('btn-active');
});


button.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);

        const btnfilter=e.target.dataset.filter;

        boxes.forEach((box=>{
            if(btnfilter=='All')
            {
                box.style.display='block';
              
            }
            else{
                const btnfind=box.dataset.find;  
               
                    if(btnfilter==btnfind){
                        box.style.display="block";
                    } 
                    else{
                        box.style.display="none";
                    }
            }
        }));


    });


});


function setActiveBtn(e){

    button.forEach((btn)=>{
        btn.classList.remove("btn-active");
    });

        e.target.classList.add("btn-active");
    
}