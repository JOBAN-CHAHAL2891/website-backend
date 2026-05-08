export const notFound = (req , res , next) => {
    res.status(404);
    throw new Error(" Route not found ");
};

export const errorHandler = (err, req, res, next ) => {
    res.status(res.statusCode || 500 );
    res.json({
        message: err.message,
    });
};