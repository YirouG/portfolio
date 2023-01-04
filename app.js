const hamburgerButton= document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)

Email.init({
    apiKey: 'sMsYu4hooFIA74dIV',
  });

function sendEmail(){
    Email.send({
        Host : "smtp.outlook.com",
        Username : "yirou.guo@outlook.com",
        Password : ""
        To : 'yirou.guo@outlook.com',
        From : "you@isp.com",
        Subject : "Message from portfolio website",
        Body : ""
    }).then(
      message => alert(message)
    );
}