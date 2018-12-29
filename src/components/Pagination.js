import React, {Component} from 'react'
import './Pagination.css'

class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemNumber: this.props.itemNumber,
            limit: this.props.limit
        }
    }

    changePage = (pageNumber) => {
        this.props.onPageChange(pageNumber)
    }

    componentDidMount() {
        window.test = this.props
    }

    componentWillReceiveProps(newProps) {
        this.setState({itemNumber: newProps.itemNumber});
    }

    renderPagination(){
        let totalPages = Math.ceil(this.state.itemNumber / this.state.limit)
        let links = []
        for (let i = 1; i <= totalPages; i++) {
            links.push(<a key={i} href="#" onClick={this.changePage.bind(this, i)}>{i}</a>)
        }
        return links
    }

    render() {
        return (
            <div className="pagination">
                {this.renderPagination()}
            </div>
        )
    }
}

export default Pagination
