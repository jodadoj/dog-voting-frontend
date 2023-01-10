import axios from "axios";
import { useState } from "react";


export function VotePage():JSX.Element{

    async function getDogImage(){
        const {data} = await axios.get("https://dog.ceo/api/breeds/image/random");
        return data;
    }

    return (
        <>
        Vote Page
        </>
    );
}


function handleVoteClick(){
    
}