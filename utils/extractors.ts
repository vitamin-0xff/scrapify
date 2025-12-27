import { DOMParser, Element, Node } from "https://deno.land/x/deno_dom@v0.1.56/deno-dom-wasm.ts";

type _RootElement = _Element | _Text | _Link

type _Element = {
    selectorContent: string;
    name: string
    type: 'id' | 'class';
    _type: 'element' | 'text';
    chidren: _RootElement[];
}

type _Text = {
    _type: 'text';
    selectorContent: string;
    textContent: string;
}

type _Link = {
    _type: 'link';
    href: string;
    textContent: string;
}

export function treeDrawer(element: _RootElement | _Text, depth: number = 0) {
    const indent = ' '.repeat(depth * 2);
    if('textContent' in element) {
        console.log(`${indent}Text: "${element.textContent.trim()}"`);
    } else {
        console.log(`${indent}${element.type.toUpperCase()}: ${element.name} (${element.selectorContent})`);
        element.chidren.forEach((child) => {
            treeDrawer(child, depth + 1);
        });
    }
}

/**
 * @abstract Check if a text node contains sub elements !This won't and shouldn't be used to check element nodes (only text nodes P, SPAN, H1, etc.) 
 * @param node 
 * @returns 
 */

export function doesTextElementContainSubElements(node: Node): boolean {
    let hasSubElements = false;
    node.childNodes.forEach((child) => {
        if(child.nodeType === Node.ELEMENT_NODE) {
            hasSubElements = true;
        }
    });
    return hasSubElements;
}

export function isItTextElementNode(node: Node): boolean {
    if(node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        if(tagName === 'p' || tagName === 'span' || tagName.startsWith('h') || tagName === 'li' || tagName === 'a') {
            return true;
        }
    }
    return false;
}

export function isItContainerElementNode(node: Node): boolean {
    if(node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        if(tagName === 'div' || tagName === 'section' || tagName === 'article' || tagName === 'main' || tagName === 'header' || tagName === 'footer' || tagName === 'nav' || tagName === 'ul' || tagName === 'ol') {
            return true;
        }
    }
    return false;
}


export function extractElementFromHtml(node: Node): _RootElement | null {
    let type: 'id' | 'class'
    let name: string
    if(node.nodeType === Node.ELEMENT_NODE) {
        const nodeElement = node as Element
        if(nodeElement.id) {
            type = 'id';
            name = nodeElement.id;
        } else if(nodeElement.className) {
            type = 'class';
            name = nodeElement.className;
        }else {
            type = 'class';
            name = nodeElement.tagName.toLowerCase();
        } 

        /**
         * Handle containers Elements div, section, article, etc.
         */
        if(isItContainerElementNode(node) && !isItTextElementNode(node)) {
            const children: _RootElement[] = []
            node.childNodes.forEach((child) => {
                const extractedChild = extractElementFromHtml(child);
                if(extractedChild) {
                    children.push(extractedChild);
                }
            });
            if(children.length === 0) {
                return null;
            }
            return {
                name,
                type,
                _type: 'element',
                selectorContent: type === 'id' ? `#${name}` : `.${name}`,
                chidren: children
            }
        }

        if(doesTextElementContainSubElements(node)) {
            const children: (_Element | _Text | _Link)[] = []
            node.childNodes.forEach((child) => {
                const extractedChild = extractElementFromHtml(child);
                if(extractedChild) {
                    children.push(extractedChild);
                }
            });
            return {
                name,
                type,
                _type: 'text',
                selectorContent: type === 'id' ? `#${name}` : `.${name}`,
                chidren: children
            }
        }


        if(nodeElement.tagName.toLowerCase() == 'a') {
            return {
                _type: 'link',
                href: nodeElement.getAttribute('href') || '',
                textContent: nodeElement.textContent || ''
            }
        }

        if(nodeElement.textContent.trim() !== '') {
            return {
                _type: 'text',
                textContent: nodeElement.textContent || '',
                selectorContent: type === 'id' ? `#${name}` : `.${name}`,
            }
        }
        
    } 
       return null
}

/**
 * Extract job description to object (sepcific to optioncarriere.tn/jobad/{id})
 * shape of returned object:
 * {
 *   title: string | null,
 *   company: string | null,
 *   location: string | null,
 *   contract: string | null,
 *   workTime: string | null,
 *   posted: string | null,
 *   description: string | null,
 *   source: string | null,
 *   applyUrl: string | null
 * }
 */
export async function instanceExtractor(extractorElement: _Element, html: string, version: number = 0) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    if (!doc) return null;

    const root = doc.querySelector("article#job");
    const rootElement = extractorElement.selectorContent;
    const rootNode = root?.querySelector(`${extractorElement.type === 'id' ? '#' : '.'}${rootElement}`);
    if(!rootNode) return null;

    let treeRoot = {name: extractorElement.name, selectorContent: extractorElement.selectorContent, type: extractorElement.type};
}