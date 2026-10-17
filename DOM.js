function Operation1() {


    // 1.============== SELECTING ELEMENTS==============

    const heading = document.getElementById("heading");

    const description = document.querySelector(".description");

    const box = document.querySelector("#box");

    const buttons = document.querySelectorAll("button");

    console.log(heading);
    console.log(description);
    console.log(box);
    console.log(buttons);


    // 2.============== QUERY SELECTOR ALL==============

    const allParagraphs = document.querySelectorAll("p");

    allParagraphs.forEach((paragraph) => {
        console.log(paragraph.textContent);
    });


    // 3. ==============CHANGING TEXT==============

    document.getElementById("changeText").addEventListener("click", () => {
        heading.textContent = "DOM Manipulation Mastered!";
    });


    // 4.============== INNER TEXT VS TEXT CONTENT==============

    console.log(heading.innerText);
    console.log(heading.textContent);


    // 5.============== INNER HTML==============

    box.innerHTML = "<strong>Main box content</strong>";

    // IMPORTANT:
    // Only insert trusted HTML into innerHTML.
    // Use textContent for untrusted user input.


    // 6. ==============CHANGING CSS==============

    document.getElementById("changeStyle").addEventListener("click", () => {
        box.style.backgroundColor = "lightblue";
        box.style.color = "black";
        box.style.fontSize = "20px";
        box.style.padding = "25px";
    });


    // 7.============== CLASS LIST================

    box.classList.add("active");

    box.classList.remove("active");

    box.classList.toggle("active");

    console.log(box.classList.contains("active"));


    // 8.================ ATTRIBUTES================

    heading.setAttribute("title", "DOM heading");

    console.log(heading.getAttribute("title"));

    heading.removeAttribute("title");

    console.log(heading.hasAttribute("id"));


    // 9.================ DATA ATTRIBUTES================

    box.dataset.status = "active";

    console.log(box.dataset.status);


    // 10. HIDE AND SHOW ELEMENTS

    document.getElementById("toggleBox").addEventListener("click", () => {
        box.classList.toggle("hidden");
    });


    // 11.================ CREATE ELEMENT================

    const newParagraph = document.createElement("p");

    newParagraph.textContent = "This paragraph was created with JavaScript.";

    document.querySelector(".container").appendChild(newParagraph);


    // 12.================ APPEND AND PREPEND================

    const list = document.getElementById("itemList");

    const firstItem = document.createElement("li");

    firstItem.textContent = "First item";

    list.prepend(firstItem);

    const lastItem = document.createElement("li");

    lastItem.textContent = "Last item";

    list.append(lastItem);


    // 13. ================REMOVE ELEMENT================

    const temporaryElement = document.createElement("p");

    temporaryElement.textContent = "Temporary paragraph";

    document.body.append(temporaryElement);

    temporaryElement.remove();


    // 14.================ BEFORE AND AFTER================

    const beforeElement = document.createElement("p");

    beforeElement.textContent = "Before the box";

    box.before(beforeElement);

    const afterElement = document.createElement("p");

    afterElement.textContent = "After the box";

    box.after(afterElement);


    // 15================. CLONE ELEMENT================

    const clonedBox = box.cloneNode(true);

    clonedBox.id = "clonedBox";

    clonedBox.textContent = "Cloned box";

    document.querySelector(".container").append(clonedBox);


    // 16. ================PARENT AND CHILD TRAVERSAL================

    console.log(list.parentElement);

    console.log(list.children);

    console.log(list.firstElementChild);

    console.log(list.lastElementChild);

    console.log(list.children.length);


    // 17. SIBLING TRAVERSAL

    console.log(heading.nextElementSibling);

    console.log(heading.previousElementSibling);


    // 18.================ CLOSEST ELEMENT================

    console.log(box.closest(".container"));


    // 19.================ CONTAINS================

    console.log(document.body.contains(box));


    // 20. ================EVENT LISTENER================

    heading.addEventListener("click", () => {
        console.log("Heading clicked!");
    });


    // 21. ================EVENT OBJECT================

    heading.addEventListener("click", (event) => {
        console.log(event.type);
        console.log(event.target);
        console.log(event.currentTarget);
    });


    // 22.================ MOUSE EVENTS================

    box.addEventListener("mouseenter", () => {
        box.style.border = "2px solid blue";
    });

    box.addEventListener("mouseleave", () => {
        box.style.border = "";
    });


    // 23.================ DOUBLE CLICK================

    box.addEventListener("dblclick", () => {
        box.classList.toggle("active");
    });


    // 24.================ KEYBOARD EVENTS================

    document.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event.key);
    });


    // 25.================ EVENT DELEGATION ================
    // One listener handles clicks on list items.

    list.addEventListener("click", (event) => {
        if (event.target.matches("li")) {
            event.target.classList.toggle("highlight");
        }
    });


    // 26.================ DYNAMIC LIST WITH EVENT DELEGATION ================

    const itemInput = document.getElementById("itemInput");

    document.getElementById("addItem").addEventListener("click", () => {
        const value = itemInput.value.trim();

        if (value === "") {
            alert("Please enter an item.");
            return;
        }

        const li = document.createElement("li");

        // Safe insertion: treats input as text, not HTML.
        li.textContent = value;

        list.append(li);

        itemInput.value = "";
        itemInput.focus();
    });


    // 27.================ FORM SUBMISSION ================

    const userForm = document.getElementById("userForm");

    const formMessage = document.getElementById("formMessage");

    userForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();

        const email = document.getElementById("email").value.trim();

        if (!username || !email) {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.textContent = `Welcome, ${username}! Email: ${email}`;
    });


    // 28. ================INPUT EVENT ================

    itemInput.addEventListener("input", (event) => {
        console.log("Current input:", event.target.value);
    });


    // 29.================ FOCUS AND BLUR================

    itemInput.addEventListener("focus", () => {
        itemInput.style.backgroundColor = "lightyellow";
    });

    itemInput.addEventListener("blur", () => {
        itemInput.style.backgroundColor = "";
    });


    // 30================. PREVENT DEFAULT================

    const exampleLink = document.createElement("a");

    exampleLink.href = "https://example.com";

    exampleLink.textContent = "Example link (navigation prevented)";

    exampleLink.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("Default navigation prevented.");
    });

    document.querySelector(".container").append(exampleLink);


    // 31.================ STOP PROPAGATION================

    const outerBox = document.createElement("div");

    outerBox.className = "box";

    outerBox.textContent = "Outer box";

    const innerBox = document.createElement("button");

    innerBox.textContent = "Inner button";

    outerBox.append(innerBox);

    document.querySelector(".container").append(outerBox);

    outerBox.addEventListener("click", () => {
        console.log("Outer box clicked.");
    });

    innerBox.addEventListener("click", (event) => {
        event.stopPropagation();

        console.log("Inner button clicked.");
    });


    // 32.================ EVENT CAPTURING================

    outerBox.addEventListener(
        "click",
        () => {
            console.log("Capturing phase");
        },
        { capture: true }
    );


    // 33.================ ONCE OPTION================
    // Listener runs only once.

    heading.addEventListener(
        "dblclick",
        () => {
            console.log("This message appears only once.");
        },
        { once: true }
    );


    // 34.================ REMOVE EVENT LISTENER================

    function handleHeadingClick() {
        console.log("Heading event handler");
    }

    heading.addEventListener("mouseenter", handleHeadingClick);

    heading.removeEventListener("mouseenter", handleHeadingClick);


    // 35.================ TIMER AND DOM================

    const timerMessage = document.createElement("p");

    timerMessage.textContent = "Timer starts...";

    document.querySelector(".container").append(timerMessage);

    setTimeout(() => {
        timerMessage.textContent = "Two seconds passed!";
    }, 2000);


    // 36.================ INTERVAL================

    let seconds = 0;

    const timerDisplay = document.createElement("p");

    document.querySelector(".container").append(timerDisplay);

    const intervalId = setInterval(() => {
        seconds++;

        timerDisplay.textContent = `Seconds: ${seconds}`;

        if (seconds >= 5) {
            clearInterval(intervalId);

            timerDisplay.textContent += " — Timer stopped.";
        }
    }, 1000);


    // 37.================ DOM READY================

    document.addEventListener("DOMContentLoaded", () => {
        console.log("HTML document parsed.");
    });


    // 38. WINDOW LOAD

    window.addEventListener("load", () => {
        console.log("Page and dependent resources loaded.");
    });


    // 39.================ LOCAL STORAGE ================
    // Stores strings persistently in the browser.

    localStorage.setItem("username", "Rahul");

    console.log(localStorage.getItem("username"));

    // To remove this key:
    // localStorage.removeItem("username");

    // To clear all origin storage:
    // localStorage.clear();


    // 40. SESSION STORAGE

    sessionStorage.setItem("theme", "dark");

    console.log(sessionStorage.getItem("theme"));


    // 41.================ STORE OBJECT IN LOCAL STORAGE================

    const user = {
        name: "Rahul",
        age: 20
    };

    localStorage.setItem("user", JSON.stringify(user));

    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log(storedUser);


    // 42.================ THEME TOGGLE================

    const themeButton = document.createElement("button");

    themeButton.textContent = "Toggle Theme";

    document.querySelector(".container").prepend(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");

        document.body.style.backgroundColor = isDark ? "#222" : "#f4f4f4";

        document.body.style.color = isDark ? "#fff" : "#222";
    });


    // 43.================ WINDOW SIZE================

    console.log("Window width:", window.innerWidth);

    console.log("Window height:", window.innerHeight);


    // 44. RESIZE EVENT

    window.addEventListener("resize", () => {
        console.log("Width:", window.innerWidth);
    });


    // 45.================ SCROLL EVENT================

    window.addEventListener(
        "scroll",
        () => {
            console.log("Page is scrolling.");
        },
        { passive: true }
    );


    // 46.================ GET ELEMENT DIMENSIONS================

    console.log(box.getBoundingClientRect());


    // 47.================INTERSECTION OBSERVER================
    // Detects when an element enters or leaves a viewport.

    const observerTarget = document.createElement("div");

    observerTarget.className = "box";

    observerTarget.textContent = "Intersection Observer target";

    document.querySelector(".container").append(observerTarget);

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("Target is visible.");
            }
        });
    });

    intersectionObserver.observe(observerTarget);


    // 48.================ MUTATION OBSERVER================
    // Detects changes in an element's DOM subtree.

    const mutationTarget = document.createElement("div");

    mutationTarget.className = "box";

    mutationTarget.textContent = "Mutation Observer target";

    document.querySelector(".container").append(mutationTarget);

    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            console.log("Mutation type:", mutation.type);
        });
    });

    mutationObserver.observe(mutationTarget, {
        childList: true,
        attributes: true,
        subtree: true
    });

    mutationTarget.textContent = "Target content changed";


    // 49. ================RESIZE OBSERVER================
    // Detects changes in element dimensions.

    const resizeTarget = document.createElement("div");

    resizeTarget.className = "box";

    resizeTarget.textContent = "Resize Observer target";

    document.querySelector(".container").append(resizeTarget);

    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            console.log("Element width:", entry.contentRect.width);
            console.log("Element height:", entry.contentRect.height);
        });
    });

    resizeObserver.observe(resizeTarget);


    // 50.================ REQUEST ANIMATION FRAME================
    // Useful for smooth browser animations.

    const animationBox = document.createElement("div");

    animationBox.className = "box";

    animationBox.textContent = "Animation box";

    document.querySelector(".container").append(animationBox);

    let position = 0;

    function animate() {
        position += 1;

        animationBox.style.transform = `translateX(${position}px)`;

        if (position < 100) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);


    // 51.================ TEMPLATE ELEMENT================

    const template = document.createElement("template");

    template.innerHTML = `
    <div class="box">
        <h3>Template Card</h3>
        <p>Created from a template.</p>
    </div>
`;

    const templateClone = template.content.cloneNode(true);

    document.querySelector(".container").append(templateClone);


    // 52.================ FRAGMENT================
    // Efficiently prepare multiple DOM nodes.

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");

        li.textContent = `Fragment item ${i}`;

        fragment.append(li);
    }

    list.append(fragment);


    // 53.================ CHECK ELEMENT MATCHES================

    console.log(box.matches(".box"));

    console.log(box.matches("#box"));


    // 54. ================COMPUTED STYLE================
    // Reads the final calculated style.

    const computedStyle = getComputedStyle(box);

    console.log(computedStyle.backgroundColor);

    console.log(computedStyle.fontSize);


    // 55.================ CLONE AND REPLACE ELEMENT================

    const replaceTarget = document.createElement("p");

    replaceTarget.textContent = "Old content";

    document.querySelector(".container").append(replaceTarget);

    const replacement = document.createElement("p");

    replacement.textContent = "Replacement content";

    replaceTarget.replaceWith(replacement);


    // 56. CHECK FORM VALIDITY

    const emailInput = document.getElementById("email");

    console.log(emailInput.checkValidity());


    // 57. CUSTOM VALIDATION MESSAGE

    emailInput.addEventListener("input", () => {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity("Enter a valid email address.");
        } else {
            emailInput.setCustomValidity("");
        }
    });


    // 58.================ CLIPBOARD API ```javascript================
    //     // Works in secure contexts and with browser permission.

    const copyButton = document.createElement("button");

    copyButton.textContent = "Copy Heading";

    document.querySelector(".container").append(copyButton);

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(heading.textContent);

            console.log("Heading copied.");
        } catch (error) {
            console.error("Clipboard access failed:", error);
        }
    });


    // 59. FETCH DATA AND UPDATE DOM
    // Requires internet access.

    async function loadPosts() {
        const result = document.createElement("div");

        result.className = "box";

        result.textContent = "Loading posts...";

        document.querySelector(".container").append(result);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const posts = await response.json();

            result.replaceChildren();

            const title = document.createElement("h3");

            title.textContent = "Posts from API";

            result.append(title);

            posts.forEach((post) => {
                const paragraph = document.createElement("p");

                paragraph.textContent = post.title;

                result.append(paragraph);
            });
        } catch (error) {
            result.textContent = `Could not load posts: ${error.message}`;
        }
    }

    loadPosts();
}
Operation1()




