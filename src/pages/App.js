import React from 'react';
import Badge from '../components/Badge';
import BadgesForm from '../components/BadgesForm';
import './styles/App.css'
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="Badge__container"><Badge /></div>
                <div className="BadgeForm__container"><BadgesForm /></div>
            </div>
        )
    }
}
export default App;