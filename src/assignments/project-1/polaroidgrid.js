import React from 'react'

class PolaroidGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgText: '',
            buttonClicked: false,
        }
        this.clicked = this.clicked.bind(this);
        this.updateImgText = this.updateImgText.bind(this)
    }

    clicked() {
        console.log('List hidden: ' + this.state.buttonClicked);
        this.setState(state => ({
            buttonClicked: !state.buttonClicked
        }));
    }

    updateImgText(newText){
        this.setState({imgText: newText.target.value})
        {console.log('this is the img text after an update: ' + this.imgText)}

    }

    render (){
    return <div class="polaroid-grid">
        {this.props.files.map(file => {
            const {id, name, url, error} = file
            return <figure key={id} class="polaroid">
                {!error && <img src={url} alt={name}/>}
                {!!error && <p className="failure">{error}</p>}
                
                <figcaption class="polaroid-caption">{name.split('.').slice(0, -1).join('.')}</figcaption>
                <button class="edit-button" onClick={ (e) => { this.clicked(); } }>{ this.state.buttonClicked ? 'Save' : 'Edit' }</button>
                {this.state.buttonClicked && <form>
                    <label>
                        <input type="text" value={this.imgText} onChange={this.updateImgText} />
                    </label>
                </form>
                }
            </figure>
        })}
    </div>
    }
}

export { PolaroidGrid as default};