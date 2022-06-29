'use strict';

{

  //ハンバーガーボタン
  const gnaviBtn = document.getElementById('menu-btn');
  const gNavi = document.getElementById('gnavi');

  gnaviBtn.onclick = function (event) {
    event.preventDefault();
    const closeBtn = gnaviBtn.classList.contains('close');
    const openMenu = gNavi.classList.contains('open');

    if (closeBtn === true) {
      gnaviBtn.classList.remove('close');
    } else {
      gnaviBtn.classList.add('close');
    }

    if (openMenu === true) {
      gNavi.classList.remove('open');
    } else {
      gNavi.classList.add('open');
    }

  }
  
  
  //課題01
  const resultDay = document.getElementById('result-day');
  
  resultDay.onclick = function(event) {
    event.preventDefault();
    const yyyy = document.getElementById('year').value;
    const mm = document.getElementById('month').value;
    const dd = document.getElementById('date').value;
    const day = new Date(yyyy, mm-1, dd).getDay();
    
    let dayList = '';
    
    switch (day) {
      case 0:
        dayList = '日';
        break;
      case 1:
        dayList = '月';
        break;
      case 2:
        dayList = '火';
        break;
      case 3:
        dayList = '水';
        break;
      case 4:
        dayList = '木';
        break;
      case 5:
        dayList = '金';
        break;
      case 6:
        dayList = '土';
        break;
    }
    
    document.getElementById('A-01').textContent = `${yyyy}年${mm}月${dd}日`;
    document.getElementById('A-02').textContent = `${dayList}曜日`;
    
  }
  
  
  //課題02
  
  const resultBmi = document.getElementById('result-bmi');
  
  resultBmi.onclick = function(evt) {
    event.preventDefault();
    const Ncm = document.getElementById('cm').value;
    const Nm = Ncm/100;
    const Nkg = document.getElementById('kg').value;
    
    const bmi = (Nkg/Nm**2).toFixed(1);
    let bmiList = '';
    
    if(bmi >= 25) {
      bmiList = '肥満気味';
    } else if(bmi >= 18.5) {
      bmiList = '標準';
    } else {
      bmiList = '痩せすぎ';
    }
    
    document.getElementById('A-03').textContent = bmi;
    document.getElementById('A-04').textContent = bmiList;
  }


  // 課題03

  const slideImg = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];


  for (let i = 0; i < 5; i++) {
    document.getElementById('slide-img' + (i + 1)).innerHTML += `<img src="images/${slideImg[i]}" alt="">`;
  }
  
  const slide = function () {
    slideImg.forEach(function (data, index) {
      let imgNum = 'slide-img' + (index + 1);
      document.getElementById(imgNum).innerHTML = `<img src="images/${data}" alt="">`;
    });

    let slideNum = slideImg.shift();
    slideImg.push(slideNum);
  };

  setInterval(slide, 2000);


}

// pagetopボタン



window.onscroll = function() {
  let pageTop = 300;
  let positionTop  = document.documentElement.scrollTop || document.body.scrollTop;
  const topTag = document.getElementById('page-top');
  
  console.log(pageTop +'>='+ positionTop);
  
  if (pageTop >= positionTop) {
    topTag.classList.remove('open');
  } else {
    topTag.classList.add('open');
  }
}; 








