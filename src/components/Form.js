import React from 'react';

export class Form extends React.Component {
    render() {
        return (
        <form>
            <input type="text" onChange={this.props.onChange}/>
            <input type="button" onClick={this.props.onClick} value="SUBMIT!"/>
        </form>
        )
    }
}