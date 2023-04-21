upperCase.addEventListener("click", () => { 
    console.log("transforming to uppercase");
    inpText.value=inpText.value.toUpperCase();
});
lowerCase.addEventListener("click", function(){
    inpText.value=inpText.value.toLowerCase();
})
removeSpaces.addEventListener("click", function(){
    console.log("removing extra spaces");
    inpText.value=inpText.value.replace(/\s+/g,' ').trim();
})
removeLines.addEventListener("click", function(){
    console.log("removing extra new lines");
    inpText.value=inpText.value.replace(/\n+/g,'\n').trim();
})




inpText.addEventListener("input", function(){
    console.log("changed");
    // 
    charCount.innerText=inpText.value.length;
    wordCount.innerText=inpText.value.trim().split(" ").length;
})