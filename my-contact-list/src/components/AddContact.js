import React from 'react';

class AddContact extends React.Component {

    //  init state of name and email
    state = {
        name:'',
        email:'',
    };

    // pass name and email of state properties to app.js
    addContact = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === '') {
            alert('all the fields are mandatory');
            return false;
        }
        this.props.getContacts(this.state);
        this.setState({name:'', email: ''});
    }

    render() {
        return (
            <div className="container p-3">
                <h2>Add a Contact</h2>
                <form className="row" onSubmit={this.addContact}>
                    <div className='col-12 g-3'>
                        <label 
                            htmlFor='contactName' 
                            className='form-label'>
                            Name
                        </label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='contactName'
                            name='name'
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            autoComplete="off" />
                    </div>
                    <div className='col-12 g-3'>
                        <label 
                            htmlFor='contactEmail' 
                            className='form-label'>
                            Email
                        </label>
                        <input 
                            type='email'
                            id='contactEmail' 
                            className='form-control'
                            name='email'
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            autoComplete="off" />
                    </div>
                    <div className="col-12 g-3">
                        <button 
                            className="btn btn-primary">
                            Add Contact
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};

export default AddContact;
