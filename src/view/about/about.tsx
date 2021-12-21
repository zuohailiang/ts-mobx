import { Component } from 'react'
import './about.scss'
import autobind from 'autobind-decorator'
import { CirclePicker } from 'react-color'

type Props = {}

type State = {
    name: string;
    color: string;
    age?: 18
}

class About extends Component<Props, State> {
    state = {
        name: '',
        color: ''
    }

    @autobind
    clickBtn() {
        this.setState({ name: '左海亮' })
    }

    @autobind
    colorChange(color: any) {
        this.setState({ color: color.hex })
    }

    render() {
        return (
           <div className='about'>
               <p>{this.state.name}</p>
               <button onClick={this.clickBtn}>点击</button>
               <CirclePicker
                    circleSize={20}
                    circleSpacing={3}
                    color={this.state.color}
                    onChangeComplete={this.colorChange}
               ></CirclePicker>
           </div>
        )
    }
}

export default About