// console.log('hello world');

// const input = document.querySelector('.inp')
// const btns = document.querySelector('btn')
const div = document.querySelector('div')
const arr = ['🍇(grapes)' , '🍉(watermelon)' , '🍓(strawberry)' , '🥝(kiwi)'] ;
// console.log(arr);


function render(){
    // console.log(input.value)

    for(i=0 ; i<=arr.length ; i++){

        // console.log(arr[i]);
        div.innerHTML +=`<h2>Fruits:</h2>
                          <li>${arr[i]}</li>                     
        
        `
    }
}

// render()



