/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'dark' : 'light')
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](lightTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// hiển thị vòng lặp tên 
// var typingEffect = new Typed(".home__title-color",{
//     strings : ["Lê Ngọc Giàu","a Student at SGU"],
//     loop : true,
//     typeSpeed : 150, 
//     backSpeed : 150,
//     onComplete: function(self) {
//         self.cursor.remove(); // Xóa con trỏ sau khi hoàn thành
//         var text = self.strings[0]; // Lấy chuỗi thứ hai
//         var newText = '<span style="color: red;">' + text + '</span>'; // Thêm màu đỏ cho chuỗi
//         self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
        
//       }
//   })

// var typingEffect = new Typed(".home__title-color", {
//   strings: ["Lê Ngọc Giàu", "a Student at SGU"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
//   smartBackspace: true,
//   colorIndex: 0, // Để lưu trữ chỉ số màu sắc
//   onStringTyped: function(index, self) {
//     self.cursor.remove(); // Xóa con trỏ
//     var colors = ["red", "rubine", "green", "orange", "purple"]; // Danh sách màu sắc
//     var randomColor = colors[self.options.colorIndex]; // Sử dụng màu đã được chọn
//     var newText = '<span style="color: ' + randomColor + ';">' + self.strings[index] + '</span>'; // Thêm màu cho chuỗi đã được gõ
//     self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
//     self.options.colorIndex = Math.floor(Math.random() * 5); // Chọn một màu ngẫu nhiên và lưu lại cho chuỗi kế tiếp
//   },
//   onComplete: function(self) {
//     self.options.typeSpeed = 2000; // Đặt tốc độ gõ chậm hơn là 2s
//     var colors = ["red", "rubine", "green", "orange", "purple"]; // Danh sách màu sắc
//     var randomColor = colors[self.options.colorIndex]; // Sử dụng màu đã được chọn
//     var newText = '<span style="color: ' + randomColor + ';">' + self.strings[0] + '</span>'; // Thêm màu cho chuỗi đã được gõ
//     self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
//     self.options.colorIndex = Math.floor(Math.random() * 5); // Chọn một màu ngẫu nhiên và lưu lại cho chuỗi kế tiếp
//   }
// });

// var typingEffect = new Typed(".home__title-color", {
//   strings: ["Lê Ngọc Giàu", "a Student at SGU"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
//   smartBackspace: true,
//   colorIndex: 0, // Để lưu trữ chỉ số màu sắc
//   onStringTyped: function(index, self) {
//     self.cursor.remove(); // Xóa con trỏ
//     var colors = ["red", "rubine", "yellow", "green", "orange", "purple", "Pink", "Brown", "Gray", "Silver", "Gold", "Cyan", "Magenta"]; // Danh sách màu sắc
//     var newText = '';
//     for (var i = 0; i < self.strings[index].length; i++) {
//       var randomColor = colors[Math.floor(Math.random() * 5)]; // Chọn một màu ngẫu nhiên từ danh sách màu
//       newText += '<span style="color: ' + randomColor + ';">' + self.strings[index][i] + '</span>';
//     }
//     self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
//   },
//   onComplete: function(self) {
//     self.options.typeSpeed = 2000; // Đặt tốc độ gõ chậm hơn là 2s
//   }
// });

//7 màu
// var typingEffect = new Typed(".home__title-color", {
//   strings: ["Lê Ngọc Giàu", "a Student at SGU"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
//   smartBackspace: true,
//   colorIndex: 0, // Để lưu trữ chỉ số màu sắc
//   lastColor: null, // Lưu trữ màu của ký tự trước đó
//   onStringTyped: function(index, self) {
//     self.cursor.remove(); // Xóa con trỏ
//     var colors = ["red", "rubine", "yellow", "green", "orange", "purple", "pink", "brown", "gray", "silver", "gold", "cyan", "magenta"]; // Danh sách màu sắc
//     var newText = '';
//     for (var i = 0; i < self.strings[index].length; i++) {
//       var randomColor = this.getRandomColor(colors, self.lastColor); // Chọn một màu ngẫu nhiên từ danh sách màu và không trùng với màu của ký tự trước đó
//       newText += '<span style="color: ' + randomColor + ';">' + self.strings[index][i] + '</span>';
//       self.lastColor = randomColor; // Lưu màu của ký tự hiện tại để sử dụng cho ký tự tiếp theo
//     }
//     self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
//   },
//   onComplete: function(self) {
//     self.options.typeSpeed = 2000; // Đặt tốc độ gõ chậm hơn là 2s
//   },
//   getRandomColor: function(colors, lastColor) {
//     var randomColor;
//     do {
//       randomColor = colors[Math.floor(Math.random() * colors.length)]; // Chọn một màu ngẫu nhiên từ danh sách màu
//     } while (randomColor === lastColor); // Lặp lại cho đến khi chọn được một màu khác với màu của ký tự trước đó
//     return randomColor;
//   }
// });

var typingEffect = new Typed(".home__title-color", {
  strings: ["Lê Ngọc Giàu", "a Student at SGU"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  smartBackspace: true,
  colorIndex: 0, // Để lưu trữ chỉ số màu sắc
  lastColor: null, // Lưu trữ màu của ký tự trước đó
  onStringTyped: function(index, self) {
    self.cursor.remove(); // Xóa con trỏ
    var colors = ["#FF0000", 
    "#FF6347", 
    "#FFA500", 
    "#FFD700", 
    "#32CD32", 
    "#008000", 
    "#00FFFF", 
    "#0000FF", 
    "#8A2BE2", 
    "#FF00FF", 
    "#800080", 
    "#000000", 
    "#808080", 
    "#D3D3D3",  
    "#DC143C",
    "#FF4500", 
    "#FF8C00", 
    "#FFD700", 
    "#ADFF2F", 
    "#20B2AA", 
    "#5F9EA0", 
    "#4682B4", 
    "#00BFFF", 
    "#1E90FF", 
    "#0000CD", 
    "#191970", 
    "#8B008B", 
    "#800080", 
    "#BA55D3", 
    "#9370DB", 
    "#A52A2A", 
    "#D2691E", 
    "#8B4513", 
    "#DEB887", 
    "#F4A460", 
    "#DAA520", 
    "#BDB76B", 
    "#8FBC8F", 
    "#20B2AA",  ]; // Danh sách màu sắc
    var newText = '';
    for (var i = 0; i < self.strings[index].length; i++) {
      var randomColor = this.getRandomColor(colors, self.lastColor); // Chọn một màu ngẫu nhiên từ danh sách màu và không trùng với màu của ký tự trước đó
      newText += '<span style="color: ' + randomColor + ';">' + self.strings[index][i] + '</span>';
      self.lastColor = randomColor; // Lưu màu của ký tự hiện tại để sử dụng cho ký tự tiếp theo
    }
    self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
  },
  onComplete: function(self) {
    var colors = ["#FF0000", 
    "#FF6347", 
    "#FFA500", 
    "#FFD700", 
    "#32CD32", 
    "#008000", 
    "#00FFFF", 
    "#0000FF", 
    "#8A2BE2", 
    "#FF00FF", 
    "#800080", 
    "#000000", 
    "#808080", 
    "#D3D3D3",  
    "#DC143C",
    "#FF4500", 
    "#FF8C00", 
    "#FFD700", 
    "#ADFF2F", 
    "#20B2AA", 
    "#5F9EA0", 
    "#4682B4", 
    "#00BFFF", 
    "#1E90FF", 
    "#0000CD", 
    "#191970", 
    "#8B008B", 
    "#800080", 
    "#BA55D3", 
    "#9370DB", 
    "#A52A2A", 
    "#D2691E", 
    "#8B4513", 
    "#DEB887", 
    "#F4A460", 
    "#DAA520", 
    "#BDB76B", 
    "#8FBC8F", 
    "#20B2AA", ]; // Danh sách màu sắc
    var newText = '';
    for (var i = 0; i < self.strings[0].length; i++) {
      var randomColor = this.getRandomColor(colors, self.lastColor); // Chọn một màu ngẫu nhiên từ danh sách màu và không trùng với màu của ký tự trước đó
      newText += '<span style="color: ' + randomColor + ';">' + self.strings[0][i] + '</span>';
      self.lastColor = randomColor; // Lưu màu của ký tự hiện tại để sử dụng cho ký tự tiếp theo
    }
    self.el.innerHTML = newText; // Gán chuỗi mới vào phần tử
    self.options.typeSpeed = 2000; // Đặt tốc độ gõ chậm hơn là 2s
  },
  getRandomColor: function(colors, lastColor) {
    var randomColor;
    do {
      randomColor = colors[Math.floor(Math.random() * colors.length)]; // Chọn một màu ngẫu nhiên từ danh sách màu
    } while (randomColor === lastColor); // Lặp lại cho đến khi chọn được một màu khác với màu của ký tự trước đó
    return randomColor;
  }
});




  
const srt = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- HOME -- */
srt.reveal('.home__title',{delay: 100})