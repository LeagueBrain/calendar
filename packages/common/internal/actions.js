import { isObject } from './utils';

/**
 * @type {import("svelte/action").Action}
 */
export function setContent(node, content) {
	let actions = {
		/**
		 * @param {string | any} content
		 */
		update(content) {
			while (node.firstChild) {
				node.lastChild && node.removeChild(node.lastChild);
			}
			if (!isObject(content)) {
				node.innerText = content;
			} else if (content.domNodes) {
				for (let child of content.domNodes) {
					node.appendChild(child);
				}
			} else if (content.html) {
				node.innerHTML = content.html;
			}
		}
	};
	actions.update(content);

	return actions;
}

/**
 * Dispatch pointerdownoutside if pointer event occurred outside of node
 *
 * @type {import("svelte/action").Action}
 */
export function outsideEvent(node, type) {
	const handlePointerDown = (/** @type {{ target: Node | null; }} */ jsEvent) => {
		if (node && !node.contains(jsEvent.target)) {
			node.dispatchEvent(new CustomEvent(type + 'outside', { detail: { jsEvent } }));
		}
	};

	document.addEventListener(type, handlePointerDown, true);

	return {
		destroy() {
			document.removeEventListener(type, handlePointerDown, true);
		}
	};
}
