 

function turn_to_upper_case( ){
    const textArea = document.getElementById("text-area")
    console.log("CALL 1")
    var text =  textArea.value
    console.log(typeof(text))
    if (typeof(text) != "string"){
        console.log("IT HAS TO BE TO UPPER CASE")
        return
    }
    
    textArea.value = text.toUpperCase()
       
}

function turn_to_lower_case( ){
    const textArea = document.getElementById("text-area")
    console.log("CALL 2")
    var text =  textArea.value
    if (typeof(text) != "string"){
        console.log("IT HAS TO BE TO UPPER CASE")
        return
    }
    textArea.value = text.toLowerCase()
       
}

function capitalizeEachWord( ) {
    const textArea = document.getElementById("text-area")
    // Step 1: Split the string into an array of words
    var words = textArea.value.split(' ');

    // Step 2: Capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Step 3: Join the words back into a string
    var capitalizedString = words.join(' ');

    textArea.value = capitalizedString.toLowerCase()
}

function caesarCipher(  shift) {
    var result = "";
    const textArea = document.getElementById("text-area")
    for (var i = 0; i < textArea.value.length; i++) {
        console.log("moving letter",textArea.value[i])
        var charCode = textArea.value.charCodeAt(i);

        // Check if the character is a letter
        if (/[a-zA-Z]/.test(textArea.value[i])) {
            // Determine the case (uppercase or lowercase)
            var isUpperCase = textArea.value[i] === textArea.value[i].toUpperCase();

            // Apply the Caesar cipher shift
            charCode = (charCode - (isUpperCase ? 65 : 97) + shift) % 26 + (isUpperCase ? 65 : 97);

            // Handle negative shifts
            if (charCode < (isUpperCase ? 65 : 97)) {
                charCode += 26;
            }
        }

        result += String.fromCharCode(charCode);
    }

    textArea.value = result.toLowerCase()
}