import React from "react";
import {Users} from "../../components/users/Users";

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = (
            {
                name: ""
            }
        )
        this.onChangeInput = this.onChangeInput.bind(this)
    }

    onChangeInput(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <Users users={this.props.users}/>
                <form>
                    <input style={{margin: "50px 0 0 100px"}} type="text"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           name="name"
                    />
                </form>
            </div>
        );
    }
}

