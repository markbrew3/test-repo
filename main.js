let log = console.log;
const refData = [
  {
    name: 'Gon Freecs',
    age: 12,
    birthday: 'May 5th, 1987',
    heightInCm: 154,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Gon-Freecss-Hunter-x-Hunter-anime.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Killua Zoldyck',
    age: 12,
    birthday: 'July 7th, 1987',
    heightInCm: 158,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Killua-Zoldyck-Hunter-x-Hunter-.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Kurapika Kurta',
    age: 17,
    birthday: 'April 4th, 1982',
    heightInCm: 171,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Kurapika-Kurta-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Leorio Paradinight',
    age: 19,
    birthday: 'March 3rd, 1980',
    heightInCm: 193,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Leorio%C2%A0Paradinight-Hunter-x-Hunter-anime.png?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Hisoka Morrow',
    age: 28,
    birthday: 'June 6, 1971',
    heightInCm: 187,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Hisoka-Morow-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Chrollo Lucifer',
    age: 26,
    birthday: 'Autumn 1973',
    heightInCm: 177,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Chrollo-Lucifer-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Ging Freecss',
    age: 32,
    birthday: '1967',
    heightInCm: 160,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Ging-Freecss-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Isaac Netero',
    age: 120,
    birthday: '1879',
    heightInCm: 160,
    isAlive: false,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Isaac-Netero-Hunter-x-Hunter-.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Kite',
    age: 28,
    birthday: 'Unknown',
    heightInCm: 182,
    isAlive: false,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Kite-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Alluka Zoldyck',
    age: 11,
    birthday: '1988',
    heightInCm: 152,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Alluka-Zoldyck-Hunter-x-Hunter.jpg?q=50&fit=crop&w=1500&dpr=1.5'
  },
  {
    name: 'Biscuit Krueger',
    age: 57,
    birthday: '1942',
    heightInCm: 155,
    isAlive: true,
    imageUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Biscuit-Kreuger-hunter-x-hunter.png?q=50&fit=crop&w=1500&dpr=1.5'
  },
]
const renderToDom = (selector, html) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = html;
}

const renderCards = (array) => {
  let domStr = '';
  for (const char of refData) {
    domStr += `<div class="card" style="width: 18rem;">
    <img src="${char.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h2 class="name">${char.name}</h2>
       <ul>STATS
        <li>Age: ${char.age}</li>
        <li>Born: ${char.birthday}</li>
        <li>Height: ${char.heightInCm}cm</li>
       </ul>
       <button class="favBtn">★</button>
    </div>
  </div>`
  }
  renderToDom('.card',domStr)
}
renderCards(refData)
