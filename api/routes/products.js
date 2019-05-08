const express = require('express');
const route = express.Router();

route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            { "productname": "OLED TV", "brand": "LG", "category": "TV", "stars": 4, "price": 2199 , "img": "https://dustinweb.azureedge.net/image/395509/180/130/lg-oled65e8pla-65-4k-smart-oled-tv.jpg" },
            { "productname": "Hero 7", "brand": "GoPro", "category": "Camera", "stars": 3, "price": 349 , "img": "https://dustinweb.azureedge.net/image/400330/180/130/gopro-hero7-black-svart.jpg" },
            { "productname": "Momentum 2.0", "brand": "Sennheiser", "category": "Headset", "stars": 4, "price": 199 , "img": "https://dustinweb.azureedge.net/image/136626/180/130/sennheiser-momentum-20-wireless---black-svart.jpg" },
            { "productname": "ZenBook", "brand": "ASUS", "category": "Laptop", "stars": 5, "price": 799 , "img": "https://dustinweb.azureedge.net/image/455587/180/130/asus-zenbook-ux410ua-gv354t-core-i5-8gb-256gb-ssd-14.jpg"  },
            { "productname": "SSD 1000GB", "brand": "Samsung", "category": "Hard drive", "stars": 5, "price": 139 , "img": "https://dustinweb.azureedge.net/image/429736/180/130/samsung-860-qvo-1000gb-25-serial-ata-600.jpg"  },
            { "productname": "Xbox Controller", "brand": "Microsoft", "category": "Controller", "stars": 3, "price": 59 , "img": "https://dustinweb.azureedge.net/image/328625/180/130/microsoft-xbox-controller-wireless-adapter-for-windows-10-svart.jpg"  },
            { "productname": "Xpress Printer", "brand": "HP", "category": "Printer", "stars": 2, "price": 259 , "img": "https://dustinweb.azureedge.net/image/338838/180/130/hp-samsung-xpress-sl-c1860fw-a4-mfp.jpg"  },
            { "productname": "EVO 128GB", "brand": "Samsung", "category": "Memory card", "stars": 4, "price": 35 , "img": "https://dustinweb.azureedge.net/image/268153/180/130/samsung-evo-128gb-microsdxc-uhs-i-memory-card.jpg"  },
            { "productname": "HT-ST5000", "brand": "Sony", "category": "Soundbar", "stars": 5, "price": 990 , "img": "https://dustinweb.azureedge.net/image/254294/180/130/sony-ht-st5000-soundbar.jpg"  },
            { "productname": "4K Smart LED TV", "brand": "Sony", "category": "TV", "stars": 4, "price": 549 , "img": "https://dustinweb.azureedge.net/image/406615/180/130/sony-kd43xf7005-43-4k-smart-led-tv.jpg"  },
            { "productname": "WLAN 4G Router", "brand": "ASUS", "category": "Router", "stars": 3, "price": 149 , "img": "https://dustinweb.azureedge.net/image/448335/180/130/asus-4g-ac53u-wlan-lte-router.jpg"  },
            { "productname": "Nighthawk WiFi Router", "brand": "Netgear", "category": "Router", "stars": 5, "price": 299 , "img": "https://dustinweb.azureedge.net/image/317364/180/130/netgear-nighthawk-x10-ad7200-smart-wifi-router.jpg"  }
        ]
    );
})

module.exports = route;