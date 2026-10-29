function generateGreeting(name) {
  return "Hello, " + name + "!";
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
      welcomeMessage.textContent = generateGreeting("SCM & CI/CD Lab visitor");
    }

    const statusBtn = document.getElementById("status-btn");
    const statusMessage = document.getElementById("status-message");
    const statusBadge = document.getElementById("status-badge");

    const statuses = [
      {
        badge: "Lint Passed",
        badgeClass: "badge-success",
        message: "Automated ESLint quality check completed with 0 errors and 0 warnings. Code conforms to style standards.",
      },
      {
        badge: "Artifact Built",
        badgeClass: "badge-info",
        message: "Artifact packaged successfully. Uploading site assets to GitHub Pages environment...",
      },
      {
        badge: "Deployed to Pages",
        badgeClass: "badge-active",
        message: "Continuous Deployment successful! Static site is live on GitHub Pages with full version traceability.",
      },
      {
        badge: "CI/CD Idle",
        badgeClass: "badge-neutral",
        message: "SCM pipeline is standing by. Ready for the next commit to the main branch.",
      },
    ];

    let currentIndex = 0;

    if (statusBtn && statusMessage && statusBadge) {
      statusBtn.addEventListener("click", function () {
        const current = statuses[currentIndex];

        statusBadge.textContent = current.badge;
        statusBadge.className = "status-badge " + current.badgeClass;
        statusMessage.textContent = current.message;

        statusMessage.classList.add("highlight");
        setTimeout(function () {
          statusMessage.classList.remove("highlight");
        }, 300);

        currentIndex = (currentIndex + 1) % statuses.length;
      });
    }
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { generateGreeting };
}
