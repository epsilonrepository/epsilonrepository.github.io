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

class MyHeader2 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li><a href="../index.html">home</a></li>
                        <li><a href="../blog/index.html">blog</a></li>  
                        <li><a href="../essays/index.html">essays</a></li>  
                        <li><a href="../school/index.html">school</a></li>  
                        <li><a href="../music/index.html">music</a></li>  
                        <li><a href="../poetry/index.html">poetry</a></li>  
                        <li><a href="../misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `
    }
}
customElements.define('my-header-2', MyHeader2)

class MyHeader3 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <nav>
                    <h1 class="nav-title"> THE EPSILON PROJECT </h1>
                    <ul class="nav-links">
                        <li><a href="../../index.html">home</a></li>
                        <li><a href="../../blog/index.html">blog</a></li>  
                        <li><a href="../../essays/index.html">essays</a></li>  
                        <li><a href="../../school/index.html">school</a></li>  
                        <li><a href="../../music/index.html">music</a></li>  
                        <li><a href="../../poetry/index.html">poetry</a></li>  
                        <li><a href="../../misc/index.html">misc</a></li>  
                    </ul>
                </nav>
            <hr>
            </header>   
        `
    }
}
customElements.define('my-header-3', MyHeader3)