function getTitle() {
  return 'Welcome to CI Website';
}

function changeTitle() {
  document.getElementById("title").innerText = "CI Pipeline is Working ✅";
}

// For Node.js testing (CI/Jest etc.)
module.exports = { getTitle };
