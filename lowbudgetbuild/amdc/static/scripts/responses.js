function getBotResponse(input) {
    //custom
    if (input == "next") {
        return "So now, let us proceed to the Motherboard. <br>I recommend the following: <br><br>MSI A320M-A PRO MAX <br>link: <a href = https://pangoly.com/en/review/msi-a320m-a-pro-max>MSI A320M-A PRO MAX </a> <br><br>MSI B450M-A PRO MAX <br>link: <a href = https://pangoly.com/en/review/msi-b450m-a-pro-max>MSI B450M-A PRO MAX </a> <br><br>Pick one, make sure it is final. Then I will explain it to you!";
    }

    //motherboard
    else if (input == "msi a320m-a pro max") {
        return "Okay, A320M-A Pro Max is an AMD AM4 motherboard inspired from architectural design, with Core Boost, DDR4 Boost, Turbo M.2, USB 3.2 Gen1. <br>To learn more: <a href = https://www.msi.com/Motherboard/A320M-A-PRO-MAX>MSI A320M-A PRO MAX </a> <br><br> Type Okay once you add this to cart.";
    }
    else if (input == "msi b450m-a pro max") {
        return "Okay, B450M-A Pro Max is an AMD AM4 motherboard inspired from architectural design, with Core Boost, DDR4 Boost, Turbo M.2, USB 3.2 Gen1. <br>To learn more: <a href = https://www.msi.com/Motherboard/B450M-A-PRO-MAX>MSI B450M-A PRO MAX </a> <br><br> Type Okay once you add this to cart.";
    }

    //ram
    else if (input == "okay") {
        return "So now, let us proceed to the RAM <br>In this Motherboard, the RAM should be DDR4 and 3200MHz minimum: <br>For small budget, I recommend a single-channel RAM<br><br>Four Gigabyte RAM = <a href =#>www.4gblink </a> <br><br>Eight Gigabyte RAM = <a href = #>www.8gblink </a> <br><br>Sixteen Gigabyte RAM = <a href = #>www.16gblink </a> <br><br>Pick one, make sure it is final.";
    }
    else if (input == "four gigabyte") {
        return "Okay, 4GB is not recommended for gaming, are you sure?";
    }
    else if (input == "eight gigabyte") {
        return "Okay, 8GB is good for entrance gaming, but not for editing, are you sure?";
    }
    else if (input == "sixteen gigabyte") {
        return "16GB is a good choice, are you sure?";
    }
    else if (input == "four gigabyte ram") {
        return "Okay, 4GB is not recommended for gaming, are you sure?";
    }
    else if (input == "eight gigabyte ram") {
        return "Okay, 8GB is good for entrance gaming, but not for editing, are you sure?";
    }
    else if (input == "sixteen gigabyte ram") {
        return "16GB is a good choice, are you sure?";
    }

    //PSU
    else if (input == "yes") {
        return "Affirm, now let us proceed to the Power Supply. In this part of the PC, we should not cheap out!<br> I recommend the following:<br><br>EVGA Supernova GA 650 <br>link: <a href = https://pcpartpicker.com/product/Xsn8TW/evga-supernova-ga-650-w-80-gold-certified-fully-modular-atx-power-supply-220-ga-0650-x1>EVGA Supernova GA 650 </a> <br><br>EVGA BR 700 <br>link: <a href = https://pcpartpicker.com/product/2gprxr/evga-br-700w-80-bronze-certified-atx-power-supply-100-br-0700-k1 >EVGA BR 700 </a> <br><br>Pick one, make sure it is final as well, then I will explain it to you!";
    }
    else if (input == "evga supernova ga 650") {
        return "Alright, Ill explain it to you. <br>EVGA Supernova GA 650 Watts has an 80 Plus Gold 650W, Fully Modular, Eco Mode, 10 Year Warranty, Includes Power ON Self Tester, Compact 150mm Size  <br>Link: <a href = https://pcpartpicker.com/product/Xsn8TW/evga-supernova-ga-650-w-80-gold-certified-fully-modular-atx-power-supply-220-ga-0650-x1>EVGA Supernova GA 650 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }
    else if(input == "evga br 700") {
        return "Alright, Ill explain it to you. <br>EVGA BR 700 Watts Delivers the power needed to run your PC. AC 100-240V input. With input 50-60Hz frequency for wide-ranging use.   <br>Link: <a href = https://www.evga.com/products/product.aspx?pn=100-BR-0700-K1>EVGA BR 700 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...'";
    }

    //SDD
    else if (input == "follow") {
        return "Now, in terms of Storage Devices, you can choose SSD or an HDD. Ill explain it to you: <br><br>SSD is a storage device that is good for speed and functionality, however it is double the price of an HDD <br><br>HDD is a storage device that is cheap, and has high storage capacity. However it is slower than an SSD and easier to break.<br><br>Now, you can also choose SSD as your Primary Storage, and no Secondary, or SSD as Primary Storage and HDD as Secondary Storage. <br><br>Type SSD or HDD for your PRIMARY STORAGE pick.";
    }
    else if (input == "ssd") {
        return "Okay, now you need to pick the size of the SSD Storage space. I recommend using 128GB for Primary, and an extra HDD for secondary storage.<br>Here are the following choices: <br><br>128GB SSD - <a href = https://www.amazon.com/SanDisk-128GB-2-5-Inch-Height-SDSSDP-128G-G25/dp/B007ZW2LY4>Link </a> <br><br>250GB SSD - <a href = https://www.westerndigital.com/zh-tw/products/portable-drives/sandisk-extreme-usb-3-1-ssd#SDSSDE60-250G-G25>Link </a> <br><br>500GB SSD - <a href = https://www.westerndigital.com/zh-tw/products/portable-drives/sandisk-extreme-usb-3-1-ssd#SDSSDE60-500G-G25>Link </a> <br><br>1024GB SSD - <a href = https://www.westerndigital.com/zh-tw/products/portable-drives/sandisk-extreme-usb-3-1-ssd#SDSSDE60-1T00-G25>Link </a> <br><br>Type the FULL NAME of the SSD you pick as your primary storage. (ex: 128GB SSD)";
    }
    else if (input == "128gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }
    else if (input == "250gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }
    else if (input == "500gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }
    else if (input == "1024gb ssd") {
        return "Okay. Now, would you like to have a Secondary Storage? (Type HDD or NO HDD)";
    }

    //HDD
    else if (input == "hdd") {
        return "Okay, for picking the HDD Storage Device, Here are the following choices: <br><br>1024GB HDD - <a href = https://pcpartpicker.com/product/44Gj4D/seagate-barracuda-1tb-35-7200rpm-internal-hard-drive-st1000dm010>Link </a> <br><br>2048GB HDD - <a href = https://pcpartpicker.com/product/mwrYcf/seagate-barracuda-computer-2-tb-35-7200rpm-internal-hard-drive-st2000dm008>Link </a> <br><br>4096GB HDD - <a href = https://pcpartpicker.com/product/tmTPxr/seagate-barracuda-compute-4-tb-35-7200rpm-internal-hard-drive-st4000dmz04>Link </a> <br><br>Type the FULL NAME of the HDD you pick as your storage. (ex. 1024GB HDD)";
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
        return "Okay, since you want to have a GPU for your PC, here are my recommendations: <br><br>NVIDIA GTX 1660ti - This GPU can help you perform games like Fortnite, PUBG, and Apex Legends at 120 Frames per second. This is good for quick action games, as this GPU can render up to 1.5x faster without GPU. <br>Link: <a href = https://www.nvidia.com/en-us/geforce/graphics-cards/gtx-1660-ti >NVIDIA GTX 1660ti </a> <br><br>AMD RX 580 - This GPU has high support with games and has a compatibility of up to 2K Resolution. This is also experimental as you can overclock and underclock it. <br>Link: <a href = https://www.amd.com/en/products/graphics/radeon-rx-580 >AMD RX 580 </a> <br><br>NVIDIA GTX 1050ti - This GPU is the cheapest of the bunch, and can handle games up to 1080p. You also do not need extra power connectors here, making it perfect for those who want to upgrade their systems. <br>Link: <a href = https://www.nvidia.com/en-gb/geforce/graphics-cards/geforce-gtx-1050-ti >NVIDIA GTX 1050ti </a> <br><br>Please type in your choice of GPU down below.";
    }
    else if (input == "nvidia gtx 1660ti") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>HEC X300 - This case is for users who has a good amount of space for their PC place. I recommend using this case if you dont want to upgrade, or add Graphics Card.<br>Link: <a href = https://pangoly.com/en/review/hec-hx300>HEC X300 </a> <br><br>Cougar MX340 - This case is for those users who plan to furhter update their PCs in the future. I recommend this also for those who wants to have a smooth ventilation for their PC.<br>Link: <a href = https://pangoly.com/en/review/cougar-mx340>Cougar MX340 </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "amd rx580") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>HEC X300 - This case is for users who has a good amount of space for their PC place. I recommend using this case if you dont want to upgrade, or add Graphics Card.<br>Link: <a href = https://pangoly.com/en/review/hec-hx300>HEC X300 </a> <br><br>Cougar MX340 - This case is for those users who plan to furhter update their PCs in the future. I recommend this also for those who wants to have a smooth ventilation for their PC.<br>Link: <a href = https://pangoly.com/en/review/cougar-mx340>Cougar MX340 </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "nvidia gtx 1050ti") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>HEC X300 - This case is for users who has a good amount of space for their PC place. I recommend using this case if you dont want to upgrade, or add Graphics Card.<br>Link: <a href = https://pangoly.com/en/review/hec-hx300>HEC X300 </a> <br><br>Cougar MX340 - This case is for those users who plan to furhter update their PCs in the future. I recommend this also for those who wants to have a smooth ventilation for their PC.<br>Link: <a href = https://pangoly.com/en/review/cougar-mx340>Cougar MX340 </a> <br><br>Please type in the name of your choice.";
    }

    //NOGPU
    else if (input == "no gpu") {
        return "Since you picked to opt out of the GPU section, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Versa H22 - This case is for users who like compact spaces for their PC. This case is good for small spaces, but always needs cleaning as the ventilation is small compared to other cases.<br>Link: <a href = https://pangoly.com/en/review/thermaltake-versa-h22-spcc-atx>Versa H22 </a> <br><br>HEC X300 - This case is for users who has a good amount of space for their PC place. I recommend using this case if you dont want to upgrade, or add Graphics Card.<br>Link: <a href = https://pangoly.com/en/review/hec-hx300>HEC X300 </a> <br><br>Cougar MX340 - This case is for those users who plan to furhter update their PCs in the future. I recommend this also for those who wants to have a smooth ventilation for their PC.<br>Link: <a href = https://pangoly.com/en/review/cougar-mx340>Cougar MX340 </a> <br><br>Please type in the name of your choice.";
    }

    //CASES
    else if (input == "versa h22") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href =#>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "hec x300") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href =#>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "cougar mx340") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href =#>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }


    else {
        return "Try asking something else!";
    }
}