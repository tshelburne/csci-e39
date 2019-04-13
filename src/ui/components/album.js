import React from 'react'


function popUpImage(id, name, e) {
    const modal = document.getElementById('myModal');

    let image = document.getElementById('img'+ id);
    let modalImg = document.getElementById("modalImg");
    let captionText = document.getElementById("caption");
    image.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = name;
    };

    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}

class Album extends React.Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {id, name, url, error} = this.props.file;

        return <div>
            <li key={id}>
                {!error && <img src={url} style={{maxWidth: `200px`}} id={'img'+id} class="gallery-img" onClick={(e) => popUpImage(id, name, e)}/>}
                <label>{name}</label>
                {!!error && <p className="failure">{error}</p>}
            </li>
        </div>
    }
}

export default Album