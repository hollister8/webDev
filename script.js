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

function consoleLog(){
    let val = $('.form-control').val();

    $.get('store.json')
        .done((data) => {
            for (let i = 0; i < data.products.length; i++) {
                if (data.products[i].title.includes(val) || data.products[i].brand.includes(val)){
                    $('.side-container').remove();
                    let template = `<div class="side-container">
                    <img src="/images/${data.products[i].photo}" alt="" class="goods-img">
                    <h4><span style="background : yellow;">${val}</span>${data.products[i].title}</h4>
                    <h6>${data.products[i].brand}</h6>
                    <p>가격 : ${data.products[i].price}</p>
                    <button type="button" class="btn btn-dark">담기</button>
                    </div>`;
                    $('.main-container').append(template);
                }
                if (val.length === 0) {
                    $('.side-container').remove();
                    temp(data.products);
                }
            }
        })
}