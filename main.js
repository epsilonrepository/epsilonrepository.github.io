class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li><a href="/index.html">home</a></li>
                        <li><a href="/blog/index.html">blog</a></li>  
                        <li><a href="/essays/index.html">essays</a></li>  
                        <li><a href="/school/index.html">school</a></li>  
                        <li><a href="/music/index.html">music</a></li>  
                        <li><a href="/poetry/index.html">poetry</a></li>  
                        <li><a href="/misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `
    }
}
customElements.define('my-header', MyHeader)

class MyHeader1 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li><a href="index.html">home</a></li>
                        <li><a href="blog/index.html">blog</a></li>  
                        <li><a href="essays/index.html">essays</a></li>  
                        <li><a href="school/index.html">school</a></li>  
                        <li><a href="music/index.html">music</a></li>  
                        <li><a href="poetry/index.html">poetry</a></li>  
                        <li><a href="misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `
    }
}
customElements.define('my-header-1', MyHeader1)

// *****LAYER 2 HEADERS*****

class MyHeader2 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li id="home"><a href="../index.html">home</a></li>
                        <li id="blog"><a href="../blog/index.html">blog</a></li>  
                        <li id="essays"><a href="../essays/index.html">essays</a></li>  
                        <li id="school"><a href="../school/index.html">school</a></li>  
                        <li id="music"><a href="../music/index.html">music</a></li>  
                        <li id="poetry"><a href="../poetry/index.html">poetry</a></li>  
                        <li id="misc"><a href="../misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `;
        let path = window.location.pathname;
        const index = path.indexOf("epsilonrepository.github.io");

        if (index !== -1) {
            path = path.substring(index + "epsilonrepository.github.io".length);
        } 
        
        const folder = path.split('/')[1];
        if (folder) {
            const currentPage = document.getElementById(folder);
            if (currentPage) {
                currentPage.classList.add('current-page');
            }
        }
    }
}
customElements.define('my-header-2', MyHeader2);

// *****LAYER 3 HEADERS*****

class MyHeader3 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li id="home"><a href="../../index.html">home</a></li>
                        <li id="blog"><a href="../../blog/index.html">blog</a></li>  
                        <li id="essays"><a href="../../essays/index.html">essays</a></li>  
                        <li id="school"><a href="../../school/index.html">school</a></li>  
                        <li id="music"><a href="../../music/index.html">music</a></li>  
                        <li id="poetry"><a href="../../poetry/index.html">poetry</a></li>  
                        <li id="misc"><a href="../../misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `;
        let path = window.location.pathname;
        const index = path.indexOf("epsilonrepository.github.io");

        if (index !== -1) {
            path = path.substring(index + "epsilonrepository.github.io".length);
        } 
        
        const folder = path.split('/')[1];
        if (folder) {
            const currentPage = document.getElementById(folder);
            if (currentPage) {
                currentPage.classList.add('current-page');
            }
        }
    }
}
customElements.define('my-header-3', MyHeader3);