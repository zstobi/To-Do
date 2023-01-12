// Componente nav con login:

const navLogIn = `
    <nav class="nav-login">
        <a href="#" class="nes-badge is-splited">
            <span class="is-dark">To</span>
            <span class="is-success">Do</span>
        </a>
        <span class="nes-text is-disabled">by NES.css</span>
        <button type="button" class="nes-btn is-success">Info</button>
        <button type="button" class="nes-btn is-primary">Log In</button>
    </nav>
`;

// Componente nav con logout:

const navLogOut = `
<nav class="nav-logout">
    <a href="#" class="nes-badge is-splited">
        <span class="is-dark">To</span>
        <span class="is-success">Do</span>
    </a>
    <span class="nes-text is-disabled">by NES.css</span>
    <button type="button" class="nes-btn is-success">Info</button>
    <button type="button" class="nes-btn is-primary">Log Out</button>
</nav>
`;

// Componente textarea:

const textareaTask = `
<section class="text-task">
    <div class="text-div">
        <label for="textarea_field">Task here!</label>
        <textarea id="textarea_field" class="nes-textarea"></textarea>
    </div>
    <button type="button" class="nes-btn">Add Task</button>
</section>
`;

// Componente tasks list:

const tasksListed = `
    <div class="nes-container with-title is-centered">
        <p class="title">Tasks List</p>
        <div class="nes-container with-title is-centered">
            <p class="title">Priorities:</p>
        </div>
        <div class="nes-container with-title is-centered">
            <p class="title">Not so urgent:</p>
        </div>
        <div class="nes-container with-title is-centered">
            <p class="title">Done!</p>
        </div>
    </div>
`;

// Componente para task-priority:

const taskNew = `
    <div class="task">
        <p class="task-content"></p>
        <div class="btnKit-prior">    
            <button type="button" class="nes-btn is-error">Delete</button>
            <button type="button" class="nes-btn is-success">Done</button>
        </div>
    </div>
`;

// Componente para task-not-urgent:

const taskUNew = `
    <div class="task">
        <p class="task-content"></p>
        <div class="btnKit-notU">    
            <button type="button" class="nes-btn is-error">Delete</button>
            <button type="button" class="nes-btn is-warning">Priority</button>
        </div>
    </div>
`;

// Componente para task-done:

const taskDNew = `
    <div class="task">
        <p class="task-content"></p>
        <div class="btnKit-done">    
            <button type="button" class="nes-btn is-error">Delete</button>
        </div>
    </div>
`;

// here would finish this file if i could export and import this consts in the correct way.

// 

// consts for project:

const priors = document.querySelector('.priors');

const notU = document.querySelector('.notU');

const asDone = document.querySelector('.done');

const textarea = document.querySelector('.nes-textarea');

const addBtn = document.querySelector('.add');

let taskContentCopy = '';

// Function to add a task in priorities section:

function addPrior(){
    if (textarea.value != '' && (textarea.value).length>=8){
            
        // creating elements:

        let newPrior = document.createElement('div');
        priors.appendChild(newPrior);

        let tasked = document.createElement('p');
        newPrior.appendChild(tasked);

        let btnKit = document.createElement('div');
        newPrior.appendChild(btnKit);

        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');

        btnKit.appendChild(btn1);
        btnKit.appendChild(btn2);

        // adding classes:

        newPrior.classList.add('task');
        tasked.classList.add('task-content');
        btnKit.classList.add('btnKit');
        btn1.classList.add('nes-btn');
        btn1.classList.add('is-error');
        btn2.classList.add('nes-btn');
        btn2.classList.add('is-success');
        btn1.classList.add('task-btns');
        btn2.classList.add('task-btns');

        // btns text:

        btn1.innerHTML = `
        <i class="nes-icon close is-small"></i>
        `;
        btn2.textContent = 'Done';

        // task content will be:

        tasked.textContent = textarea.value;
        taskContentCopy = tasked.textContent;
        textarea.value = '';

        // buttons events:

        btn1.addEventListener('click',(e)=>{
            taskRemove(e,priors);
        });

        btn2.addEventListener('click',(e)=>{
            ready(e,priors);
        });
    };
};

// Function to add a task in not so urgent section:

function addNotU(){
    if (textarea.value != '' && (textarea.value).length>=8){
            
        // creating elements:

        let newPrior = document.createElement('div');
        notU.appendChild(newPrior);

        let tasked = document.createElement('p');
        newPrior.appendChild(tasked);

        let btnKit = document.createElement('div');
        newPrior.appendChild(btnKit);

        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');

        btnKit.appendChild(btn1);
        btnKit.appendChild(btn2);

        // adding classes:

        newPrior.classList.add('task');
        tasked.classList.add('task-content');
        btnKit.classList.add('btnKit');
        btn1.classList.add('nes-btn');
        btn1.classList.add('is-error');
        btn2.classList.add('nes-btn');
        btn2.classList.add('is-primary');

        // btns text:

        btn1.innerHTML = `
        <i class="nes-icon close is-small"></i>
        `;
        btn2.textContent = 'Priority';

        // task content will be:

        tasked.textContent = textarea.value;
        taskContentCopy = tasked.textContent;
        textarea.value = '';

        // buttons events:

        btn1.addEventListener('click',(e)=>{
            taskRemove(e,notU);
        });

        btn2.addEventListener('click',(e)=>{
            ready2(e,notU);
        });
    };
};

// Function to create the modal when adding a new task:

function modalTask(){
    if (textarea.value != '' && (textarea.value).length>=8){
        
        textarea.classList.remove('is-error');

        const modal = document.createElement('div');
        const modalContent = document.createElement('div');

        document.body.appendChild(modal);
        modal.appendChild(modalContent);

        modal.classList.add('modal');
        modalContent.classList.add('modal-content');
        modalContent.classList.add('nes-container');
        modalContent.classList.add('is-rounded');
        modalContent.classList.add('is-dark');

        const cancel = document.createElement('button');
        const toPrior = document.createElement('button');
        const toNotU = document.createElement('button');

        cancel.classList.add('nes-btn');
        cancel.classList.add('is-error');
        toPrior.classList.add('is-primary');
        toPrior.classList.add('nes-btn');
        toNotU.classList.add('nes-btn');
        toNotU.classList.add('is-success');

        cancel.textContent = 'cancel';
        toPrior.textContent = 'priority';
        toNotU.textContent = 'not urgent';

        modalContent.appendChild(cancel);
        modalContent.appendChild(toPrior);
        modalContent.appendChild(toNotU);

        cancel.addEventListener('click',()=>{
            modal.remove();
        });

        toPrior.addEventListener('click',()=>{
            addPrior();
            modal.remove();
        });
        toNotU.addEventListener('click',()=>{
            addNotU();
            modal.remove();
        });
    } else {
        errorText();
        // atLeast8();
    };
};

// Function to add an error to textarea not correct validation:

function errorText(){
    textarea.classList.add('is-error');
    textarea.style.color = '#D3D3D3';
    textarea.value = 'At least 8 characters!';
    textarea.addEventListener('click',()=>{
        textarea.style.color = '#000';
        textarea.value = '';
        textarea.classList.remove('is-error');
    });
};

// Function to create a mini modal to remind the 8 char validation:

// function atLeast8(){
//     const modal = document.createElement('div');
//     const modalContent = document.createElement('div');

//     document.body.appendChild(modal);
//     modal.appendChild(modalContent);

//     modal.classList.add('modal');
//     modalContent.classList.add('modal-content');
//     modalContent.classList.add('nes-container');
//     modalContent.classList.add('is-rounded');

//     const cancel = document.createElement('button');
// };

// THE PREVIOUS FUNCTION WAS CANCELLED

// Event to add a task a new task:

addBtn.addEventListener('click',modalTask);

// Function to add a task to done section:

function doneSection(){
    // creating elements:

    let newPrior = document.createElement('div');
    asDone.appendChild(newPrior);

    let tasked = document.createElement('p');
    newPrior.appendChild(tasked);

    let btnKit = document.createElement('div');
    newPrior.appendChild(btnKit);

    let btn1 = document.createElement('button');

    btnKit.appendChild(btn1);

    // adding classes:

    newPrior.classList.add('task');
    tasked.classList.add('task-content');
    btnKit.classList.add('btnKitDone');
    btn1.classList.add('nes-btn');
    btn1.classList.add('is-error');

    // btns text:

    btn1.innerHTML = `
    <i class="nes-icon close is-small"></i>
    `;

    // task content will be:

    tasked.textContent = taskContentCopy;
    tasked.style.color = '#4aa52e';
    textarea.value = '';

    // buttons events:

    btn1.addEventListener('click',(e)=>{
        taskRemove(e,asDone);
    });
};

// Function to move a task from not so urgent to priorities:

function priorSection(){
    // creating elements:

    let newPrior = document.createElement('div');
    priors.appendChild(newPrior);

    let tasked = document.createElement('p');
    newPrior.appendChild(tasked);

    let btnKit = document.createElement('div');
    newPrior.appendChild(btnKit);

    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    btnKit.appendChild(btn1);
    btnKit.appendChild(btn2);

    // adding classes:

    newPrior.classList.add('task');
    tasked.classList.add('task-content');
    btnKit.classList.add('btnKit');
    btn1.classList.add('nes-btn');
    btn1.classList.add('is-error');
    btn2.classList.add('nes-btn');
    btn2.classList.add('is-success');
    btn1.classList.add('task-btns');
    btn2.classList.add('task-btns');

    // btns text:

    btn1.innerHTML = `
    <i class="nes-icon close is-small"></i>
    `;
    btn2.textContent = 'Done';

    // task content will be:

    tasked.textContent = taskContentCopy;
    taskContentCopy = tasked.textContent;
    textarea.value = '';

    // buttons events:

    btn1.addEventListener('click',(e)=>{
        taskRemove(e,priors);
    });

    btn2.addEventListener('click',(e)=>{
        ready(e,priors);
    });
};

// Function to move a task to done section:

function ready(e,container){
    let targetParent = e.target.parentElement; 
    let secondParent = targetParent.parentElement;
    container.removeChild(secondParent);

    doneSection();
};

// Function to move a task to priors section:

function ready2(e,container){
    let targetParent = e.target.parentElement; 
    let secondParent = targetParent.parentElement;
    container.removeChild(secondParent);

    priorSection();
};

// Function to remove a task:

function taskRemove(e,container){
    let targetParent = e.target.parentElement; 
    let secondParent = targetParent.parentElement;
    container.removeChild(secondParent);
};

// QUE FALTA?

// DETALLES DE DISENO:
// HACER EL RESPONSIVE
// IDEA - SACAR EL DISENO INSIDE TASK Y MODIFICAR TODO CON ESTILO LISTAS DE NES.

// FALTA APRENDER A CONECTAR CON BASE DE DATOS Y HACER UN LOG IN