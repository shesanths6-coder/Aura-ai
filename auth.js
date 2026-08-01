const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSwitchText = document.getElementById("authSwitchText");
const authError = document.getElementById("authError");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const userStatus = document.getElementById("userStatus");

let isSignUp = false;

function openModal(signUpMode) {
  isSignUp = signUpMode;
  authError.textContent = "";
  authForm.reset();
  updateModalText();
  modal.style.display = "flex";
}

function updateModalText() {
  authTitle.textContent = isSignUp ? "Create your account" : "Sign in to Aura";
  authSubmitBtn.textContent = isSignUp ? "Sign Up" : "Sign In";
  authSwitchText.innerHTML = isSignUp
    ? `Already have an account? <a href="#" id="switchLink">Sign in</a>`
    : `Don't have an account? <a href="#" id="switchLink">Sign up</a>`;
  document.getElementById("switchLink").addEventListener("click", (e) => {
    e.preventDefault();
    isSignUp = !isSignUp;
    authError.textContent = "";
    updateModalText();
  });
}

document.getElementById("signInBtn").addEventListener("click", () => openModal(false));
document.getElementById("getStartedBtn").addEventListener("click", () => openModal(true));
closeModal.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  authError.textContent = "";

  const action = isSignUp
    ? auth.createUserWithEmailAndPassword(email, password)
    : auth.signInWithEmailAndPassword(email, password);

  action
    .then(() => {
      modal.style.display = "none";
    })
    .catch((err) => {
      authError.textContent = err.message;
    });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    userStatus.innerHTML = `<span>${user.email}</span> <button id="logoutBtn" class="btn btn-ghost">Log out</button>`;
    document.getElementById("logoutBtn").addEventListener("click", () => auth.signOut());
  } else {
    userStatus.innerHTML = `<a href="#" id="signInBtn" class="signin">Sign in</a>`;
    document.getElementById("signInBtn").addEventListener("click", () => openModal(false));
  }
});