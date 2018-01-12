module.exports = {
    getFriends: (req, res) => {
        const db = req.app.get('db');
        db.find_profile()
    }
}