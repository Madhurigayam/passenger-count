let count=0
function increment(){
    count=count+1
    document.getElementById("count-el").textContent=count
}
function save(){
    let countstr=" "+count+" - "
    document.getElementById("save-el").textContent+= countstr
    document.getElementById("count-el").textContent=0

}