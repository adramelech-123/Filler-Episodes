// Add data to shows page dynamically

let headings = document.querySelectorAll('.list-group-item-heading')

shows = ['Akame ga Kill', 'Angel Beats!', 'Assassination Classroom', 
            'Attack on titan', 'Bakemonogatari', 'Black Clover', 'Claymore', 
            'D Grayman', 'Elemental Galade', 'Black Lagoon', 
            'Clannad', 'Elfen Lied', 'Death Note', 'Cells at work', 'Bleach', 'Edenfield'
        ]

let sortedShows = shows.sort()

sortedShows.forEach((show) => {

    for(i=0; i < headings.length; i++) {

        if (show.charAt(0) == headings[i].innerHTML) {
           
            let ptag = document.createElement('p')
            ptag.className = 'list-group-item-text'
            let atag = document.createElement('a')
            atag.href = 'content.html'
            atag.innerText = show

            headings[i].insertAdjacentElement('afterend', ptag).appendChild(atag)
           
        }
        
    }
})




// FILTER SEARCH COMPONENT

// Get Input element
let filterInput = document.getElementById('filterInput')

// Add event Listener

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase()
      

    // Get Names from each list-group-item
    let list = document.querySelectorAll('#names')

    for(i=0;i < list.length; i++) {

        let listContent = list[i].querySelectorAll('.list-group-item-text')
          
        for(j=0;j < listContent.length; j++) {
            let a = listContent[j].getElementsByTagName('a')[0]

            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                listContent[j].style.display = ''
            }

            else {
                listContent[j].style.display = 'none'
            }

        }
    }
      
}


