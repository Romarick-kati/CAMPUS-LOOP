const container = document.querySelector('.container')
const registerBtn = document.querySelector('.register-btn')
const loginBtn = document.querySelector('.login-btn')
registerBtn.addEventListener('click',() =>{
    container.classList.add('active')
});
loginBtn.addEventListener('click',() =>{
    container.classList.remove('active')
});
<div className="login-agree">
                        <input type="checkbox" name='' id=''/>
                        <p>By continuing, i agree to all terms of use and privacy policy.</p>
                    </div>