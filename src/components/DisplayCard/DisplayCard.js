import React, { useState } from 'react'

import { Carousel, Card, Button, CardGroup } from 'react-bootstrap';
import './DisplayCard.css';
import DisplayData from './DisplayData';



function DisplayCard({ addLike, postId, model, name, price, desc, authorEmail, imagesUid, deletePost }) {

    return (
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            <CardGroup>
            <DisplayData postId={postId} addLike={addLike} imagesUid={imagesUid} model={model} name={name} price={price} desc={desc} authorEmail={authorEmail} deletePost={deletePost}/>
            </CardGroup>
        </div>
        
    )
}

export default DisplayCard