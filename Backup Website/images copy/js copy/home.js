//======================================================
// HOME PAGE
// Divine Alignment Ministries™
//======================================================

console.log("Divine Alignment Ministries™ Home Loaded");

//======================================================
// DOM ELEMENTS
//======================================================

const ministryCards = document.querySelectorAll(".ministry-card");

const ministryModal = document.getElementById("ministryModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalDetails = document.getElementById("modalDetails");

const modalButton = document.getElementById("modalButton");

const closeModal = document.getElementById("closeModal");

//======================================================
// MINISTRY INFORMATION
//======================================================

const ministryInfo = {

    worship: {

        title: "Worship & The Word™",

        description: "Experience worship, biblical teaching, and encouragement that strengthens your faith and draws you closer to Jesus Christ.",

        buttonText: "Enter Ministry",

        link: "worship.html",

        details: `

<h3>Worship &amp; The Word™</h3>

<p>

Worship &amp; The Word™ is where hearts are lifted in worship, lives are
strengthened through biblical teaching, and believers are equipped to
live out God's Word every day. Every gathering is centered on Jesus
Christ, creating an atmosphere where faith grows, hope is renewed, and
lives are transformed through His presence.

</p>

<div class="modal-schedule">

<h4>Weekly Gathering</h4>

<p>

<strong>Sundays @ 7:00 PM</strong>

</p>

</div>

<div class="modal-scripture">

<h4>Scripture Focus</h4>

<p>

<i>
"Let the word of Christ dwell in you richly in all wisdom; teaching and
admonishing one another in psalms and hymns and spiritual songs,
singing with grace in your hearts to the Lord."
</i>

</p>

<p>

<strong>Colossians 3:16 (KJV)</strong>

</p>

</div>

<div class="modal-platforms">

<a href="https://www.facebook.com/DivineAlignmentMinistries/" target="_blank">

Facebook

</a>

<a href="https://www.youtube.com/channel/UCT33FT4cdGSXzJkF5nmj4OQ" target="_blank">

YouTube

</a>

<a href="https://www.tiktok.com/@divinealignmentmins" target="_blank">

TikTok

</a>

<a href="https://zoom.us/j/7035318342" target="_blank">

Zoom

</a>

</div>

`

    },
    faith: {

        title: "Conversations of Faith™",

        description: "Explore Scripture through meaningful conversations that encourage questions, deepen understanding, and strengthen your walk with Christ.",

        buttonText: "Join the Conversation",

        link: "conversations.html",

        details: `

<h3>Conversations of Faith™</h3>

<p>

Conversations of Faith™ is a place where questions become conversations
and Scripture becomes personal. Every session invites believers to go
beyond the surface of familiar passages, discover deeper biblical
truths, and grow together through open discussion and Spirit-led
teaching.

Whether you're new to studying the Bible or have spent years in God's
Word, you'll find a welcoming environment where every question matters
and every conversation points back to Christ.

</p>

<div class="modal-schedule">

<h4>Weekly Gathering</h4>

<p>

<strong>Thursdays @ 6:00 PM CST</strong>

<br>

Live via Zoom

</p>

</div>

<div class="modal-scripture">

<h4>Scripture Focus</h4>

<p>

<i>

"Come now, and let us reason together, saith the Lord..."

</i>

</p>

<p>

<strong>Isaiah 1:18 (KJV)</strong>

</p>

</div>

<div class="modal-platforms">

<a href="https://zoom.us/j/7035318342" target="_blank">

Join Zoom

</a>

</div>

`

    },

    prayer: {

        title: "Prayer Ministry",

        description: "Submit a prayer request and stand with believers in prayer, trusting God to bring wisdom, healing, strength, and peace.",

        buttonText: "Submit a Prayer Request",

        link: "prayer.html",

        details: `

<h3>Prayer Ministry</h3>

<p>

Prayer is the heartbeat of Divine Alignment Ministries™. Whether you're celebrating God's faithfulness, seeking direction, or walking through a difficult season, you never have to pray alone. We believe God hears, God cares, and God still answers prayer.

</p>

<div class="modal-schedule">

<h4>Prayer Opportunities</h4>

<p>

Prayer requests may be submitted anytime. Join us as we seek God's guidance, healing, wisdom, strength, and peace together.

</p>

</div>

<div class="modal-scripture">

<h4>Scripture Focus</h4>

<p><i>"The effectual fervent prayer of a righteous man availeth much."</i></p>

<p><strong>James 5:16 (KJV)</strong></p>

</div>

<div class="modal-platforms">

<a href="prayer.html">

Submit a Prayer Request

</a>

</div>

`

    },

    resources: {

        title: "Resources",

        description: "Bible studies, devotionals, teaching materials, and resources to help you grow in your walk with Christ.",

        buttonText: "Explore Resources",

        link: "resources.html",

        details: `

...YOUR RESOURCES HTML...

`

    },
    give: {

        title: "Support the Ministry",

        description: "Partner with Divine Alignment Ministries™ as we share the Gospel through worship, biblical teaching, outreach, and media.",

        buttonText: "Give Securely",

        link: "give.html",

        details: `

...YOUR GIVE HTML...

`

    },

    more: {

        title: "More Ministries",

        description: "See what God is continuing to build through Divine Alignment Ministries™.",

        buttonText: "Explore Our Ministries",

        link: "ministries.html",

        details: `

...YOUR MORE HTML...

`

    }

};


//======================================================
// MODAL FUNCTIONS
//======================================================

function openModal() {
    ministryModal.style.display = "flex";
}

function closeMinistryModal() {
    ministryModal.style.display = "none";
}

//======================================================
// MINISTRY CARD EVENTS
//======================================================

ministryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const key = card.dataset.ministry;
        const ministry = ministryInfo[key];

        if (!ministry) return;

        modalTitle.textContent = ministry.title;
        modalDescription.textContent = ministry.description;
        modalDetails.innerHTML = ministry.details;

        modalButton.textContent = ministry.buttonText || "Learn More";

        if (ministry.link) {

            modalButton.href = ministry.link;
            modalButton.style.display = "inline-block";

        } else {

            modalButton.removeAttribute("href");
            modalButton.style.display = "none";

        }

        openModal();

    });

});

//======================================================
// CLOSE BUTTON
//======================================================

closeModal.addEventListener("click", closeMinistryModal);

//======================================================
// CLOSE WHEN CLICKING OUTSIDE THE MODAL
//======================================================

ministryModal.addEventListener("click", (event) => {

    if (event.target === ministryModal) {

        closeMinistryModal();

    }

});

//======================================================
// CLOSE WITH ESC KEY
//======================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMinistryModal();

    }

});