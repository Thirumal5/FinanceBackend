export const allowRoles = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];

        if (!userRole) {
            return res.status(401).json({
                success: false,
                message: "Access denied. Role-based authentication required (x-user-role)."
            });
        }

        if (!allowedRoles.includes(userRole.toLowerCase())) {
            return res.status(403).json({
                success: false,
                message: `Access denied. ${userRole} role does not have permission for this action.`
            });
        }

        next();
    };
};
