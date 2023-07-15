import { registerHostelTakeoverSettings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing Hostel Takeover Adventure Module");

    //-----system settings
    registerHostelTakeoverSettings()

})
Hooks.on("ready", async function() {


    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/te003-hostel-takeover/welcomeMessage.hbs");

    if (game.settings.get("te003-hostel-takeover", "welcomeMessage") == true) {
        let d = new Dialog({
            title: "Welcome to the Hostel Takeover Adventure Module!",
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "OK",
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: "Don't show again",
                    callback: () =>
                        game.settings.set("te003-hostel-takeover", "welcomeMessage", false),
                },
            },
        }, {
            left: 100,
            top: 100,
            height: 425,
            width: 450,
            resizable: false
        });
        d.render(true);
    }


})