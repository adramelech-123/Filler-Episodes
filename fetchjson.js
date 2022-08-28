//Fetch JSON Data and filter

let filterBtns = document.querySelectorAll('.nav-link')
const tableArea = document.querySelector('.table-body')
const cardArea = document.querySelector('.card')


window.addEventListener('DOMContentLoaded', function(){
    displayShow()
})


function displayShow () {
    fetch('./shows/bleach.json')
    .then(response => response.json())
    .then((showData) => {
        let showHeader = ''
        let row = ''

        //Display only the 0th index item of the json data
        for (i=0; i < showData.length - (showData.length - 1); i++) {
            showHeader += `
                    <img src="${showData[i].img}" class="card-img-top" style="height: 300px; object-fit:cover; object-position: 30% top;">
                    <div class="card-body">
                        <h3 class="card-title">${showData[i].name}</h3>
                        <p class="card-text">${showData[i].description}</p>
                        <p class="card-text"><small class="text-muted"><b>Total Episodes: </b> ${showData[i].totalepisodes}</small></p>
                    </div>
                    ` 
        }

        //Display row data starting from index 1
        for (i=1; i < showData.length; i++) {
            row += `
             <tr>
                 <th scope="row">${showData[i].ep}</th>
                 <td>${showData[i].title}</td>
                 <td><span class ="type ${showData[i].type}">${showData[i].type}</span></td>
             </tr>
             `
        }

        cardArea.innerHTML = showHeader
        tableArea.innerHTML = row

        
    })
}

filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnType = e.currentTarget.dataset.hit

        fetch('./shows/bleach.json')
        .then(res => res.json())
        .then((showData) => {

            function displayFilter (content) {
                let row = ''
                for (i=0; i < content.length; i++) {
                    row += `
                     <tr>
                         <th scope="row">${content[i].ep}</th>
                         <td>${content[i].title}</td>
                         <td><span class ="type ${content[i].type}">${content[i].type}</span></td>
                     </tr>
                     `
                }

                tableArea.innerHTML = row
            }

            showData.shift() 
           
            const filteredShows = showData.filter((tableRow) => {
                if (btnType === tableRow.type.toLowerCase()) {
                    return tableRow
                }
            })

           


            if (btnType === 'all') {
                displayShow()
            }

            else {
                displayFilter(filteredShows)
            }
        })
    })
})
