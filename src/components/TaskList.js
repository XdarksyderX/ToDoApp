import React from 'react';

export class TaskList extends React.Component {
    
    render() {
        
            return (
                <div className="task-list">
                    <div className='container'>
                        {this.props.tasks}
                    </div>
                </div>) 
        } 
    }