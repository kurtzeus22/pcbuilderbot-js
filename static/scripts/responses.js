function getBotResponse(input) {
    //custom
    if (input == "hello") {
        return "Hi, I'm here for you to pick your first PC! Start with 'I want to buy a PC'";
    }
    else if (input == "hi") {
        return "Hello, I'm here for you to pick your first PC! Start with 'I want to buy a PC'";
    }
    else if (input == "greetings") {
        return "Greetings as well! I'm here for you to pick your first PC! Start with 'I want to buy a PC'";
    }
    else if (input == "i want to buy a pc") {
        return "Sure, do you need a fully-built one, or will you build your own?";
    }

    else if (input == "i want to build a pc") {
        return "Okay, so what is your budget in building a PC? <br>Small Budget Build = ~PHP 20,000 <br>Mid Budget Build = PHP 20,000 - 50,000 <br>High Budget Build = PHP 50,000+  <br>(Answer with Small budget build, Mid budget build, High budget build)";
    }
    else if (input == "i want to build my own") {
        return "Okay, so what is your budget in building a PC? <br>Small Budget Build = ~PHP 20,000 <br>Mid Budget Build = PHP 20,000 - 50,000 <br>High Budget Build = PHP 50,000+  <br>(Answer with Small budget build, Mid budget build, High budget build)";
    }
    else if (input == "i want to build my own PC") {
        return "Okay, so what is your budget in building a PC? <br>Small Budget Build = ~PHP 20,000 <br>Mid Budget Build = PHP 20,000 - 50,000 <br>High Budget Build = PHP 50,000+  <br>(Answer with Small budget build, Mid budget build, High budget build)";
    }

    else if (input == "i will use a fully-built one") {
        return "Alright, what is your budget in this build? (Answer with Budget end, Middle end, High end)";
    }
    else if (input == "i will use a fully built one") {
        return "Alright, what is your budget in this build? (Answer with Budget end, Middle end, High end)";
    }
    else if (input == "fully-built one") {
        return "Alright, what is your budget in this build? (Answer with Budget end, Middle end, High end)";
    }
    else if (input == "budget end") {
        return "Here are my recommendations, take a look: <a href = 'www.link.com/lowend'>Low-End</a>";
    }
    else if (input == "middle end") {
        return "Here are my recommendations, take a look: <a href = 'www.link.com/midend'>Mid-End</a>";
    }
    else if (input == "high end") {
        return "Here are my recommendations, take a look: <a href = 'www.link.com/highend'>High-End</a>";
    }

    else {
        return "Try asking something else!";
    }
}