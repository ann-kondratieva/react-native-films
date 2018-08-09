import Film from '../model/film';

const updateUserMarks = async (req, res, next) => {
    try {
        const { body: { userId, filmId, rating } } = req;
        const updatedFilm = await Film.findOne({ _id: filmId });
        let startIndex = updatedFilm.usersMarks.findIndex((element) => element.id === userId);
        startIndex = (startIndex === -1) ? (updatedFilm.usersMarks.length) : startIndex;
        updatedFilm.usersMarks.splice(startIndex, 1, { id: userId, mark: rating });
        req.body.film = updatedFilm;
        return next();
    } catch (error) {
        throw error;
    }
};

export default updateUserMarks;