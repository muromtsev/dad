function init () {
    let answer = document.querySelector('.answer');
    let items = document.querySelectorAll('.panel-item');
    let offer = 'degress * Math.PI / 180';
    let words = [];
    

    offer = madeArr(offer);

    for(var i = 0; i < offer.length; i++) {
        
        items[i].innerHTML = offer[i];
        
    }
    items.forEach(function(item, index) {
        item.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('span', index);
        })
    })
    answer.addEventListener('dragover', function(event) {
        event.preventDefault();     
        
    })
    answer.addEventListener('drop', function(event) {    
        words.push(items[event.dataTransfer.getData('span')].innerHTML)   
        var str = words.join(' ');
        
        this.appendChild(items[event.dataTransfer.getData('span')]);
        if(words.length === offer.length) {
            str === offer.join(' ') ? answer.style.backgroundColor = 'green' : answer.style.backgroundColor = 'red'
        }
        answer.innerHTML = str;
        
    })
    function madeArr(str) {
        return str.split(' ');
    }
    
    

}
init();

// function init () {
//     let pic = document.querySelector('.pic');
//     let parent = document.querySelector('.parent');
//     // console.log(c1);
//     let offsetX;
//     let offsetY;
//     let data;
//     pic.addEventListener('dragstart', function(event) {
//         data = this.dataset.name;
//         offsetX = event.offsetX;
//         offsetY = event.offsetY;
//     })
//     pic.addEventListener('dragend', function(event) {
//         var crdY = event.pageY - offsetY;
//         var crdX = event.pageX - offsetX;
//         this.style.top = crdY + 'px';    
//         this.style.left = crdX + 'px';        
//     })   
//     parent.addEventListener('dragover', function(event) {
//         event.preventDefault(); 
//     })
//     parent.addEventListener('drop', function(event) {
//         pic.style.display = 'none';
//         var img = document.createElement('img');
//         img.src = 'https://wordassociations.net/image/600x/svg_to_png/Anonymous_Chess_symbols_set_2.png';
//         parent.appendChild(img);
//         parent.style.border = '10px solid green';
//         document.body.style.backgroundColor = 'black'
//     }) 
    
// }
