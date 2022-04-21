import {div1, div2, div3, h1, h3, img1 as logo} from "../package/hPackage.js"

export default function hDiv() {

    div1.id="tnl_div";
        logo.id="logo";
        logo.src="./misc/logo/1028801.jpg";
        
        div2.id="div2"
        div2.append(h1, h3)
        h1.id="title";
        h1.innerHTML="Dela cruz, Sean.";
        h3.id="short_description"
        h3.innerHTML="Scroll down to gather <br>info of me (o･ω･o)";
    div1.append(logo, div2);
    document.body.append(div1);
}

//logo.onclick=async function(){document.location.href=""}
//h1.onclick=async function() {document.location.href=""}