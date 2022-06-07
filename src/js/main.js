//main.js file
// Responsive menu
const menu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.mobile-burger')
burger.onclick = () => {
  menu.classList.toggle('active')
  burger.classList.toggle('active')
}


// Dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);





// // Swiper js
var swiper = new Swiper(".navSwiper", {
  freeMode: true,
  slidesPerView: 5,
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    320: {
      slidesPerView:2.5
    },
    420: {
      slidesPerView: 4
    },
    640: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 5,
    },
  },
});

// // Swiper js
var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  spaceBetween: 32,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView:3,
    }
  },
});
var swiper = new Swiper(".prodSwiper", {
  freeMode: true,
  spaceBetween: 32,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    470: {
      slidesPerView: 1.5
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1.5,
    },
    850: {
      slidesPerView: 1.7
    },
    1000: {
      slidesPerView: 2,
    },
    1150: {
      slidesPerView: 2.5
    },
    1260: {
      slidesPerView: 3
    }
  },
});
var swiper = new Swiper(".fourSwiper", {
  freeMode: true,
  spaceBetween: 32,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    470: {
      slidesPerView: 1.5
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    850: {
      slidesPerView: 2.7
    },
    1000: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 3.5
    },
    1260: {
      slidesPerView: 4
    }
  },
});

// Tab
let tabs = document.querySelectorAll('.tab-btn'),
  contents = document.querySelectorAll('.tab-body');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => {
      content.classList.remove('active')
    })
    tabs.forEach((tab) => {
      tab.classList.remove('active')

    })
    contents[index].classList.add('active')
    tabs[index].classList.add('active')
  })
})



let grid = document.querySelector('.grid-view')
let list = document.querySelector('.list-view')
let products = document.querySelectorAll('.product-box')
grid.addEventListener('click', ()=> {
  products.forEach(item => {
    item.classList.remove('list')
    item.classList.add('grid')
  })
})

list.addEventListener('click', ()=> {
  products.forEach(item => {
    item.classList.remove('grid')
    item.classList.add('list')
  })
})

let filter = document.querySelector('.filter-btn')
let aside = document.querySelector('.filter-aside')
let apply = document.querySelector('.apply-btn')

filter.addEventListener('click', () => {
  aside.classList.toggle('active')
})

apply.addEventListener('click', ()=> {
  aside.classList.remove('active')
})
