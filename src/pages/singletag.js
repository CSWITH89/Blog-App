import React from 'react';

class SingleTag extends React.Component {
    render(){
        return(
            <>
            {this.props.categorie.tagType}
            </>
        )
    }

}

export default SingleTag;