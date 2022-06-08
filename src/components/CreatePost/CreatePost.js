import React, { useState } from 'react'

import { Button, Container, Form } from 'react-bootstrap';

import './CreatePost.css';

function CreatePost() {
    //Watch Model/Brand
    const [model, setModel] = useState("");//Very important for finding specific brands.
    //Watch name
    const [name, setName] = useState("");
    //Watch ref, if available,
    const [ref, setRef] = useState("");
    //Watch price
    const [price, setPrice] = useState("");
    //Description
    const [desc, setDesc] = useState("");


    return (
        <Container>
<form>
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" />
    </div>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" />
    </div>
    <div>
      <label for="comp">Favorite CSS Compiler</label>
      <select id="comp">
        <option value="sass">Sass</option>
        <option value="less">Less</option>
        <option value="stylus">Stylus</option>
        <option value="postcss">PostCSS</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <fieldset>
        <legend>Are you familiar with CSS Grid?</legend>
        <input type="radio" name="grid" id="yes" value="yes" />
        <label for="yes">Yes</label>
        <input type="radio" name="grid" id="no" value="no" />
        <label for="no">No</label>
      </fieldset>
    </div>
    <div class="full-width">
      <label for="message">Message</label>
      <textarea id="message"></textarea>
    </div>
    <div class="full-width">
      <input type="checkbox" id="newsletter" />
      <label for="newsletter">Receive our newsletter?</label>
    </div>
    <div class="full-width">
      <button type="submit">Send Response</button>
      <button type="reset">Clear Form</button>
    </div>
  </form>
        </Container>
    )
}

export default CreatePost