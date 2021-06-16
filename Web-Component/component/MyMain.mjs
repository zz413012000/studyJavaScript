<<<<<<< HEAD
class MyMain extends HTMLElement{
    static style=`
        main{
            height:200px;line-height:200px;
            text-align:center;
            font-size:1.2rem;font-weight:bold;
            background-color:#ddd;
        }
    `;
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        // 建立 CSS 樣式
        this.styling();
        // render HTML 結構
        this.render();
    }
    styling(){
        // 1. set up style DOM
        // 2. assign style textContent
        // 3. append shadowRoot
        this.stylesheet=document.createElement("style");
        this.stylesheet.textContent=this.constructor.style;
        this.shadowRoot.appendChild(this.stylesheet);
    }
    render(){
        const main=document.createElement("main");
        main.textContent="Welcome";
        this.shadowRoot.appendChild(main);
    }
}
=======
class MyMain extends HTMLElement{
    static style=`
        main{
            height:200px;line-height:200px;
            text-align:center;
            font-size:1.2rem;font-weight:bold;
            background-color:#ddd;
        }
    `;
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        // 建立 CSS 樣式
        this.styling();
        // render HTML 結構
        this.render();
    }
    styling(){
        // 1. set up style DOM
        // 2. assign style textContent
        // 3. append shadowRoot
        this.stylesheet=document.createElement("style");
        this.stylesheet.textContent=this.constructor.style;
        this.shadowRoot.appendChild(this.stylesheet);
    }
    render(){
        const main=document.createElement("main");
        main.textContent="Welcome";
        this.shadowRoot.appendChild(main);
    }
}
>>>>>>> f5cd1ee8c61ff06520c63b689a0b694422969fd2
export default MyMain;