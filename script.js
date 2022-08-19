const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header")
button = dropArea.querySelector("button")
input = dropArea.querySelector("input")
 
let file;

button.onclick = ()=>{
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
    dropArea.classList.add("active");
    showfile();
})





  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault()
    dropArea.classList.add("active");
    dragText.textContent = "Release To Upload File";
} )


 dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to  Upload File";
} )


 dropArea.addEventListener("drop", (event)=>{
    event.preventDefault()
    file = event.dataTransfer.files[0];
    showfile();
} )





function showfile(){
    let filetype = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png" ]
    if(validExtensions.includes(filetype)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgtag = `<img src="${fileURL}">`;
            dropArea.innerHTML = imgtag;
        }
        fileReader.readAsDataURL(file)
    }
    else{
        alert("This is not a image File");
        dropArea.classList.remove("active")
    }
} 