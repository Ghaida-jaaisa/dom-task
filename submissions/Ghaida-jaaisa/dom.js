// Task 1: DOM Archaeologist

// 1. Last element child of <body>
const lastElementChild = document.body.lastElementChild;
console.log("Last element child tag:", lastElementChild.tagName); // MAIN

// 2. Number of element children in <main>
const main = lastElementChild;
console.log("Element children count in <main>:", main.children.length); // 2

// 3. Difference between childNodes and children in <main>
const totalChildNodes = main.childNodes.length;
const totalChildren = main.children.length;
console.log("childNodes count:", totalChildNodes);
console.log("children count:", totalChildren);
console.log("Difference:", totalChildNodes - totalChildren);

// Explanation
console.log("childNodes includes text nodes (like spaces and line breaks).");
console.log("children includes only element nodes.");

// 4. nodeType and nodeName of first node in document.body.childNodes
const firstNode = document.body.childNodes[0];
console.log("First child nodeType:", firstNode.nodeType); // 3 (TEXT_NODE)
console.log("First child nodeName:", firstNode.nodeName); // #text

// 5. Is first paragraph a sibling of the second?
const section = main.children[0]; // <section>
const firstP = section.children[0];
const secondP = section.children[1];
console.log("Are paragraphs siblings?", firstP.nextElementSibling === secondP); // true

// 6. Unexpected text nodes
console.log("Unexpected text nodes in document.body:");
document.body.childNodes.forEach((node, i) => {
  if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
    console.log(`Text node at index ${i}: "${node.textContent.trim()}"`);
  }
});

// Task 2: Synthetic DOM Injection

// Create elements
const div = document.createElement("div");
div.className = "card";
div.dataset.role = "admin";

const h2 = document.createElement("h2");
h2.textContent = "Access Panel";

const p = document.createElement("p");
p.textContent = "Authenticated";

// Build structure
div.appendChild(h2);
div.appendChild(p);
document.body.appendChild(div);

// Log data-role value (not using getAttribute)
console.log("data-role:", div.dataset.role); // "admin"

// Change paragraph text using property
p.textContent = "Welcome back, Admin";

// Add classes
div.classList.add("authenticated", "highlight");

// Check class and remove "card" only
if (div.classList.contains("card")) {
  div.classList.remove("card");
}
console.log("Final classList:", div.classList.value);
