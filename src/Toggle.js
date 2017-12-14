import React, { Component } from 'react';

const Switch = ({on, className = '', ...props}) => {
  return (
    <div className="toggle">
      <input
        className="toggle-input"
        type="checkbox"
      />
      <button
        className={`${className} toggle-btn ${on
          ? 'toggle-btn-on'
          : 'toggle-btn-off'}`}
        aria-expanded={on}
        {...props}
      />
    </div>
  )
}

export default class Toggle extends Component {

  // Toggle을 사용할 시점에서 onToggle Prop이 없으면 발생하는 오류 방지
  static defaultProps = { onToggle: () => {}}
  state = { on: false}

  // functional setState
  toggle = () => this.setState(
    ({ on }) => ({ on: !on }),
    () => this.props.onToggle(this.state.on)
  )
  render() {
    const { on } = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}