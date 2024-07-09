const detectDeviceType = () => 
    /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop';

const diffuculties = ['Easy', 'Normal', 'Hard', 'Psycho']
const maps = ['Old school', 'Wormbox', 'Hallway']
const teleports = ['Enabled', 'Disabled']
const crash = ['Death', 'Cut']
const controls = [ 'Swipe', 'Buttons', 'Keyboard (arrows)', 'Keyboard (WASD)', 'Numpad (8462)']
const snakeSkins = [
    {odd: "#DCD8DC", even: "#E62227"},
    {odd: "#F2AC38", even: "#E62227"},
    {odd: "#F2AC38", even: "#F2AC38"},
    {odd: "#F37670", even: "#F37670"},
    {odd: "#DCD8DC", even: "#DCD8DC"}
]

let possibleSettings = {
    difficulties: diffuculties,
    maps: maps,
    teleports: teleports,
    crash: crash,
    controls: [],
    snakeSkins: snakeSkins
}

window.addEventListener('DOMContentLoaded', ()=>{
    if(detectDeviceType() == "Desktop"){
        possibleSettings.controls.push(controls[1])
        possibleSettings.controls.push(controls[2])
        possibleSettings.controls.push(controls[3])
        possibleSettings.controls.push(controls[4])
    }else if(detectDeviceType() == "Mobile"){
        possibleSettings.controls.push(controls[0])
        possibleSettings.controls.push(controls[1])
    }
})

// --------------------------------------------------------------------------------------------------------------------

let preferences = {}

window.addEventListener('DOMContentLoaded', ()=>{

    preferences = {
        difficulty: 0,
        map: 0,
        teleport: 0,
        crash: 0,
        control: 0,
        snakeSkin: 0
    }

    const settings_switcher = document.querySelectorAll('.settings-switcher')
    const settings_value = document.querySelectorAll('.settings-value')

    settings_value[0].innerHTML = possibleSettings.difficulties[preferences.difficulty]
    settings_value[1].innerHTML = possibleSettings.maps[preferences.map]
    settings_value[2].innerHTML = possibleSettings.teleports[preferences.teleport]
    if(preferences.crash == 0){
        settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_death()'>ⓘ</span>`
    }else if(preferences.crash == 1){
        settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_cut()'>ⓘ</span>`
    }
    settings_value[4].innerHTML = possibleSettings.controls[preferences.control]
    for (let i = 0; i < document.querySelectorAll('.skin_odd').length; i++) {
        document.querySelectorAll('.skin_odd')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].odd 
    }
    for (let i = 0; i < document.querySelectorAll('.skin_even').length; i++) {
        document.querySelectorAll('.skin_even')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].even
    }


    settings_switcher[0].addEventListener('click', ()=>{
        if(preferences.difficulty > 0){
            preferences.difficulty--
            settings_value[0].innerHTML = possibleSettings.difficulties[preferences.difficulty]
        }else{
            preferences.difficulty = possibleSettings.difficulties.length - 1
            settings_value[0].innerHTML = possibleSettings.difficulties[preferences.difficulty]
        }
    })
    settings_switcher[1].addEventListener('click', ()=>{
        if(preferences.difficulty < possibleSettings.difficulties.length - 1){
            preferences.difficulty++
            settings_value[0].innerHTML = possibleSettings.difficulties[preferences.difficulty]
        }else{
            preferences.difficulty = 0
            settings_value[0].innerHTML = possibleSettings.difficulties[preferences.difficulty]
        }
    })



    settings_switcher[2].addEventListener('click', ()=>{
        if(preferences.map > 0){
            preferences.map--
            settings_value[1].innerHTML = possibleSettings.maps[preferences.map]
        }else{
            preferences.map = possibleSettings.maps.length - 1
            settings_value[1].innerHTML = possibleSettings.maps[preferences.map]
        }
    })
    settings_switcher[3].addEventListener('click', ()=>{
        if(preferences.map < possibleSettings.maps.length - 1){
            preferences.map++
            settings_value[1].innerHTML = possibleSettings.maps[preferences.map]
        }else{
            preferences.map = 0
            settings_value[1].innerHTML = possibleSettings.maps[preferences.map]
        }
    })



    settings_switcher[4].addEventListener('click', ()=>{
        if(preferences.teleport > 0){
            preferences.teleport--
            settings_value[2].innerHTML = possibleSettings.teleports[preferences.teleport]
        }else{
            preferences.teleport = possibleSettings.teleports.length - 1
            settings_value[2].innerHTML = possibleSettings.teleports[preferences.teleport]
        }
    })
    settings_switcher[5].addEventListener('click', ()=>{
        if(preferences.teleport < possibleSettings.teleports.length - 1){
            preferences.teleport++
            settings_value[2].innerHTML = possibleSettings.teleports[preferences.teleport]
        }else{
            preferences.teleport = 0
            settings_value[2].innerHTML = possibleSettings.teleports[preferences.teleport]
        }
    })



    settings_switcher[6].addEventListener('click', ()=>{
        if(preferences.crash > 0){
            preferences.crash--
            console.log(preferences.crash)
            settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_death()'>ⓘ</span>`
        }else{
            preferences.crash = possibleSettings.crash.length - 1
            settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_cut()'>ⓘ</span>`
        }
        console.log(preferences.crash)
    })
    settings_switcher[7].addEventListener('click', ()=>{
        if(preferences.crash < possibleSettings.crash.length - 1){
            preferences.crash++
            settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_cut()'>ⓘ</span>`
        }else{
            preferences.crash = 0
            settings_value[3].innerHTML = possibleSettings.crash[preferences.crash] + `<span class="info color-blue pointer" onclick='toast_death()'>ⓘ</span>`
        }
    })



    settings_switcher[8].addEventListener('click', ()=>{
        if(preferences.control > 0){
            preferences.control--
            settings_value[4].innerHTML = possibleSettings.controls[preferences.control]
        }else{
            preferences.control = possibleSettings.controls.length - 1
            settings_value[4].innerHTML = possibleSettings.controls[preferences.control]
        }
    })
    settings_switcher[9].addEventListener('click', ()=>{
        if(preferences.control < possibleSettings.controls.length - 1){
            preferences.control++
            settings_value[4].innerHTML = possibleSettings.controls[preferences.control]
        }else{
            preferences.control = 0
            settings_value[4].innerHTML = possibleSettings.controls[preferences.control]
        }
    })



    settings_switcher[10].addEventListener('click', ()=>{
        if(preferences.snakeSkin > 0){
            preferences.snakeSkin--
            for (let i = 0; i < document.querySelectorAll('.skin_odd').length; i++) {
                document.querySelectorAll('.skin_odd')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].odd 
            }
            for (let i = 0; i < document.querySelectorAll('.skin_even').length; i++) {
                document.querySelectorAll('.skin_even')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].even
            }
        }else{
            preferences.snakeSkin = possibleSettings.snakeSkins.length - 1
            for (let i = 0; i < document.querySelectorAll('.skin_odd').length; i++) {
                document.querySelectorAll('.skin_odd')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].odd 
            }
            for (let i = 0; i < document.querySelectorAll('.skin_even').length; i++) {
                document.querySelectorAll('.skin_even')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].even
            }
        }
    })
    settings_switcher[11].addEventListener('click', ()=>{
        if(preferences.snakeSkin < possibleSettings.snakeSkins.length - 1){
            preferences.snakeSkin++
            for (let i = 0; i < document.querySelectorAll('.skin_odd').length; i++) {
                document.querySelectorAll('.skin_odd')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].odd 
            }
            for (let i = 0; i < document.querySelectorAll('.skin_even').length; i++) {
                document.querySelectorAll('.skin_even')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].even
            }
        }else{
            preferences.snakeSkin = 0
            for (let i = 0; i < document.querySelectorAll('.skin_odd').length; i++) {
                document.querySelectorAll('.skin_odd')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].odd 
            }
            for (let i = 0; i < document.querySelectorAll('.skin_even').length; i++) {
                document.querySelectorAll('.skin_even')[i].style.color = possibleSettings.snakeSkins[preferences.snakeSkin].even
            }
        }
    })
})

function toast_death(){
    toast("Crashing mode: Death", "Your snake is instantly dies by crashing into itself or walls", 0, 5)
}
function toast_cut(){
    toast('Crashing mode: Cut', "Your snake is cut off when it crashes into itself. You have 3 HP. Crashing into walls kills you instantly", 0, 7)
}

