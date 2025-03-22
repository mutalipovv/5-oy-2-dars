// const body = document.body;
// const html = document.documentElement;
// const style = document.createElement("style");
// style.innerHTML = `
//     *{
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//      }
//     `;

// document.head.append(style);

// function styleBody() {
//   body.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #141414;
//     height: 100%;
//     `;
//   html.style.cssText = `

//     height: 100%;
//     `;
// }

// function createCard() {
//   const links = [
//     "GitHub",
//     "Frontend Mentor",
//     "LinkedIn",
//     "Twitter",
//     "Instagram",
//   ];
//   const div = document.createElement("div");
//   div.style.cssText = `
//   width: 384px;
//   background-color: #1F1F1F;
//   border-radius: 12px;
//   padding: 40px;
//   `;
//   const avatar = document.createElement("img");

//   avatar.style.cssText = `
// border-radius: 50%;
// display: flex;
// margin-left:auto;
// margin-right: auto;
// margin-bottom: 24px;
// `;

//   avatar.src = "./img/profile-pic.jpg";

//   const title = document.createElement("h1");
//   title.innerText = "Jessica Randall";
//   title.style.cssText = `
// text-align: center;
// color: white;
// margin-bottom: 10px;

// `;

//   const address = document.createElement("address");
//   address.innerText = "London, United Kingdom";
//   address.style.cssText = `
// text-align: center;
// color: #C4F82A;
// font-style: normal;
// margin-bottom: 10px;
// `;

//   const quote = document.createElement("p");
//   quote.innerText = `"Front-end developer and avid reader."`;
//   quote.style.cssText = `
// text-align: center;
// color:rgb(255, 255, 255);
// margin-bottom: 15px;
// `;

//   const ul = document.createElement("ul");
//   ul.style.cssText = `
// list-style: none;
// display: flex;
// flex-direction: column;
// gap:20px
//   `;
//   links.forEach((el) => {
//     const li = document.createElement("li");
//     const link = document.createElement("a");
//     link.innerText = el;
//     link.style.cssText = `
// display: block;
// color: white;
// text-align: center;
// width:100%;
// padding: 12px;
// background-color: #333333;
// border-radius: 10px;
// `;
//     li.append(link);
//     ul.append(li);
//   });

//   div.append(avatar, title, address, quote, ul);
//   body.append(div);
// }

// styleBody();
// createCard();

// 2-topshiriq

// document.addEventListener("DOMContentLoaded", function () {
//   const data = [
//     {
//       type: "SEDANS",
//       text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
//       color: "#e38826",
//       image: "./img/Group 2.jpg",
//     },
//     {
//       type: "SUVS",
//       text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
//       color: "#006970",
//       image: "./img/Group 3.jpg",
//     },
//     {
//       type: "LUXURY",
//       text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
//       color: "#004241",
//       image: "./img/Group 4.jpg",
//     },
//   ];

//   document.body.style.backgroundColor = "#f5f5f5";
//   document.body.style.display = "flex";
//   document.body.style.justifyContent = "center";
//   document.body.style.alignItems = "center";
//   document.body.style.height = "100vh";

//   const container = document.createElement("div");
//   container.style.display = "flex";
//   container.style.width = "700px";
//   container.style.height = "400px";
//   container.style.borderRadius = "10px";
//   container.style.overflow = "hidden";
//   document.body.appendChild(container);

//   data.forEach((item, index) => {
//     const card = document.createElement("div");
//     card.style.width = "307px";
//     card.style.height = "300px";
//     card.style.padding = "30px";
//     card.style.color = "white";
//     card.style.textAlign = "left";
//     card.style.backgroundColor = item.color;
//     card.style.display = "flex";
//     card.style.flexDirection = "column";
//     card.style.justifyContent = "space-between";

//     if (index === 0) {
//       card.style.borderTopLeftRadius = "10px";
//       card.style.borderBottomLeftRadius = "10px";
//     } else if (index === data.length - 1) {
//       card.style.borderTopRightRadius = "10px";
//       card.style.borderBottomRightRadius = "10px";
//     }

//     const img = document.createElement("img");
//     img.src = item.image;
//     img.style.width = "50px";
//     img.style.height = "50px";
//     img.style.marginBottom = "10px";

//     const title = document.createElement("h2");
//     title.textContent = item.type;
//     title.style.marginBottom = "10px";

//     const desc = document.createElement("p");
//     desc.textContent = item.text;
//     desc.style.fontSize = "14px";
//     desc.style.lineHeight = "1.5";

//     const btn = document.createElement("a");
//     btn.textContent = "Learn More";
//     btn.href = "#";
//     btn.style.display = "inline-block";
//     btn.style.marginTop = "10px";
//     btn.style.padding = "10px 20px";
//     btn.style.backgroundColor = "white";
//     btn.style.color = item.color;
//     btn.style.borderRadius = "20px";
//     btn.style.textDecoration = "none";
//     btn.style.fontWeight = "bold";

//     btn.addEventListener("mouseover", () => {
//       btn.style.backgroundColor = "#d47f2a";
//       btn.style.color = "white";
//       btn.style.transform = "scale(1.05)";
//     });

//     btn.addEventListener("mouseout", () => {
//       btn.style.backgroundColor = "white";
//       btn.style.color = "#d47f2a";
//       btn.style.transform = "scale(1)";
//     });

//     card.appendChild(img);
//     card.appendChild(title);
//     card.appendChild(desc);
//     card.appendChild(btn);
//     container.appendChild(card);
//   });
// });
