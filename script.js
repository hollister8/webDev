function temp(array) {
    array.forEach((element) => {
        let template = `<div class="side-container">
        <img src="/images/${element.photo}" alt="" class="goods-img">
        <h4>${element.title}</h4>
        <h6>${element.brand}</h6>
        <p>가격 : ${element.price}</p>
        <button type="button" class="btn btn-dark">담기</button>
        </div>`;
        $('.main-container').append(template);
    });
}

$.get('store.json')
    .done((data) => {
        console.log(data)
        temp(data.products);
    })