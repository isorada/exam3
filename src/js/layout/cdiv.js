import { div1, div2, div3, h1, h1_1, p1, p2, p3, p4, img1, li1, li2, li3, li4, br1, br2, br3 } from "../package/cPackage.js"
import data from "../../../misc/data/txt.json" assert {type: "json"}

export default function cDiv() {

    div3.id="left_content";
        h1_1.id=""
        h1_1.innerHTML="My suggestions and advice:";
        li1.innerHTML=data.shift().li1_content;
        li2.innerHTML=data.shift().li2_content;
        li3.innerHTML=data.shift().li3_content;
        li4.innerHTML=data.shift().li4_content;
    div3.append(h1_1, li1, br1, li2, br2, li3, br3, li4);

    div2.id="center_content";
        h1.id="news_title"
        h1.innerHTML="About myself"
        p1.id="p1"
        p2.id="p2"
        p3.id="p3"
        p1.innerHTML=data.shift().p1_content
        p2.innerHTML=data.shift().p2_content
        p3.innerHTML=data.shift().p3_content
        img1.id="img1";
        img1.src=data.shift().imgURL1;
    div2.append(img1, h1, p1, p2, p3);

    div1.id="container";
    div1.append(div2, div3);
    document.body.append(div1);
} //1334 x 750