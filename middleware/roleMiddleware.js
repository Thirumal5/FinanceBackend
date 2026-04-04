export const authorize = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];

        if (!userRole) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No role provided."
            });
        }

        if (!allowedRoles.includes(userRole.toLowerCase())) {
            return res.status(403).json({
                success: false,
                message: "Access forbidden. You do not have permission for this action."
            });
        }

        next();
    };
};
