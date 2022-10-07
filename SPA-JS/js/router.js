let pageUrls = {
    about: '/index.html?about',
    contact:'/index.html?contact'
    }
    function OnStartUp(params) {
    popStateHandler();
    }
    OnStartUp();
    document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'about'
    }
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
    });
    document.querySelector('#contact-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'contact'
    }
    document.title = 'Contact';
    history.pushState(stateObj, "contact", "?contact");
    RenderContactPage();
    });
    function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>
  
    <div class="row mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">Post title</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  
          </div>
        </div>
      </div>
    </div>
  
    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>
  
        <article class="blog-post">
          <h2 class="blog-post-title mb-1">Sample blog post</h2>
          <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
  
          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
          <hr>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote class="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example lists</h3>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>And this is an ordered list:</p>
          <ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ol>
          <p>And this is a definition list:</p>
          <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
          </dl>
          <h2>Inline HTML elements</h2>
          <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
          <ul>
            <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
          </ul>
          <p>Most of these elements are styled by browsers with few modifications on our part.</p>
          <h2>Heading</h2>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Sub-heading</h3>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <pre><code>Example code block</code></pre>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>
  
        <article class="blog-post">
          <h2 class="blog-post-title mb-1">Another blog post</h2>
          <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
  
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example table</h3>
          <p>And don't forget about tables in these posts:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
            </tfoot>
          </table>
  
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>
  
        <article class="blog-post">
          <h2 class="blog-post-title mb-1">New feature</h2>
          <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>
  
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>
  
        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
          <a class="btn btn-outline-secondary rounded-pill disabled">Newer</a>
        </nav>
  
      </div>
  
      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
          </div>
  
          <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>
  
          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>`;
    }
    function RenderContactPage(params) {
    document.querySelector('main').innerHTML =
    `    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-primary">
        <div class="card-header py-3 text-bg-primary border-primary">
          <h4 class="my-0 fw-normal">Enterprise</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
        </div>
      </div>
    </div>
  </div>

  <h2 class="display-6 text-center mb-4">Compare plans</h2>

  <div class="table-responsive">
    <table class="table text-center">
      <thead>
        <tr>
          <th style="width: 34%;"></th>
          <th style="width: 22%;">Free</th>
          <th style="width: 22%;">Pro</th>
          <th style="width: 22%;">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="text-start">Public</th>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Private</th>
          <td></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <th scope="row" class="text-start">Permissions</th>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Sharing</th>
          <td></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Unlimited members</th>
          <td></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
        <tr>
          <th scope="row" class="text-start">Extra security</th>
          <td></td>
          <td></td>
          <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

<footer class="pt-4 my-md-5 pt-md-5 border-top">
  <div class="row">
    <div class="col-12 col-md">
      <img class="mb-2" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19">
      <small class="d-block mb-3 text-muted">&copy; 2017–2022</small>
    </div>
    <div class="col-6 col-md">
      <h5>Features</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Resources</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>About</h5>
      <ul class="list-unstyled text-small">
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>
</div>
`;
    }
    function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.
    contact
    ){
    RenderContactPage();
    }
    if(loc === pageUrls.about
    ){
    Render
    About
    Page();
    }
    }
    window.onpopstate =
    popStateHandler;