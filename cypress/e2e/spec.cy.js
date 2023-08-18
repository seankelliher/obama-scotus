describe("Home page", () => {
    beforeEach(() => {
        cy.visit("https://seankelliher.github.io/obama-scotus/")
    })

    context("Click circle, scene loads properly", ()=> {
        it("1st scene loads properly", ()=> {
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/obama-chats-with-justices.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/barack-obama-portrait.jpg"
            )
            cy.get("#hline").contains("Obama and the Justices")
            cy.get("#ptext").contains("As a Senator from Illinois")
            cy.get("#circle0").should(
                "have.attr",
                "fill",
                "#f24405"
            )
        })

        it("2nd scene loads properly", ()=> {
            cy.get("#circle1").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/john-roberts-sworn-in.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/john-roberts-portrait.jpg"
            )
            cy.get("#hline").contains("John Roberts")
            cy.get("#ptext").contains("In 2005, Senator Obama opposes")
        })

        it("3rd scene loads properly", ()=> {
            cy.get("#circle2").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/bush-nominates-samuel-alito.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/samuel-alito-portrait.jpg"
            )
            cy.get("#hline").contains("Samuel Alito")
            cy.get("#ptext").contains("In 2006, Senator Obama opposes")
        })

        it("4th scene loads properly", ()=> {
            cy.get("#circle3").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/obama-biden-meet-sotamayor.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/sonia-sotamayor-portrait.jpg"
            )
            cy.get("#hline").contains("Sonia Sotomayor")
            cy.get("#ptext").contains(
                "In May 2009, now President Obama nominates Sonia"
            )
            cy.get("#circle3").should(
                "have.attr",
                "fill",
                "#f24405"
            )
        })

        it("5th scene loads properly", ()=> {
            cy.get("#circle4").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/obama-meets-kagan.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/elena-kagan-portrait.jpg"
            )
            cy.get("#hline").contains("Elena Kagan")
            cy.get("#ptext").contains(
                "In May 2010, President Obama nominates Elena Kagan"
            )
        })

        it("6th scene loads properly", ()=> {
            cy.get("#circle5").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/antonin-scalia-smiles.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/antonin-scalia-portrait.jpg"
            )
            cy.get("#hline").contains("Antonin Scalia")
            cy.get("#ptext").contains(
                "In February of 2016, Justice Antonin Scalia"
            )
        })

        it("7th scene loads properly", ()=> {
            cy.get("#circle6").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/obama-biden-nominate-garland.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/merrick-garland-portrait.jpg"
            )
            cy.get("#hline").contains("Merrick Garland")
            cy.get("#ptext").contains(
                "In March, Obama nominates Merrick Garland"
            )
        })

        it("8th scene loads properly", ()=> {
            cy.get("#circle7").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/us-capitol-building.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/mitch-mcconnell-portrait.jpg"
            )
            cy.get("#hline").contains("Mitch McConnell")
            cy.get("#ptext").contains(
                "But Senate Majority Leader Mitch McConnell"
            )
        })

        it("9th scene loads properly", ()=> {
            cy.get("#circle8").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/trump-nominates-gorsuch.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/neil-gorsuch-portrait.jpg"
            )
            cy.get("#hline").contains("Neil Gorsuch")
            cy.get("#ptext").contains(
                "Donald Trump wins and nominates Judge Neil Gorsuch"
            )
        })

        it("10th scene loads properly", ()=> {
            cy.get("#circle9").click().should(
                "have.attr",
                "fill",
                "#f24405"
            )
            cy.get("img").eq(0).should(
                "have.attr",
                "src",
                "images/obama-congratulates-kagan.jpg"
            )
            cy.get("img").eq(1).should(
                "have.attr",
                "src",
                "images/obama-departs-white-house.jpg"
            )
            cy.get("#hline").contains("Legacy")
            cy.get("#ptext").contains(
                "In his two terms, Obama places two justices"
            )
        })
    })

    context("Next icon and Again icons work properly", ()=> {
        it("Click Next icon, next scene appears", () => {
            cy.get("#hline").contains("Obama and the Justices")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "fade-in").click()

            cy.get("#hline").contains("John Roberts")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Samuel Alito")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Sonia Sotomayor")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Elena Kagan")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Antonin Scalia")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Merrick Garland")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Mitch McConnell")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Neil Gorsuch")
            cy.get("#replay").should("have.class", "invisible")
            cy.get("#next").should("have.class", "visible").click()

            cy.get("#hline").contains("Legacy")
            cy.get("#next").should("have.class", "invisible")
            cy.get("#replay").should("have.class", "fade-in")
        })
    })
})
