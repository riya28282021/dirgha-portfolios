
// INTERACTIVE TERMINAL

const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const terminalCommands = {
  help: `Available commands:
  about   - Learn about Dirgha
  skills  - Explore the toolbox
  cloud   - Discover cloud computing
  contact - Get in touch
  clear   - Clear the terminal`,

  about: "Hi! I'm Dirgha, a Computer Science student exploring Cloud Computing and creative technology.",

  skills: "Exploring: Cloud Computing, Programming, Web Technologies, Cloud Infrastructure, DevOps concepts and Creative Thinking.",

  cloud: "Cloud computing delivers computing resources over the internet. Explore concepts like IaaS, PaaS, SaaS, virtual machines, storage and networking.",

  contact: "Email: dirgha.bedade@gmail.com\nGitHub: github.com/dirghabedade478-web"
};

if (terminalForm) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      terminalOutput.textContent = "";
    } else if (
      Object.prototype.hasOwnProperty.call(terminalCommands, command)
    ) {
      terminalOutput.textContent = terminalCommands[command];
    } else {
      terminalOutput.textContent =
        `Command not found: ${command}\nType "help" to see available commands.`;
    }

    terminalInput.value = "";
  });
}

// COPY EMAIL

const copyButton = document.getElementById("copy-email");
const copyMessage = document.getElementById("copy-message");

if (copyButton && copyMessage) {
  copyButton.addEventListener("click", async () => {
    const email = "dirgha.bedade@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      copyMessage.textContent = "Email copied successfully!";
    } catch (error) {
      copyMessage.textContent =
        "Copy unavailable here. Email: " + email;
    }
  });
}

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}
