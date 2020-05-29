export class Card {
    constructor(name, link, likes) {
    this.cardElement = this.create(link, name, likes);
    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this); 
    this.cardElement
      .querySelector(".place-card__like-icon")
      .addEventListener("click", this.like);
    this.cardElement
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", this.remove);
  }
  create(link, name, likes) {
   const template = document.createElement("div");
   template.classList.add("place-card")
   template.insertAdjacentHTML('beforeend', `
     <div class= "place-card">
       <div class= "place-card__image">
           <button class="place-card__delete-icon"></button>
       </div>
       <div class="place-card__description">
           <h3 class="place-card__name"></h3>
           <div class="like-group">
           <button class="place-card__like-icon"></button>
           <p class="like-number">0</p>
           </div>
       </div>
     </div>`);
   const placeCard = template.firstElementChild;
   placeCard.querySelector(".place-card__name").textContent = name;
   placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${link})`;
   placeCard.querySelector(".like-number").textContent = likes;
    return placeCard;
  }
  like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }
  remove() {
   this.cardElement.parentNode.removeChild(this.cardElement)
  }
}