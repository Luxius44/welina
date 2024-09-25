// -- Login Form
const loginForm = document.querySelector(".login-form"),
	pass = document.querySelector("input[name='password']"),
	passConfirm = document.querySelector("input[name='password-confirm']");

if (loginForm) {
	// Check passwords match
	function checkPass() {
		passConfirm.setCustomValidity(
			pass.value !== passConfirm.value
				? "Les mots de passe ne correspondent pas"
				: ""
		);
		passConfirm.reportValidity();
	}

	loginForm.addEventListener("submit", e => {
		e.preventDefault();

		checkPass();
		passConfirm.addEventListener("input", checkPass);

		// Send form if valid
		passConfirm.validity.valid && loginForm.submit();
	});
}

// -- Messages
const msgForm = document.querySelector(".new-msg"),
	msgInput = document.querySelector(".new-msg .input"),
	msgList = document.querySelector(".msg-list");

if (msgForm) {
	function createMsg(text) {
		const msgHtml = `
			<div class="msg-new-ctn">
				<div class="msg-new">
					<div class="msg card">
						<img
							src="assets/img/avatar1.jpg"
							alt="Nathan Tim"
							class="msg-avatar avatar"
						/>
						<p class="msg-author">Loic Mozu</p>
						<div
							class="msg-job job"
							style="--color: #0c49bd"
						>
							Service Marketing
						</div>
						<p class="msg-msg">${text}</p>
						<label class="msg-likes">
							<input type="checkbox" class="likes-input">
							<span class="likes-nb hidden">0</span>
							<img
								src="assets/icons/like.svg"
								alt="Likes"
								class="likes-icon"
							/>
						</label>
					</div>
				</div>
			</div>
		`;

		msgList.insertAdjacentHTML("afterbegin", msgHtml);
	}

	msgForm.addEventListener("submit", e => {
		e.preventDefault();
		createMsg(msgInput.value);
	});

	// Likes
	window.addEventListener("input", e => {
		let likeInput = e.target.closest(".likes-input");

		if (likeInput) {
			let likeNb = likeInput.parentNode.querySelector(".likes-nb");

			likeNb.textContent =
				parseInt(likeNb.textContent) + (likeInput.checked ? 1 : -1);

			likeNb.classList.toggle("hidden", likeNb.textContent === "0");
		}
	});
}
