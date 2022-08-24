import XSS from 'xss';
import HtmlParser from 'html-react-parser';

const html = `
    <h1 id="title">XSS Demo</h1>

    <p class="text-center"  onclick="alert(123)">
        Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
    </p>

    <form>
        <input type="text" name="q" value="test">
        <button id="submit">Submit</button>
    </form>

    <pre>hello</pre>

    <p>
        <a href="http://jsxss.com">http</a>
        <a href="https://jsxss.com">https</a>
        <a href="ftp://jsxss.com">ftp</a>
        <a href="other1">other1</a>
        <a href="/other2">other2</a>
        <a href="#">other3</a>
    </p>

    <h3>Features:</h3>
    <ul>
        <li>Specifies HTML tags and their attributes allowed with whitelist</li>
        <li>Handle any tags or attributes using custom function</li>
    </ul>

    <script>
        alert(/xss/);
    </script>

    <img src="http://pic.rmb.bdstatic.com/a301b0f4e796ea0966da5bdc5c7faf7f.png" />
`;

const WebXSS = () => {
    return (
        <div>{HtmlParser(XSS(html))} </div>
    );
};

export default WebXSS;
