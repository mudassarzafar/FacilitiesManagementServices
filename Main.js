
// var hardServicesSubMenu = document.querySelector('.hard-services-sub-menu');
// var softServicesSubMenu = document.querySelector('.soft-services-sub-menu');
// var ourServicesSubMenu = document.querySelector('.dropdown2');
// var ourCompanySubMenu = document.querySelector('.dropdown');


// const menuBurger=document.querySelector('#menu-burger');
// const listbar=document.querySelector('.list-navbar')
// menuBurger.addEventListener('click',function(){
//   if (window.innerWidth <= 890){
// if (listbar.style.display === 'none' || listbar.style.display === '') {
//   listbar.style.display = 'block';
//   softServicesSubMenu.style.display = 'none';
//   hardServicesSubMenu.style.display = 'none';
//   ourCompanySubMenu.style.display = 'none';
//   ourServicesSubMenu.style.display = 'none';
// }else {
  
//   listbar.style.display = 'none';
//   }
  
// }
// }
// )
// window.addEventListener('resize', function () {
//   // Check window width when resized
//   if (window.innerWidth > 890) {
//     listbar.style.display = 'block';
//     softServicesSubMenu.style.display = 'block';
//   hardServicesSubMenu.style.display = 'block';
//   ourCompanySubMenu.style.display = 'block';
//   ourServicesSubMenu.style.display = 'block';
//   }
//   else if (window.innerWidth < 890) {
//     listbar.style.display = 'none';
//     softServicesSubMenu.style.display = 'none';
//   hardServicesSubMenu.style.display = 'none';
//   ourCompanySubMenu.style.display = 'none';
//   ourServicesSubMenu.style.display = 'none';
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {

//   var hardServicesImg2 = document.querySelector('#hard-services-pic2');
//   var softServicesImg2 = document.querySelector('#soft-services-pic2');
//   var ourServicesImg = document.querySelector('.our-services img');
//   var ourCompanyImg = document.querySelector('.our-company img');



//   // Get the corresponding sub-menus
//   var hardServicesSubMenu = document.querySelector('.hard-services-sub-menu');
//   var softServicesSubMenu = document.querySelector('.soft-services-sub-menu');
//   var ourServicesSubMenu = document.querySelector('.dropdown2');
//   var ourCompanySubMenu = document.querySelector('.dropdown');

//   // Function to toggle visibility
//   function toggleVisibility(element) {
//     element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
//   }

//   // Add click event listeners
//   ourCompanyImg.addEventListener('click', function () {
//     toggleVisibility(ourCompanySubMenu);

//   });
//   hardServicesImg2.addEventListener('click', function () {
//     toggleVisibility(hardServicesSubMenu);
  
  
//   });

//   softServicesImg2.addEventListener('click', function () {
//     toggleVisibility(softServicesSubMenu); 
    
//   });
//   ourServicesImg.addEventListener('click', function () {
//     toggleVisibility(ourServicesSubMenu);
//   });
// });













document.addEventListener("DOMContentLoaded", function() {
    displayDataInTable();
});

function validateForm() {
    const title = document.getElementById("addtitle").value;
    const description = document.getElementById("adddescription").value;
    formdata(title, description);
    title='';
    description='';
    
    return false; // Prevents the form from submitting
}

function formdata(title, description) {    
    let record = JSON.parse(localStorage.getItem("user")) || [];

    record.push({
        "title": title,
        "description": description,
    });

    localStorage.setItem("user", JSON.stringify(record));
    displayDataInTable();
    
}


// function displayDataInTable() {
//     const userTableBody = document.getElementById("userTableBody");
//     const adminTableBody = document.getElementById("adminTableBody");
//     userTableBody.innerHTML = '';
//     adminTableBody.innerHTML = ''; // Clear admin table body

//     const record = JSON.parse(localStorage.getItem("user")) || [];
//     for (const user of record) {
//         const userRow = userTableBody.insertRow();

//         // const titleCell = userRow.insertCell();
//         const descriptionCell = userRow.insertCell();

//         titleCell.textContent = user.title;
//         descriptionCell.textContent = user.description;

//         const adminDiv = document.createElement("div");
//         adminDiv.classList.add("admin-row");

//         const titleSpan = document.createElement("span");
//         titleSpan.textContent = user.title;

//         const buttonSpan = document.createElement("span");

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function() {
//             deleteUser(record, user);
//         });

//         const updateButton = document.createElement("button");
//         updateButton.textContent = "Update";
//         updateButton.addEventListener("click", function() {
//             updateUserForm(user);
//         });

//         buttonSpan.appendChild(deleteButton);
//         buttonSpan.appendChild(updateButton);

//         adminDiv.appendChild(titleSpan);
//         adminDiv.appendChild(buttonSpan);

//         adminTableBody.appendChild(adminDiv);
//     }
// }



function displayDataInTable() {
    const userTableBody = document.getElementById("userTableBody");
    const adminTableBody = document.getElementById("adminTableBody");
    userTableBody.innerHTML = '';
    adminTableBody.innerHTML = ''; // Clear admin table body

    const record = JSON.parse(localStorage.getItem("user")) || [];
    for (const user of record) {
        const userEntryDiv = document.createElement("div");
        userEntryDiv.classList.add("user-entry");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("user-title");
        titleDiv.textContent = user.title;

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("user-description");
        descriptionDiv.textContent = user.description;

        userEntryDiv.appendChild(titleDiv);
        userEntryDiv.appendChild(descriptionDiv);

        userTableBody.appendChild(userEntryDiv);

        const adminDiv = document.createElement("div");
        adminDiv.classList.add("admin-row");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = user.title;

        const buttonSpan = document.createElement("span");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteUser(record, user);
        });
    
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", function() {
            updateUserForm(user);
        });

        buttonSpan.appendChild(deleteButton);
        buttonSpan.appendChild(updateButton);

        const adminTitleDiv = document.createElement("div");
        adminTitleDiv.classList.add("admin-title");
        adminTitleDiv.appendChild(titleSpan);

        adminDiv.appendChild(adminTitleDiv);
        adminDiv.appendChild(buttonSpan);

        adminTableBody.appendChild(adminDiv);
    }
}



// function displayDataInTable() {
//     const userTableBody = document.getElementById("userTableBody");
//     const adminTableBody = document.getElementById("adminTableBody");
//     userTableBody.innerHTML = '';
//     adminTableBody.innerHTML = ''; // Clear admin table body

//     const record = JSON.parse(localStorage.getItem("user")) || [];
//     for (const user of record) {
//         const userEntryDiv = document.createElement("div");
//         userEntryDiv.classList.add("user-entry");

//         const titleDiv = document.createElement("div");
//         titleDiv.classList.add("user-title");
//         titleDiv.textContent = user.title;
//         titleDiv.style.backgroundColor = "red"; // Set red background color
//         titleDiv.style.width = "100%"; // Occupy full width

//         const descriptionDiv = document.createElement("div");
//         descriptionDiv.classList.add("user-description");
//         descriptionDiv.textContent = user.description;
//         descriptionDiv.style.backgroundColor = "yellow"; // Set yellow background color
//         descriptionDiv.style.width = "100%"; // Occupy full width

//         userEntryDiv.appendChild(titleDiv);
//         userEntryDiv.appendChild(descriptionDiv);

//         userTableBody.appendChild(userEntryDiv);

//         const adminDiv = document.createElement("div");
//         adminDiv.classList.add("admin-row");

//         const titleSpan = document.createElement("span");
//         titleSpan.textContent = user.title;

//         const buttonSpan = document.createElement("span");

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.addEventListener("click", function() {
//             deleteUser(record, user);
//         });

//         const updateButton = document.createElement("button");
//         updateButton.textContent = "Update";
//         updateButton.addEventListener("click", function() {
//             updateUserForm(user);
//         });

//         buttonSpan.appendChild(deleteButton);
//         buttonSpan.appendChild(updateButton);

//         const adminTitleDiv = document.createElement("div");
//         adminTitleDiv.classList.add("admin-title");
//         adminTitleDiv.appendChild(titleSpan);

//         adminDiv.appendChild(adminTitleDiv);
//         adminDiv.appendChild(buttonSpan);

//         adminTableBody.appendChild(adminDiv);
//     }
// }





function deleteUser(record, user) {
    const index = record.findIndex(item => item.title === user.title && item.description === user.description);
    if (index !== -1) {
        record.splice(index, 1);
        localStorage.setItem("user", JSON.stringify(record));
        displayDataInTable();
    }
}

function updateUserForm(user) {
    document.getElementById("addtitle").value = user.title;
    document.getElementById("adddescription").value = user.description;
    deleteUser(JSON.parse(localStorage.getItem("user")), user);
}











