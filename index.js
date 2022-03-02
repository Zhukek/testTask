const cardTemplate = document.querySelector('#card-template').content;
const content = document.querySelector('.content');

function createCard(item) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  cardItem.querySelector('.card__user-avatar').src = item.user.profile_image.small;
  cardItem.querySelector('.card__user-avatar').alt = item.user.name;
  cardItem.querySelector('.card__user-name').textContent = item.user.name;
  cardItem.querySelector('.card__user-name').href = item.user.links.html;
  cardItem.querySelector('.card__user-nickname').textContent = '@' + item.user.username;
  cardItem.querySelector('.card__user-nickname').href = item.user.links.html;
  cardItem.querySelector('.card__img').src = item.urls.regular;
  cardItem.querySelector('.card__img').alt = item.description;
  cardItem.querySelector('.card__views-counter').textContent = item.views.toLocaleString();

  return cardItem;
} /* Создать карточку с фото */

fetch('https://api.unsplash.com/photos/random?count=12', {
  headers: {
    Authorization: 'Client-ID HbYGFonht567GSHECU_U8ZitkMH2Aa8sZv2Drb9iqSA'
  }
})
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    data.forEach(function(card) {
      content.prepend(createCard(card));
    })
  })
