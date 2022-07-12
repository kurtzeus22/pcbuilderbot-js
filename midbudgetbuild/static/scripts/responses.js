function getBotResponse(input) {
    //custom
    if (input == "intel") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a href = https://www.intel.com/content/www/us/en/products/sku/212271/intel-core-i511400f-processor-12m-cache-up-to-4-40-ghz/specifications.html>Link</a> <br><br> Intel Core i7-9700K = <a href = https://www.intel.com/content/www/us/en/products/sku/186604/intel-core-i79700k-processor-12m-cache-up-to-4-90-ghz/specifications.html>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use intel") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a href = https://www.intel.com/content/www/us/en/products/sku/212271/intel-core-i511400f-processor-12m-cache-up-to-4-40-ghz/specifications.html>Link</a> <br><br> Intel Core i7-9700K = <a href = https://www.intel.com/content/www/us/en/products/sku/186604/intel-core-i79700k-processor-12m-cache-up-to-4-90-ghz/specifications.html>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an intel cpu") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br> Intel Core i5-11400F = <a href = https://www.intel.com/content/www/us/en/products/sku/212271/intel-core-i511400f-processor-12m-cache-up-to-4-40-ghz/specifications.html>Link</a> <br><br> Intel Core i7-9700K = <a href = https://www.intel.com/content/www/us/en/products/sku/186604/intel-core-i79700k-processor-12m-cache-up-to-4-90-ghz/specifications.html>Link</a> <br><br> Pick one, and I ll explain it to you!";
    }

    else if (input == "amd") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-5-5600>Link</a> <br><br>Ryzen 7 3700x = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want to use amd") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-5-5600>Link</a> <br><br>Ryzen 7 3700x = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }
    else if (input == "i want an amd cpu") {
        return "Alright, since you have a fairly right amount of budget here are my recommendations: <br><br>Ryzen 5 5600 = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-5-5600>Link</a> <br><br>Ryzen 7 3700x = <a href = https://www.amd.com/en/products/cpu/amd-ryzen-7-3700x>Link</a> <br><br>Pick one, and I ll explain it to you!";
    }

    
    else {
        return "Try asking something else!";
    }
}