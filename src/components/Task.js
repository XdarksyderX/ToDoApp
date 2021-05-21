import React from 'react';

export class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {completed: false};  
    }


    completeTask = () => {
        this.setState({
          completed: true
        });
      }
    
    render() {
        if (!this.state.completed) {
            return (
                <div className='task'>
                    <span>{this.props.taskText}</span>
                    <div className="buttons">
                        <button type="button" onClick={this.props.onDelete} className="delete-button">
                        <i onClick={this.props.onDelete} className="fas fa-minus-circle"></i>
                        </button>

                        <button type="button" onClick={this.completeTask} className="check-button">
                            <i onClick={this.completeTask} className="fas fa-check-circle"></i>
                        </button>
                    </div>
                    
                    
                    

                </div>
            )
        }
        
        else {
            return (
                <div className={'task completed'}>
                    <span>{this.props.taskText}</span>
                    <div className="buttons">
                        <button type="button" onClick={this.props.onDelete} className="delete-button">
                            <i onClick={this.props.onDelete} className="fas fa-minus-circle"></i>
                        </button>

                        <button type="button" onClick={() => false} className="check-button completed">
                            <i className="fas fa-check-circle"></i>
                        </button>
                    </div>

                </div>
            )
        }
    }
}