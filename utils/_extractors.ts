import { Element, Node } from "https://deno.land/x/deno_dom@v0.1.56/deno-dom-wasm.ts";
import { _Link, _RootElement, _Text, ContainerElementJson, ElementJson, fromElementToJsonElement } from "./types.ts";

export function treeDrawer(element: _RootElement, depth: number = 0) {
    const indent = ' '.repeat(depth * 2);

    if(element._type === 'text' && 'textContent' in element) {
        console.log(`${indent}Text: "${element.textContent.trim()}"`);
    }
    else if(element._type === 'link') {
        console.log(`${indent}Link: [${element.href}] "${element.textContent}"`);
    }
    else {
        console.log(`${indent}${element.selectorContent}`);
        element.chidren?.forEach((child) => treeDrawer(child, depth + 1));
    }
}

/** Check if a node has element children */
export function hasElementChildren(node: Node): boolean {
    return Array.from(node.childNodes).some(child => child.nodeType === Node.ELEMENT_NODE);
}

/** Check if node is a textual element */
export function isTextElement(node: Node): boolean {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;
    const tag = (node as Element).tagName.toLowerCase();
    return ['p', 'span', 'li', 'a'].includes(tag) || /^h\d$/.test(tag);
}

/** Check if node is a container element */
export function isContainerElement(node: Node): boolean {
    if (node.nodeType !== Node.ELEMENT_NODE) return false;
    const tag = (node as Element).tagName.toLowerCase();
    return ['div', 'section', 'article', 'main', 'header', 'footer', 'nav', 'ul', 'ol'].includes(tag);
}

export function extractElementFromHtml_(node: Node): _RootElement | _Text | _Link | null {
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node as Element;

    const type = el.id ? 'id' : 'class';
    const name = el.tagName.toLowerCase();
    const selectorContent = type === 'id' ? `#${el.id}` : `.${el.className.split(' ').join('.')}`;

    // Handle link
    if (el.tagName.toLowerCase() === 'a') {
        return {
            selectorContent,
            _type: 'link',
            href: el.getAttribute('href') || '',
            textContent: el.textContent?.trim() || ''
        };
    }

    // Handle container elements
    if (isContainerElement(el)) {
        const children: _RootElement[] = [];
        el.childNodes.forEach(child => {
            const extracted = extractElementFromHtml_(child);
            if(extracted)
            children.push(extracted);
        });
        if (children.length === 0) return null;
        return {
            _type: 'element',
            name,
            type,
            selectorContent,
            chidren: children
        };
    }

    // Handle text elements with sub-elements
    if (isTextElement(el) && hasElementChildren(el)) {
        const children: _RootElement[] = [];
        el.childNodes.forEach(child => {
            const extracted = extractElementFromHtml_(child);
            if (extracted) children.push(extracted);
        });
        return {
            _type: 'text',
            name,
            type,
            selectorContent,
            chidren: children
        };
    }

    // Handle plain text
    const text = el.textContent?.trim();
    if (text) {
        return {
            _type: 'text',
            textContent: text,
            selectorContent
        };
    }

    return null;
}

/* Serialize to json */

export function serializeElement(element: _RootElement): ElementJson | null {
    return fromElementToJsonElement(element)
}

export function visualizeSerializedElement(element: ElementJson | null): string {
    if (!element) return '';
    return JSON.stringify(element, null, 2);  
}
