var wrap = document.querySelector('.wrap');
var answer = document.querySelector('.answer');
var dropHTML = document.querySelector('.drop');
var lik = document.querySelectorAll('.drop-item');
// необходимо передавать string
var qs = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

class DragAndDrop {
    constructor(answer, questions, list) {
        this.answer = answer;
        this.questions = questions;
        this.list = list;
    }
    init() {
        this.makeEl(this.questions, this.list);
        this.setEvent(this.answer, this.questions, this.list);
    }
    makeEl(questions, list) {        
        for(let i = 0; i < questions.length; i++) {
            var li = document.createElement('li');
            li.className = 'drop-item';            
            li.innerHTML = questions[i];    // необходимо вывести значения из массива в случайном порядке
            li.draggable = 'true';
            list.appendChild(li);
        }       
    }
    setEvent(answer, questions, list) {
        var li = document.querySelectorAll('.drop-item');
        var arr = [];

        li.forEach(function(item, index) {            
            item.addEventListener('dragstart', function(event) {
                event.dataTransfer.setData('li', index);           
            })
        });
        answer.addEventListener('dragover', function(event) {
            event.preventDefault();
        });
        answer.addEventListener('drop', function(event) {
            let dropLi = li[event.dataTransfer.getData('li')];

            arr.push(dropLi.innerHTML);

            var str = arr.join(' '), arrLeng = arr.length, quesLeng = questions.length;
            
            this.innerHTML = str;

            dropLi.style.display = 'none';
            
            if(arrLeng === quesLeng) {                
                str === questions.join(' ') ? answer.style.backgroundColor = 'green' : answer.style.backgroundColor = 'red';
            }
        })
    }
}

let drop = new DragAndDrop(answer, qs, dropHTML);
drop.init();


// location.reload()

let rest = document.querySelector('.res');
rest.addEventListener('click', function() {
    location.reload();
})