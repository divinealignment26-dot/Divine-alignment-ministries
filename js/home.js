alert("HOME JS IS LOADED");

//======================================================
// MINISTRY MODALS
//======================================================

const ministryCards = document.querySelectorAll(".ministry-card");

const ministryModal = document.getElementById("ministryModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalButton = document.getElementById("modalButton");

const closeModal = document.getElementById("closeModal");


const ministryInfo = {

    worship:{

        title:"Worship & The Word™",

        description:"Where worship becomes more than music and the Word becomes more than information.",

details:`

<h3>Worship & The Word™</h3>

<p>

Worship & The Word™ is where hearts are lifted in worship, lives are strengthened through biblical teaching, and believers are equipped to live out God's Word every day. Every service is centered on Jesus Christ, creating an atmosphere where faith grows, hope is renewed, and lives are transformed through His presence.

</p>

<div class="modal-schedule">

<h4>Weekly Gathering</h4>

<p><strong>Sundays @ 7:00 PM</strong></p>

</div>

<div class="modal-scripture">

<h4>Scripture Focus</h4>

<p>

<i>"Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord."</i>

</p>

<p><strong>Colossians 3:16 (KJV)</strong></p>

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
`,

        link:"worship.html"

    },

faith:{

    title:"Conversations of Faith™",

    description:"Join engaging Bible discussions that go beyond the surface of familiar scriptures, creating a welcoming space where questions are encouraged, truth is explored, and faith is strengthened through meaningful conversation.",

    link:"conversations.html",

    details:`

<h3>Conversations of Faith™</h3>

<p>

Where questions become conversations and Scripture becomes personal.

Every Thursday we gather to explore God's Word together in an atmosphere that is welcoming, engaging, and centered on biblical truth.

Whether you're new to the Bible or have studied it for years, there's always a seat waiting for you.

</p>

<h4>Weekly Gathering</h4>

<p>

Thursdays @ 6:00 PM CST

<br>

Live via Zoom

</p>

<h4>Scripture Focus</h4>

<p>

"Come now, and let us reason together, saith the Lord..."

<br><br>

<strong>Isaiah 1:18 (KJV)</strong>

</p>

<div class="modal-platforms">

<a href="https://zoom.us/j/7035318342" target="_blank">

Join Zoom

</a>

</div>

`,

},

    prayer:{

        title:"Prayer",

        description:"Prayer changes everything.",

        details:"",

        link:"prayer.html"

    },

    resources:{

        title:"Resources",

        description:"Tools to strengthen your walk with Christ.",

        details:"",

        link:"resources.html"

    },

    give:{

        title:"Give",

        description:"Partner with Divine Alignment Ministries.",

        details:"",

        link:"give.html"

    },

    more:{

        title:"Explore More Ministries",

        description:"Additional ministries are prayerfully being prepared.",

        details:"",

        link:"#"

    }

};


ministryCards.forEach(card=>{

    card.addEventListener("click",()=>{

const key = card.dataset.ministry;

console.log(key);

modalTitle.textContent = ministryInfo[key].title;

modalDescription.textContent = ministryInfo[key].description;

document.getElementById("modalDetails").innerHTML =
    ministryInfo[key].details || "";

if (key === "more") {

    modalButton.textContent = "Coming Soon";

    modalButton.removeAttribute("href");

} else {

    modalButton.textContent = "Enter Ministry";

    modalButton.href = ministryInfo[key].link;

}

ministryModal.style.display = "flex";

    ministryModal.style.display = "flex";

    });

});


closeModal.addEventListener("click", () => {

    ministryModal.style.display = "none";

});

ministryModal.addEventListener("click", (e) => {

    if (e.target === ministryModal) {

        ministryModal.style.display = "none";

    }

});