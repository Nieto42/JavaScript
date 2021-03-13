const btn = document.querySelector('.btn');
const img = document.querySelector('.img');

btn.addEventListener('click', (e) => {
    console.log(e);
    img.classList.toggle('show');
});

// ************************************
const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%" ;

    if (e.x > 500) {
        document.body.style.filter = 'blur(3px)';   
    }
    else  {
        document.body.style.filter = 'none';
    }
})
//*****************
document.querySelector('.inputEvent').addEventListener('input', (e) => {
    console.log(e.target.value);
    vertical.innerHTML = (e.target.value);
})

//// *************

const theme = document.querySelectorAll('.theme')
const dark = document.querySelector('.dark')
const yellow = document.querySelector('.yellow')
const salmon = document.querySelector('.salmon')

theme.forEach((item) => {
    item.addEventListener('click', (e) =>{
        console.log(e.target.classList[1])
        document.body.classList.remove('darktheme', 'salmontheme', 'yellowtheme')
        switch (e.target.classList[1]) {
            case 'dark':
                document.body.classList.add('darktheme');
                break;
            case 'salmon':
                    document.body.classList.add('salmontheme');
                    break;
            case 'yellow':
                document.body.classList.add('yellowtheme');
                break;
                default :
                null;
        }
    })
})