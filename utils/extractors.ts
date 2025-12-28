import { DOMParser, Element, Node } from "https://deno.land/x/deno_dom@v0.1.56/deno-dom-wasm.ts";
import { _Element, _Link, _RootElement, _Text } from "./types.ts";

export function treeDrawer(element: _RootElement | _Text, depth: number = 0) {
    const indent = ' '.repeat(depth * 2);
    if ('textContent' in element) {
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
        if (child.nodeType === Node.ELEMENT_NODE) {
            hasSubElements = true;
        }
    });
    return hasSubElements;
}

export function isItTextElementNode(node: Node): boolean {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        if (tagName === 'p' || tagName === 'span' || tagName.startsWith('h') || tagName === 'li' || tagName === 'a') {
            return true;
        }
    }
    return false;
}

export function isItContainerElementNode(node: Node): boolean {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        if (tagName === 'div' || tagName === 'section' || tagName === 'article' || tagName === 'main' || tagName === 'header' || tagName === 'footer' || tagName === 'nav' || tagName === 'ul' || tagName === 'ol') {
            return true;
        }
    }
    return false;
}


export function extractElementFromHtml(node: Node): _RootElement | null {
    let type: 'id' | 'class'
    let name: string
    if (node.nodeType === Node.ELEMENT_NODE) {
        const nodeElement = node as Element
        if (nodeElement.id) {
            type = 'id';
            name = nodeElement.id;
        } else if (nodeElement.className) {
            type = 'class';
            name = nodeElement.className;
        } else {
            type = 'class';
            name = nodeElement.tagName.toLowerCase();
        }

        /**
         * Handle containers Elements div, section, article, etc.
         */
        if (isItContainerElementNode(node) && !isItTextElementNode(node)) {
            const children: _RootElement[] = []
            node.childNodes.forEach((child) => {
                const extractedChild = extractElementFromHtml(child);
                if (extractedChild) {
                    children.push(extractedChild);
                }
            });
            if (children.length === 0) {
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

        if (doesTextElementContainSubElements(node)) {
            const children: (_Element | _Text | _Link)[] = []
            let fullString = ""
            node.childNodes.forEach((child) => {
                const extracted = extractElementFromHtml(child);
                if (!extracted) return;

                if (extracted._type === 'link') {
                    children.push(extracted);
                } else if ('textContent' in extracted) {
                    fullString += (fullString ? ' ' : '') + extracted.textContent.trim();
                }
            });
            // If there is text or link children, return a single text node with concatenated string + link children
            if (fullString || children.length) {
                const result: _Text & { chidren?: _Link[] } = {
                    _type: 'text',
                    textContent: fullString,
                    selectorContent: type === 'id' ? `#${name}` : `.${name}`,
                };

                // @ts-ignore
                if (children.length) result.chidren = children;
                return result;
            }


            if (nodeElement.tagName.toLowerCase() == 'a') {
                return {
                    selectorContent: type === 'id' ? `#${name}` : `.${name}`,
                    _type: 'link',
                    href: nodeElement.getAttribute('href') || '',
                    textContent: nodeElement.textContent || ''
                }
            }

            if (nodeElement.textContent.trim() !== '') {
                return {
                    _type: 'text',
                    textContent: nodeElement.textContent || '',
                    selectorContent: type === 'id' ? `#${name}` : `.${name}`,
                }
            }

        }
    }
        return null
}
