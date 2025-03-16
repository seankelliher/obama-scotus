import { reactive } from "vue";

export const store = reactive({
    fullWidth: 0,
    changeFullWidth(s) {
        store.fullWidth = s - 1;
    },
    replayScenes() {
        store.fullWidth = 0;
        window.scrollTo(0, 0);
    },
    scenes: [
        {
            id: 1,
            title: "",
            fullSrc: "obama-walks-kagan",
            fullAlt: "Barack Obama with arm around Elena Kagan in the Oval Office",
            fullCap: "President Obama with newly confirmed Supreme Court Justice Elena Kagan, Aug. 6, 2010. Photo: Pete Souza",
            contentTitle: "Barack Obama",
            contentText: "As a Senator from Illinois and 44th President, Barack Obama worked to shape the Supreme Court. He won and lost along the way.",
            portScr: "barack-obama-portrait",
            portAlt: "official portrait, Barack Obama as Senator",
            portCap: "Pete Souza"
        },
        {
            id: 2,
            title: "2005",
            fullSrc: "john-roberts-sworn-in",
            fullAlt: "John Roberts sworn in as a Supreme Court justice",
            fullCap: "John Roberts is sworn-in as the 17th Chief Justice, Sep. 29, 2005. Photo: Paul Morse",
            contentTitle: "John Roberts",
            contentText: "Senator Obama opposes George W. Bush's Supreme Court nominee John Roberts. Roberts is confirmed anyway and replaces deceased Chief Justice William Rehnquist. Roberts was a judge on the US Court of Appeals for the DC Circuit.",
            portScr: "john-roberts-portrait",
            portAlt: "official portrait, John Roberts",
            portCap: "Steve Petteway"
        },
        {
            id: 3,
            title: "2006",
            fullSrc: "bush-nominates-samuel-alito",
            fullAlt: "George Bush with Samuel Alito at his nomination announcement",
            fullCap: "With President Bush, Samuel Alito acknowledges his nomination, Oct. 31, 2005. Photo: Paul Morse",
            contentTitle: "Samuel Alito",
            contentText: "Senator Obama also opposes Bush's next Supreme Court nominee, Samuel Alito. Like Roberts, Alito is also confirmed. He replaces the retiring Sandra Day O'Connor who was nominated by Ronald Reagan. Alito was a judge on the US Court of Appeals for the Third Circuit.",
            portScr: "samuel-alito-portrait",
            portAlt: "official portrait, Samuel Alito",
            portCap: "Steve Petteway"
        },
        {
            id: 4,
            title: "2009",
            fullSrc: "obama-biden-meet-sotomayor",
            fullAlt: "Barack Obama and Joe Biden interview Sonia Sotomayor",
            fullCap: "Nominee Sonia Sotomayor meets with President Obama, May 26, 2009. Photo: Pete Souza",
            contentTitle: "Sonia Sotomayor",
            contentText: "Obama, now President, nominates Sonia Sotomayor of the US Court of Appeals for the Second Circuit. She is confirmed and replaces retiring Justice David H. Souter. Sotomayor was among four finalists; all women. She is the first Hispanic to serve as a Justice.",
            portScr: "sonia-sotomayor-portrait",
            portAlt: "official portrait, Sonia Sotomayor",
            portCap: "Steve Petteway"
        },
        {
            id: 5,
            title: "2010",
            fullSrc: "obama-meets-kagan",
            fullAlt: "Barack Obama interviews Elena Kagan",
            fullCap: "President Obama meets with Elena Kagan, Apr. 30, 2010. Photo: Pete Souza",
            contentTitle: "Elena Kagan",
            contentText: "Obama nominates Elena Kagan, Solicitor General of the United States. She is confirmed and replaces retiring Justice John Paul Stevens. Kagan was a candidate to replace Justice Souter in 2009.",
            portScr: "elena-kagan-portrait",
            portAlt: "official portrait, Elena Kagan",
            portCap: "Steve Petteway"
        },
        {
            id: 6,
            title: "2016",
            fullSrc: "antonin-scalia-ranch",
            fullAlt: "Cibolo Creek Ranch resort buildings at nighfall",
            fullCap: "The Cibolo Creek Ranch in Presidio County, Texas. Photo: Jon Hanson",
            contentTitle: "Antonin Scalia",
            contentText: "In February, Justice Antonin Scalia is found dead while vacationing at Cibolo Creek Ranch near Marfa, Texas. His death leads to an epic battle to fill the empty seat.",
            portScr: "antonin-scalia-portrait",
            portAlt: "official portrait, Antonin Scalia",
            portCap: "Steve Petteway"
        },
        {
            id: 7,
            title: "2016",
            fullSrc: "obama-biden-nominate-garland",
            fullAlt: "Obama and Biden with Garland at his nomination announcement",
            fullCap: "President Obama announces Merrick Garland's nomination, Mar. 16, 2016. Photo: Pete Souza",
            contentTitle: "Merrick Garland",
            contentText: "In March, Obama, now in his second term, nominates Chicago native Merrick Garland to fill Justice Scalia's empty seat. Garland is the Chief Judge of the US Court of Appeals for the DC Circuit. His nomination begins one of the most chaotic periods in the Court's history.",
            portScr: "merrick-garland-portrait",
            portAlt: "official portrait, Merrick Garland",
            portCap: "DC Circuit"
        },
        {
            id: 8,
            title: "2016 - 2017",
            fullSrc: "us-capitol-building",
            fullAlt: "exterior of the United States Capitol building",
            fullCap: "The United States Capitol. Photo: Greg Willis",
            contentTitle: "Mitch McConnell",
            contentText: "Senate Majority Leader McConnell refuses to hold a confirmation hearing, citing Obama's final year in office. Garland's nomination remains open for 293 days, expiring on January 3, 2017, as the 114th Congress closes. Obama leaves office January 20th.",
            portScr: "mitch-mcconnell-portrait",
            portAlt: "official portrait, Mitch McConnell",
            portCap: "Senator's staff"
        },
        {
            id: 9,
            title: "2017",
            fullSrc: "trump-nominates-gorsuch",
            fullAlt: "Trump with Neil Gorsuch at his nomination announcement",
            fullCap: "President Trump nominates Neil Gorsuch, Jan. 31, 2017. Photo: White House staff",
            contentTitle: "Neil Gorsuch",
            contentText: "Donald Trump assumes office and quickly nominates Judge Neil Gorsuch of the U.S. Court of Appeals for the Tenth Circuit. Gorsuch is confirmed by a vote of 54–45 and assumes Justice Scalia's seat in April 2017.",
            portScr: "neil-gorsuch-portrait",
            portAlt: "official portrait, Neil Gorsuch,",
            portCap: "Franz Jantzen"
        },
        {
            id: 10,
            title: "",
            fullSrc: "supreme-court-blue-sky",
            fullAlt: "United States Supreme Court Building under a blue sky",
            fullCap: "Supreme Court Building, Washington, DC. Photo: Pacamah",
            contentTitle: "Legacy",
            contentText: "After leaving office, Barack Obama returns to Chicago. His nominees Elena Kagan and Sonia Sotomayor continue as Justices on the Supreme Court. Merrick Garland, who was nominated but never confirmed stays at the US Court of Appeals in DC until 2021 when President Biden makes him US Attorney General.",
            portScr: "barack-obama-portrait",
            portAlt: "official portrait, Barack Obama as Senator",
            portCap: "Pete Souza"
        }
    ]
});