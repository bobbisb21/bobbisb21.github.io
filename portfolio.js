const artworks = [
    [2017, "watercolor", "Garden Tools", "images/gardentools.jpg"],
    [2007, "watercolor", "Self Portrait in a Coral Reef", "images/watercolorpaintingbobbi.jpg"],
    [2013, "oil", "Landscape 1", "images/landscape.gif"],
    [2002, "acrylic", "Jellyfish", "images/highschooljellyfish.jpg"],
    [1999, "acrylic", "Op-Art 1", "images/opticalillusion1.jpg"],
    [1999, "acrylic", "Op-Art 2", "images/opticalillusion2.jpg"],
    [2006, "oil", "Sisters", "images/angiebecky.jpg"],
    [2004, "bookbinding", "Tony & Thomas Cover", "images/accordianfoldbook.jpg"],
    [2004, "bookbinding", "Tony & Thomas Whole Shot", "images/accordianfoldbook2.jpg"],
    [2004, "bookbinding", "Tony & Thomas Interior", "images/accordianfoldbook3.jpg"],
    [2004, "acrylic", "Serve", "images/childfromaphoto.jpg"],
    [2006, "collage", "In 5 Years", "images/collage1.jpg"],
    [2006, "collage", "In 5 Years", "images/collage2.jpg"],
    [2005, "collage", "Piecemeal Collage", "images/collagecollage.jpg"],
    [2005, "collage", "Piecemeal Collage Close-Up", "images/collagescollage2.jpg"],
    [2005, "collage", "Piecemeal Collage Close-Up", "images/collagescollage3.jpg"],
    [2005, "collage", "Piecemeal Collage Close-Up", "images/collagescollage4.jpg"],
    [2006, "drawing", "Figure Drawing", "images/figuredrawing.jpg"],
    [2006, "drawing", "Figure Drawing", "images/figuredrawing2.jpg"],
    [2006, "drawing", "Figure Drawing", "images/figuredrawing3.jpg"],
    [2006, "drawing", "Figure Drawing", "images/figuredrawing4.jpg"],
    [2006, "drawing", "Figure Drawing", "images/figuredrawing5.jpg"],
    [2006, "sculpture", "Fish Tank", "images/fishtank4.jpg"],
    [2006, "sculpture", "Fish Tank", "images/fishtank.jpg"],
    [2006, "sculpture", "Fish Tank", "images/fishtank2.jpg"],
    [2006, "sculpture", "Fish Tank", "images/fishtank3.jpg"],
    [2006, "sculpture", "Fish Tank", "images/fishtank5.jpg"],
    [2008, "mysterious other", "HairBrush", "images/hairbrushes.jpg"],
    [1989, "collage", "Collage Instructionals", "images/howtocollage.jpg"],
    [2003, "design", "Lily Pad Spoon Plan", "images/IMG_2507.jpg"],
    [2003, "design", "Lily Pad Spoon", "images/IMG_2519.jpg"],
    [2003, "design", "Pattern from Fonts", "images/IMG_2508.jpg"],
    [2003, "design", "Phizome Pattern Pen and Ink", "images/IMG_2513.jpg"],
    [2003, "design", "Rhizome Pattern Planning", "images/IMG_2514.jpg"],
    [2003, "design", "Rhizome Pattern Planning", "images/IMG_2515.jpg"],
    [2003, "design", "Rhizome Pattern Color Study", "images/IMG_2517.jpg"],
    [2005, "oil", "Collaged Landscape", "images/oilpainting.jpg"],
    [2009, "watercolor", "Self Portrait as an Eagle Crab", "images/IMG_2828.jpg"],
    [2004, "installation", "Art Annex Installation", "images/installation.jpg"],
    [2004, "installation", "Art Annex Installation", "images/installation2.jpg"],
    [2005, "collage", "Cut Paper on Wall", "images/putabirdonit.jpg"],
    [2006, "sculpture", "Plaster Transfer Ceramic Tiles Installed in Public Places", "images/putabirdonit2.jpg"],
    [2006, "sculpture", "Plaster Transfer Ceramic Tiles Installed in Public Places", "images/putabirdonit3.jpg"], 
    [2007, "watercolor", "Underwater Paradise", "images/putabirdonit4.jpg"],
    [2007, "watercolor", "Underwater Paradise, Close-Up", "images/putabirdonit5.jpg"],
    [1989, "collage", "Happy Porcupine", "images/IMG_1988.JPG"],
    [2008, "acrylic", "Abstract with Figure Studies", "images/abstraction1.jpg"],
    [2009, "acrylic", "Abstract with Resin Grandfather", "images/abstraction3.jpg"],
    [2010, "acrylic", "Abstract with Bees", "images/bees.jpg"],
    [2015, "collage", "French Horn Storm", "images/collage5.jpg"],
    [2010, "acrylic", "Egypt", "images/egypt.jpg"],
    [2008, "acrylic", "I Have Experienced a Range of Emotions", "images/glitterati.jpg"],
    [2009, "acrylic", "Abstract with Resin Grandfather 2", "images/IMG_1325.jpg"],
    [2010, "acrylic", "Kitty Sue on the Brown Chair", "images/IMG_1967.JPG"],
    [2010, "installation", "Dolls in the Pin Room", "images/IMG_1975.JPG"],
    [2008, "acrylic", "Spen Mueller", "images/IMG_1984.JPG"],
    [2009, "oil", "Flamingo", "images/IMG_2797.JPG"],
    [2010, "acrylic", "Who Knew", "images/IMG_2804.jpg"],
    [2009, "acrylic", "The Fall Was Very Difficult", "images/IMG_2809.jpg"],
    [2010, "acrylic", "Ribcage", "images/IMG_2811.jpg"],
    [2010, "acrylic", "Trash", "images/IMG_2819.jpg"],
    [2011, "acrylic", "Whale", "images/IMG_2820.jpg"],
    [2009, "acrylic", "Mailer", "images/IMG_2819.jpg"],
    [2009, "collage", "Loneliness", "images/IMG_2824.jpg"],
    [2010, "acrylic", "Bananas", "images/IMG_2825.jpg"],
    [2008, "acrylic", "R.U.C.R.", "images/IMG_2831.jpg"],
    [2010, "acrylic", "Self-Portrait", "images/IMG_2832.jpg"],
    [2009, "acrylic", "Roberta Illinois", "images/IMG_2833.jpg"],
    [2010, "acrylic", "Oil Spill", "images/IMG_2834.jpg"],
    [2010, "acrylic", "Oil Spill, Close-Up", "images/IMG_2835.jpg"],
    [2010, "acrylic", "Oil Spill, Close-Up", "images/IMG_2836.jpg"],
    [2010, "acrylic", "Oil Spill, Close-Up", "images/IMG_2837.jpg"],
    [2010, "acrylic", "Oil Spill, Close-Up", "images/IMG_2838.jpg"],
    [2009, "collage", "Piranhas", "images/IMG_3713.JPG"],
    [2005, "oil", "Sleeping Model", "images/oilpainting2.jpg"],
    [2009, "collage", "We've Permanently Poisoned the Earth So Painting's O.K.", "images/earth.jpg"],
    [2011, "sculpture", "Garbage Book", "images/garbagebook.png"],
    [2011, "sculpture", "Garbage Book, Close-Up", "images/garbagebook1.png"],
    [2011, "sculpture", "Garbage Book, Close-Up", "images/garbagebook2.png"],
    [2011, "sculpture", "Garbage Book, Close-Up", "images/garbagebook3.png"],
    [2014, "watercolor", "Distance Dinner Dates", "images/IMG_8714.JPG"],
    [2014, "watercolor", "Distance Dinner Dates, Detail", "images/Bennett_Roberta_Detail.jpg"],
    [2014, "installation", "Distance Dinner Dates, Installation at Syracuse School of Education", "images/IMG_8948.JPG"],
    [2014, "watercolor", "Distance Dinner Dates", "images/IMG_8585.JPG"],
	[2012, "sculpture", "Paper Mache Centerpiece", "images/weddingsculpture.jpg"],
	[2012, "sculpture", "Paper Mache Centerpiece", "images/weddingsculpture2.jpg"],
	[2012, "drawing", "Altruistic Thinking", "images/IMG_4802.PNG"],
	[1999, "drawing", "Soft Underseas", "images/bennettart09.jpg"],
	[1999, "drawing", "Willow Tree", "images/bennettart10.jpg"],
	[2006, "sculpture", "Family Dinner", "images/bennettart11.jpg"],
	[2006, "sculpture", "Family Dinner", "images/bennettart12.jpg"],
	[1999, "drawing", "Pencil Still Life", "images/bennettart13.jpg"],
	[2000, "watercolor", "Georgia Inspired", "images/bennettart14.jpg"],
	[2000, "drawing", "Fan Portrait Pencil Still Life", "images/bennettart15.jpg"],
	[2004, "oil", "Lanscape", "images/bennettart16.jpg"],
	[2003, "acrylic", "Jelly Fish", "images/bennettart17.jpg"],
	[2002, "drawing", "The Prize", "images/bennettart19.jpg"],
	[2000, "drawing", "Color Pencil Still Life", "images/bennettart20.jpg"],
	[2001, "drawing", "Self-Portrat", "images/bennettart21.jpg"]

];

// Initialize with all images
document.addEventListener("DOMContentLoaded", function() {
    generateImages();
    
    // Add event listeners to all material buttons (first subdrop)
    const materialButtons = document.querySelectorAll('.subdrop:nth-of-type(1) button');
    materialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const material = this.textContent.toLowerCase();
            const year = window.selectedYear || true;
            generateImages(year, material);
        });
    });
    
    // Add event listeners to year buttons (second subdrop)
    const yearButtons = document.querySelectorAll('.subdrop:nth-of-type(2) button');
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            const year = parseInt(this.textContent);
            const material = window.selectedMaterial || true;
            window.selectedYear = year;
            generateImages(year, material);
        });
    });
    
    // Add a reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Show All';
    resetButton.className = 'reset-button';
    resetButton.addEventListener('click', resetFilters);
    document.querySelector('nav').appendChild(resetButton);
});

function generateImages(year = true, material = true) {
    console.log("Filtering with year:", year, "material:", material);
    
    // Store the current selections as global variables
    window.selectedYear = year;
    window.selectedMaterial = material;
    
    document.getElementById("root").innerHTML = "";
    let finalList = [];
    
    for (let i = 0; i < artworks.length; i++) {
        // Skip entries with empty image paths or placeholder data
        if (!artworks[i][3] || artworks[i][3] === "images/") {
            continue;
        }
        
        if (year === true && material !== true) {
            // Filter by material only
            if (artworks[i][1] === material) {
                finalList.push(artworks[i]);
            }
        } else if (year !== true && material === true) {
            // Filter by year only
            if (artworks[i][0] === year) {
                finalList.push(artworks[i]);
            }
        } else if (year !== true && material !== true) {
            // Filter by both year and material
            if (artworks[i][1] === material && artworks[i][0] === year) {
                finalList.push(artworks[i]);
            }
        } else if (year === true && material === true) {
            // Show all
            finalList.push(artworks[i]);
        }
    }
    
    console.log("Found", finalList.length, "matching artworks");
    
    // Add images to the page
    for (let i = 0; i < finalList.length; i++) {
        const container = document.createElement("div");
        container.className = "artwork-container";
        
        const img = document.createElement("img");
        img.setAttribute("src", finalList[i][3]);
        img.setAttribute("alt", finalList[i][2]);
        img.onerror = function() {
            this.src = "images/default.jpg"; // Fallback image if original fails to load
        };
        
        const caption = document.createElement("p");
        caption.textContent = `${finalList[i][2]} (${finalList[i][0]}, ${finalList[i][1]})`;
        
        container.appendChild(img);
        container.appendChild(caption);
        document.getElementById("root").appendChild(container);
    }
    
    // Update UI to show active filters
    updateFilterDisplay(year, material);
}

function updateFilterDisplay(year, material) {
    // Add visual feedback to show active filters
    const allButtons = document.querySelectorAll('.subdrop button');
    allButtons.forEach(button => {
        button.classList.remove('active');
        
        // Highlight active material button
        if (material !== true && button.textContent.toLowerCase() === material) {
            button.classList.add('active');
        }
        
        // Highlight active year button
        if (year !== true && button.textContent === year.toString()) {
            button.classList.add('active');
        }
    });
}

// Reset function
function resetFilters() {
    window.selectedYear = true;
    window.selectedMaterial = true;
    generateImages();
}