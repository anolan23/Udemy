import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import history from "../../history";
import Modal from "../Modal";
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends React.Component
{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    actions = (
        <React.Fragment>
            <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </React.Fragment>
    );

    renderDescription(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?";
        }
            return "Are you sure you want to delete " + this.props.stream.title + "?"
    }

    render(){
        return (
                <Modal
                    title="Delete Stream"
                    description={this.renderDescription()}
                    actions={this.actions}
                    onDismiss={() => history.push("/")}
                />
        );
}

}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream, deleteStream})(StreamDelete);