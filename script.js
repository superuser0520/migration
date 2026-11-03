const accessMessage =
  "Hi Admin, I’d like to continue using Soodering. Could you please approve my access and share the new private website address with me?";

const copyButtons = [
  document.querySelector("#copy-request"),
  document.querySelector("#copy-request-dialog"),
];
const dialog = document.querySelector("#access-dialog");
const toast = document.querySelector("#toast");
let toastTimer;

document.querySelector("#year").textContent = new Date().getFullYear();

function showToast(message = "Request copied to clipboard") {
  toast.querySelector("span").textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

async function copyRequest(event) {
  event.preventDefault();

  try {
    await navigator.clipboard.writeText(accessMessage);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = accessMessage;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }

  if (dialog.open) dialog.close();
  showToast();
}

copyButtons.forEach((button) => button.addEventListener("click", copyRequest));

document.querySelector("#how-to").addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) dialog.close();
});
