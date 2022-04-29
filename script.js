function temp(array) {
    array.forEach((element) => {
        let template = `<div class="side-container" draggable="true" ondragstart="drag(event)">
        <img src="/images/${element.photo}" alt="" class="goods-img" draggable="true">
        <h4>${element.title}</h4>
        <h6>${element.brand}</h6>
        <p>가격 : ${element.price}</p>
        <button type="button" class="btn btn-dark" onclick="basket()">담기</button>
        </div>`;
        $('.side-container-box').append(template);
    });
}

$.get('store.json')
    .done((data) => {
        console.log(data)
        temp(data.products);
    })

function yellowContent(element, tag, val){
    if (element.includes(val)){
        let start = element.indexOf(val);
        let end = start + val.length; // -1
        
        let first = element.slice(0, start);
        let middle = element.slice(start, end);
        let last = element.slice(end, element.length);

        // console.log(middle)
        return `<${tag}>${first}<span style="background : yellow;">${middle}</span>${last}</${tag}>`
    } else {
        return `<${tag}>${element}</${tag}>`
    }
}

function consoleLog(){
    let val = $('.form-control').val();

    $.get('store.json')
        .done((data) => {
            $('.side-container').remove();
            for (let i = 0; i < data.products.length; i++) {
                if (data.products[i].title.includes(val) || data.products[i].brand.includes(val)){
                    let title_contents = yellowContent(data.products[i].title, 'h4', val);
                    let brand_contents = yellowContent(data.products[i].brand, 'h6', val);
                    
                    let template = `<div class="side-container" draggable="true" ondragstart="drag(event)>
                    <img src="/images/${data.products[i].photo}" alt="" class="goods-img">
                    ${title_contents}
                    ${brand_contents}
                    <p>가격 : ${data.products[i].price}</p>
                    <button type="button" class="btn btn-dark" onclick="basket()">담기</button>
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