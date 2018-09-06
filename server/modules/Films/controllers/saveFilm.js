import Film from '../model/film';

const saveFilm = async (req, res) => {
    const { body: { film } } = req;
    try {
        let newFilm = new Film(film);
        await newFilm.save();
        return res.json({ film: newFilm });
    } catch (error) {
        throw error;
    }
};

export default saveFilm;