/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PageHeader, Form, Glyphicon, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


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
          Github Star List <small> Redux Demo</small>
        </PageHeader>

        <Form inline>
          <FormGroup controlId="formInlineName">
            <h2>Check the Star List now! </h2>
             <ControlLabel>Type the user / Repo full name:</ControlLabel>{' '}
            <FormControl size="45" inputRef={(ref) => this.input = ref} defaultValue={this.props.value} onKeyUp={this.handleKeyUp} />

          <Button type="submit" bsStyle="primary" onClick={this.handleGoClick}> <Glyphicon glyph="star" /> Go!
          </Button>
          </FormGroup>{' '}
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
