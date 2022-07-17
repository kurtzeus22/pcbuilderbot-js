function getBotResponse(input) {
    //custom
    if (input == "next") {
        return "So now, let us proceed to the Motherboard. <br>I recommend the following: <br><br>ASUS Prime Z390-P <br>link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=56>ASUS Prime Z390-P</a> <br><br>ASRock B365M Pro4 <br>link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=57 >ASRock B365M Pro4 </a> <br><br>Pick one, make sure it is final. Then I will explain it to you!";
    }

    //motherboard
    else if (input == "asus prime z390-p") {
        return "Okay, ASUS Prime Z390-P Dressed in professional attire, the Prime Z390 series caters to daily users and content creators with well-rounded specs and features. Combining the benefits of the latest processors with essential ASUS design and engineering, Prime Z390 provides a wealth of options for performance tuning via intuitive software and firmware features.<br> To learn more: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=56 >ASUS Prime Z390-P </a> <br><br> Type Okay once you add this to cart.";
    }
    else if (input == "asrock b365m pro4") {
        return "Okay, The ASRock B365M Pro4 motherboard is designed to host 8th generation Intel Core processors(Intel Coffee Lake) and 9th generation Intel Core processors.<br> To learn more: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=57>ASRock B365M Pro4 </a> <br><br> Type Okay once you add this to cart.";
    }

    //ram
    else if (input == "okay") {
        return "So now, let us proceed to the RAM <br>In this Motherboard, the RAM should be DDR4 and 3200MHz minimum: <br>For your budget, I recommend a Dual Channel RAM<br>It means that you need to buy two RAMs with the same specifications.<br><br>Eight Gigabyte RAM = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=31>Link</a> <br><br>Sixteen Gigabyte RAM = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=32>Link</a> <br><br>Thirty Two Gigabyte RAM = <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=61>Link</a> <br><br>Pick one, make sure it is final.";
    }
    else if (input == "eight gigabyte") {
        return "Okay, 8GB is good for entrance gaming, but not for editing, are you sure?";
    }
    else if (input == "sixteen gigabyte") {
        return "16GB is a good choice, are you sure?";
    }
    else if (input == "thirty two gigabyte") {
        return "32GB is a great choice, are you sure?";
    }
    else if (input == "eight gigabyte ram") {
        return "Okay, 8GB is good for entrance gaming, but not for editing, are you sure?";
    }
    else if (input == "sixteen gigabyte ram") {
        return "16GB is a good choice, are you sure?";
    }
    else if (input == "thirty two gigabyte ram") {
        return "32GB is a great choice, are you sure?";
    }

    //PSU
    else if (input == "yes") {
        return "Affirm, now let us proceed to the Power Supply. In this part of the PC, we should not cheap out!<br> I recommend the following:<br><br>FSP Hydro 650 <br>link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=58>FSP Hydro 650 </a> <br><br>Corsair RM 850 <br>link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=59>Corsair RM 850 </a> <br><br>Seasonic Prime 1000 <br>link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=60>Seasonic Prime 1000 </a> <br><br>Pick one, make sure it is final as well, then I will explain it to you!";
    }
    else if (input == "fsp hydro 650") {
        return "Alright, Ill explain it to you. <br>The FSP Hydro 650 Watts is designed to maximize cooling efficiency with features such as a 135mm FDB fan with thermal control design, internal component arrangement for increased airflow, enhanced heat dissipation and efficient energy conversion. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=58>FSP Hydro 650 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }
    else if(input == "corsair rm 850") {
        return "Alright, Ill explain it to you. <br>The Corsair RM 850 Watts is a fully modular power supplies deliver consistent 80 PLUS Gold efficient power to your PC, with virtually silent operation. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=59>Corsair RM 850 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }
    else if(input == "seasonic prime 1000") {
        return "Alright, Ill explain it to you. <br>The Seasonic Prime 1000 Watts is Hybrid passive mode, does not run fan unless under high load. Very low ripple on the rails, high efficiency, full modular <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=60 >Seasonic Prime 1000 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }

    //SDD
    else if (input == "follow") {
        return "Now, in terms of Storage Devices, you can choose SSD or an HDD. Ill explain it to you: <br><br>SSD is a storage device that is good for speed and functionality, however it is double the price of an HDD <br><br>HDD is a storage device that is cheap, and has high storage capacity. However it is slower than an SSD and easier to break.<br><br>Now, you can also choose SSD as your Primary Storage, and no Secondary, or SSD as Primary Storage and HDD as Secondary Storage. <br><br>Type SSD or HDD for your PRIMARY STORAGE pick.";
    }
    else if (input == "ssd") {
        return "Okay, now you need to pick the size of the SSD Storage space. I recommend using 128GB for Primary, and an extra HDD for secondary storage.<br>Here are the following choices: <br><br>512GB SSD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=35>Link </a> <br><br>1024GB SSD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=63>Link </a> <br><br>2048GB SSD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=62>Link </a> <br><br>Type the FULL NAME of the SSD you pick as your primary storage. (ex: 128GB SSD)";
    }
    else if (input == "512gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }
    else if (input == "1024gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }
    else if (input == "2048gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }

    //HDD
    else if (input == "hdd") {
        return "Okay, for picking the HDD Storage Device, Here are the following choices: <br><br>1024GB HDD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=36>Link </a> <br><br>2048GB HDD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=37>Link </a> <br><br>4096GB HDD - <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=38>Link </a> <br><br>Type the FULL NAME of the HDD you pick as your storage. (ex. 1024GB HDD)";
    }
    else if (input == "1024gb hdd") {
        return "Alright, let us proceed now to the next part of building a PC, the GPU. <br><br>The GPU is an optional device to run high-end games on your PC. If you are not focused on gaming, I recommend not using a GPU, since there are Integrated GPUs in your system.<br><br>Type in PROCEED to pick a GPU<br>Type in NO GPU to skip picking a GPU (recommended for budget users";
    }
    else if (input == "2048gb hdd") {
        return "Alright, let us proceed now to the next part of building a PC, the GPU. <br><br>The GPU is an optional device to run high-end games on your PC. If you are not focused on gaming, I recommend not using a GPU, since there are Integrated GPUs in your system.<br><br>Type in PROCEED to pick a GPU<br>Type in NO GPU to skip picking a GPU (recommended for budget users";
    }
    else if (input == "4096gb hdd") {
        return "Alright, let us proceed now to the next part of building a PC, the GPU. <br><br>The GPU is an optional device to run high-end games on your PC. If you are not focused on gaming, I recommend not using a GPU, since there are Integrated GPUs in your system.<br><br>Type in PROCEED to pick a GPU<br>Type in NO GPU to skip picking a GPU (recommended for budget users";
    }

    //W GPU
    else if (input == "proceed") {
        return "Okay, since you want to have a GPU for your PC, here are my recommendations: <br><br>NVIDIA RTX 2060 -  The GeForce RTX 2060 features 1,920 CUDA cores, 240 Tensor Cores that can deliver 52 teraflops of deep learning horsepower, 30 RT Cores that can cast 5 gigarays a second <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=64>NVIDIA RTX 2060 </a> <br><br>NVIDIA RTX 2070 Super - The NVIDIA GeForce RTX 2070 SUPER is powered by the NVIDIA Turing architecture and has a superfast GPU with more cores and faster clocks to unleash your creative productivity and gaming dominance. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=65>NVIDIA RTX 2070 Super </a> <br><br>AMD RX 5700 XT - The AMD Radeon RX 5700 XT is no doubt one of the best AMD graphics cards we have come across in years. It provides excellent 1440p gaming performance, and plenty of features that will actually be usable from day one. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=66>AMD RX 5700 XT </a> <br><br>Please type in your choice of GPU down below.";
    }
    else if (input == "nvidia rtx 2060") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Tecware Forge M - The Tecware Forge M is a super affordable chassis with a tempered glass side. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=67>Tecware Forge M </a> <br><br>AeroCool Scar - It is a High-performance mid tower case with a stylish RGB LED design on the top and front panel. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=68>AeroCool Scar </a> <br><br>Cougar MX330 - The MX330 Mid-Tower Case from COUGAR features a simple design with a transparent side window panel for you to show off your system internals. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=69>Cougar MX330 </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "nvidia rtx 2070 super") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Tecware Forge M - The Tecware Forge M is a super affordable chassis with a tempered glass side. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=67>Tecware Forge M </a> <br><br>AeroCool Scar - It is a High-performance mid tower case with a stylish RGB LED design on the top and front panel. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=68>AeroCool Scar </a> <br><br>Cougar MX330 - The MX330 Mid-Tower Case from COUGAR features a simple design with a transparent side window panel for you to show off your system internals. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=69>Cougar MX330 </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "amd rx 5700 xt") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Tecware Forge M - The Tecware Forge M is a super affordable chassis with a tempered glass side. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=67>Tecware Forge M </a> <br><br>AeroCool Scar - It is a High-performance mid tower case with a stylish RGB LED design on the top and front panel. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=68>AeroCool Scar </a> <br><br>Cougar MX330 - The MX330 Mid-Tower Case from COUGAR features a simple design with a transparent side window panel for you to show off your system internals. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=69>Cougar MX330 </a> <br><br>Please type in the name of your choice.";
    }

    //NOGPU
    else if (input == "no gpu") {
        return "Since you picked to opt out of the GPU section, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Tecware Forge M - The Tecware Forge M is a super affordable chassis with a tempered glass side. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=67>Tecware Forge M </a> <br><br>AeroCool Scar - It is a High-performance mid tower case with a stylish RGB LED design on the top and front panel. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=68>AeroCool Scar </a> <br><br>Cougar MX330 - The MX330 Mid-Tower Case from COUGAR features a simple design with a transparent side window panel for you to show off your system internals. <br>Link: <a target=_blank href = https://pcbuilderbot.000webhostapp.com/product.php?id=69>Cougar MX330 </a> <br><br>Please type in the name of your choice.";
    }

    //CASES
    else if (input == "tecware forge m") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a target=_blank href =https://pcbuilderbot.000webhostapp.com//cart.php>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "aerocool scar") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a target=_blank href =https://pcbuilderbot.000webhostapp.com//cart.php>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "cougar mx330") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a target=_blank href =https://pcbuilderbot.000webhostapp.com//cart.php>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }


    else {
        return "Try asking something else!";
    }
}