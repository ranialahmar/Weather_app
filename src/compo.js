import React from 'react'
class  Comp extends React.Component
{

    componentWillReceiveProps() {
        console.log('Receive props')
    }

    render(){
        return <p>{this.props.envoi}</p>
    }
}
export default Comp;