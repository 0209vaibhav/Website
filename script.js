// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load mindmap
    loadMindMap();
    
    // Initialize scroll-based navigation
    initializeScrollNavigation();

    // Familial Housing project spread carousel
    const spreadsFamilial = [
        "Data/Works/Architecture/Familial Housing/cover.png",
        "Data/Works/Architecture/Familial Housing/Page 0.png",
        "Data/Works/Architecture/Familial Housing/Page 02.png",
        "Data/Works/Architecture/Familial Housing/Page 03.png",
        "Data/Works/Architecture/Familial Housing/Page 04.png",
        "Data/Works/Architecture/Familial Housing/Page 05.png",
        "Data/Works/Architecture/Familial Housing/Page 06.png",
        "Data/Works/Architecture/Familial Housing/Page 07.png",
        "Data/Works/Architecture/Familial Housing/Page 08.png",
        "Data/Works/Architecture/Familial Housing/Page 09.png",
        "Data/Works/Architecture/Familial Housing/Page 010.png",
        "Data/Works/Architecture/Familial Housing/Page 011.png",
        "Data/Works/Architecture/Familial Housing/Page 012.png",
        "Data/Works/Architecture/Familial Housing/Page 013.png",
        "Data/Works/Architecture/Familial Housing/Page 014.png",
        "Data/Works/Architecture/Familial Housing/Page 015.png",
        "Data/Works/Architecture/Familial Housing/Page 016.png",
        "Data/Works/Architecture/Familial Housing/Page 017.png",
        "Data/Works/Architecture/Familial Housing/Page 018.png",
        "Data/Works/Architecture/Familial Housing/Page 019.png",
        "Data/Works/Architecture/Familial Housing/Page 020.png",
        "Data/Works/Architecture/Familial Housing/Page 021.png",
        "Data/Works/Architecture/Familial Housing/Page 022.png",
        "Data/Works/Architecture/Familial Housing/Page 023.png",
        "Data/Works/Architecture/Familial Housing/Page 024.png",
        "Data/Works/Architecture/Familial Housing/Page 025.png"
    ];

    // High Performance Center project spread carousel
    const spreadsHPC = [
        "Data/Works/Architecture/High Performance Center/cover.png",
        "Data/Works/Architecture/High Performance Center/Page 0.png",
        "Data/Works/Architecture/High Performance Center/Page 02.png",
        "Data/Works/Architecture/High Performance Center/Page 03.png",
        "Data/Works/Architecture/High Performance Center/Page 04.png",
        "Data/Works/Architecture/High Performance Center/Page 05.png",
        "Data/Works/Architecture/High Performance Center/Page 06.png",
        "Data/Works/Architecture/High Performance Center/Page 07.png",
        "Data/Works/Architecture/High Performance Center/Page 08.png",
        "Data/Works/Architecture/High Performance Center/Page 09.png",
        "Data/Works/Architecture/High Performance Center/Page 010.png"
    ];

    // In transit Hub project spread carousel
    const spreadsTransit = [
        "Data/Works/Architecture/In transit Hub/cover.png",
        "Data/Works/Architecture/In transit Hub/Page 0.png",
        "Data/Works/Architecture/In transit Hub/Page 02.png",
        "Data/Works/Architecture/In transit Hub/Page 03.png",
        "Data/Works/Architecture/In transit Hub/Page 04.png",
        "Data/Works/Architecture/In transit Hub/Page 05.png",
        "Data/Works/Architecture/In transit Hub/Page 06.png",
        "Data/Works/Architecture/In transit Hub/Page 07.png",
        "Data/Works/Architecture/In transit Hub/Page 08.png"
    ];    

    // Architecture project spread carousel
    const spreads = [
        "Data/Works/Architecture/Administration building/cover.png",
        "Data/Works/Architecture/Administration building/Page 01.png",
        "Data/Works/Architecture/Administration building/Page 02.png",
        "Data/Works/Architecture/Administration building/Page 03.png",
        "Data/Works/Architecture/Administration building/Page 04.png",
        "Data/Works/Architecture/Administration building/Page 05.png",
        "Data/Works/Architecture/Administration building/Page 06.png",
        "Data/Works/Architecture/Administration building/Page 07.png",
        "Data/Works/Architecture/Administration building/Page 08.png",
        "Data/Works/Architecture/Administration building/Page 09.png"
    ];

    // Multi-Functional Entrance block project spread carousel
    const spreadsMultifunc = [
        "Data/Works/Architecture/Multi-Functional Entrance block/cover.png",
        "Data/Works/Architecture/Multi-Functional Entrance block/Page 0.png",
        "Data/Works/Architecture/Multi-Functional Entrance block/Page 02.png",
        "Data/Works/Architecture/Multi-Functional Entrance block/Page 03.png"
    ];

    // Eating Space project spread carousel
    const spreadsEating = [
        "Data/Works/Architecture/Eating space/cover.png",
        "Data/Works/Architecture/Eating space/Page 0.png",
        "Data/Works/Architecture/Eating space/Page 02.png"
    ];

    // Discrete Construction project spread carousel
    const spreadsDiscrete = [
        "Data/Works/Architecture/Discrete Construction/cover.png",
        "Data/Works/Architecture/Discrete Construction/Page 0.png",
        "Data/Works/Architecture/Discrete Construction/Page 02.png",
        "Data/Works/Architecture/Discrete Construction/Page 03.png"
    ];

    // Lokal Parklet project spread carousel
    const spreadsLokal = [
        "Data/Works/Architecture/Lokal Parklet/cover.png",
        "Data/Works/Architecture/Lokal Parklet/Page 0.png",
        "Data/Works/Architecture/Lokal Parklet/Page 02.png",
        "Data/Works/Architecture/Lokal Parklet/Page 03.png",
        "Data/Works/Architecture/Lokal Parklet/Page 04.png",
        "Data/Works/Architecture/Lokal Parklet/Page 05.png"
    ];

    // House of Warp & Weft project spread carousel
    const spreadsWarpWeft = [
        "Data/Works/Architecture/House of Warp & Weft/cover.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 0.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 02.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 03.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 04.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 05.png",
        "Data/Works/Architecture/House of Warp & Weft/Page 06.png"
    ];

    // Objects.Institutions.Identities project spread carousel
    const spreadsObjects = [
        "Data/Works/Architecture/Objects.Institutions.Identities/cover.png",
        "Data/Works/Architecture/Objects.Institutions.Identities/Page 0.png",
        "Data/Works/Architecture/Objects.Institutions.Identities/Page 02.png",
        "Data/Works/Architecture/Objects.Institutions.Identities/Page 03.png",
        "Data/Works/Architecture/Objects.Institutions.Identities/Page 04.png"
    ];

    // Vertical Village project spread carousel
    const spreadsVertical = [
        "Data/Works/Architecture/Vertical Village/cover.png",
        "Data/Works/Architecture/Vertical Village/Page 0.png",
        "Data/Works/Architecture/Vertical Village/Page 02.png",
        "Data/Works/Architecture/Vertical Village/Page 03.png",
        "Data/Works/Architecture/Vertical Village/Page 04.png",
        "Data/Works/Architecture/Vertical Village/Page 05.png",
        "Data/Works/Architecture/Vertical Village/Page 06.png",
        "Data/Works/Architecture/Vertical Village/Page 07.png"
    ];

    // Membrum Vestigial project spread carousel
    const spreadsMembrum = [
        "Data/Works/Architecture/Membrum Vestigial/cover.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 0.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 02.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 03.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 04.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 05.png",
        "Data/Works/Architecture/Membrum Vestigial/Page 06.png"
    ];

    // Bari in Coexistence project spread carousel
    const spreadsBari = [
        "Data/Works/Architecture/Bari in Coexistence/cover.png",
        "Data/Works/Architecture/Bari in Coexistence/Page 0.png",
        "Data/Works/Architecture/Bari in Coexistence/Page 02.png",
        "Data/Works/Architecture/Bari in Coexistence/Page 03.png",
        "Data/Works/Architecture/Bari in Coexistence/Page 04.png"
    ];

    // Sangam Gully project spread carousel
    const spreadsSangam = [
        "Data/Works/Architecture/Sangam Gully/cover.png",
        "Data/Works/Architecture/Sangam Gully/Page 0.png",
        "Data/Works/Architecture/Sangam Gully/Page 02.png",
        "Data/Works/Architecture/Sangam Gully/Page 03.png",
        "Data/Works/Architecture/Sangam Gully/Page 04.png",
        "Data/Works/Architecture/Sangam Gully/Page 05.png"
    ];

    // Fragments of Sidhpur History project spread carousel
    const spreadsSidhpur = [
        "Data/Works/Architecture/Fragments of Sidhpur History/cover.png",
        "Data/Works/Architecture/Fragments of Sidhpur History/Page 0.png",
        "Data/Works/Architecture/Fragments of Sidhpur History/Page 02.png"
    ];

    // Fly-Man-Go project spread carousel
    const spreadsFly = [
        "Data/Works/Architecture/Fly-Man-Go/cover.png",
        "Data/Works/Architecture/Fly-Man-Go/Page 0.png",
        "Data/Works/Architecture/Fly-Man-Go/Page 02.png",
        "Data/Works/Architecture/Fly-Man-Go/Page 03.png",
        "Data/Works/Architecture/Fly-Man-Go/Page 04.png"
    ];

    // Decoding Frie Otto project spread carousel
    const spreadsFrie = [
        "Data/Works/Architecture/Decoding Frie Otto/cover.png",
        "Data/Works/Architecture/Decoding Frie Otto/Page 0.png",
        "Data/Works/Architecture/Decoding Frie Otto/Page 02.png"
    ];

    let currentSpread = 0;
    let currentSpreadBari = 0;
    let currentSpreadFrie = 0;
    let currentSpreadDiscrete = 0;
    let currentSpreadEating = 0;
    let currentSpreadFamilial = 0;
    let currentSpreadFly = 0;
    let currentSpreadSidhpur = 0;
    let currentSpreadHPC = 0;
    let currentSpreadWarpWeft = 0;
    let currentSpreadTransit = 0;
    let currentSpreadLokal = 0;
    let currentSpreadMembrum = 0;
    let currentSpreadMultifunc = 0;
    let currentSpreadObjects = 0;
    let currentSpreadSangam = 0;
    let currentSpreadVertical = 0;
    let activeProject = 'admin'; // Track which project is currently in fullscreen

    const spreadImg = document.getElementById("spread-image");
    const spreadImgBari = document.getElementById("spread-image-bari");
    const spreadImgFrie = document.getElementById("spread-image-frie");
    const spreadImgDiscrete = document.getElementById("spread-image-discrete");
    const spreadImgEating = document.getElementById("spread-image-eating");
    const spreadImgFamilial = document.getElementById("spread-image-familial");
    const spreadImgFly = document.getElementById("spread-image-fly");
    const spreadImgSidhpur = document.getElementById("spread-image-sidhpur");
    const spreadImgHPC = document.getElementById("spread-image-hpc");
    const spreadImgWarpWeft = document.getElementById("spread-image-warpweft");
    const spreadImgTransit = document.getElementById("spread-image-transit");
    const spreadImgLokal = document.getElementById("spread-image-lokal");
    const spreadImgMembrum = document.getElementById("spread-image-membrum");
    const spreadImgMultifunc = document.getElementById("spread-image-multifunc");
    const spreadImgObjects = document.getElementById("spread-image-objects");
    const spreadImgSangam = document.getElementById("spread-image-sangam");
    const spreadImgVertical = document.getElementById("spread-image-vertical");
    
    // Find buttons by looking for the closest spread-carousel container
    const adminCarousel = spreadImg?.closest('.spread-carousel');
    const bariCarousel = spreadImgBari?.closest('.spread-carousel');
    const frieCarousel = spreadImgFrie?.closest('.spread-carousel');
    const discreteCarousel = spreadImgDiscrete?.closest('.spread-carousel');
    const eatingCarousel = spreadImgEating?.closest('.spread-carousel');
    const familialCarousel = spreadImgFamilial?.closest('.spread-carousel');
    const flyCarousel = spreadImgFly?.closest('.spread-carousel');
    const sidhpurCarousel = spreadImgSidhpur?.closest('.spread-carousel');
    const hpcCarousel = spreadImgHPC?.closest('.spread-carousel');
    const warpWeftCarousel = spreadImgWarpWeft?.closest('.spread-carousel');
    const transitCarousel = spreadImgTransit?.closest('.spread-carousel');
    const lokalCarousel = spreadImgLokal?.closest('.spread-carousel');
    const membrumCarousel = spreadImgMembrum?.closest('.spread-carousel');
    const multifuncCarousel = spreadImgMultifunc?.closest('.spread-carousel');
    const objectsCarousel = spreadImgObjects?.closest('.spread-carousel');
    const sangamCarousel = spreadImgSangam?.closest('.spread-carousel');
    const verticalCarousel = spreadImgVertical?.closest('.spread-carousel');
    
    // Get buttons from each carousel
    const prevBtn = adminCarousel?.querySelector(".prev-btn");
    const nextBtn = adminCarousel?.querySelector(".next-btn");
    const fullscreenBtn = adminCarousel?.querySelector(".fullscreen-btn");
    
    const prevBtnBari = bariCarousel?.querySelector(".prev-btn");
    const nextBtnBari = bariCarousel?.querySelector(".next-btn");
    const fullscreenBtnBari = bariCarousel?.querySelector(".fullscreen-btn");
    
    const prevBtnFrie = frieCarousel?.querySelector(".prev-btn");
    const nextBtnFrie = frieCarousel?.querySelector(".next-btn");
    const fullscreenBtnFrie = frieCarousel?.querySelector(".fullscreen-btn");
    
    const prevBtnDiscrete = discreteCarousel?.querySelector(".prev-btn");
    const nextBtnDiscrete = discreteCarousel?.querySelector(".next-btn");
    const fullscreenBtnDiscrete = discreteCarousel?.querySelector(".fullscreen-btn");
    
    const prevBtnEating = eatingCarousel?.querySelector(".prev-btn");
    const nextBtnEating = eatingCarousel?.querySelector(".next-btn");
    const fullscreenBtnEating = eatingCarousel?.querySelector(".fullscreen-btn");
    
    const prevBtnFamilial = familialCarousel?.querySelector(".prev-btn");
    const nextBtnFamilial = familialCarousel?.querySelector(".next-btn");
    const fullscreenBtnFamilial = familialCarousel?.querySelector(".fullscreen-btn");

    const prevBtnFly = flyCarousel?.querySelector(".prev-btn");
    const nextBtnFly = flyCarousel?.querySelector(".next-btn");
    const fullscreenBtnFly = flyCarousel?.querySelector(".fullscreen-btn");

    const prevBtnSidhpur = sidhpurCarousel?.querySelector(".prev-btn");
    const nextBtnSidhpur = sidhpurCarousel?.querySelector(".next-btn");
    const fullscreenBtnSidhpur = sidhpurCarousel?.querySelector(".fullscreen-btn");

    const prevBtnHPC = hpcCarousel?.querySelector(".prev-btn");
    const nextBtnHPC = hpcCarousel?.querySelector(".next-btn");
    const fullscreenBtnHPC = hpcCarousel?.querySelector(".fullscreen-btn");

    const prevBtnWarpWeft = warpWeftCarousel?.querySelector(".prev-btn");
    const nextBtnWarpWeft = warpWeftCarousel?.querySelector(".next-btn");
    const fullscreenBtnWarpWeft = warpWeftCarousel?.querySelector(".fullscreen-btn");

    const prevBtnTransit = transitCarousel?.querySelector(".prev-btn");
    const nextBtnTransit = transitCarousel?.querySelector(".next-btn");
    const fullscreenBtnTransit = transitCarousel?.querySelector(".fullscreen-btn");

    const prevBtnLokal = lokalCarousel?.querySelector(".prev-btn");
    const nextBtnLokal = lokalCarousel?.querySelector(".next-btn");
    const fullscreenBtnLokal = lokalCarousel?.querySelector(".fullscreen-btn");

    const prevBtnMembrum = membrumCarousel?.querySelector(".prev-btn");
    const nextBtnMembrum = membrumCarousel?.querySelector(".next-btn");
    const fullscreenBtnMembrum = membrumCarousel?.querySelector(".fullscreen-btn");

    const prevBtnMultifunc = multifuncCarousel?.querySelector(".prev-btn");
    const nextBtnMultifunc = multifuncCarousel?.querySelector(".next-btn");
    const fullscreenBtnMultifunc = multifuncCarousel?.querySelector(".fullscreen-btn");

    const prevBtnObjects = objectsCarousel?.querySelector(".prev-btn");
    const nextBtnObjects = objectsCarousel?.querySelector(".next-btn");
    const fullscreenBtnObjects = objectsCarousel?.querySelector(".fullscreen-btn");

    const prevBtnSangam = sangamCarousel?.querySelector(".prev-btn");
    const nextBtnSangam = sangamCarousel?.querySelector(".next-btn");
    const fullscreenBtnSangam = sangamCarousel?.querySelector(".fullscreen-btn");

    const prevBtnVertical = verticalCarousel?.querySelector(".prev-btn");
    const nextBtnVertical = verticalCarousel?.querySelector(".next-btn");
    const fullscreenBtnVertical = verticalCarousel?.querySelector(".fullscreen-btn");

    function updateSpreadImage() {
        if (spreadImg) spreadImg.src = spreads[currentSpread];
    }
    
    function updateSpreadImageBari() {
        if (spreadImgBari) spreadImgBari.src = spreadsBari[currentSpreadBari];
    }
    
    function updateSpreadImageFrie() {
        if (spreadImgFrie) spreadImgFrie.src = spreadsFrie[currentSpreadFrie];
    }
    
    function updateSpreadImageDiscrete() {
        if (spreadImgDiscrete) spreadImgDiscrete.src = spreadsDiscrete[currentSpreadDiscrete];
    }
    
    function updateSpreadImageEating() {
        if (spreadImgEating) spreadImgEating.src = spreadsEating[currentSpreadEating];
    }
    
    function updateSpreadImageFamilial() {
        if (spreadImgFamilial) spreadImgFamilial.src = spreadsFamilial[currentSpreadFamilial];
    }

    function updateSpreadImageFly() {
        if (spreadImgFly) spreadImgFly.src = spreadsFly[currentSpreadFly];
    }

    function updateSpreadImageSidhpur() {
        if (spreadImgSidhpur) spreadImgSidhpur.src = spreadsSidhpur[currentSpreadSidhpur];
    }

    function updateSpreadImageHPC() {
        if (spreadImgHPC) spreadImgHPC.src = spreadsHPC[currentSpreadHPC];
    }

    function updateSpreadImageWarpWeft() {
        if (spreadImgWarpWeft) spreadImgWarpWeft.src = spreadsWarpWeft[currentSpreadWarpWeft];
    }

    function updateSpreadImageTransit() {
        if (spreadImgTransit) spreadImgTransit.src = spreadsTransit[currentSpreadTransit];
    }

    function updateSpreadImageLokal() {
        if (spreadImgLokal) spreadImgLokal.src = spreadsLokal[currentSpreadLokal];
    }

    function updateSpreadImageMembrum() {
        if (spreadImgMembrum) spreadImgMembrum.src = spreadsMembrum[currentSpreadMembrum];
    }

    function updateSpreadImageMultifunc() {
        if (spreadImgMultifunc) spreadImgMultifunc.src = spreadsMultifunc[currentSpreadMultifunc];
    }

    function updateSpreadImageObjects() {
        if (spreadImgObjects) spreadImgObjects.src = spreadsObjects[currentSpreadObjects];
    }

    function updateSpreadImageSangam() {
        if (spreadImgSangam) spreadImgSangam.src = spreadsSangam[currentSpreadSangam];
    }

    function updateSpreadImageVertical() {
        if (spreadImgVertical) spreadImgVertical.src = spreadsVertical[currentSpreadVertical];
    }

    if (prevBtn && nextBtn && spreadImg) {
        prevBtn.addEventListener("click", function() {
            currentSpread = (currentSpread - 1 + spreads.length) % spreads.length;
            updateSpreadImage();
        });
        nextBtn.addEventListener("click", function() {
            currentSpread = (currentSpread + 1) % spreads.length;
            updateSpreadImage();
        });
    }

    // Bari project carousel navigation
    if (prevBtnBari && nextBtnBari && spreadImgBari) {
        prevBtnBari.addEventListener("click", function() {
            currentSpreadBari = (currentSpreadBari - 1 + spreadsBari.length) % spreadsBari.length;
            updateSpreadImageBari();
        });
        nextBtnBari.addEventListener("click", function() {
            currentSpreadBari = (currentSpreadBari + 1) % spreadsBari.length;
            updateSpreadImageBari();
        });
    }

    // Frie Otto project carousel navigation
    if (prevBtnFrie && nextBtnFrie && spreadImgFrie) {
        prevBtnFrie.addEventListener("click", function() {
            currentSpreadFrie = (currentSpreadFrie - 1 + spreadsFrie.length) % spreadsFrie.length;
            updateSpreadImageFrie();
        });
        nextBtnFrie.addEventListener("click", function() {
            currentSpreadFrie = (currentSpreadFrie + 1) % spreadsFrie.length;
            updateSpreadImageFrie();
        });
    }

    // Discrete Construction project carousel navigation
    if (prevBtnDiscrete && nextBtnDiscrete && spreadImgDiscrete) {
        prevBtnDiscrete.addEventListener("click", function() {
            currentSpreadDiscrete = (currentSpreadDiscrete - 1 + spreadsDiscrete.length) % spreadsDiscrete.length;
            updateSpreadImageDiscrete();
        });
        nextBtnDiscrete.addEventListener("click", function() {
            currentSpreadDiscrete = (currentSpreadDiscrete + 1) % spreadsDiscrete.length;
            updateSpreadImageDiscrete();
        });
    }

    // Eating Space project carousel navigation
    if (prevBtnEating && nextBtnEating && spreadImgEating) {
        prevBtnEating.addEventListener("click", function() {
            currentSpreadEating = (currentSpreadEating - 1 + spreadsEating.length) % spreadsEating.length;
            updateSpreadImageEating();
        });
        nextBtnEating.addEventListener("click", function() {
            currentSpreadEating = (currentSpreadEating + 1) % spreadsEating.length;
            updateSpreadImageEating();
        });
    }

    // Familial Housing project carousel navigation
    if (prevBtnFamilial && nextBtnFamilial && spreadImgFamilial) {
        prevBtnFamilial.addEventListener("click", function() {
            currentSpreadFamilial = (currentSpreadFamilial - 1 + spreadsFamilial.length) % spreadsFamilial.length;
            updateSpreadImageFamilial();
        });
        nextBtnFamilial.addEventListener("click", function() {
            currentSpreadFamilial = (currentSpreadFamilial + 1) % spreadsFamilial.length;
            updateSpreadImageFamilial();
        });
    }

    // Fly-Man-Go project carousel navigation
    if (prevBtnFly && nextBtnFly && spreadImgFly) {
        prevBtnFly.addEventListener("click", function() {
            currentSpreadFly = (currentSpreadFly - 1 + spreadsFly.length) % spreadsFly.length;
            updateSpreadImageFly();
        });
        nextBtnFly.addEventListener("click", function() {
            currentSpreadFly = (currentSpreadFly + 1) % spreadsFly.length;
            updateSpreadImageFly();
        });
    }

    // Fragments of Sidhpur History project carousel navigation
    if (prevBtnSidhpur && nextBtnSidhpur && spreadImgSidhpur) {
        prevBtnSidhpur.addEventListener("click", function() {
            currentSpreadSidhpur = (currentSpreadSidhpur - 1 + spreadsSidhpur.length) % spreadsSidhpur.length;
            updateSpreadImageSidhpur();
        });
        nextBtnSidhpur.addEventListener("click", function() {
            currentSpreadSidhpur = (currentSpreadSidhpur + 1) % spreadsSidhpur.length;
            updateSpreadImageSidhpur();
        });
    }

    // High Performance Center project carousel navigation
    if (prevBtnHPC && nextBtnHPC && spreadImgHPC) {
        prevBtnHPC.addEventListener("click", function() {
            currentSpreadHPC = (currentSpreadHPC - 1 + spreadsHPC.length) % spreadsHPC.length;
            updateSpreadImageHPC();
        });
        nextBtnHPC.addEventListener("click", function() {
            currentSpreadHPC = (currentSpreadHPC + 1) % spreadsHPC.length;
            updateSpreadImageHPC();
        });
    }

    // House of Warp & Weft project carousel navigation
    if (prevBtnWarpWeft && nextBtnWarpWeft && spreadImgWarpWeft) {
        prevBtnWarpWeft.addEventListener("click", function() {
            currentSpreadWarpWeft = (currentSpreadWarpWeft - 1 + spreadsWarpWeft.length) % spreadsWarpWeft.length;
            updateSpreadImageWarpWeft();
        });
        nextBtnWarpWeft.addEventListener("click", function() {
            currentSpreadWarpWeft = (currentSpreadWarpWeft + 1) % spreadsWarpWeft.length;
            updateSpreadImageWarpWeft();
        });
    }

    // In transit Hub project carousel navigation
    if (prevBtnTransit && nextBtnTransit && spreadImgTransit) {
        prevBtnTransit.addEventListener("click", function() {
            currentSpreadTransit = (currentSpreadTransit - 1 + spreadsTransit.length) % spreadsTransit.length;
            updateSpreadImageTransit();
        });
        nextBtnTransit.addEventListener("click", function() {
            currentSpreadTransit = (currentSpreadTransit + 1) % spreadsTransit.length;
            updateSpreadImageTransit();
        });
    }

    // Lokal Parklet project carousel navigation
    if (prevBtnLokal && nextBtnLokal && spreadImgLokal) {
        prevBtnLokal.addEventListener("click", function() {
            currentSpreadLokal = (currentSpreadLokal - 1 + spreadsLokal.length) % spreadsLokal.length;
            updateSpreadImageLokal();
        });
        nextBtnLokal.addEventListener("click", function() {
            currentSpreadLokal = (currentSpreadLokal + 1) % spreadsLokal.length;
            updateSpreadImageLokal();
        });
    }

    // Membrum Vestigial project carousel navigation
    if (prevBtnMembrum && nextBtnMembrum && spreadImgMembrum) {
        prevBtnMembrum.addEventListener("click", function() {
            currentSpreadMembrum = (currentSpreadMembrum - 1 + spreadsMembrum.length) % spreadsMembrum.length;
            updateSpreadImageMembrum();
        });
        nextBtnMembrum.addEventListener("click", function() {
            currentSpreadMembrum = (currentSpreadMembrum + 1) % spreadsMembrum.length;
            updateSpreadImageMembrum();
        });
    }

    // Multi-Functional Entrance block project carousel navigation
    if (prevBtnMultifunc && nextBtnMultifunc && spreadImgMultifunc) {
        prevBtnMultifunc.addEventListener("click", function() {
            currentSpreadMultifunc = (currentSpreadMultifunc - 1 + spreadsMultifunc.length) % spreadsMultifunc.length;
            updateSpreadImageMultifunc();
        });
        nextBtnMultifunc.addEventListener("click", function() {
            currentSpreadMultifunc = (currentSpreadMultifunc + 1) % spreadsMultifunc.length;
            updateSpreadImageMultifunc();
        });
    }

    // Objects.Institutions.Identities project carousel navigation
    if (prevBtnObjects && nextBtnObjects && spreadImgObjects) {
        prevBtnObjects.addEventListener("click", function() {
            currentSpreadObjects = (currentSpreadObjects - 1 + spreadsObjects.length) % spreadsObjects.length;
            updateSpreadImageObjects();
        });
        nextBtnObjects.addEventListener("click", function() {
            currentSpreadObjects = (currentSpreadObjects + 1) % spreadsObjects.length;
            updateSpreadImageObjects();
        });
    }

    // Sangam Gully project carousel navigation
    if (prevBtnSangam && nextBtnSangam && spreadImgSangam) {
        prevBtnSangam.addEventListener("click", function() {
            currentSpreadSangam = (currentSpreadSangam - 1 + spreadsSangam.length) % spreadsSangam.length;
            updateSpreadImageSangam();
        });
        nextBtnSangam.addEventListener("click", function() {
            currentSpreadSangam = (currentSpreadSangam + 1) % spreadsSangam.length;
            updateSpreadImageSangam();
        });
    }

    // Vertical Village project carousel navigation
    if (prevBtnVertical && nextBtnVertical && spreadImgVertical) {
        prevBtnVertical.addEventListener("click", function() {
            currentSpreadVertical = (currentSpreadVertical - 1 + spreadsVertical.length) % spreadsVertical.length;
            updateSpreadImageVertical();
        });
        nextBtnVertical.addEventListener("click", function() {
            currentSpreadVertical = (currentSpreadVertical + 1) % spreadsVertical.length;
            updateSpreadImageVertical();
        });
    }

    // Modal logic for fullscreen spreads
    const modal = document.getElementById("spread-modal");
    const modalImg = document.getElementById("modal-spread-image");
    const modalPrev = modal ? modal.querySelector(".prev-btn") : null;
    const modalNext = modal ? modal.querySelector(".next-btn") : null;
    const modalMinimize = modal ? modal.querySelector(".minimize-btn") : null;

    // Helper to exit modal and browser fullscreen
    function exitModalAndFullscreen() {
        if (modal) modal.classList.remove("open");
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    }

    // Open modal on fullscreen button click (and request browser fullscreen)
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'admin';
                modal.classList.add("open");
                modalImg.src = spreads[currentSpread];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Bari project fullscreen button
    if (fullscreenBtnBari) {
        fullscreenBtnBari.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'bari';
                modal.classList.add("open");
                modalImg.src = spreadsBari[currentSpreadBari];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Frie Otto project fullscreen button
    if (fullscreenBtnFrie) {
        fullscreenBtnFrie.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'frie';
                modal.classList.add("open");
                modalImg.src = spreadsFrie[currentSpreadFrie];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Discrete Construction project fullscreen button
    if (fullscreenBtnDiscrete) {
        fullscreenBtnDiscrete.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'discrete';
                modal.classList.add("open");
                modalImg.src = spreadsDiscrete[currentSpreadDiscrete];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Eating Space project fullscreen button
    if (fullscreenBtnEating) {
        fullscreenBtnEating.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'eating';
                modal.classList.add("open");
                modalImg.src = spreadsEating[currentSpreadEating];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Familial Housing project fullscreen button
    if (fullscreenBtnFamilial) {
        fullscreenBtnFamilial.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'familial';
                modal.classList.add("open");
                modalImg.src = spreadsFamilial[currentSpreadFamilial];
                // Request browser fullscreen for the modal
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Fly-Man-Go project fullscreen button
    if (fullscreenBtnFly) {
        fullscreenBtnFly.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'fly';
                modal.classList.add("open");
                modalImg.src = spreadsFly[currentSpreadFly];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // High Performance Center project fullscreen button
    if (fullscreenBtnHPC) {
        fullscreenBtnHPC.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'hpc';
                modal.classList.add("open");
                modalImg.src = spreadsHPC[currentSpreadHPC];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // House of Warp & Weft project fullscreen button
    if (fullscreenBtnWarpWeft) {
        fullscreenBtnWarpWeft.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'warpweft';
                modal.classList.add("open");
                modalImg.src = spreadsWarpWeft[currentSpreadWarpWeft];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // In transit Hub project fullscreen button
    if (fullscreenBtnTransit) {
        fullscreenBtnTransit.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'transit';
                modal.classList.add("open");
                modalImg.src = spreadsTransit[currentSpreadTransit];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Lokal Parklet project fullscreen button
    if (fullscreenBtnLokal) {
        fullscreenBtnLokal.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'lokal';
                modal.classList.add("open");
                modalImg.src = spreadsLokal[currentSpreadLokal];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Membrum Vestigial project fullscreen button
    if (fullscreenBtnMembrum) {
        fullscreenBtnMembrum.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'membrum';
                modal.classList.add("open");
                modalImg.src = spreadsMembrum[currentSpreadMembrum];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Multi-Functional Entrance block project fullscreen button
    if (fullscreenBtnMultifunc) {
        fullscreenBtnMultifunc.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'multifunc';
                modal.classList.add("open");
                modalImg.src = spreadsMultifunc[currentSpreadMultifunc];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Objects.Institutions.Identities project fullscreen button
    if (fullscreenBtnObjects) {
        fullscreenBtnObjects.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'objects';
                modal.classList.add("open");
                modalImg.src = spreadsObjects[currentSpreadObjects];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Sangam Gully project fullscreen button
    if (fullscreenBtnSangam) {
        fullscreenBtnSangam.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'sangam';
                modal.classList.add("open");
                modalImg.src = spreadsSangam[currentSpreadSangam];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Vertical Village project fullscreen button
    if (fullscreenBtnVertical) {
        fullscreenBtnVertical.addEventListener("click", function(e) {
            e.preventDefault();
            if (modal && modalImg) {
                activeProject = 'vertical';
                modal.classList.add("open");
                modalImg.src = spreadsVertical[currentSpreadVertical];
                if (modal.requestFullscreen) {
                    modal.requestFullscreen();
                } else if (modal.webkitRequestFullscreen) {
                    modal.webkitRequestFullscreen();
                } else if (modal.msRequestFullscreen) {
                    modal.msRequestFullscreen();
                }
            }
        });
    }

    // Modal navigation
    if (modalPrev && modalNext && modalImg) {
        modalPrev.addEventListener("click", function(e) {
            e.stopPropagation();
            if (activeProject === 'admin') {
                currentSpread = (currentSpread - 1 + spreads.length) % spreads.length;
                modalImg.src = spreads[currentSpread];
            } else if (activeProject === 'bari') {
                currentSpreadBari = (currentSpreadBari - 1 + spreadsBari.length) % spreadsBari.length;
                modalImg.src = spreadsBari[currentSpreadBari];
            } else if (activeProject === 'frie') {
                currentSpreadFrie = (currentSpreadFrie - 1 + spreadsFrie.length) % spreadsFrie.length;
                modalImg.src = spreadsFrie[currentSpreadFrie];
            } else if (activeProject === 'discrete') {
                currentSpreadDiscrete = (currentSpreadDiscrete - 1 + spreadsDiscrete.length) % spreadsDiscrete.length;
                modalImg.src = spreadsDiscrete[currentSpreadDiscrete];
            } else if (activeProject === 'eating') {
                currentSpreadEating = (currentSpreadEating - 1 + spreadsEating.length) % spreadsEating.length;
                modalImg.src = spreadsEating[currentSpreadEating];
            } else if (activeProject === 'familial') {
                currentSpreadFamilial = (currentSpreadFamilial - 1 + spreadsFamilial.length) % spreadsFamilial.length;
                modalImg.src = spreadsFamilial[currentSpreadFamilial];
            } else if (activeProject === 'fly') {
                currentSpreadFly = (currentSpreadFly - 1 + spreadsFly.length) % spreadsFly.length;
                modalImg.src = spreadsFly[currentSpreadFly];
            } else if (activeProject === 'sidhpur') {
                currentSpreadSidhpur = (currentSpreadSidhpur - 1 + spreadsSidhpur.length) % spreadsSidhpur.length;
                modalImg.src = spreadsSidhpur[currentSpreadSidhpur];
            } else if (activeProject === 'hpc') {
                currentSpreadHPC = (currentSpreadHPC - 1 + spreadsHPC.length) % spreadsHPC.length;
                modalImg.src = spreadsHPC[currentSpreadHPC];
            } else if (activeProject === 'warpweft') {
                currentSpreadWarpWeft = (currentSpreadWarpWeft - 1 + spreadsWarpWeft.length) % spreadsWarpWeft.length;
                modalImg.src = spreadsWarpWeft[currentSpreadWarpWeft];
            } else if (activeProject === 'transit') {
                currentSpreadTransit = (currentSpreadTransit - 1 + spreadsTransit.length) % spreadsTransit.length;
                modalImg.src = spreadsTransit[currentSpreadTransit];
            } else if (activeProject === 'lokal') {
                currentSpreadLokal = (currentSpreadLokal - 1 + spreadsLokal.length) % spreadsLokal.length;
                modalImg.src = spreadsLokal[currentSpreadLokal];
            } else if (activeProject === 'membrum') {
                currentSpreadMembrum = (currentSpreadMembrum - 1 + spreadsMembrum.length) % spreadsMembrum.length;
                modalImg.src = spreadsMembrum[currentSpreadMembrum];
            } else if (activeProject === 'multifunc') {
                currentSpreadMultifunc = (currentSpreadMultifunc - 1 + spreadsMultifunc.length) % spreadsMultifunc.length;
                modalImg.src = spreadsMultifunc[currentSpreadMultifunc];
            } else if (activeProject === 'objects') {
                currentSpreadObjects = (currentSpreadObjects - 1 + spreadsObjects.length) % spreadsObjects.length;
                modalImg.src = spreadsObjects[currentSpreadObjects];
            } else if (activeProject === 'sangam') {
                currentSpreadSangam = (currentSpreadSangam - 1 + spreadsSangam.length) % spreadsSangam.length;
                modalImg.src = spreadsSangam[currentSpreadSangam];
            } else if (activeProject === 'vertical') {
                currentSpreadVertical = (currentSpreadVertical - 1 + spreadsVertical.length) % spreadsVertical.length;
                modalImg.src = spreadsVertical[currentSpreadVertical];
            }
            updateMagnifierImage();
        });
        modalNext.addEventListener("click", function(e) {
            e.stopPropagation();
            if (activeProject === 'admin') {
                currentSpread = (currentSpread + 1) % spreads.length;
                modalImg.src = spreads[currentSpread];
            } else if (activeProject === 'bari') {
                currentSpreadBari = (currentSpreadBari + 1) % spreadsBari.length;
                modalImg.src = spreadsBari[currentSpreadBari];
            } else if (activeProject === 'frie') {
                currentSpreadFrie = (currentSpreadFrie + 1) % spreadsFrie.length;
                modalImg.src = spreadsFrie[currentSpreadFrie];
            } else if (activeProject === 'discrete') {
                currentSpreadDiscrete = (currentSpreadDiscrete + 1) % spreadsDiscrete.length;
                modalImg.src = spreadsDiscrete[currentSpreadDiscrete];
            } else if (activeProject === 'eating') {
                currentSpreadEating = (currentSpreadEating + 1) % spreadsEating.length;
                modalImg.src = spreadsEating[currentSpreadEating];
            } else if (activeProject === 'familial') {
                currentSpreadFamilial = (currentSpreadFamilial + 1) % spreadsFamilial.length;
                modalImg.src = spreadsFamilial[currentSpreadFamilial];
            } else if (activeProject === 'fly') {
                currentSpreadFly = (currentSpreadFly + 1) % spreadsFly.length;
                modalImg.src = spreadsFly[currentSpreadFly];
            } else if (activeProject === 'sidhpur') {
                currentSpreadSidhpur = (currentSpreadSidhpur + 1) % spreadsSidhpur.length;
                modalImg.src = spreadsSidhpur[currentSpreadSidhpur];
            } else if (activeProject === 'hpc') {
                currentSpreadHPC = (currentSpreadHPC + 1) % spreadsHPC.length;
                modalImg.src = spreadsHPC[currentSpreadHPC];
            } else if (activeProject === 'warpweft') {
                currentSpreadWarpWeft = (currentSpreadWarpWeft + 1) % spreadsWarpWeft.length;
                modalImg.src = spreadsWarpWeft[currentSpreadWarpWeft];
            } else if (activeProject === 'transit') {
                currentSpreadTransit = (currentSpreadTransit + 1) % spreadsTransit.length;
                modalImg.src = spreadsTransit[currentSpreadTransit];
            } else if (activeProject === 'lokal') {
                currentSpreadLokal = (currentSpreadLokal + 1) % spreadsLokal.length;
                modalImg.src = spreadsLokal[currentSpreadLokal];
            } else if (activeProject === 'membrum') {
                currentSpreadMembrum = (currentSpreadMembrum + 1) % spreadsMembrum.length;
                modalImg.src = spreadsMembrum[currentSpreadMembrum];
            } else if (activeProject === 'multifunc') {
                currentSpreadMultifunc = (currentSpreadMultifunc + 1) % spreadsMultifunc.length;
                modalImg.src = spreadsMultifunc[currentSpreadMultifunc];
            } else if (activeProject === 'objects') {
                currentSpreadObjects = (currentSpreadObjects + 1) % spreadsObjects.length;
                modalImg.src = spreadsObjects[currentSpreadObjects];
            } else if (activeProject === 'sangam') {
                currentSpreadSangam = (currentSpreadSangam + 1) % spreadsSangam.length;
                modalImg.src = spreadsSangam[currentSpreadSangam];
            } else if (activeProject === 'vertical') {
                currentSpreadVertical = (currentSpreadVertical + 1) % spreadsVertical.length;
                modalImg.src = spreadsVertical[currentSpreadVertical];
            }
            updateMagnifierImage();
        });
    }

    // Minimize/close modal and exit fullscreen
    if (modalMinimize) {
        modalMinimize.addEventListener("click", function(e) {
            e.stopPropagation();
            exitModalAndFullscreen();
        });
    }

    // Close modal on background click
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) exitModalAndFullscreen();
        });
    }
    // Close modal on ESC key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal && modal.classList.contains("open")) {
            exitModalAndFullscreen();
        }
    });

    const zoomBtn = document.querySelector(".spread-modal .zoom-btn");
    const magnifier = document.getElementById("magnifier-glass");
    let zoomActive = false;

    // Function to update magnifier image when modal image changes
    function updateMagnifierImage() {
        if (zoomActive && magnifier && modalImg) {
            magnifier.innerHTML = `<img src='${modalImg.src}' alt='Zoomed'>`;
        }
    }

    if (zoomBtn && modalImg && magnifier) {
        zoomBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            zoomActive = !zoomActive;
            console.log('Zoom active:', zoomActive);
            
            // Toggle active class for visual feedback
            zoomBtn.classList.toggle('active', zoomActive);
            
            magnifier.style.display = zoomActive ? "block" : "none";
            if (zoomActive) {
                // Set the magnifier image to match the modal image
                magnifier.innerHTML = `<img src='${modalImg.src}' alt='Zoomed'>`;
                console.log('Magnifier image created with src:', modalImg.src);
            }
        });

        modalImg.addEventListener("mousemove", function(e) {
            if (!zoomActive) return;
            const rect = modalImg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const glassSize = 300;

            // Check if cursor is within image bounds
            if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
                magnifier.style.display = "none";
                return;
            }

            console.log('Mouse position:', { x, y, rectWidth: rect.width, rectHeight: rect.height });

            // Show magnifier
            magnifier.style.display = "block";

            // Position the magnifier glass centered on cursor
            magnifier.style.left = (e.clientX - glassSize/2) + "px";
            magnifier.style.top = (e.clientY - glassSize/2) + "px";

            // Move the zoomed image inside the glass
            const img = magnifier.querySelector("img");
            if (img) {
                // Use CSS transform for zoom and positioning
                const scale = 2;
                const translateX = -(x * scale - glassSize / 2);
                const translateY = -(y * scale - glassSize / 2);
                
                img.style.transform = `scale(${scale}) translate(${translateX / scale}px, ${translateY / scale}px)`;
                img.style.width = rect.width + "px";
                img.style.height = rect.height + "px";
                
                console.log('Image positioning:', { 
                    scale: scale,
                    translateX: translateX,
                    translateY: translateY,
                    imgWidth: img.style.width,
                    imgHeight: img.style.height
                });
            }
        });

        // Hide magnifier when mouse leaves image or modal closes
        modalImg.addEventListener("mouseleave", function() {
            if (magnifier) {
                magnifier.style.display = "none";
                console.log('Mouse left image, hiding magnifier');
            }
        });
        modal.addEventListener("mouseleave", function() {
            if (magnifier) magnifier.style.display = "none";
            zoomActive = false;
        });
        // Also hide on minimize/close
        if (modalMinimize) {
            modalMinimize.addEventListener("click", function() {
                if (magnifier) magnifier.style.display = "none";
                zoomActive = false;
            });
        }
    }
});

function initializeScrollNavigation() {
    const sections = document.querySelectorAll('.scroll-section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    console.log('=== NAVIGATION DEBUG ===');
    console.log('Sections found:', sections.length);
    console.log('Nav links found:', navLinks.length);
    
    // Log all sections
    sections.forEach((section, index) => {
        console.log(`Section ${index}: ${section.id}`);
    });
    
    // Create a map of section IDs to their corresponding nav links
    const sectionToNavMap = new Map();
    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (navLink) {
            sectionToNavMap.set(sectionId, navLink);
            console.log(`Mapped section ${sectionId} to nav link`);
        } else {
            console.warn(`No nav link found for section ${sectionId}`);
        }
    });
    
    let currentActiveSection = null;
    
    // Simple function to set active navigation
    function setActiveNav(sectionId) {
        console.log(`Attempting to set active nav to: ${sectionId}`);
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
            console.log(`Removed active-link from ${link.getAttribute('href')}`);
        });
    
        // Add active class to the correct link
        const navLink = sectionToNavMap.get(sectionId);
        if (navLink) {
            navLink.classList.add('active-link');
            currentActiveSection = sectionId;
            console.log(`✅ Successfully activated ${sectionId} navigation`);
            
            // Verify it was added
            console.log(`${sectionId} link has active-link class:`, navLink.classList.contains('active-link'));
        } else {
            console.warn(`❌ No nav link found for section ${sectionId}`);
        }
    }
    
    // Simple scroll detection
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Get section positions
        const aboutSection = document.getElementById('about');
        const homeSection = document.getElementById('home');
        const computationSection = document.getElementById('computation');
        const architectureSection = document.getElementById('architecture');
        
        if (!aboutSection || !homeSection || !computationSection || !architectureSection) {
            console.warn('❌ One or more sections not found');
            return;
        }
        
        // Use getBoundingClientRect for more accurate detection
        const aboutRect = aboutSection.getBoundingClientRect();
        const homeRect = homeSection.getBoundingClientRect();
        const computationRect = computationSection.getBoundingClientRect();
        const architectureRect = architectureSection.getBoundingClientRect();
        
        console.log('Section positions in viewport:', {
            about: { top: aboutRect.top, bottom: aboutRect.bottom },
            home: { top: homeRect.top, bottom: homeRect.bottom },
            computation: { top: computationRect.top, bottom: computationRect.bottom },
            architecture: { top: architectureRect.top, bottom: architectureRect.bottom },
            viewportHeight: viewportHeight
        });
        
        let activeSectionId = null;
        
        // Check which section is most visible in the viewport
        // A section is considered "active" if its top is above the middle of the viewport
        const viewportMiddle = viewportHeight / 2;
        
        if (aboutRect.top <= viewportMiddle && aboutRect.bottom > viewportMiddle) {
            activeSectionId = 'about';
        } else if (homeRect.top <= viewportMiddle && homeRect.bottom > viewportMiddle) {
            activeSectionId = 'home';
        } else if (computationRect.top <= viewportMiddle && computationRect.bottom > viewportMiddle) {
            activeSectionId = 'computation';
        } else if (architectureRect.top <= viewportMiddle && architectureRect.bottom > viewportMiddle) {
            activeSectionId = 'architecture';
        } else {
            // Fallback: if no section is clearly in the middle, use scroll position
            if (scrollPosition < homeSection.offsetTop) {
                activeSectionId = 'about';
            } else if (scrollPosition < computationSection.offsetTop) {
                activeSectionId = 'home';
            } else if (scrollPosition < architectureSection.offsetTop) {
                activeSectionId = 'computation';
            } else {
                activeSectionId = 'architecture';
            }
        }
        
        console.log('Determined active section:', activeSectionId);
        
        if (currentActiveSection !== activeSectionId) {
            console.log(`🔄 Switching from ${currentActiveSection} to ${activeSectionId}`);
            setActiveNav(activeSectionId);
        }
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add additional scroll listeners for better detection
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    
    // Set initial state
    console.log('Setting initial state...');
    handleScroll();
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            console.log(`Clicked nav link: ${targetId}`);
            
            if (targetSection) {
                setActiveNav(targetId);
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Target section not found: ${targetId}`);
            }
        });
    });
    
    // Test functions
    window.testNavigation = function(sectionId) {
        console.log(`🧪 Testing navigation for section: ${sectionId}`);
        setActiveNav(sectionId);
    };
    
    window.checkNavLinks = function() {
        console.log('🔍 Checking all nav links:');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const hasActive = link.classList.contains('active-link');
            console.log(`${href}: active-link = ${hasActive}`);
        });
    };
    
    window.forceTest = function() {
        console.log('🧪 Force testing all sections...');
        setTimeout(() => testNavigation('about'), 100);
        setTimeout(() => testNavigation('home'), 500);
        setTimeout(() => testNavigation('computation'), 1000);
        setTimeout(() => testNavigation('architecture'), 1500);
    };
}

// Add hover pop-up behavior
document.querySelectorAll('.hover-popup').forEach(item => {
    let popup = null;
    let timeoutId = null;
    
    function createPopup() {
        if (popup) return; // Don't create if already exists
        
        popup = document.createElement('div');
        popup.className = 'popup-box';
        
        const content = item.getAttribute('data-hover');
        
        if (content.includes('&#10;')) {
            // Handle multiple lines (emails)
            const emails = content.split('&#10;');
            const container = document.createElement('div');
            container.className = 'popup-content';
            
            emails.forEach(email => {
                const lineDiv = document.createElement('div');
                lineDiv.className = 'popup-line';
                lineDiv.style.display = 'flex';
                lineDiv.style.alignItems = 'center';
                
                const textSpan = document.createElement('span');
                textSpan.innerText = email;
                
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-btn';
                copyButton.style.marginLeft = '2px';
                copyButton.innerHTML = '📋';
                copyButton.onclick = (e) => {
                    e.stopPropagation();
                    copyText(email);
                };
                
                lineDiv.appendChild(textSpan);
                lineDiv.appendChild(copyButton);
                container.appendChild(lineDiv);
            });
            
            popup.appendChild(container);
        } else {
            // Handle single line (other contact info)
            const lineDiv = document.createElement('div');
            lineDiv.className = 'popup-line';
            
            const textSpan = document.createElement('span');
            textSpan.innerText = content;
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.innerHTML = '📋';
            copyButton.onclick = (e) => {
                e.stopPropagation();
                copyText(content);
            };
            
            lineDiv.appendChild(textSpan);
            lineDiv.appendChild(copyButton);
            popup.appendChild(lineDiv);
        }
        
        document.body.appendChild(popup);
        
        const rect = item.getBoundingClientRect();
        popup.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
        popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
        popup.style.transform = 'translateX(-50%)';
    }
    
    function removePopup() {
        if (popup) {
            popup.remove();
            popup = null;
        }
    }
    
    function clearRemovalTimeout() {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }
    
    item.addEventListener('mouseenter', () => {
        clearRemovalTimeout();
        createPopup();
    });
    
    item.addEventListener('mouseleave', () => {
        clearRemovalTimeout();
        timeoutId = setTimeout(() => {
            const isMouseOverPopup = popup && popup.matches(':hover');
            if (!isMouseOverPopup) {
                removePopup();
            }
        }, 100);
    });

    // Add event listeners to the document to handle popup hover
    document.addEventListener('mouseover', (e) => {
        if (popup && (e.target === popup || popup.contains(e.target))) {
            clearRemovalTimeout();
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (popup && (e.target === popup || popup.contains(e.target))) {
            clearRemovalTimeout();
            timeoutId = setTimeout(() => {
                const isMouseOverTrigger = item.matches(':hover');
                const isMouseOverPopup = popup.matches(':hover');
                if (!isMouseOverTrigger && !isMouseOverPopup) {
                    removePopup();
                }
            }, 100);
        }
    });

    // Keep the rest of your click handler for opening links...
    item.addEventListener('click', function() {
        const dataHover = this.getAttribute('data-hover');
        let url = '';
        
        if (dataHover.includes('@')) {
            url = `mailto:${dataHover}`;
        } else if (dataHover.includes('+')) {
            url = `tel:${dataHover.replace(/\s+/g, '')}`;
        } else if (dataHover.includes('linkedin.com')) {
            url = `https://${dataHover}`;
        } else if (dataHover.includes('github.com')) {
            url = `https://${dataHover}`;
        }
        
        if (url) {
            window.open(url, '_blank');
        }
    });
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show a brief "Copied!" message
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'Copied!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Mindmap
async function loadMindMap() {
    const data = await fetch("mindmap_data.json").then(res => res.json());
  
    const nodes = data.map(d => ({ ...d }));
    const links = data.filter(d => d.parent).map(d => ({
      source: d.parent,
      target: d.id
    }));
  
    const svg = d3.select("#mindmap");
    svg.selectAll('*').remove(); // Clear previous
    
    function updateSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      svg.attr("width", width).attr("height", height);
      
      // Remove center-pulling forces that cause edge sticking
      simulation.force("x", null);
      simulation.force("y", null);
      
      // Update collision radius based on screen size
      const maxRadius = Math.min(width, height) * 0.1;
      simulation.force("collision", d3.forceCollide().radius(d => {
        if (d.type === 'center') return Math.min(90, maxRadius);
        if (d.media) return Math.min(80, maxRadius);
        return Math.min(60, maxRadius);
      }));
      
      simulation.alpha(0.3).restart();
    }

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(250))
      .force("charge", d3.forceManyBody().strength(-600))
      .force("collision", d3.forceCollide().radius(d => d.type === 'center' ? 90 : 80))
      .alphaDecay(0.001)
      .velocityDecay(0.1);

    updateSize();
    window.addEventListener('resize', updateSize);

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link");

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .on("click", (event, d) => {
        if (d.link) window.open(d.link, "_blank");
      });

    // Center node: large text only
    node.filter(d => d.type === 'center')
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 10)
      .attr("font-size", 38)
      .attr("font-weight", 700)
      .text(d => d.id);

    // Project nodes: image, title, subtitle, tags, rect
    const projectNodes = node.filter(d => d.media);
    projectNodes.append("rect")
      .attr("x", -90).attr("y", -90)
      .attr("width", 180).attr("height", 180)
      .attr("rx", 14).attr("ry", 14);
    projectNodes.append("image")
      .attr("xlink:href", d => d.media)
      .attr("x", -90).attr("y", -90)
      .attr("width", 180).attr("height", 90)
      .attr("clip-path", "inset(0 round 14px 14px 0 0)");
    // Title (smaller, wrapped)
    projectNodes.append("text")
      .attr("class", "node-title")
      .attr("x", 0).attr("y", 8)
      .attr("text-anchor", "middle")
      .attr("font-size", 14)
      .attr("font-weight", 700)
      .attr("dominant-baseline", "middle")
      .each(function(d) {
        const text = d3.select(this);
        const words = (d.title || "").split(" ");
        let line = [];
        let lineNumber = 0;
        let lineHeight = 1.1; // ems
        let y = 8;
        let tspan = text.append("tspan").attr("x", 0).attr("y", y);
        for (let i = 0; i < words.length; i++) {
          line.push(words[i]);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > 160 && line.length > 1) {
            line.pop();
            tspan.text(line.join(" "));
            line = [words[i]];
            tspan = text.append("tspan")
              .attr("x", 0)
              .attr("y", y + ++lineNumber * 16)
              .text(words[i]);
          }
        }
      });
    // Subtitle (smaller, wrapped, below title)
    projectNodes.append("text")
      .attr("class", "node-subtitle")
      .attr("x", 0).attr("y", 32)
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .attr("font-weight", 400)
      .attr("fill", "#444")
      .attr("dominant-baseline", "middle")
      .each(function(d) {
        const text = d3.select(this);
        const words = (d.subtitle || "").split(" ");
        let line = [];
        let lineNumber = 0;
        let lineHeight = 1.1; // ems
        let y = 32;
        let tspan = text.append("tspan").attr("x", 0).attr("y", y);
        for (let i = 0; i < words.length; i++) {
          line.push(words[i]);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > 160 && line.length > 1) {
            line.pop();
            tspan.text(line.join(" "));
            line = [words[i]];
            tspan = text.append("tspan")
              .attr("x", 0)
              .attr("y", y + ++lineNumber * 12)
              .text(words[i]);
          }
        }
      });
    projectNodes.append("text")
      .attr("class", "node-tags")
      .attr("x", 0).attr("y", 60)
      .attr("text-anchor", "middle")
      .text(d => (d.tags || []).join('    '));

    // Other nodes: simple rect + text
    const simpleNodes = node.filter(d => !d.media && d.type !== 'center');
    simpleNodes.append("rect")
      .attr("x", -55).attr("y", -25)
      .attr("width", 110).attr("height", 50)
      .attr("rx", 14).attr("ry", 14);
    simpleNodes.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 6)
      .text(d => d.id);

    simulation.on("tick", () => {
      // Constrain nodes to screen boundaries with padding
      nodes.forEach(d => {
        const radius = d.type === 'center' ? 90 : (d.media ? 80 : 60);
        const width = window.innerWidth;
        const height = window.innerHeight;
        const padding = 50; // Add padding from edges
        
        // Apply boundary constraints with padding
        if (d.x < radius + padding) {
          d.x = radius + padding;
          d.vx = Math.abs(d.vx) * 0.5; // Bounce back gently
        }
        if (d.x > width - radius - padding) {
          d.x = width - radius - padding;
          d.vx = -Math.abs(d.vx) * 0.5; // Bounce back gently
        }
        if (d.y < radius + padding) {
          d.y = radius + padding;
          d.vy = Math.abs(d.vy) * 0.5; // Bounce back gently
        }
        if (d.y > height - radius - padding) {
          d.y = height - radius - padding;
          d.vy = -Math.abs(d.vy) * 0.5; // Bounce back gently
        }
      });
      
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Add continuous motion
    function addSubtleMotion() {
      nodes.forEach(d => {
        if (!d.fx && !d.fy) { // Only add motion to non-fixed nodes
          const randomAngle = Math.random() * Math.PI * 2;
          const randomForce = Math.random() * 0.5; // Very subtle force
          d.vx += Math.cos(randomAngle) * randomForce;
          d.vy += Math.sin(randomAngle) * randomForce;
        }
      });
      simulation.alpha(0.1).restart(); // Restart with low alpha for smooth motion
    }

    // Add subtle motion every 3 seconds
    setInterval(addSubtleMotion, 3000);

    // Keep simulation active
    simulation.alphaDecay(0.0001); // Very slow decay to keep it active longer

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      // Add a random impulse when released
      const randomAngle = Math.random() * Math.PI * 2;
      const randomForce = Math.random() * 10;
      d.vx = Math.cos(randomAngle) * randomForce;
      d.vy = Math.sin(randomAngle) * randomForce;
    }
}