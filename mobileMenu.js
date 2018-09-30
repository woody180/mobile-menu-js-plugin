//////////////////////////////////////////// ********* MOBILE MENU ********* ////////////////////////////////////////////
let navCreation = function() {
    // film for the body while menu is opened
    this.bodyCover = document.createElement('div');
    this.bodyCover.classList.add('body-cover');
    document.body.appendChild(this.bodyCover);

    // open menu button
    this.openBtn = document.querySelector('.mobile-menu');
    this.menuIco = document.createElement('span');
    this.openBtn.appendChild(this.menuIco);
    this.menuIco.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';

    // create main container
    this.createContainer = document.createElement('div');
    this.createContainer.classList.add('mobile-menu-container');
    document.body.appendChild(this.createContainer);

    // close button
    this.closeBtn = document.createElement('div');
    this.closeBtn.classList.add('menu-close');
    this.closeBtn.innerHTML = '<div class="menu-close"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 348.333 348.334" xml:space="preserve"> <g> <path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/> </g> </svg></div>'
    this.createContainer.appendChild(this.closeBtn);
    
    this.createContainer.style.right = '-' + this.createContainer.offsetWidth + 'px';

    // menu nest
    this.menuNest;
    (this.openBtn.querySelector('ul')) ? this.dropToggle() : false;

    let This = this;
    this.openBtn.addEventListener('click', function() {
        This.openCloseMenu();
    });
    this.closeBtn.addEventListener('click', function() {
        This.createContainer.classList.remove('active');
        This.createContainer.style.right = '-' + This.createContainer.offsetWidth + 'px'
        This.bodyCover.classList.remove('active');
    })
    this.bodyCoverFunc();

    // menu content section
    if (this.openBtn.querySelector('.menu-content')) {
        this.menuContent =  this.openBtn.querySelector('.menu-content');
        this.createContainer.appendChild(this.menuContent);
    }
}

// OPEN / CLOSE MENU
navCreation.prototype.openCloseMenu = function() {
    this.createContainer.classList.toggle('active');
    this.createContainer.className.match(/active/) ? this.bodyCover.classList.add('active') : this.bodyCover.classList.remove('active');
    this.createContainer.className.match(/active/) ? this.createContainer.style.right = 0 : this.createContainer.style.right = '-' + this.createContainer.offsetWidth + 'px';
}

// DROP DOWN MENU TOGGLE
navCreation.prototype.dropToggle = function() {
    let This = this;
    this.menuNest = this.openBtn.querySelector('ul');
    this.createContainer.appendChild(this.menuNest);

    

    // first dropdown
    if (this.menuNest.querySelectorAll('ul > li > ul')) {

        let dropDownOne = this.menuNest.querySelectorAll('ul > li > ul');
        // loop
        dropDownOne.forEach(function(dropOne) {
            // create drop down open menu button
            let openDrop = document.createElement('div');
            openDrop.classList.add('open-drop');
            openDrop.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';

            // insert drop down open button to the 'li' tag 
            dropOne.classList.add('drop-one')
            dropOne.parentElement.insertBefore(openDrop, dropOne.parentElement.childNodes[0]);
            
            // click to button
            openDrop.addEventListener('click', function() {
                dropOne.classList.toggle('active');
                this.classList.toggle('active');
            });
        });
    }
    
    // seconod dropdown
    if (this.menuNest.querySelectorAll('ul > li > ul > li > ul')) {
        let dropDownTwo = this.menuNest.querySelectorAll('ul > li > ul > li > ul');
        dropDownTwo.forEach(function (dropTwo) {
            dropTwo.classList.add('drop-two');
        });
    }
}

navCreation.prototype.bodyCoverFunc = function() {
    let This = this;
    this.bodyCover.addEventListener('click', function() {
        this.classList.remove('active');
        This.createContainer.style.right = '-' + This.createContainer.offsetWidth + 'px'
        This.createContainer.classList.remove('active');
    });
}

if (document.querySelector('.mobile-menu')) {
    new navCreation()
}