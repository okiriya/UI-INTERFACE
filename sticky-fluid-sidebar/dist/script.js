// https://github.com/moubi/sticky-nav

const NAV_OFFSET = 30;

class StickyNav {
  constructor() {
    this.el = null;
    this.anchor = null;
    this.removedScrollClass = '';

    this.events();
  }

  didRender() {
    this.el = document.getElementsByTagName('nav')[0];
    this.anchor = document.getElementsByClassName('nav-anchor')[0];
    this.removedScrollClass = this.el.className;

    this.onResize();
  }

  onResize() {
    var { paddingLeft, paddingRight } = window.getComputedStyle(this.el.parentNode),
    parentWidth = this.el.parentNode.offsetWidth - parseInt(paddingLeft) - parseInt(paddingRight);


    // console.log(paddingLeft, paddingRight);
    // console.log(this.el.parentNode);
    // console.log(parentWidth);


    this.el.style.width = `${parentWidth}px`;
  }

  onScroll() {
    var scroll = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
    topOffset = this.anchor.offsetTop - NAV_OFFSET;

    // console.log(document.documentElement.scrollTop);
    console.log(topOffset);


    if (this.el.className.indexOf('scroll') != -1) {
      if (scroll <= topOffset) {
        this.el.className = this.removedScrollClass;
      }

    } else if (scroll >= topOffset) {
      this.el.className += ' scroll';
    }
  }

  events() {
    window.addEventListener('load', () => {this.didRender();});
    window.addEventListener('scroll', () => {this.onScroll();});
    window.addEventListener('resize', () => {this.onResize();});
  }
}



new StickyNav();