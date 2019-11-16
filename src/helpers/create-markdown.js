import marked from 'marked';
import highlightjs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

/**
 * Create your custom renderer that uses highlight js
 * @param {object} markedEngine - the marked library object
 * @param {string} text - text to be converted to markdown
 * @param {number} cursorIndex - where the user places their cursor (unused for now)
 * @param {boolean} isSelectiveHighlight - avoids lagging on long files if true
 */
const _configureRenderer = (markedEngine, text, cursorIndex, isSelectiveHighlight) => {
    const renderer = new markedEngine.Renderer();
    renderer.code = (code, lang) => {
        const ind = text.indexOf(code);
        const difference = Math.abs(ind - cursorIndex);
        if (!isSelectiveHighlight || difference < 2000) {
            let highlightedCode;
            if (lang && highlightjs.getLanguage(lang)) { // if there is a lang and it's highlight.js recognizes it
                /*
                    highlight(langaugeName, textToHighlight, igrnoreImproperSyntax)
                    - it returns a full object, the highlighted code is inthe value property
                */
                highlightedCode = highlightjs.highlight(lang, code, true).value;
            } else {
                highlightedCode = highlightjs.highlightAuto(code).value;
            }
            return `<pre><code class="hljs">${highlightedCode}</code></pre>`;
        }

        return `<pre><code class="hljs">${code.replace(/</g, '&lt;')}</code></pre>`;
    };

    markedEngine.setOptions({
        renderer,
        xhtml: false,
    });
};

/**
 * Wrapper method to convert markdown with configured highlighting
 * @param {string} text - text to be converted to markdown
 * @param {number} cursorIndex - where the user places their cursor (unused for now)
 * @param {boolean} isSelectiveHighlight - avoids lagging on long files if true
 */
const createMarkdown = (text = '# Error', cursorIndex = 0, isSelectiveHighlight = false) => {
    /* returns the final markdown */
    _configureRenderer(marked, text, cursorIndex, isSelectiveHighlight); // we only want marked to use special highlighing when not in edit mode
    return marked(text);
};

export default createMarkdown;
