
const { processData } = require('../model/app.model');

const processDataController = (req, res) => {
    try {
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid request body. 'data' key is missing or is not an array."
            });
        }

        const processed = processData(data);

        const response = {
            "is_success": true,
            "user_id": "john_doe_17091999",
            "email": "john@xyz.com",
            "roll_number": "ABCD123",
            ...processed
        };

        return res.status(200).json(response);

    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({
            is_success: false,
            error: "Internal Server Error."
        });
    }
}

module.exports = { processDataController };
