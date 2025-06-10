(function(){
  const hoursZh = `每週一至四 17:00 - 20:00<br/>
每週五至日 11:30 - 14:00 以及 17:00 - 20:00<br/>
如遇國定假日營業時間可能不同，敬請見諒！`;
  const hoursEn = `Monday to Thursday: 5:00 PM – 8:00 PM<br/>
Friday to Sunday:<br/>
　Lunch: 11:30 AM – 2:00 PM<br/>
　Dinner: 5:00 PM – 8:00 PM<br/>
Business hours may vary on national holidays. We appreciate your understanding!`;

  const imgUrls = [
    "https://i.postimg.cc/fWJKcYdW/img1.png",
    "https://i.postimg.cc/rmpK5nDt/1.png",
    "https://i.postimg.cc/rFY2h1nh/img2.jpg",
    "https://i.postimg.cc/0QxN98Rv/2.png",
    "https://i.postimg.cc/gJv6skGD/img3.webp"
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const zhElem = document.getElementById("hours-zh");
    const enElem = document.getElementById("hours-en");
    if (zhElem) zhElem.innerHTML = hoursZh;
    if (enElem) enElem.innerHTML = hoursEn;
    const imgs = document.querySelectorAll('.carousel img');
    imgs.forEach((img, i) => {
      if (imgUrls[i]) img.src = imgUrls[i];
    });
  });
})();