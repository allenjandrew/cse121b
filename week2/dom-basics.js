const newP = document.createElement("p");
newP.innerText = "This is a special JS paragraph";
document.body.append(newP);

const newImg = document.createElement("img");
newImg.src =
  "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/merchandising/Character%20Portals/1600x1600_NCOM_Home_Characters_Kirby";
newImg.alt = "Kirby running to you because he loves the way you taste";
newImg.width = 400;
document.body.append(newImg);

const newList = document.createElement("ol");
const one = "One - way";
const two = "Two - say";
const three = "Three - words";
const four = "Four - you";
newList.innerHTML = `<li>${one}</li><li>${two}</li><li>${three}</li><li>${four}</li>`;
document.body.append(newList);

const newSection = document.createElement("section");
const newH1 = document.createElement("h1");
newH1.innerText = "CSE 121b";
newSection.append(newH1);
const newPar = document.createElement("p");
newPar.innerText = "Welcome to JavaScript Language";
newSection.append(newPar);
document.body.append(newSection);
