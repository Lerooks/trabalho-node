class Assert {
    static keyExists(object, key, message) {
        if (!object.hasOwnProperty(key)) {
            throw new Error(message);
        }
    }

    static stringNotEmpty(text, message) {
        if ((!text || text.length === 0 )) {
            throw new Error(message);
        }
    }
}

module.exports = Assert;