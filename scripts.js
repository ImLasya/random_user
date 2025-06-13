const details=[
    {
        img:'https://randomuser.me/api/portraits/men/75.jpg',
        name:'john smith',
        email:'johnsmith@gmail.com',
        age:60,
        street:'maalakpet',
        phone:'1234567890',
        password:'asdfghjkl'
    },
    {
        img:'https://randomuser.me/api/portraits/men/74.jpg',
        name:'Benito Uribe',
        email:'benito.uribe@example.com',
        age:60,
        street:'2058 Avenida Baja California Sur',
        phone:'(648) 591 5832',
        password:'unbelievable' 
    },
    {
        img:'https://randomuser.me/api/portraits/men/71.jpg',
        name:'Sebastian Poulsen',
        email:'sebastian.poulsen@example.com',
        age:35,
        street:'1252 Vestergårdsvej',
        phone:'52059424',
        password:'payday'    
    }
];

let index=0;
const btn=document.querySelector('.btn');
const title=document.querySelector('.change');
const d=document.querySelector('.user-img');
const n=document.querySelector('.user-value');
const icons=document.querySelectorAll('.icon');
const ni=document.getElementById('name');
function renderUser(index) {
    d.src=details[index].img;
    n.textContent=details[index].name;
    title.textContent = 'name'; 
    icons.forEach((icon) => icon.classList.remove('active')); 
    ni.classList.add('active');
}
btn.addEventListener('click', () => {
    index = Math.floor(Math.random() * details.length); // Random index
    renderUser(index); // Re-render the user
  });
icons.forEach((icon) => {
    icon.addEventListener('click',function(){
        icons.forEach((icon)=>icon.classList.remove('active'));
        this.classList.add('active');
        const datalabel=this.dataset.label;
        title.textContent=datalabel;
        n.textContent=details[index][datalabel];
    })
});
window.addEventListener('DOMContentLoaded',function(){
    index = Math.floor(Math.random() * details.length); 
    renderUser(index);
});