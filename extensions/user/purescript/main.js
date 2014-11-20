define(function (require, exports, module) {
    var LanguageManager = brackets.getModule("language/LanguageManager");
    LanguageManager.defineLanguage("purescript", {
	name: "Purescript",
	mode: "purescript",
	fileExtensions: ["purs"],
    }).done(function (language) {
	console.log("Language " + language.getName() + " is available!");
    });
});
