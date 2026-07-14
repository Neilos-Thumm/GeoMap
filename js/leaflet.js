// default position
let map = L.map('map').setView([0, 125.0], 3);

// map theme
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let travelData = [
    {
        "name": "Bangsaen Aquarium",
        "city": "Chon Buri",
        "type": "landmark",
        "lat": 13.285362004793065,
        "lng": 100.92534742339701
    },
    {
        "name": "Bangsaen beach",
        "city": "Chon Buri",
        "type": "landmark",
        "lat": 13.289705508623022,
        "lng": 100.91387518629492
    },
    {
        "name": "KyuuScape Pool Villa",
        "city": "Chon Buri",
        "type": "hotel",
        "lat": 13.299074519603161,
        "lng": 100.9210406075118
    },
    {
        "name": "Garden of Reeds",
        "city": "Chiang Rai",
        "type": "market",
        "lat": 19.92541562226577,
        "lng": 99.86444608130503
    },
    {
        "name": "Choui Fong Tea",
        "city": "Chiang Rai",
        "type": "landmark",
        "lat": 20.199746682660773,
        "lng": 99.8170902429824
    },
    {
        "name": "Mae Fah Luang Garden สวนแม่ฟ้าหลวง",
        "city": "Chiang Rai",
        "type": "landmark",
        "lat": 20.29991986696831,
        "lng": 99.85705810628276
    },
    {
        "name": "Wang Put Tan Tea Plantation",
        "city": "Chiang Rai",
        "type": "landmark",
        "lat": 20.174982081978882,
        "lng": 99.64098036387551
    },
    {
        "name": "Baan Hom Muen Li",
        "city": "Chiang Rai",
        "type": "hotel",
        "lat": 20.165229818658016,
        "lng": 99.63222251784686
    },
    {
        "name": "Ang Khang Royal Agricultural Station Office",
        "city": "Fang",
        "type": "landmark",
        "lat": 19.90203425319804,
        "lng": 99.04054973688986
    },
    {
        "name": "Ton Fang Hotel",
        "city": "Fang",
        "type": "hotel",
        "lat": 19.874672192136924,
        "lng": 99.18911502524708
    },
    {
        "name": "Fang Kalaya Market",
        "city": "Fang",
        "type": "market",
        "lat": 19.915511608992706,
        "lng": 99.20986973381906
    },
    {
        "name": "Pang Hwa",
        "city": "Chiang Mai",
        "type": "landmark",
        "lat": 18.952231834786687,
        "lng": 98.80311496202543
    },
    {
        "name": "Alpaca Sheep Farm Mon Jam",
        "city": "Chiang Mai",
        "type": "landmark",
        "lat": 18.95490052071346,
        "lng": 98.79509821044654
    },
    {
        "name": "Doi Inthanon",
        "city": "Chiang Mai",
        "type": "landmark",
        "lat": 18.592179298743616,
        "lng": 98.49567349870637
    },
    {
        "name": "Yum Cha Cuisine Indooroopilly",
        "city": "Brisbane",
        "type": "restaurant",
        "lat": -27.50112627904283,
        "lng": 152.97328378531097
    },
    {
        "name": "Roma Street Parkland",
        "city": "Brisbane",
        "type": "landmark",
        "lat": -27.46290655989954,
        "lng": 153.01851549618831
    },
    {
        "name": "Brisbane Showgrounds",
        "city": "Brisbane",
        "type": "market",
        "lat": -27.45013818435348,
        "lng": 153.03343265223276
    },
    {
        "name": "Maru Grill House",
        "city": "Brisbane",
        "type": "restaurant",
        "lat": -27.472130236575072,
        "lng": 153.02780079086114
    },
    {
        "name": "Westfield Mt Gravatt",
        "city": "Brisbane",
        "type": "landmark",
        "lat": -27.562399498373505,
        "lng": 153.08312125778298
    },
    {
        "name": "Mappins Nursery & Aquarium",
        "city": "Brisbane",
        "type": "market",
        "lat": -27.477455888584508,
        "lng": 153.00796787551826
    },
    {
        "name": "Eat Street Northshore",
        "city": "Brisbane",
        "type": "market",
        "lat": -27.44368186739124,
        "lng": 153.08040990990418
    },
    {
        "name": "Siam Center",
        "city": "Bangkok",
        "type": "landmark",
        "lat": 13.746451255267663,
        "lng": 100.53331626572559
    },
    {
        "name": "Wat Phra Si Rattana Satsadaram",
        "city": "Bangkok",
        "type": "landmark",
        "lat": 13.75191876239122,
        "lng": 100.49322108503979
    },
    {
        "name": "ICONSIAM",
        "city": "Bangkok",
        "type": "landmark",
        "lat": 13.72656999051501,
        "lng": 100.51051026387552
    },
    {
        "name": "Ladmayom Floating Market",
        "city": "Bangkok",
        "type": "market",
        "lat": 13.76168113127479,
        "lng": 100.41659852709716
    },
    {
        "name": "Jodd Fairs Night Market",
        "city": "Bangkok",
        "type": "market",
        "lat": 13.768216986100231,
        "lng": 100.57192209641138
    },
    {
        "name": "King Power Mahanakhon",
        "city": "Bangkok",
        "type": "landmark",
        "lat": 13.724388306558332,
        "lng": 100.5291133559329
    },
    {
        "name": "Peterskirche",
        "city": "Vienna",
        "type": "landmark",
        "lat": 48.20952352222825,
        "lng": 16.370592694561307
    },
    {
        "name": "Naschmarkt",
        "city": "Vienna",
        "type": "market",
        "lat": 48.198721493895924,
        "lng": 16.363976629489585
    },
    {
        "name": "St. Stephen's Cathedral",
        "city": "Vienna",
        "type": "landmark",
        "lat": 48.20854367377862,
        "lng": 16.373615539282277
    },
    {
        "name": "Schonbrunn Palace",
        "city": "Vienna",
        "type": "landmark",
        "lat": 48.185894660557906,
        "lng": 16.31339163688986
    },
    {
        "name": "Jenner",
        "city": "Berchtesgaden",
        "type": "landmark",
        "lat": 47.575497347977745,
        "lng": 13.020408141786206
    },
    {
        "name": "Pier St. Bartholomew",
        "city": "Berchtesgaden",
        "type": "landmark",
        "lat": 47.544108480959544,
        "lng": 12.972869892711243
    },
    {
        "name": "Schifffahrt Königssee",
        "city": "Berchtesgaden",
        "type": "landmark",
        "lat": 47.588436123421694,
        "lng": 12.990662178287987
    },
    {
        "name": "Berchtesgaden Hbf",
        "city": "Berchtesgaden",
        "type": "landmark",
        "lat": 47.62635472488874,
        "lng": 12.999652502503931
    },
    {
        "name": "St. Johann Nepomuk",
        "city": "Munich",
        "type": "landmark",
        "lat": 48.135261542609776,
        "lng": 11.569938385310964
    },
    {
        "name": "Schlosspark Nymphenburg",
        "city": "Munich",
        "type": "landmark",
        "lat": 48.155883324759834,
        "lng": 11.494311891213357
    },
    {
        "name": "Zugspitze",
        "city": "Garmisch-Partenkirchen",
        "type": "landmark",
        "lat": 47.42192202710776,
        "lng": 10.985815811100412
    },
    {
        "name": "Marienplatz",
        "city": "Munich",
        "type": "landmark",
        "lat": 48.1371305585964,
        "lng": 11.576365935039794
    },
    {
        "name": "Augustiner Keller",
        "city": "Munich",
        "type": "restaurant",
        "lat": 48.1434704237203,
        "lng": 11.552574550382689
    },
    {
        "name": "MyZeil",
        "city": "Frankfurt",
        "type": "landmark",
        "lat": 50.11484023819293,
        "lng": 8.682127023375905
    },
    {
        "name": "Historical Museum",
        "city": "Frankfurt",
        "type": "museum",
        "lat": 50.1095428886791,
        "lng": 8.683247054056338
    },
    {
        "name": "Stadel Museum",
        "city": "Frankfurt",
        "type": "museum",
        "lat": 50.10352160315575,
        "lng": 8.67422192573914
    },
    {
        "name": "Holiday Inn Gutleutviertel",
        "city": "Frankfurt",
        "type": "hotel",
        "lat": 50.09792574247026,
        "lng": 8.647344974305636
    },
    {
        "name": "Brandenburg Gate",
        "city": "Berlin",
        "type": "landmark",
        "lat": 52.51641497077008,
        "lng": 13.378406838739927
    },
    {
        "name": "Tierpark Berlin",
        "city": "Berlin",
        "type": "sanctuary",
        "lat": 52.502920744221235,
        "lng": 13.532012034522573
    },
    {
        "name": "Prague Castle",
        "city": "Prague",
        "type": "landmark",
        "lat": 50.091203290825575,
        "lng": 14.402051017846828
    },
    {
        "name": "Karluv Most",
        "city": "Prague",
        "type": "landmark",
        "lat": 50.08678376224803,
        "lng": 14.410896496376584
    },
    {
        "name": "Vaclavske Namesti",
        "city": "Prague",
        "type": "landmark",
        "lat": 50.08196251743364,
        "lng": 14.427535655116698
    },
    {
        "name": "Franz Kafka Museum",
        "city": "Prague",
        "type": "museum",
        "lat": 50.088491691831045,
        "lng": 14.410727921518871
    },
    {
        "name": "Hlava Franze Kafky",
        "city": "Prague",
        "type": "landmark",
        "lat": 50.081809746534546,
        "lng": 14.421094585297821
    },
    {
        "name": "Muzeum",
        "city": "Prague",
        "type": "landmark",
        "lat": 50.07903022675474,
        "lng": 14.431124456449398
    },
    {
        "name": "Diana Club Hotel",
        "city": "Budapest",
        "type": "hotel",
        "lat": 47.48910324603515,
        "lng": 19.093810908024494
    },
    {
        "name": "Fashion Street",
        "city": "Budapest",
        "type": "market",
        "lat": 47.4968261275969,
        "lng": 19.05272327212031
    },
    {
        "name": "Heroes' Square",
        "city": "Budapest",
        "type": "landmark",
        "lat": 47.51502142588652,
        "lng": 19.07770306433804
    },
    {
        "name": "Margitsziget",
        "city": "Budapest",
        "type": "landmark",
        "lat": 47.52758465841715,
        "lng": 19.04691702910264
    },
    {
        "name": "House of Parliament",
        "city": "Budapest",
        "type": "landmark",
        "lat": 47.5072224622878,
        "lng": 19.0461678908372
    },
    {
        "name": "Fisherman's Bastion",
        "city": "Budapest",
        "type": "landmark",
        "lat": 47.50234215564995,
        "lng": 19.035215717825945
    },
    {
        "name": "BahnhofCity Wien Hauptbahnhof",
        "city": "Vienna",
        "type": "landmark",
        "lat": 48.18580380638646,
        "lng": 16.377807768197034
    },
    {
        "name": "Brisbane Botanic Gardens Mt Coot-tha",
        "city": "Brisbane",
        "type": "landmark",
        "lat": -27.476856128177097,
        "lng": 152.97621514694043
    },
    {
        "name": "Sushi Edo",
        "city": "Brisbane",
        "type": "restaurant",
        "lat": -27.470097959340375,
        "lng": 153.0266180846238
    },
    {
        "name": "The RedBrick Hotel",
        "city": "Brisbane",
        "type": "restaurant",
        "lat": -27.48943359264061,
        "lng": 153.0273398852978
    },
    {
        "name": "KPOP Karaoke Southport",
        "city": "Gold Coast",
        "type": "recreation",
        "lat": -27.968619509285812,
        "lng": 153.41379433685972
    },
    {
        "name": "InterContinental Sanctuary Cove Resort",
        "city": "Gold Coast",
        "type": "hotel",
        "lat": -27.851978368290478,
        "lng": 153.36045235035405
    },
    {
        "name": "George's Cocktail Bar Cafe",
        "city": "Gold Coast",
        "type": "restaurant",
        "lat": -27.85287004373611,
        "lng": 153.36321041463975
    },
    {
        "name": "Currumbin Wildlife Sanctuary",
        "city": "Gold Coast",
        "type": "sanctuary",
        "lat": -28.135319285427016,
        "lng": 153.4891404717274
    },
    {
        "name": "Surfers Paradise",
        "city": "Gold Coast",
        "type": "landmark",
        "lat": -27.99819875548149,
        "lng": 153.4244933056981
    },
    {
        "name": "The University of Queensland",
        "city": "Brisbane",
        "type": "landmark",
        "lat": -27.49671582478791,
        "lng": 153.0128722163042
    },
    {
        "name": "Shiva Indian Restaurant",
        "city": "Hua Hin",
        "type": "restaurant",
        "lat": 12.55976492103322,
        "lng": 99.94124943999445
    },
    {
        "name": "Cicada Market",
        "city": "Hua Hin",
        "type": "market",
        "lat": 12.53470129244849,
        "lng": 99.96640404666117
    },
    {
        "name": "Muban Ban Suk Samran",
        "city": "Hua Hin",
        "type": "hotel",
        "lat": 12.56303,
        "lng": 99.96152
    },
    {
        "name": "ร้านอาหารโกหมาก",
        "city": "Hua Hin",
        "type": "restaurant",
        "lat": 12.59874,
        "lng": 99.9494
    },
    {
        "name": "For Art's Sake",
        "city": "Hua Hin",
        "type": "museum",
        "lat": 12.60702,
        "lng": 99.94897
    },
    {
        "name": "Khao Chon Kai Training Camp",
        "city": "Kanchanaburi",
        "type": "landmark",
        "lat": 14.134733501594209,
        "lng": 99.39098142179421
    },
    {
        "name": "Opera House",
        "city": "Sydney",
        "type": "landmark",
        "lat": -33.856668575427555,
        "lng": 151.21575267549636
    },
    {
        "name": "Eiger, Mönch and Jungfrau",
        "city": "Lauterbrunnen",
        "type": "landmark",
        "lat": 46.57483835044853,
        "lng": 7.975742041690927
    }
];

travelData.forEach(function(location) {
    // marker
    let marker = L.marker([location.lat, location.lng]).addTo(map);
    
    // popup
    marker.bindPopup("<b>" + location.name + "</b><br>" + location.type + " in " + location.city);
});
