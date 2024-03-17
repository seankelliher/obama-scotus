const scenes = [
    {
        panoImage: "obama-chats-with-justices",
        panoAlt: "Barack Obama chats with Supreme Court justices",
        panoCaption: "President-elect Barack Obama visits the Supreme Court, Jan. 14, 2009. Photo: Pete Souza.",
        scene: 0,
        headline: "Obama and the Justices",
        paragraph: [
            "As a Senator from Illinois and 44th President,",
            "Barack Obama worked to shape the Supreme Court.",
            "He both won and lost along the way."
        ].join(" "),
        thumbImage: "barack-obama-portrait",
        thumbAlt: "portrait photo of Barack Obama as Senator",
        thumbCaption: "Photo: Pete Souza."
    },
    {
        panoImage: "john-roberts-sworn-in",
        panoAlt: "John Roberts sworn in as a Supreme Court justice",
        panoCaption: "John Roberts is sworn-in as the 17th Chief Justice, Sep. 29, 2005. Photo: Paul Morse.",
        scene: 1,
        headline: "John Roberts",
        paragraph: [
            "In 2005, Senator Obama opposes George W. Bush's",
            "Supreme Court nominee John Roberts. Roberts is confirmed anyway",
            "and later becomes Chief Justice."
        ].join(" "),
        thumbImage: "john-roberts-portrait",
        thumbAlt: "portrait photo of John Roberts",
        thumbCaption: "Photo: Steve Petteway."
    },
    {
        panoImage: "bush-nominates-samuel-alito",
        panoAlt: "George Bush with Samuel Alito at his nomination announcement",
        panoCaption: "With President Bush, Samuel Alito acknowledges his nomination, Oct. 31, 2005. Photo: Paul Morse.",
        scene: 2,
        headline: "Samuel Alito",
        paragraph: [
            "In 2006, Senator Obama opposes Bush's next Supreme Court nominee,",
            "Samuel Alito. Like Roberts, Alito is also confirmed."
        ].join(" "),
        thumbImage: "samuel-alito-portrait",
        thumbAlt: "portrait photo of Samuel Alito",
        thumbCaption: "Photo: Steve Petteway."
    },
    {
        panoImage: "obama-biden-meet-sotamayor",
        panoAlt: "Barack Obama and Joe Biden interview Sonia Sotomayor",
        panoCaption: "Nominee Sonia Sotomayor meets with President Obama, May 26, 2009. Photo: Pete Souza.",
        scene: 3,
        headline: "Sonia Sotomayor",
        paragraph: [
            "In May 2009, now President Obama nominates Sonia Sotomayor",
            "of the US Court of Appeals for the Second Circuit.",
            "She is confirmed and replaces retiring Justice David H. Souter.",
            "Sotomayor was among four finalists; all women."
        ].join(" "),
        thumbImage: "sonia-sotamayor-portrait",
        thumbAlt: "portrait photo of Sonia Sotomayor",
        thumbCaption: "Photo: Steve Petteway."
    },
    {
        panoImage: "obama-meets-kagan",
        panoAlt: "Barack Obama interviews Elena Kagan",
        panoCaption: "President Obama meets with Elena Kagan, Apr. 30, 2010. Photo: Pete Souza.",
        scene: 4,
        headline: "Elena Kagan",
        paragraph: [
            "In May 2010, President Obama nominates Elena Kagan,",
            "the Solicitor General of the United States.",
            "She is confirmed and replaces retiring Justice John Paul Stevens.",
            "Kagan was a candidate to replace Justice Souter in 2009."
        ].join(" "),
        thumbImage: "elena-kagan-portrait",
        thumbAlt: "portrait photo of Elena Kagan",
        thumbCaption: "Photo: Steve Petteway."
    },
    {
        panoImage: "antonin-scalia-ranch",
        panoAlt: "Cibolo Creek Ranch resort buildings at nighfall",
        panoCaption: "The Cibolo Creek Ranch in Presidio County, Texas. Photo: Jon Hanson.",
        scene: 5,
        headline: "Antonin Scalia",
        paragraph: [
            "In February of 2016, Justice Antonin Scalia is found dead",
            "while vacationing at Cibolo Creek Ranch near Marfa, Texas."
        ].join(" "),
        thumbImage: "antonin-scalia-portrait",
        thumbAlt: "portrait photo of Antonin Scalia",
        thumbCaption: "Photo: Steve Petteway."
    },
    {
        panoImage: "obama-biden-nominate-garland",
        panoAlt: "Obama and Biden with Garland at his nomination announcement",
        panoCaption: "President Obama announces Merrick Garland's nomination, Mar. 16, 2016. Photo: Pete Souza.",
        scene: 6,
        headline: "Merrick Garland",
        paragraph: [
            "In March, Obama nominates Merrick Garland,",
            "Chief Judge of the US Court of Appeals",
            "for the District of Columbia Circuit."
        ].join(" "),
        thumbImage: "merrick-garland-portrait",
        thumbAlt: "portrait photo of Merrick Garland",
        thumbCaption: "Photo: Court of Appeals, DC Circuit."
    },
    {
        panoImage: "us-capitol-building",
        panoAlt: "exterior of the United States Capitol building",
        panoCaption: "The United States Capitol. Photo: Greg Willis.",
        scene: 7,
        headline: "Mitch McConnell",
        paragraph: [
            "But Senate Majority Leader Mitch McConnell refuses to hold",
            "a confirmation hearing,",
            "citing Obama's final year in office.",
            "Judge Garland's nomination remains open for 293 days,",
            "expiring on January 3, 2017, as the 114th Congress closes."
        ].join(" "),
        thumbImage: "mitch-mcconnell-portrait",
        thumbAlt: "portrait photo of Mitch McConnell",
        thumbCaption: "Photo: Sen. McConnell's staff."
    },
    {
        panoImage: "trump-nominates-gorsuch",
        panoAlt: "Trump with Neil Gorsuch at his nomination announcement",
        panoCaption: "President Trump nominates Neil Gorsuch, Jan. 31, 2017. Photo: White House staff.",
        scene: 8,
        headline: "Neil Gorsuch",
        paragraph: [
            "Donald Trump wins and nominates Judge Neil Gorsuch",
            "of the U.S. Court of Appeals for the Tenth Circuit.",
            "Gorsuch is confirmed by a vote of 54–45",
            "and assumes Justice Scalia's position in April 2017."
        ].join(" "),
        thumbImage: "neil-gorsuch-portrait",
        thumbAlt: "portrait photo of Neil Gorsuch",
        thumbCaption: "Photo: Franz Jantzen."
    },
    {
        panoImage: "obama-congratulates-kagan",
        panoAlt: "Obama embraces Kagan in Oval Office and she is confirmed",
        panoCaption: "President Obama with newly confirmed Justice Elena Kagan, Aug. 6, 2010. Photo: Pete Souza.",
        scene: 9,
        headline: "Legacy",
        paragraph: [
            "In his two terms, Obama places two justices, Sonia Sotomayor",
            "and Elena Kagan, to lifetime appointments on the Supreme Court."
        ].join(" "),
        thumbImage: "obama-departs-white-house",
        thumbAlt: "Barack Obama looks down on White House from Marine One",
        thumbCaption: "Jan. 20, 2017. Photo: Pete Souza."
    }
];

export { scenes };