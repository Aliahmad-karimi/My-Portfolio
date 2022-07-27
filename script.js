document.addEventListener('DOMContentLoaded', () => {
// This is menu bar and close button
  const menu = document.querySelector('.menuBar');
  const menuList = document.querySelector('.tool');
  const lists = document.querySelector('.tool-social');
  const closeButton = document.querySelector('.clos-button');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
  });

  closeButton.addEventListener('click', () => {
    menuList.classList.remove('active');
  });

  lists.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
  // This is for popUp window and js storing information
  const popUp = document.querySelector('.popUp');
  const popProj = document.querySelector('.popProj');
  const popName = document.querySelector('.popName');
  const popPic = document.querySelector('.popPic1');
  const popTex = document.querySelector('.popTex');
  const popList = document.getElementById('popList1');
  const popClose = document.querySelector('.close-button');
  const popUpLive = document.getElementById('popUpLive');
  const popUpSource = document.getElementById('popUpSource');
  const popProject1 = document.getElementById('btn-1');
  const popProject2 = document.getElementById('btn-2');
  const popProject3 = document.getElementById('btn-3');
  const popProject = document.getElementById('btn');

  const projArr = [
    {
      id: 1,
      pName: 'W3 project',
      pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
      pPic: 'images/project1.png',
      pText: 'An open source code for every coding language. W3 school is one the most usefull websites.',
      pTechs: ['Html', 'Css', 'JavaScript'],
      pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
      pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio',
    },
    {
      id: 2,
      pName: 'YouTube',
      pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
      pPic: 'images/project2.png',
      pText: 'This is a sample from Youtube. It is copy and just for the purpose of demo project.',
      pTechs: ['Html', 'Css', 'JavaScript'],
      pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
      pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio',
    },
    {
      id: 3,
      pName: 'Grid Game',
      pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
      pPic: 'images/project3.png',
      pText: 'This is a sample from A website that teach us how to learn Grid in a game manner.',
      pTechs: ['Html', 'Css', 'JavaScript'],
      pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
      pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio',
    },
    {
      id: 4,
      pName: 'Flex Box Game',
      pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
      pPic: 'images/project4.png',
      pText: 'This is website that teach flexbox in a game manner. They are just sample for my project.',
      pTechs: ['Html', 'Css', 'JavaScript'],
      pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
      pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio',
    },
  ];
  function popFill(arr, num) {
    const proj = arr[num];
    popProj.textContent = proj.pName;
    popName.innerHTML = proj.pAuthure;
    popPic.src = proj.pPic;
    popTex.textContent = proj.pText;
    popUpLive.attributes.href.nodeValue = proj.popUpLive;
    popUpSource.attributes.href.nodeValue = proj.pSource;
    popList.innerHTML = '';
    proj.pTechs.forEach((item) => {
      const pl = document.createElement('li');
      pl.innerHTML = item;
      pl.classList.add('pplist');
      popList.append(pl);
    });
  }
  popProject.addEventListener('click', () => {
    popUp.classList.toggle('active');
    popFill(projArr, 0);
  });
  popProject1.addEventListener('click', () => {
    popUp.classList.toggle('active');
    popFill(projArr, 1);
  });
  popProject2.addEventListener('click', () => {
    popUp.classList.toggle('active');
    popFill(projArr, 2);
  });
  popProject3.addEventListener('click', () => {
    popUp.classList.toggle('active');
    popFill(projArr, 3);
  });

  popClose.addEventListener('click', () => {
    popUp.classList.remove('active');
  });
});