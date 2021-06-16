class MyNav extends HTMLElement{
    static style=`
        nav{
            display:flex;
        }
        nav>.title{
            flex:none;width:200px;
        }
        nav>.menu{
            flex:auto;text-align:right;
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
        const nav=document.createElement("nav");
        const title=document.createElement("div");
        title.className="title";
        title.textContent="My Web";
        const menu=document.createElement("div");
        menu.className="menu";
        menu.textContent="Web Menu";
        nav.appendChild(title);
        nav.appendChild(menu);
        this.shadowRoot.appendChild(nav);
    }
}
export default MyNav;
class MyNav extends HTMLElement{
    static style=`
        nav{
            display:flex;
        }
        nav>.title{
            flex:none;width:200px;
        }
        nav>.menu{
            flex:auto;text-align:right;
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
        const nav=document.createElement("nav");
        const title=document.createElement("div");
        title.className="title";
        title.textContent="My Web";
        const menu=document.createElement("div");
        menu.className="menu";
        menu.textContent="Web Menu";
        nav.appendChild(title);
        nav.appendChild(menu);
        this.shadowRoot.appendChild(nav);
    }
}
export default MyNav;
