// Usage notes:
// setAttributes(targetElement, {"src": "http://example.com/something.jpeg", "height": "100%", ...})
function attributeHelper(targetElement, attrsObject) {
    for (var key in attrsObject) {
        targetElement.setAttribute(key, attrsObject[key])
    }
}

module.exports = attributeHelper