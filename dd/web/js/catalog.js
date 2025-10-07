const catalogItems = document.querySelectorAll('.catalog-item');
const catalogList = document.getElementById('catalog-list');
const catalogDetail = document.getElementById('catalog-detail');
const detailContent = document.getElementById('detail-content');

catalogItems.forEach(item => {
  item.addEventListener('click', () => {
    // Collapse left side
    catalogList.classList.add('shrink');
    catalogList.classList.remove('fullpage');

    // Expand right side
    catalogDetail.classList.add('active');

    const name = item.querySelector('h3').innerText;
    const imgSrc = item.querySelector('img').src;

    detailContent.innerHTML = `
      <button class="back-button" id="backBtn">← Back</button>
      <h2>${name}</h2>
      <img src="${imgSrc}" alt="${name}">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here are the details of ${name}.</p>
    `;

    // Back button functionality
    document.getElementById('backBtn').addEventListener('click', () => {
      catalogList.classList.remove('shrink');
      catalogList.classList.add('fullpage');
      catalogDetail.classList.remove('active');
      detailContent.innerHTML = `
        <h2>Welcome to MediLife Catalog</h2>
        <p>Select a category on the left to explore our medical products.</p>
      `;
    });
  });
});
