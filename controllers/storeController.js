/*
 * This syntax is interesting, but I think it's unclear
 * I've changed the file to be more functionally clear
 * IMO ;)
*/

module.exports = {
    homePage,
    addStore,
    createStore
};

function homePage(req, res) {
    console.log(req.name);
    res.render('index');
}


function addStore(req, res) {
    res.render('editStore', {
        title: 'Add Store'
    });
}

function createStore(req, res) {
    res.json(req.body);
};

/*
 * What's actually happening with the sytactic sugar is that you're defining a series
 * of functions and exporting them. This syntax is more accurate and functional even
 * though there are no return values in the functions defined.
 *
 * You may also notice some strange dictionary syntax in the module.export above. In ES6
 * you can define a dictionary with only the names of functions (or variables) if the key
 * and values have the same name. i.e. The exposed variable homePage has the same name as
 * the internal function named homePage.
 */

