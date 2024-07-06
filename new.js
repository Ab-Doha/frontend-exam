document.getElementById("addToSpecific").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var fruitsChecked = document.getElementById("radioFruits").checked;
    var legumesChecked = document.getElementById("radioLegumes").checked;

    if (inputText.trim() === "" || (!fruitsChecked && !legumesChecked)) {
        alert("Please make sure that you enter all the details!");
        return;
    }

    if (fruitsChecked) {
        var newItem = document.createElement("div");
        newItem.textContent = "Fruits! - " + inputText;
        newItem.classList.add("divf");
        document.getElementById("listOfFruits").appendChild(newItem);
    } else if (legumesChecked) {
        var newItem = document.createElement("div");
        newItem.textContent = "Legumes! - " + inputText;
        newItem.classList.add("divg");
        document.getElementById("listOfLegumes").appendChild(newItem);
    }
});

        document.getElementById("addToGeneral").addEventListener("click", function() {
            var inputText = document.getElementById("inputText").value;
            var fruitsChecked = document.getElementById("fruits").checked;
            var legumesChecked = document.getElementById("legumes").checked;
            if (inputText.trim() === "" || (!fruitsChecked && !legumesChecked)) {
                alert("Please provide all details.");
                return;
            }
            var newItem = document.createElement("div");
            if (fruitsChecked) {
                newItem.textContent = "Fruits! - " + inputText;
            } else if (legumesChecked) {
                newItem.textContent = "Legumes! - " + inputText;
            }
            newItem.classList.add("divfg");
            document.getElementById("listOfFruitsLegumes").appendChild(newItem);
        });

        document.getElementById("searchButton").addEventListener("click", function() {
            var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
            var allItems = document.querySelectorAll("#listOfFruits > div, #listOfFruitsLegumes > div, #listOfLegumes > div");
            allItems.forEach(function(item) {
                var text = item.textContent.trim().toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.backgroundColor = "red";
                } else {
                    item.style.backgroundColor = "";
                }
            });
        });

document.getElementById("deleteButton").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    var allItems = document.querySelectorAll("#listOfFruits > div, #listOfFruitsLegumes > div, #listOfLegumes > div");
    allItems.forEach(function(item) {
        var text = item.textContent.trim().toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.transition = "opacity 0.5s ease"; 
            item.style.opacity = 0; 
            setTimeout(() => {
                item.remove(); 
            }, 500); 
        }
    });
});


document.getElementById("listOfFruitsLegumes").addEventListener("click", function(event) {
    var clickedItem = event.target;
    
    if (clickedItem.tagName === "DIV" && clickedItem.parentNode.id === "listOfFruitsLegumes") {
        var textContent = clickedItem.textContent.trim();
        if (textContent.startsWith("Fruits!")) {
            clickedItem.remove(); 
            var newItem = document.createElement("div");
            newItem.textContent = textContent;
            newItem.classList.add("divf");
            document.getElementById("listOfFruits").appendChild(newItem); 
        } else if (textContent.startsWith("Legumes!")) {
            clickedItem.remove(); 
            var newItem = document.createElement("div");
            newItem.textContent = textContent;
            newItem.classList.add("divg");
            document.getElementById("listOfLegumes").appendChild(newItem); 
        }
    }
});


document.getElementById("searchInput").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput");
    searchInput.style.width = "500px";
});


document.getElementById("searchInput").addEventListener("blur", function() {
    var searchInput = document.getElementById("searchInput");
    searchInput.style.width = "230px";
});