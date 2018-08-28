import Film from '../model/film';

const getFilm = async (req, res) => {
    const { id } = req.params;
    const film = await Film.findOne({ '_id': id }).populate({ path: 'comments.user', model: 'User' });
    res.json({ film });
};

export default getFilm;