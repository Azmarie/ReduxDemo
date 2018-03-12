/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PageHeader, Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const GITHUB_REPO = 'https://github.com/Azmarie/ReduxDemo'

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue = () => {
    return this.input.value
  }

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.input.value = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick = () => {
    debugger;
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
      <div>
        <PageHeader>
          Github Star Wraper <small>Redux Demo</small>
        </PageHeader>

        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Type a username or repo full name and hit 'Go':</ControlLabel>{' '}
            <FormControl size="45" inputRef={(ref) => this.input = ref} defaultValue={this.props.value} onKeyUp={this.handleKeyUp} />
          </FormGroup>{' '}
          <Button type="submit" bsStyle="primary" onClick={this.handleGoClick}> Go!
          </Button>
        </Form>
        <p>
          Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">Github</a>.
        </p>
        <p>
          Move the DevTools with Ctrl+W or hide them with Ctrl+H.
        </p>
      </div>
    )
  }
}
