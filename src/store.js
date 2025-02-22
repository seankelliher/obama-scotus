import { reactive } from "vue";

export const store = reactive({
    fullWidth: 0,
    changeFullWidth(s) {
        store.fullWidth = s - 1;
    },
    scenes: [
        {
            id: 1,
            fullSrc: "obama-chats-with-justices",
            fullAlt: "Barack Obama chats with Supreme Court justices",
            fullCap: "President-elect Barack Obama visits the Supreme Court, Jan. 14, 2009. Photo: Pete Souza",
            contentTitle: "Barack Obama",
            contentText: "As a Senator from Illinois and 44th President, Barack Obama worked to shape the Supreme Court. He both won and lost along the way.",
            portScr: "barack-obama-portrait",
            portAlt: "official portrait, Barack Obama as Senator",
            portCap: "Pete Souza"
        },
        {
            id: 2,
            fullSrc: "john-roberts-sworn-in",
            fullAlt: "John Roberts sworn in as a Supreme Court justice",
            fullCap: "John Roberts is sworn-in as the 17th Chief Justice, Sep. 29, 2005. Photo: Paul Morse",
            contentTitle: "John Roberts",
            contentText: "In 2005, Senator Obama opposes George W. Bush's Supreme Court nominee John Roberts. Roberts is confirmed anyway and later becomes Chief Justice.",
            portScr: "john-roberts-portrait",
            portAlt: "official portrait, John Roberts",
            portCap: "Steve Petteway"
        },
        {
            id: 3,
            fullSrc: "bush-nominates-samuel-alito",
            fullAlt: "George Bush with Samuel Alito at his nomination announcement",
            fullCap: "With President Bush, Samuel Alito acknowledges his nomination, Oct. 31, 2005. Photo: Paul Morse",
            contentTitle: "Samuel Alito",
            contentText: "In 2006, Senator Obama also opposes Bush's next Supreme Court nominee, Samuel Alito. Like Roberts, Alito is also confirmed.",
            portScr: "samuel-alito-portrait",
            portAlt: "official portrait, Samuel Alito",
            portCap: "Steve Petteway"
        },
        {
            id: 4,
            fullSrc: "obama-biden-meet-sotomayor",
            fullAlt: "Barack Obama and Joe Biden interview Sonia Sotomayor",
            fullCap: "Nominee Sonia Sotomayor meets with President Obama, May 26, 2009. Photo: Pete Souza",
            contentTitle: "Sonia Sotomayor",
            contentText: "In May 2009, now President Obama nominates Sonia Sotomayor of the US Court of Appeals for the Second Circuit. She is confirmed and replaces retiring Justice David H. Souter. Sotomayor was among four finalists; all women.",
            portScr: "sonia-sotomayor-portrait",
            portAlt: "official portrait, Sonia Sotomayor",
            portCap: "Steve Petteway"
        },
        {
            id: 5,
            fullSrc: "obama-meets-kagan",
            fullAlt: "Barack Obama interviews Elena Kagan",
            fullCap: "President Obama meets with Elena Kagan, Apr. 30, 2010. Photo: Pete Souza",
            contentTitle: "Elena Kagan",
            contentText: "In May 2010, President Obama nominates Elena Kagan, the Solicitor General of the United States. She is confirmed and replaces retiring Justice John Paul Stevens. Kagan was a candidate to replace Justice Souter in 2009.",
            portScr: "elena-kagan-portrait",
            portAlt: "official portrait, Elena Kagan",
            portCap: "Steve Petteway"
        },
        {
            id: 6,
            fullSrc: "antonin-scalia-ranch",
            fullAlt: "Cibolo Creek Ranch resort buildings at nighfall",
            fullCap: "The Cibolo Creek Ranch in Presidio County, Texas. Photo: Jon Hanson",
            contentTitle: "Antonin Scalia",
            contentText: "In February of 2016, Justice Antonin Scalia is found dead while vacationing at Cibolo Creek Ranch near Marfa, Texas. His death leads to an epic battle to fill the empty seat.",
            portScr: "antonin-scalia-portrait",
            portAlt: "official portrait, Antonin Scalia",
            portCap: "Steve Petteway"
        },
        {
            id: 7,
            fullSrc: "obama-biden-nominate-garland",
            fullAlt: "Obama and Biden with Garland at his nomination announcement",
            fullCap: "President Obama announces Merrick Garland's nomination, Mar. 16, 2016. Photo: Pete Souza",
            contentTitle: "Merrick Garland",
            contentText: "In March, Obama nominates Merrick Garland to fill Justice Scalia's empty seat. Garland is the Chief Judge of the US Court of Appeals for the District of Columbia Circuit.",
            portScr: "merrick-garland-portrait",
            portAlt: "official portrait, Merrick Garland",
            portCap: "DC Circuit"
        },
        {
            id: 8,
            fullSrc: "us-capitol-building",
            fullAlt: "exterior of the United States Capitol building",
            fullCap: "The United States Capitol. Photo: Greg Willis",
            contentTitle: "Mitch McConnell",
            contentText: "But Senate Majority Leader Mitch McConnell refuses to hold a confirmation hearing, citing Obama's final year in office. Judge Garland's nomination remains open for 293 days, expiring on January 3, 2017, as the 114th Congress closes.",
            portScr: "mitch-mcconnell-portrait",
            portAlt: "official portrait, Mitch McConnell",
            portCap: "Senator's staff"
        },
        {
            id: 9,
            fullSrc: "trump-nominates-gorsuch",
            fullAlt: "Trump with Neil Gorsuch at his nomination announcement",
            fullCap: "President Trump nominates Neil Gorsuch, Jan. 31, 2017. Photo: White House staff",
            contentTitle: "Neil Gorsuch",
            contentText: "Donald Trump wins the 2016 presidential election and nominates Judge Neil Gorsuch of the U.S. Court of Appeals for the Tenth Circuit. Gorsuch is confirmed by a vote of 54–45 and assumes Justice Scalia's seat in April 2017.",
            portScr: "neil-gorsuch-portrait",
            portAlt: "official portrait, Neil Gorsuch,",
            portCap: "Franz Jantzen"
        }
    ]
});