let textbox = document.querySelector("#textbox");

textbox.addEventListener('input',(event)=>{
    
    // console.log(event.target.value);
    let text = event.target.value;

    let char = document.querySelector("#char");
    char.innerHTML = text.length;

    let word = document.querySelector("#word");

     text =  text.trim();

    let array = text.split(" ");

    let newarr = array.filter((ar)=>{
        return ar != " ";
    })
    
    word.innerHTML = newarr.length;
    
    
})
