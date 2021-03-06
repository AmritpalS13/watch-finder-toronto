import React, { useState } from 'react'

import { Container, Carousel, Card, Button, CardGroup } from 'react-bootstrap';
import './DisplayCard.css';
import DisplayData from './DisplayData';



function DisplayCard({ comments, post, viewPost, postId, model, name, price, desc, authorEmail, imagesUid, deletePost}) {

    return (
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
            <CardGroup>
            <DisplayData comments={comments} post={post} postId={postId} viewPost={viewPost} imagesUid={imagesUid} model={model} name={name} price={price} desc={desc} authorEmail={authorEmail} deletePost={deletePost}/>
            </CardGroup>
        </div>

        
    )
}

export default DisplayCard