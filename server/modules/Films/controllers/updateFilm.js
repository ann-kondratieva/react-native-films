import Film from '../model/film';

const updateFilm = async (req, res) => {
    try {
        const { body: { film } } = req;
        await Film.findByIdAndUpdate(film._id, film);
        return res.json({ film });
    } catch (error) {
        throw error;
    }
};

export default updateFilm;