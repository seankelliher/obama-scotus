import { reactive } from "vue";

export const store = reactive({
    display: 0,
    changeDisplay(s) {
        store.display = s;
    },
    thumbs: [
        {
            thumbScr: "barack-obama-portrait",
            thumbAlt: "official portrait, Barack Obama as Senator",
            caption: "Barack Obama. Photo: Pete Souza",
            toolTip: "Barack Obama"
        },
        {
            thumbScr: "john-roberts-portrait",
            thumbAlt: "official portrait, John Roberts",
            caption: "John Roberts. Photo: Steve Petteway",
            toolTip: "John Roberts"
        },
        {
            thumbScr: "samuel-alito-portrait",
            thumbAlt: "official portrait, Samuel Alito",
            caption: "Samuel Alito. Photo: Steve Petteway",
            toolTip: "Samuel Alito"
        },
        {
            thumbScr: "sonia-sotomayor-portrait",
            thumbAlt: "official portrait, Sonia Sotomayor",
            caption: "Sonia Sotomayor. Photo: Steve Petteway",
            toolTip: "Sonia Sotomayo"
        },
        {
            thumbScr: "elena-kagan-portrait",
            thumbAlt: "official portrait, Elena Kagan",
            caption: "Elena Kagan. Photo: Steve Petteway",
            toolTip: "Elena Kagan"
        },
        {
            thumbScr: "antonin-scalia-portrait",
            thumbAlt: "official portrait, Antonin Scalia",
            caption: "Antonin Scalia. Photo: Steve Petteway",
            toolTip: "Antonin Scalia"
        },
        {
            thumbScr: "merrick-garland-portrait",
            thumbAlt: "official portrait, Merrick Garland",
            caption: "Merrick Garland. Photo: Court of Appeals, DC Circuit",
            toolTip: "Merrick Garland"
        },
        {
            thumbScr: "mitch-mcconnell-portrait",
            thumbAlt: "official portrait, Mitch McConnell",
            caption: "Mitch McConnell. Photo: Senator's staff",
            toolTip: "Mitch McConnell"
        },
        {
            thumbScr: "neil-gorsuch-portrait",
            thumbAlt: "official portrait, Neil Gorsuch,",
            caption: "Neil Gorsuch. Photo: Franz Jantzen",
            toolTip: "Neil Gorsuch"
        }
    ],
    scenes: [
        {
            heading: "Barack Obama",
            para: "As a Senator from Illinois and 44th President, Barack Obama worked to shape the Supreme Court. He both won and lost along the way.",
            imgScr: "obama-chats-with-justices",
            imgAlt: "Barack Obama chats with Supreme Court justices",
            caption: "President-elect Barack Obama visits the Supreme Court, Jan. 14, 2009. Photo: Pete Souza"
        },
        {
            heading: "John Roberts",
            para: "In 2005, Senator Obama opposes George W. Bush's Supreme Court nominee John Roberts. Roberts is confirmed anyway and later becomes Chief Justice.",
            imgScr: "john-roberts-sworn-in",
            imgAlt: "John Roberts sworn in as a Supreme Court justice",
            caption: "John Roberts is sworn-in as the 17th Chief Justice, Sep. 29, 2005. Photo: Paul Morse"
        },
        {
            heading: "Samuel Alito",
            para: "In 2006, Senator Obama also opposes Bush's next Supreme Court nominee, Samuel Alito. Like Roberts, Alito is also confirmed.",
            imgScr: "bush-nominates-samuel-alito",
            imgAlt: "George Bush with Samuel Alito at his nomination announcement",
            caption: "With President Bush, Samuel Alito acknowledges his nomination, Oct. 31, 2005. Photo: Paul Morse"
        },
        {
            heading: "Sonia Sotomayor",
            para: "In May 2009, now President Obama nominates Sonia Sotomayor of the US Court of Appeals for the Second Circuit. She is confirmed and replaces retiring Justice David H. Souter. Sotomayor was among four finalists; all women.",
            imgScr: "obama-biden-meet-sotomayor",
            imgAlt: "Barack Obama and Joe Biden interview Sonia Sotomayor",
            caption: "Nominee Sonia Sotomayor meets with President Obama, May 26, 2009. Photo: Pete Souza"
        },
        {
            heading: "Elena Kagan",
            para: "In May 2010, President Obama nominates Elena Kagan, the Solicitor General of the United States. She is confirmed and replaces retiring Justice John Paul Stevens. Kagan was a candidate to replace Justice Souter in 2009",
            imgScr: "obama-meets-kagan",
            imgAlt: "Barack Obama interviews Elena Kagan",
            caption: "President Obama meets with Elena Kagan, Apr. 30, 2010. Photo: Pete Souza"
        },
        {
            heading: "Antonin Scalia",
            para: "In February of 2016, Justice Antonin Scalia is found dead while vacationing at Cibolo Creek Ranch near Marfa, Texas. His death leads to an epic battle to fill the empty seat.",
            imgScr: "antonin-scalia-ranch",
            imgAlt: "Cibolo Creek Ranch resort buildings at nighfall",
            caption: "The Cibolo Creek Ranch in Presidio County, Texas. Photo: Jon Hanson"
        },
        {
            heading: "Merrick Garland",
            para: "In March, Obama nominates Merrick Garland to fill Justice Scalia's empty seat. Garland is the Chief Judge of the US Court of Appeals for the District of Columbia Circuit.",
            imgScr: "obama-biden-nominate-garland",
            imgAlt: "Obama and Biden with Garland at his nomination announcement",
            caption: "President Obama announces Merrick Garland's nomination, Mar. 16, 2016. Photo: Pete Souza"
        },
        {
            heading: "Mitch McConnell",
            para: "But Senate Majority Leader Mitch McConnell refuses to hold a confirmation hearing, citing Obama's final year in office. Judge Garland's nomination remains open for 293 days, expiring on January 3, 2017, as the 114th Congress closes.",
            imgScr: "us-capitol-building",
            imgAlt: "exterior of the United States Capitol building",
            caption: "The United States Capitol. Photo: Greg Willis"
        },
        {
            heading: "Neil Gorsuch",
            para: "Donald Trump wins the 2016 presidential election and nominates Judge Neil Gorsuch of the U.S. Court of Appeals for the Tenth Circuit. Gorsuch is confirmed by a vote of 54–45 and assumes Justice Scalia's seat in April 2017.",
            imgScr: "trump-nominates-gorsuch",
            imgAlt: "Trump with Neil Gorsuch at his nomination announcement",
            caption: "President Trump nominates Neil Gorsuch, Jan. 31, 2017. Photo: White House staff"
        }
    ]
});