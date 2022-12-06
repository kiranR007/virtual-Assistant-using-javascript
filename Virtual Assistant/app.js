const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good Morning Sir");
    }

    else if (hr >= 12 && hr <= 17) {
        speak("Good Afternoon Sir");
    }

    else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    /*speak("Activating");
    wishMe();
    speak("how can i help you")*/
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}


btn.addEventListener('click', () => {
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Sir";
        speech.text = finalText;
    }

    else if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    else if(message.includes('fine') || message.includes('good') || message.includes('awesome')){
        const finalText = "Good to hear that";
        speech.text = finalText;
    }
    else if (message.includes('name')) {
        const finalText = "My name is Alexa";
        speech.text = finalText;
    }
    else if (message.includes('who are you')) {
        const finalText = "I am your assistant";
        speech.text = finalText;
    }
    else if(message.includes('doing')){
        const finalText ="I am waiting for your commands";
        speech.text = finalText
    }

    else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if (message.includes('youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
    else if(message.includes('email')){
        window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox');
        const finalText = "opening Email";
        speech.text =  finalText;
    }
    else if(message.includes('whatsapp')){
        window,open('https://web.whatsapp.com/');
        const finalText = "opening whatsapp";
        speech.text = finalText;

    }
    else if (message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if (message.includes('wikipedia') || message.includes('Wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speech.text = finalText;
    }
    else if(message.includes('tell me')){
        const finalText = "Wasca is water security and climate adoptation in rural india is an Indo-German bilateral project";
        speech.text = finalText;
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" })
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if (message.includes('vaske') || message.includes('project') || message.includes('giz')) {
        window.open("https://wasca.in", "_blank");
        const finalText = "Opening Wasca";
        speech.text = finalText;
    }
    else if(message.includes('knowledge base')){
        window.open("https://wasca.in/knowledge-products/","_blank");
        const finalText ="opening Knowledge base";
        speech.text=finalText;
    }
    else if(message.includes('exit')){
        window.stop()
    }
    else if(message.includes('search for')){
        let input = message.split("");
        input.splice(0,11);
        input.pop();
        input = input.join("").split(" ").join("+");
        window.open(`https://www.google.com/search?q=${input}`);
        const finalText = 'opening' + input ;
        speech.text = finalText;

    }
    else if(message.includes('play')){
        let input = message.split("");
        input.splice(0,11);
        input.pop();
        input = input.join("").split(" ").join("+");
        window.open(`https://www.youtube.com/search?q=${input}`);
        const finalText = 'opening' + input;
        speech.text = finalText;

    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 2;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
