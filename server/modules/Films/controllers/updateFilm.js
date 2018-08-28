import Film from '../model/film';

const updateFilm = async (req, res) => {
    try {
        const { body: { film } } = req;
        const resFilm = await Film.findByIdAndUpdate(film._id, film, { new: true }).populate({ path: 'comments.user', model: 'User' });
        resFilm.password = null;
        return res.json({ film: resFilm });
    } catch (error) {
        throw error;
    }
};

export default updateFilm;