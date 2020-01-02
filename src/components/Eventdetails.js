import React, { Component } from 'react'



export default class Eventdetails extends Component {
    render() {
        return (
            <div className="card_details">
                <img src="../img/ArtBg.png" height="500" width="400" />
                
            </div>
        )
    }
}

/*
const mapStateToProps = (state,ownProps) =>{
    let id= ownProps.match.params.id
    return{
        detail:state.categories.gamex.find(detail => detail.id===id)
    }
}

export default connect(mapStateToProps)(Eventdetails)

*/