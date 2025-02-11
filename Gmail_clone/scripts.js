function toggleMenu() {
    const menu = document.getElementById('menu');
    const menu1=document.getElementById('menu1')
    const iconBars = document.querySelectorAll('.icon-bar');
    
    // Toggle the menu display
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menu1.style.display = menu1.style.display === 'block' ? 'none' : 'block';
  
    // Toggle the icon bars to make it look like a cross when opened
    iconBars.forEach(bar => {
      bar.classList.toggle('active');
    });
  }
  

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function AddDiv() {
    const container = document.getElementById("received-mail");

    // Get input values
    const toValue = document.getElementById("toInput").value;
    const subjectValue = document.getElementById("subjectInput").value;
    const messageValue = document.getElementById("messageInput").value;

    const newDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // Create a new div element
    const div = document.createElement("div");
    div.className = "main-center-content align-row justify-space-between";

    div.innerHTML = `
        <div class="main-content-left-box align-row">
            <input type="checkbox">
            <i class="fa fa-star-o star" onclick="toggleStar(this)"></i>
            <p class="main-center-container-heading">${toValue}</p>
            <div class="align-row">
                <p class="main-center-container-title">${subjectValue} - </p>
                <p>${messageValue}</p>
            </div>
        </div>
        <div>
            <p>${newDate}</p>
        </div>
    `;

    // Append the new div to the container
    container.prepend(div);

    // Clear input fields
    document.getElementById("toInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("messageInput").value = "";

    // Hide the popup
    document.getElementById("popup").style.display = "none";
}

// Toggle star color function
function toggleStar(element) {
    element.classList.toggle("checked");
}

function Deletecontent(){
            document.getElementById("toInput").value="";
            document.getElementById("subjectInput").value="";
            document.getElementById("messageInput").value="";
}


document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'select' class from all items
            listItems.forEach(li => li.querySelector(".main-compose-button").classList.remove("select"));

            // Add 'select' class to the clicked item
            this.querySelector(".main-compose-button").classList.add("select");
        });
    });
});

