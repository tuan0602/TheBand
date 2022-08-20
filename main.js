const btnTikets = document.querySelectorAll('.js-ticket-button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.js-ticket-close');
const modalContainer = document.querySelector('.js-modal-container');
const srcollTop = document.querySelector('.srcollTop');
const nav = document.querySelector('#nav');
const navHeight = nav.offsetHeight;

// hiển thị thanh scrollTop 
window.onscroll = function() {
    const scroll = window.scrollY || document.documentElement.scrollTop;
    if (scroll > navHeight)
    {
        srcollTop.classList.add('scrollOpen')
        
    }
    else
    {
        
        srcollTop.classList.remove('scrollOpen')
    }
}
// thêm class open vào modal khi click

const openTicketModal = () => modal.classList.add('open');

// gỡ bỏ class open khi click 

const closeTicketModal = () => modal.classList.remove('open') 
// dừng sự kiện nổi bọt của modal khi đóng 

const stopClose = (e) => e.stopPropagation();   
// lắng nghe sự kiện click khi mở btnTikets
for (const btnTicket of btnTikets) {
    btnTicket.addEventListener('click', openTicketModal);
}
// lắng nghe sự kiện đóng nút modal 
closeModal.addEventListener('click', closeTicketModal);

// lắng nghe sự kiến đóng modal
modal.addEventListener('click', closeTicketModal);

// lắng nghe sự kiện giữ modalContainer
modalContainer.addEventListener('click', stopClose);

// mở / đóng menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const currentHeader = header.clientHeight ;

const openMenuMobile = function() { 
    var isClosed = header.clientHeight === currentHeader;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else
    header.style.height = null;

}
mobileMenu.addEventListener('click', openMenuMobile);
// tự đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"] ')
const openMenuItem = function(e) {
        
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
       if(isParent)
       {
        e.preventDefault();
       }
       else
       {
        console.log(this)
           header.style.height = null;
       }
    }
for (var menuItem of menuItems) 
{
    
    menuItem.addEventListener('click', openMenuItem); 
}
