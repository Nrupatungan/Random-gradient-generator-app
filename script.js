const card = document.querySelector("#card");
const generate_btn = document.querySelector("#gen-btn");
const input = document.querySelector("#my-input");
const copy_btn = document.querySelector("#copy-btn");
const icon = document.querySelector(".fa-solid");

window.addEventListener('load', () => {
    setting_bg();
});

generate_btn.addEventListener('click', () => {
    setting_bg();

    // Create an Alert message to notify generation of gradient
    show_alert('Gradient generated Successfully!', 'primary', 'after')
});

copy_btn.addEventListener('click', () => {
     // Select the text field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(input.value);

    // Change Clipboard icon to check icon
    icon.classList.replace("fa-clipboard", "fa-check");

    // Create an Alert message to notify copying of input text
    show_alert('Copied to Clipboard Successfully!', 'info', 'before')

    setTimeout(() => {
        icon.classList.replace("fa-check", "fa-clipboard")
    },1000)

});

let random_generator = (num) => {
    return Math.floor(Math.random() * num);
}

let gradient_fn = () => {
    return `linear-gradient(${random_generator(360)}deg, rgb(${random_generator(255)}, ${random_generator(255)}, ${random_generator(255)}), rgb(${random_generator(255)}, ${random_generator(255)}, ${random_generator(255)}), rgb(${random_generator(255)}, ${random_generator(255)}, ${random_generator(255)}))`;
}

let setting_bg = () => {
    let gradient_val = gradient_fn();
    card.style.background = gradient_val;
    input.value = gradient_val;
};

let show_alert = (message, className, position) => {
    const div = document.createElement('div')
    div.className = `alert w-75 fs-6 fw-bold mx-auto text-start alert-${className} bg-${className}-subtle border-2 border-${className}`
    div.role = 'alert';
    div.appendChild(document.createTextNode(message))

    if(position === 'before'){
        document.querySelector('#input-grp').before(div)
    }else{
        generate_btn.after(div)
    }

    // Disable all buttons till alert is cleared
    generate_btn.disabled = true;
    copy_btn.disabled = true;

    // set time interval to make the alert disappear
    setTimeout(() => {
        document.querySelector('.alert').remove()
        generate_btn.disabled = false;
        copy_btn.disabled = false;
    }, 1000)
};