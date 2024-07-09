// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
// ░░░████████╗░█████╗░░█████╗░░██████╗████████╗░░░░░░░░██╗░██████╗░░░
// ░░░╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝░░░░░░░░██║██╔════╝░░░
// ░░░░░░██║░░░██║░░██║███████║╚█████╗░░░░██║░░░░░░░░░░░██║╚█████╗░░░░
// ░░░░░░██║░░░██║░░██║██╔══██║░╚═══██╗░░░██║░░░░░░██╗░░██║░╚═══██╗░░░
// ░░░░░░██║░░░╚█████╔╝██║░░██║██████╔╝░░░██║░░░██╗╚█████╔╝██████╔╝░░░
// ░░░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═════╝░░░░
// ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░



//                                                    HOW TO USE TOAST.JS
//
// 1) place the "toast.js" file in the same directory where you have the main HTML file located
// --------------------------------------------------------------------------------------------------------------------------------------------
// 2) Declare the Toast JavaScript file in your HTML document BEFORE the main one this way: 
// 
//    <script src="toast/toast.js"></script>
//    <script src="toast/(your_main_javascript_file).js"></script>
// 
// --------------------------------------------------------------------------------------------------------------------------------------------
// 3) If you want to call toast, then use toast(title, content, type, duration) wherever you want. Example:
// 
//    (HTML)
//    <button onclick="toast('Success', 'You pressed the button', 2, 3)">CLICK ME</button>
// 
//    (JavaScript)
//    window.addEventListener("load", ()=>{
//        toast('Hello!', 'Visit the FAQ section', 0, 5)
//    }
// 
// 
// 
// --------------------------------------------------------------------------------------------------------------------------------------------
// 
//
// 
//                                                    TOAST.JS VOCABULARY
//   ---------------------------------------------------------------------------------------------------------------------
//   | title      |   The title of the toast                    |   'Warning!' or 'Connected' or whatever you like (use  |
//   |            |                                             |    no more than 10 characters)                         |
//   ---------------------------------------------------------------------------------------------------------------------
//   | content    |   The content of the toast                  |   'Network Error' or 'Website loaded successfully' or  | 
//   |            |                                             |    whatever you like (use no more than 32 characters)  |
//   ---------------------------------------------------------------------------------------------------------------------
//   | type       |   The picture that accompanies the toast    |    0 for clue                                          |
//   |            |                                             |    1 for question                                      |
//   |            |                                             |    2 for success                                       |
//   |            |                                             |    3 for warning                                       |
//   ---------------------------------------------------------------------------------------------------------------------
//   | duration   |   The duration of the toast in seconds      |   0.5, 1, 2, 3, 3.5, 5, 10.2, 30, 60, 120 and so on    |
//   ---------------------------------------------------------------------------------------------------------------------



//                                                      VECTORS (OPTIONAL)             
// --------------------------------------------------------------------------------------------------------------------------------------------
const imageClue = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg height="50px" width="50px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-148.48 -148.48 808.96 808.96" xml:space="preserve" fill="#000000"> <g id="SVGRepo_bgCarrier" stroke-width="0"> <rect x="-148.48" y="-148.48" width="808.96" height="808.96" rx="404.48" fill="#fcfe71" strokewidth="0"/> </g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#8a530d;} </style> <g> <path class="st0" d="M428.215,172.215c0.008-47.522-19.292-90.648-50.445-121.777C346.649,19.293,303.515-0.007,256,0 c-47.514-0.007-90.648,19.293-121.769,50.446c-31.153,31.121-50.454,74.247-50.446,121.769 c-0.008,31.786,8.673,61.634,23.754,87.181h-0.008c0.016,0.032,0.048,0.064,0.064,0.096c0.04,0.064,0.065,0.128,0.104,0.192 l0.016-0.007c10.98,19.436,26.7,34.724,38.945,48.835c6.167,7.056,11.452,13.751,15,20.014c3.572,6.295,5.382,11.908,5.502,17.53 v95.421c0.008,29.44,23.858,53.296,53.305,53.304h7.64C233.312,504.96,243.787,512,256,512c12.213,0,22.688-7.04,27.894-17.218 h7.64c29.447-0.008,53.296-23.865,53.304-53.304v-95.414v-0.008c0.12-5.622,1.93-11.236,5.502-17.53 c5.302-9.419,14.592-19.709,24.762-30.914c10.074-11.179,20.982-23.352,29.191-37.936l0.008,0.007 c0.032-0.048,0.056-0.111,0.088-0.16c0.024-0.048,0.056-0.08,0.08-0.128h-0.008C419.542,233.849,428.223,204.001,428.215,172.215z M311.828,461.771c-5.23,5.214-12.325,8.401-20.294,8.409h-71.068c-7.969-0.008-15.064-3.195-20.294-8.409 c-5.213-5.23-8.401-12.333-8.409-20.294v-5.326l120.128,25.54C311.868,461.715,311.852,461.747,311.828,461.771z M320.237,441.477 c0,1.754-0.216,3.452-0.513,5.11l-127.96-27.205v-33.524l128.473,27.316V441.477z M320.237,396.397L191.764,369.08V358.1h128.473 V396.397z M383.143,247.142l-0.104,0.169l-0.064,0.112c-8.505,15.408-22.92,29.848-36.159,44.904 c-6.607,7.576-12.918,15.361-17.867,24.034c-3.003,5.286-5.39,11.036-6.935,17.13H189.986c-1.546-6.102-3.932-11.844-6.944-17.13 c-7.432-12.982-17.867-24.081-27.893-35.246c-10.059-11.1-19.733-22.159-26.124-33.692l-0.08-0.128l-0.089-0.152 c-13.005-21.959-20.462-47.514-20.47-74.928c0.008-40.803,16.506-77.626,43.238-104.374C178.374,41.1,215.197,24.61,256,24.602 C296.804,24.61,333.627,41.1,360.375,67.84c26.732,26.748,43.23,63.571,43.238,104.374 C403.605,199.628,396.149,225.183,383.143,247.142z"/> </g> </g> </svg>`
// --------------------------------------------------------------------------------------------------------------------------------------------
const imageQuestion = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg width="50px" height="50px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" stroke-width="0"> <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#71bcd6" strokewidth="0"/> </g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <path d="M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>`
// --------------------------------------------------------------------------------------------------------------------------------------------
const imageSuccess = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#90EE90"> <g id="SVGRepo_bgCarrier" stroke-width="0"/> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <path fill="#72da72" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"/> </g> </svg>`
// --------------------------------------------------------------------------------------------------------------------------------------------
const imageWarning = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"> <rect x="0" y="0" width="24.00" height="24.00" rx="12" fill="#e85454" strokewidth="0"/> </g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> <g id="SVGRepo_iconCarrier"> <g id="Warning / Warning"> <path id="Vector" d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> </svg>`
// --------------------------------------------------------------------------------------------------------------------------------------------



const images = [imageClue, imageQuestion, imageSuccess, imageWarning]; 
// - This is where you can add vectors. To do this, combine the code from the .svg file into 
//   one line and paste this line into the variable through such quotes: ``
// - After that, add a new variable to the array 'images'
                                                                       


// function that makes  toasts. DON'T DO ANYTHING WITH THIS FUNCTION ↓
function toast(title, message, type, duration) {
    const toast = document.createElement('div');
    stylesToast(toast)

    const image = document.createElement('div');
    stylesToastImage(image)
    image.innerHTML = images[type];
    toast.appendChild(image);

    const toastContent = document.createElement('div');
    stylesToastContent(toastContent)

    const toastTitle = document.createElement('div');
    stylesToastTitle(toastTitle)
    toastTitle.innerHTML = characterLimit(title, 20);
    toastContent.appendChild(toastTitle);

    const toastMessage = document.createElement('div');
    stylesToastMessage(toastMessage)
    toastMessage.innerHTML = characterLimit(message, 150) + ' <br> <div style="margin-top: .7vh;"><strong>(click to close)</strong></div>';
    toastContent.appendChild(toastMessage);

    toast.appendChild(toastContent);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(0%)';
    }, 0);

    setTimeout(() => {
        removeToast();
    }, duration * 1000);

    toast.addEventListener('click', ()=>{
        removeToast()
    })

    function removeToast(){
        toast.style.transform = 'translateX(calc(100% + 30px))';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 1000);
    }
}



// function that limits the length of output data. If you want to rewrite toast.js to suit 
// your needs, you can remove or comment out this function ↓
function characterLimit(input, limit){
    let split_input = input.split('')
    let output = ''

    for (let i = 0; i < limit; i++) {
        if (i < split_input.length){
            output = output + split_input[i]  
        }
    }
    return output
}

//                                                      TOAST COMPONENT STYLES
// --------------------------------------------------------------------------------------------------------------------------------------------
function stylesToast(element){
    element.style.position = 'absolute';
    element.style.top = '20px';
    element.style.right = '30px';
    element.style.transform = 'translateX(calc(100% + 30px))';
    element.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35)';
    element.style.userSelect = 'none';
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.padding = '20px 35px 20px 25px';
    element.style.width = '20vw';
    // element.style.height = '50px';
    element.style.backgroundColor = '#222326';
    element.style.borderRadius = '0.9em';
    element.style.boxShadow = '0px 0px 12px -5px rgba(93, 93, 93, 0.8)';
    element.style.fontFamily = 'Arial, Helvetica, sans-serif';
    element.style.color = '#fff';
}

function stylesToastImage(element){
    element.style.width = '50px';
    element.style.height = '50px';
    element.style.position = 'relative';
}

function stylesToastContent(element){
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.marginLeft = '15px';
}

function stylesToastTitle(element){
    element.style.fontSize = "1.4em";
    element.style.fontWeight = 'bold';
}

function stylesToastMessage(element){
    element.style.marginTop = '5px';
}

// Toast.js v0.1.3 by MaxLakerCoding