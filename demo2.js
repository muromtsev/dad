var wrap = document.querySelector('.wrap');
var display = document.querySelector('.display');
var puzzle = 'lets start and play';
class DragAndDrop {
    constructor(answer, riddle) {
        this.answer = answer;
        this.riddle = riddle;
    }   
    init() {
        this.makeEl(this.answer, this.riddle);
        this.setEvent(this.answer, this.riddle);
        
    }
    makeEl(answer, riddle) {  
        riddle = riddle.split(' '); 
        
        let ul = document.createElement('ul');
            ul.className = 'drop';            
        answer.parentNode.appendChild(ul);

        var compareRandom = function(a, b) {
            return Math.random() - 0.5;
        }

        riddle.sort(compareRandom);

        for(let i = 0; i < riddle.length; i++) {

            var li = document.createElement('li');
            li.className = 'drop-item';            
            li.innerHTML = riddle[i];   
            li.draggable = 'true';
            ul.appendChild(li);
        }

    }
    setEvent(answer, riddle) {
        let li = document.querySelectorAll('.drop-item');
        let arr = [];
        let riddle_array = riddle.split(' ');

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

            var arrString = arr.join(' '), arrLeng = arr.length, quesLeng = riddle_array.length;
            
            this.innerHTML = arrString;

            dropLi.style.display = 'none';
            
            if(arrLeng === quesLeng) {                
                arrString === riddle ? answer.style.backgroundColor = 'green' : answer.style.backgroundColor = 'red';
            }
        })
    }
}

let drop = new DragAndDrop(display, puzzle);
drop.init();


// location.reload()

let rest = document.querySelector('.res');
rest.addEventListener('click', function() {
    window.location.reload();
})