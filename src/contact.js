const contactForm = document.getElementById('contact_form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const contact_number = document.getElementById('phone');
const message = document.getElementById('message');

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const body = {
        service_id: 'service_1zrwhai',
        template_id: 'template_e3lf64m',
        user_id: 'tgL2NjRM8Mp837sUu',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message':message.value,
            'contact_number':contact_number.value
        }
    };

    sendEmail(body)
        swal({
            title: "Tu mensaje fue enviado",
            text: "Nos comunicaremos con vos",
            icon: "success",
        });
        
        
})

