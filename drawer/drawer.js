'use strict';

//ドロワーメニューを開く関数
const drawerToggle = (e, menu) => {
  e.currentTarget.classList.toggle('is-open');
  document.getElementById(menu).classList.toggle('is-open');
  document.getElementsByTagName('body')[0].classList.toggle('is-open');
}

//ドロワーメニューを閉じる関数
const drawerClose = (menu) => {
  document.getElementById(menu).classList.remove('is-open');
  document.getElementsByTagName('body')[0].classList.remove('is-open');
}