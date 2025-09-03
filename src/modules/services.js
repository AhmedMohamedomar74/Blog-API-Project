export function successResponce({res,status = 200, 
  message = 'Success' , data} = {})
{
    res.status(status).json({message , data})
}

export function sendServerResponse(res,{status = 500, 
  message = 'Server Error'} = {})
{
    res.status(status).json({message})
}

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
