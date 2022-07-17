function getBotResponse(input) {
    //custom
    if (input == "intel") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=49>Link</a> <br><br> Intel Core i7-9700K = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=50>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use intel") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=49>Link</a> <br><br> Intel Core i7-9700K = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=50>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an intel cpu") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=49>Link</a> <br><br> Intel Core i7-9700K = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=50>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }

    else if (input == "amd") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=51>Link</a> <br><br>Ryzen 7 3700x = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=52>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use amd") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=51>Link</a> <br><br>Ryzen 7 3700x = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=52>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an amd cpu") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=51>Link</a> <br><br>Ryzen 7 3700x = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=52>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }

    
    else {
        return "Try asking something else!";
    }
}