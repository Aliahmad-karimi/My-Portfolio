const projectsArr = [
    {
        id: 'p',
        pName: 'W3 project',
        pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
        pPic: 'images/project1.png',
        pText: 'An open source code for every coding language. W3 school is one the most usefull websites.',
        pTechs: ['Html', 'Css', 'JavaScript'],
        pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
        pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio'
    },
    {
        id: 'p1',
        pName: 'YouTube',
        pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
        pPic: 'images/project2.png',
        pText: 'This is a sample from Youtube. It is copy and just for the purpose of demo project.',
        pTechs: ['Html', 'Css', 'JavaScript'],
        pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
        pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio'
    }, {
        id: 'p2',
        pName: 'Grid Game',
        pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
        pPic: 'images/project3.png',
        pText: 'This is a sample from A website that teach us how to learn Grid in a game manner.',
        pTechs: ['Html', 'Css', 'JavaScript'],
        pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
        pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio'
    }, {
        id: 'p3',
        pName: 'Flex Box Game',
        pAuthure: 'Ali Ahmad &nbsp; &bull; &nbsp; Back End Dev &nbsp;&bullet;&nbsp; 2020',
        pPic: 'images/project4.png',
        pText: 'This is website that teach flexbox in a game manner. They are just sample for my project.',
        pTechs: ['Html', 'Css', 'JavaScript'],
        pLive: 'https://aliahmad-karimi.github.io/Porfolio.github.io/',
        pSource: 'https://github.com/Aliahmad-karimi/My-Portfolio'
    },
 ];

 const container = document.querySelector('#pro');
 const content = `
 <div class="snapshot"></div>
 <div class="content-project1">
     <h2>${projectsArr[0].pName}</h2>
     <div class="ali">
         <p class="ali1">${projectsArr[0].pAuthure}</p>
     </div>
     <div class="parg">
         <p>${projectsArr[0].pText}</p>
         <div class="see-p">
             <ul class="lan">
                 <li class="lang">${projectsArr[0].pTechs[0]}</li>
                 <li class="lang">${projectsArr[0].pTechs[1]}</li>
                 <li class="lang">${projectsArr[0].pTechs[2]}</li>
             </ul>
             <button type="button" class="see-project">See Project</button>
         </div>
     </div>
 </div>`;
 container.innerHTML = content;