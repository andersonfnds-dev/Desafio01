class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");
        
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const link = document.createElement("a");
        link.textContent = this.getAttribute("titulo");
        link.href = this.getAttribute("link-url");

        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("conteudo");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(paragrafo);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("imagem-url");
        newsImage.alt = "Foto da notícia";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
    * {
        font-family: 'Roboto', sans-serif;
    }

    .card {
        width: 720px;
        border: 1px solid #ccc;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px;
    }
    
    .card-right > img {
        width: 350px;
        margin: 10px;
    }

    .card-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card-left >h1 {
        margin-top: 15px;
        font-size: 25px;
    }
    
    .card-left >p {
        color: grey;
    }
    
    .card-left >span {
        font-weight: 350;
    }
    .card-left > a {
        color: #1b1b1b;
        font-size: 25px;
        text-decoration: none;
        font-weight: 500;
        margin : 10px 0px;
    }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);
