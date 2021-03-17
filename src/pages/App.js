import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/App.css'
class App extends React.Component {
  state = { form: {
   /*  firstName:"nombres",
    lastName:'apellidos',
    email:'correo' */
  }}

  handleChange = e => {
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

    render() {
      return (
        <div className="container">
          <div className="Badge__container">
            <Badge
            firstName={this.state.form.firstName}
            lastName={this.state.form.lastName}
            email={this.state.form.email}
            />
            </div>
          <div className="BadgeForm__container">
          <BadgesForm
          formValues={this.state.form}
          onChange={this.handleChange}            
          />
          </div>
        </div>
      )
    }
}
export default App;