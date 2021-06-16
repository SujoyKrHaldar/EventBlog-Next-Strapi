const { events } = require("./data.json")

export default (req, res) => {

    const evt = events.filter(ev=>ev.slug === req.query.slug)
    res.status(200).json(evt)
}