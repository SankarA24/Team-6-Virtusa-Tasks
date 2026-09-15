class UserCard extends HTMLElement {

    constructor() {

        super();

        this.innerHTML = `
            <div class="card">

                <h2>Pavithra</h2>

                <p>Java Developer</p>

                <button>View Profile</button>

            </div>
        `;

        let button = this.querySelector("button");

        button.addEventListener("click", function() {

            alert("Profile clicked!");

        });

    }

}

// Register Custom Element
customElements.define("user-card", UserCard);