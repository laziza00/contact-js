// input
let  formOne = document.querySelector('#formOne');
let firstNameInput = document.querySelector('#exampleInputName1');
let lastNameInput = document.querySelector('#exampleInputFam1');
let numberNameInput = document.querySelector('#exampleInputNumber1');
let selectOne = document.querySelector('#selectOne')
let contactItem = document.querySelector('#contactitem')

// output
let firstNameOutput = document.querySelector('#name');
let lastNameOutput = document.querySelector('#last')
let numberNameOutput = document.querySelector('#number');
let relNameOutput = document.querySelector('#relative')


// tab fane
let relative = document.querySelector('#pills-home')
let friend = document.querySelector('#pills-profile')
let work = document.querySelector('#pills-contact')

// add function


formOne.addEventListener('submit', (e)=>{
    e.preventDefault();

let = firstNameval = firstNameInput.value;
let = lastNameval = lastNameInput.value;
let = numberNameval = numberNameInput.value;
let = selectNameval = selectOne.value;


if (selectNameval==1) {
    let box = document.createElement('div');

        box.innerHTML = `        
        <div class="contact__item">
        <div style="display: flex;">
        <p class="contact__name" id="name">${firstNameval}</p>
        <p class="contact__name" id="last">${lastNameval}</p>
        </div>

        <a class="contact__number" id="number" href="tel:909484704">${numberNameval}</a>
        <p class="contact__rel" id="relative">family</p>
        </div>`
        contactItem.appendChild(box);
        relative.appendChild(contactItem)

            firstNameInput.value = "";
            lastNameInput.value= "";
            numberNameInput.value= "";
            selectOne.value = "";
}
if (selectNameval==2) {
    let box = document.createElement('div');

        box.innerHTML = `        
        <div class="contact__item">
        <div style="display: flex;">
        <p class="contact__name" id="name">${firstNameval}</p>
        <p class="contact__name" id="last">${lastNameval}</p>
        </div>

        <a class="contact__number" id="number" href="tel:909484704">${numberNameval}</a>
        <p class="contact__rel" id="relative">Friend</p>
        </div>`
        contactItem.appendChild(box);
        friend.appendChild(contactItem)

            firstNameInput.value = "";
            lastNameInput.value= "";
            numberNameInput.value= "";
            selectOne.value = "";
        }
if (selectNameval==3) {
            let box = document.createElement('div');
        
                box.innerHTML = `        
                <div class="contact__item">
                <div style="display: flex;">
                <p class="contact__name" id="name">${firstNameval}</p>
                <p class="contact__name" id="last">${lastNameval}</p>
                </div>
        
                <a class="contact__number" id="number" href="tel:909484704">${numberNameval}</a>
                <p class="contact__rel" id="relative">Friend</p>
                </div>`
                contactItem.appendChild(box);
                work.appendChild(contactItem)
        
                    firstNameInput.value = "";
                    lastNameInput.value= "";
                    numberNameInput.value= "";
                    selectOne.value = "";
                }
})