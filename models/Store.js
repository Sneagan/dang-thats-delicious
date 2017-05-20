const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = mongooseSchema();
storeSchema.pre('save', doTheNextThing);
module.exports = mongoose.model('Store', storeSchema);


/*
 * Functions are hoisted and taking advantage of that can make things more readable
 */

function mogooseSchema() {
    return new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: 'Please enter a store name!'
        },
        slug: String,
        description: {
            type: String,
            trim: true
        },
        tags: [String]
    });
}

function doTheNextThing(next) {
    if (!this.isModified('name')) {
        next(); // skip it
        return; // stop this function from running
    }
    this.slug = slug(this.name);
    next();
    // TODO: make more resiliant so slugs are unique
}

