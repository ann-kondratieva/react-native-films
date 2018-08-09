import Film from '../model/film';

const getFilms = async (req, res) => {
    const { start, end, orderBy, search } = req.query;
    const sortOrder = (orderBy === 'title') ? 1 : -1;
    const searchOptions = { '$regex': search ? search : '', '$options': 'i' };
    const films = await Film.find({ $or: [{ 'title': searchOptions }, { 'description': searchOptions }] }, null,
        { skip: Number.parseInt(start), limit: (end - start), sort: { [orderBy]: sortOrder } });
    res.json({ films });
};

export default getFilms;