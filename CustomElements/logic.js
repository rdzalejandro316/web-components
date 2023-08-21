const template = document.createElement('div');
template.innerHTML = `
    <style>
        .texto {
            color: red;
        }
        p {
            color: blue;
        }
    </style>
    
    <p class="texto">Hola mundo 2!!</p>
    <p>texto ejemplo para la clase!</p>
` 

class xmButton extends HTMLElement
{
    // inicializando todo lo que se guardara en memoria para despues agregarlos al nodo como DOM
    constructor(){
        super();    
        this.p = document.createElement('p');
    }

    connectedCallback(){
        this.p.textContent = "hola mundo";
        this.appendChild(this.p);
        this.appendChild(template);
    }
}

customElements.define('xm-button',xmButton);