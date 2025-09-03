export const failedResponse = ({ error, res } = {}) => {
    switch (error.name) {
        case "SequelizeValidationError":
            res.status(400).json({ message: error.name, error })
            break;
        case "SequelizeDatabaseError":
            res.status(500).json({ message: error.name, error })
            break;

        case "SequelizeUniqueConstraintError":
            res.status(409).json({ message: error.name, error })
            break;

        default:
            res.status(500).json({ message: error.name, info : error.info , stack : error.stack })
            break;
    }
}

export const successResponse = ({ status = 200, data = {}, msg = 'success'} = {}, res) => {
    res.status(status).json({ msg, data });
}