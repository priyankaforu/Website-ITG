document.addEventListener('DOMContentLoaded',function() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
        initializeHeaderScripts();
        menuSelection();
      })
      .catch(error => {
        console.error("Error loading the header:", error);
    });
});
function menuSelection() {
    let selectedItem = localStorage.getItem('selectedMenu');
   
    if(selectedItem){
        const itemBold = document.querySelector(`.js-menu a[href="${selectedItem}"]`);
        if(itemBold){
            itemBold.classList.add('colors');
        }
    }
    const menuItems = document.querySelectorAll('.js-menu a');
    
    menuItems.forEach(function(option) {
        option.addEventListener('click', function() {
            menuItems.forEach(function(item){
                item.classList.remove('colors');
            });
            option.classList.add('colors'); 
            localStorage.setItem('selectedMenu',option.getAttribute('href'));
        });
       
    });
       
}
function  initializeHeaderScripts() {
    const menuIcon = document.querySelector('.fa-bars');
    const menuBar = document.querySelector('.js-menu');
    const chevronServices = document.querySelector('.services-dropdown');
    const chevronDown = document.querySelector('.fa-chevron-down');
    const chevronResources = document.querySelector('.resources-dropdown');
    const resourcesChevron = document.querySelector('.resources-chevron');
    
    if(menuIcon) {
        menuIcon.addEventListener('click', function() {
            if(menuIcon.classList.contains('fa-bars')){
                this.classList.remove('fa-bars');
                this.classList.add('fa-xmark');
                menuBar.classList.add('menu-vertical');
            } else {
                this.classList.remove('fa-xmark');
                this.classList.add('fa-bars');
                menuBar.classList.remove('menu-vertical');
            }
            
        });
    }
    chevronResources.addEventListener('mouseenter', ()=> {
        resourcesChevron.classList.remove('fa-chevron-down');
        resourcesChevron.classList.add('fa-chevron-up');
        addResourcesDropdownContent();
    });
    
    chevronResources.addEventListener('mouseleave', ()=> {
        resourcesChevron.classList.remove('fa-chevron-up');
        resourcesChevron.classList.add('fa-chevron-down');
        removeResourcesDropdownContent();
    });
    chevronServices.addEventListener('mouseenter', ()=> {
        chevronDown.classList.remove('fa-chevron-down');
        chevronDown.classList.add('fa-chevron-up');
        addDropdownContent();
    });
    chevronServices.addEventListener('mouseleave', ()=> {
        chevronDown.classList.remove('fa-chevron-up');
        chevronDown.classList.add('fa-chevron-down');
        removeDropdownContent();
    });
    window.addEventListener('resize',()=> {
        if(window.innerWidth>=1100) {
            if(menuIcon.classList.contains('fa-xmark')){
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
            menuBar.classList.remove('menu-vertical');
        } 
    });
    
    function addResourcesDropdownContent() {
        const resourcesDropdown = document.querySelector('.resources-dropdown');
        
        // Check if dropdown content already exists
        if (!document.querySelector('.resources-dropdown-content')) {
            const dropdownContent = document.createElement('div');
            dropdownContent.classList.add('resources-dropdown-content');
            dropdownContent.classList.add('dropdown-resources');
            dropdownContent.innerHTML = `
                <a href="resources.html">Blog</a>
                <a href="resources.html?type=#studyGuidesSec">Study Guides</a>
               
            `;
            resourcesDropdown.appendChild(dropdownContent);
        }
    }
    
    function removeResourcesDropdownContent() {
        const dropdownContent = document.querySelector('.resources-dropdown-content');
        if (dropdownContent) {
            dropdownContent.remove();
        }
    }
    function addDropdownContent() {
        const servicesDropdown = document.querySelector('.services-dropdown');
        
        // Check if dropdown content already exists
        if (!document.querySelector('.dropdown-content')) {
            const dropdownContent = document.createElement('div');
            dropdownContent.classList.add('dropdown-content');
            dropdownContent.innerHTML = `
                <a href="services.html?type=jobVisa">Job Visa</a>
                <a href="services.html?type=studentVisa">Student Visa</a>
                <a href="services.html?type=opportunityCard">Other Visa</a>
            `;
            dropdownContent.classList.add('dropdown-services');
            servicesDropdown.appendChild(dropdownContent);
        }
    }
    
    function removeDropdownContent() {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.remove();
        }
    }
}
function openNewPage() {
    window.open("https://wa.me/4915751007589", "_blank");
}
        