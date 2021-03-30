import Content from './CompanyDetails/Company'
import { Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import * as Service from '../../Services/ComapnyInformation'
import style from './Dashboard.style.css'

class MainContent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            company: [],
        }
    }


    componentDidMount() {
        Service.getAllInformation()
                .then(res => this.setState({company: res}))
                .catch(error => console.log(error))
    }

    
    render() {
        console.log(this.company)
        return (
            <div className="main-content">
                {this.state.company.map(x =>
                        <Content key={x.id} name={x.name}
                        {...x} />
                    )}
            </div>
            );

    }


}

export default MainContent;