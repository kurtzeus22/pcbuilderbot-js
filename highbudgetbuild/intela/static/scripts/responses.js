function getBotResponse(input) {
    //custom
    if (input == "next") {
        return "So now, let us proceed to the Motherboard. <br>I recommend the following: <br><br>ASUS PRIME B365M-A <br>link: <a href = https://www.asus.com/Motherboards-Components/Motherboards/PRIME/PRIME-B365M-A/#:~:text=Intel%20B365%20chipset%20The%20Intel,allowing%20increased%20bandwidth%20and%20stability >ASUS PRIME B365M-A </a> <br><br>Gigabyte H310M A <br>link: <a href = https://www.gigabyte.com/Motherboard/H310M-A-rev-10 >Gigabyte H310M A </a> <br><br>Pick one, make sure it is final. Then I will explain it to you!";
    }

    //motherboard
    else if (input == "asus prime b365m-a") {
        return "Okay, The Intel B365 is a single-chipset design that supports Socket 1151 for 9th Gen and 8th Gen Intel Core, Pentium Gold and Celeron processors.<br> To learn more: <a href = https://www.asus.com/Motherboards-Components/Motherboards/PRIME/PRIME-B365M-A/#:~:text=Intel%20B365%20chipset%20The%20Intel,allowing%20increased%20bandwidth%20and%20stability >ASUS PRIME B365M-A </a> <br><br> Type Okay once you add this to cart.";
    }
    else if (input == "gigabyte h310m a") {
        return "Okay, Intel H310 Ultra Durable motherboard with GIGABYTE 8118 Gaming LAN, PCIe Gen2 x2 M.2, Anti-Sulfur Resistor, Intel CNVi WIFI upgradable slot, Smart Fan 5, DualBIOS, CEC 2019 ready.<br> To learn more: <a href = https://www.gigabyte.com/Motherboard/H310M-A-rev-10 >Gigabyte H310M A </a> <br><br> Type Okay once you add this to cart.";
    }

    //ram
    else if (input == "okay") {
        return "So now, let us proceed to the RAM <br>In this Motherboard, the RAM should be DDR4 and 3200MHz minimum: <br>For your budget, I recommend a Four Slot Channel RAM<br>It means that you need to buy four RAMs with the same specifications.<br><br>Sixteen Gigabyte RAM = <a href = # >Link</a> <br><br>Thirty Two Gigabyte RAM = <a href = # >Link</a> <br><br>Sixty Four Gigabyte RAM = <a href = # >Link</a> <br><br>One Hundred Twenty Eight Gigabyte RAM = <a href = # >Link</a> <br><br>Pick one, make sure it is final.";
    }
    else if (input == "sixteen gigabyte") {
        return "16GB is a good choice, are you sure?";
    }
    else if (input == "thirty two gigabyte") {
        return "32GB is a great choice, are you sure?";
    }
    else if (input == "sixty four gigabyte") {
        return "64GB is a great choice for video editing, are you sure?";
    }
    else if (input == "one hundred twenty eight gigabyte") {
        return "Great choice, 128GB RAM will run everything from RTX games to editing softwares. Are you sure?";
    }

    else if (input == "sixteen gigabyte ram") {
        return "16GB is a good choice, are you sure?";
    }
    else if (input == "thirty two gigabyte ram") {
        return "32GB is a great choice, are you sure?";
    }
    else if (input == "sixty four gigabyte ram") {
        return "64GB is a great choice for video editing, are you sure?";
    }
    else if (input == "one hundred twenty eight gigabyte ram") {
        return "Great choice, 128GB RAM will run everything from RTX games to editing softwares. Are you sure?";
    }

    //PSU
    else if (input == "yes") {
        return "Affirm, now let us proceed to the Power Supply. In this part of the PC, we should not cheap out!<br> I recommend the following:<br><br>Seasonic Prime TX 750 <br>link: <a href = # >Seasonic Prime TX 750 </a> <br><br>Thermaltake Toughpower PF1 650 <br>link: <a href = # >Thermaltake Toughpower PF1 650 </a> <br><br>Fractal Design Ion SFX 650 <br>link: <a href = # >Fractal Design Ion SFX 650 </a> <br><br>Pick one, make sure it is final as well, then I will explain it to you!";
    }
    else if (input == "seasonic prime tx 750") {
        return "Alright, Ill explain it to you. <br>The SSR-750TD is right in the middle of the current Prime family, featuring a moderate capacity of 750 W, which will easily meet the needs of a strong gaming system equipped with two high-end graphics cards and a potent CPU. <br>Link: <a href = >Seasonic Prime TX 750 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }
    else if(input == "thermaltake toughpower pf1 650") {
        return "Alright, Ill explain it to you. <br>The Thermaltake Toughpower PF1 650W achieves high performance and has also a dead silent operation. <br>Link: <a href = https://www.thermaltake.com/toughpower-pf1-650w-tt-premium-edition.html >Thermaltake Toughpower PF1 650 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }
    else if(input == "fractal design ion sfx 650") {
        return "Alright, Ill explain it to you. <br>Keep components powered and connected with the Ion SFX 650W 80 PLUS Gold Modular Power Supply from Fractal Design. <br>Link: <a href = https://www.fractal-design.com/products/power-supplies/ion/ion-sfx-650w-gold/ >Fractal Design Ion SFX 650 </a> <br><br>Now let us proceed to the storage device for your PC. Type Follow to continue...";
    }

    //SDD
    else if (input == "follow") {
        return "Now, in terms of Storage Devices, you can choose SSD or an HDD. Ill explain it to you: <br><br>SSD is a storage device that is good for speed and functionality, however it is double the price of an HDD <br><br>HDD is a storage device that is cheap, and has high storage capacity. However it is slower than an SSD and easier to break.<br><br>Now, you can also choose SSD as your Primary Storage, and no Secondary, or SSD as Primary Storage and HDD as Secondary Storage. <br><br>Type SSD or HDD for your PRIMARY STORAGE pick.";
    }
    else if (input == "ssd") {
        return "Okay, now you need to pick the size of the SSD Storage space. I recommend using 128GB for Primary, and an extra HDD for secondary storage.<br>Here are the following choices: <br><br>512GB SSD - <a href = # >Link </a> <br><br>1024GB SSD - <a href = # >Link </a> <br><br>2048GB SSD - <a href = # >Link </a> <br><br>Type the FULL NAME of the SSD you pick as your primary storage. (ex: 128GB SSD)";
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
        return "Okay, since you want to have a GPU for your PC, here are my recommendations: <br><br>RTX 2060 - The GeForce RTX 2060 features 1,920 CUDA cores, 240 Tensor Cores that can deliver 52 teraflops of deep learning horsepower <br>Link: <a href = #>RTX 2060 </a> <br><br>RTX 3070 - The Nvidia GeForce RTX 3070 is a fast desktop graphics card based on the Ampere architecture. It uses the big GA104 chip and offers 5,888 cores and 8 GB GDDR6 graphics memory. <br>Link: <a href = #>RTX 3070 </a> <br><br>RTX 3090 -  The GeForce RTX 3090 Ti and 3090 are big ferocious GPUs (BFGPUs) with TITAN class performance. Powered by Ampere—NVIDIAs 2nd gen RTX architecture—they double down on ray tracing and AI performance with enhanced Ray Tracing Cores <br>Link: <a href = #>RTX 3090 </a> <br><br>Please type in your choice of GPU down below.";
    }
    else if (input == "rtx 2060") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Cougar MX340 -  Ready for the Newest Games. MX340 is more than looks; it can house a full-fledged high-end gaming computer with a graphics card up to 330 mm and support for six fans and a 360mm water cooling radiator <br>Link: <a href = https://cougargaming.com/products/cases/mx340/#:~:text=Ready%20for%20the%20Newest%20Games,the%20cooling%20your%20components%20require >Cougar MX340 </a> <br><br>HEC HX300 - HEC HX300 has 3 Internal 2.5 drive bays and 2 Internal 3.5 drive bays. It has 7 expansion slots for full-on gaming compatibility. <br>Link: <a href = https://pangoly.com/en/review/hec-hx300 >HEC HX300 </a> <br><br>Phanteks Eclipse Steel - It introduces an all new Framework that further enhances clean interior and exterior design with intuitive and convenient installation.  <br>Link: <a href = https://www.phanteks.com/Eclipse-P300-TemperedGlass.html >Phanteks Eclipse Steel  </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "rtx 3070") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Cougar MX340 -  Ready for the Newest Games. MX340 is more than looks; it can house a full-fledged high-end gaming computer with a graphics card up to 330 mm and support for six fans and a 360mm water cooling radiator <br>Link: <a href = https://cougargaming.com/products/cases/mx340/#:~:text=Ready%20for%20the%20Newest%20Games,the%20cooling%20your%20components%20require >Cougar MX340 </a> <br><br>HEC HX300 - HEC HX300 has 3 Internal 2.5 drive bays and 2 Internal 3.5 drive bays. It has 7 expansion slots for full-on gaming compatibility. <br>Link: <a href = https://pangoly.com/en/review/hec-hx300 >HEC HX300 </a> <br><br>Phanteks Eclipse Steel - It introduces an all new Framework that further enhances clean interior and exterior design with intuitive and convenient installation.  <br>Link: <a href = https://www.phanteks.com/Eclipse-P300-TemperedGlass.html >Phanteks Eclipse Steel  </a> <br><br>Please type in the name of your choice.";
    }
    else if (input == "rtx 3090") {
        return "Good Choice! Now for the next part, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Cougar MX340 -  Ready for the Newest Games. MX340 is more than looks; it can house a full-fledged high-end gaming computer with a graphics card up to 330 mm and support for six fans and a 360mm water cooling radiator <br>Link: <a href = https://cougargaming.com/products/cases/mx340/#:~:text=Ready%20for%20the%20Newest%20Games,the%20cooling%20your%20components%20require >Cougar MX340 </a> <br><br>HEC HX300 - HEC HX300 has 3 Internal 2.5 drive bays and 2 Internal 3.5 drive bays. It has 7 expansion slots for full-on gaming compatibility. <br>Link: <a href = https://pangoly.com/en/review/hec-hx300 >HEC HX300 </a> <br><br>Phanteks Eclipse Steel - It introduces an all new Framework that further enhances clean interior and exterior design with intuitive and convenient installation.  <br>Link: <a href = https://www.phanteks.com/Eclipse-P300-TemperedGlass.html >Phanteks Eclipse Steel  </a> <br><br>Please type in the name of your choice.";
    }

    //NOGPU
    else if (input == "no gpu") {
        return "Since you picked to opt out of the GPU section, let us now proceed to the Case for your PC<br>Please pick the case you want to use: <br><br>Cougar MX340 -  Ready for the Newest Games. MX340 is more than looks; it can house a full-fledged high-end gaming computer with a graphics card up to 330 mm and support for six fans and a 360mm water cooling radiator <br>Link: <a href = https://cougargaming.com/products/cases/mx340/#:~:text=Ready%20for%20the%20Newest%20Games,the%20cooling%20your%20components%20require >Cougar MX340 </a> <br><br>HEC HX300 - HEC HX300 has 3 Internal 2.5 drive bays and 2 Internal 3.5 drive bays. It has 7 expansion slots for full-on gaming compatibility. <br>Link: <a href = https://pangoly.com/en/review/hec-hx300 >HEC HX300 </a> <br><br>Phanteks Eclipse Steel - It introduces an all new Framework that further enhances clean interior and exterior design with intuitive and convenient installation.  <br>Link: <a href = https://www.phanteks.com/Eclipse-P300-TemperedGlass.html >Phanteks Eclipse Steel  </a> <br><br>Please type in the name of your choice.";
    }

    //CASES
    else if (input == "cougar mx340") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href = #>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "hec hx300") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href = #>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }
    else if (input == "phanteks eclipse steel") {
        return "Alright... Thats it! You have bought all the components to build your first PC. Now all you need are mouse, keyboard, hdmi, and monitor, and you are good to go! <br><br> Now you can proceed to your checkout box: <a href = #>CHECKOUT </a> <br><br>Thanks for using PCBuilderBot!";
    }


    else {
        return "Try asking something else!";
    }
}