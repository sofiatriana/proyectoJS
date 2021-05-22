
const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

const llamarApi = async (busqueda)=>{
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${ encodeURI(busqueda) }&limit=40`)
    const {data} = await resp.json()
    const arrayImgs = data.map(el => el.images.downsized_medium.url)
    
    $('.row').html('')
    arrayImgs.forEach(img => {          
        $('.row').append(`
                    <li class="card col-3">
                        <img src=${img} alt="" />
                    </li>
                `)
    });
}


$('#la').on('submit', (e)=>{
    e.preventDefault()
    llamarApi( $('input').val() )
})
