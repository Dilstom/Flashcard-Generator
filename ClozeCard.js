
// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.


// if user pick Cloze cards

var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;
}

module.exports = ClozeCard;