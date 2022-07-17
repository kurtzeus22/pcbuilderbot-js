function getBotResponse(input) {
    //custom
    if (input == "intel") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Intel Core i9-9900k = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=70>Link </a> <br><br>Intel Core i9-10920X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=71>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use intel") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Intel Core i9-9900k = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=70>Link </a> <br><br>Intel Core i9-10920X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=71>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an intel cpu") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Intel Core i9-9900k = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=70>Link </a> <br><br>Intel Core i9-10920X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=71>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }

    else if (input == "amd") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Ryzen 9 3590X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=72>Link </a> <br><br>Ryzen Threadripper 2950X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=73>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use amd") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Ryzen 9 3590X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=72>Link </a> <br><br>Ryzen Threadripper 2950X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=73>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an amd cpu") {
        return "Alright, since you have a good amount of budget here are my recommendations: <br><br>Ryzen 9 3590X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=72>Link </a> <br><br>Ryzen Threadripper 2950X = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=73>Link </a> <br><br>Pick one, and I ll explain it to you!";
    }

    
    else {
        return "Try asking something else!";
    }
}