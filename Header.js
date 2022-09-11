import {Flex, Text, Link} from  "https://deno.land/x/bic@v0.1.1/Elements.js"


export const  Header= () =>{
    return Flex({
	id:"Header",
        styles:style.Header},
		Text({id:"Logo"},"Blog"),
		Flex({id:"nav"},
		     Link({id:"Inicio",href:"/",styles:style.Links},"Inicio"),
		     Link({id:"Portfolio",href:"/Portfolio",styles:style.Links},"Portfolio"),
		     Link({id:"Repo",href:"/Github",styles:style.Links},"Repo"),))
}

let style = {
    Header:`

     width:100%;
     height:100px;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
    `,
    Links:`
    margin:10px;
    text-decoration:none;
    color:#17202A ;
`
}
