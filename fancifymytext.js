function bigger() {
    document.getElementById("myText").style.fontSize = "24pt";
}

function fancify() {
    var textarea = document.getElementById("myText");
    if (document.getElementById("fancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "";
        textarea.style.textDecoration = "none";
    }
}

function moo() {
    var textarea = document.getElementById("myText");
    var text = textarea.value.toUpperCase();

    // Split text into sentences on periods, then append "-MOO" to the last word of each
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i];
        var words = sentence.split(" ");
        // Find the last non-empty word in the sentence
        var lastIndex = words.length - 1;
        while (lastIndex >= 0 && words[lastIndex].trim() === "") {
            lastIndex--;
        }
        if (lastIndex >= 0) {
            words[lastIndex] = words[lastIndex] + "-MOO";
        }
        sentences[i] = words.join(" ");
    }
    textarea.value = sentences.join(".");
}
