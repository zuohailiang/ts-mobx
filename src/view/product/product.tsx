import { Component } from 'react'
import './product.scss'
import { Portal } from 'react-portal';
import autobind from 'autobind-decorator'

export default class Product extends Component {
    state = {
        open: false
    }
    
    @autobind
    openPortal() {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div className='product'>
                <h3>这是product页面</h3>
                <button onClick={this.openPortal}>打开</button>
                { this.state.open ? <Portal isOpened='false'>
                    <button className='product_btn'>点击按钮</button> 
                </Portal> : <></> }
            </div>
        )
    }
}


