import React , {useState} from 'react';

function sidebar(props){
    const [State,setState]= useState(false);
    const Style={
        items:{
            cursor:'pointer',
            fontsize:'large',
            display:'flex',
            justifyContent:'space-between',
            padding:'0.4rem 3rem',
            margin:'1rem 2rem',
            borderRadius:'7px',
            fontWeight:'bold',
            transition:'all ease-in-out 0.5s'
        },
    itemsActive:{
        cursor:'pointer',
            fontsize:'large',
            display:'flex',
            justifyContent:'space-between',
            padding:'0.4rem 3rem',
            margin:'1rem 2rem',
            borderRadius:'7px',
            fontWeight:'bold',
            transition:'all ease-in-out 0.5s'

    }
    }
}